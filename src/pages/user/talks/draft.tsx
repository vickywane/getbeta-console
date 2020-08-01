import React, { useState } from 'react'
import Flex from 'styled-flex-component'
import { Link } from 'react-router-dom'
import {
  FiClock,
  FiCalendar,
  FiEdit,
  FiPlus,
  FiX,
  FiTrash2,
  FiArrowLeft,
  FiSearch
} from 'react-icons/fi'
import { GrAttachment } from 'react-icons/gr'
import styled from 'styled-components'
import { useQuery, useMutation } from '@apollo/react-hooks'
import ReactMarkdown from 'react-markdown'
import { IoIosExpand, IoIosPaper, IoIosPeople } from 'react-icons/io'
import { Modal } from 'react-bootstrap'
import { CSSTransition } from 'react-transition-group'
import { inject, observer } from 'mobx-react'

import Compress from './compress-note'
import useWindowWidth from '../../../hook_style'
import TestImg from '../../../assets/images/test.png'
import CreateNote from './create-note'
import Fields from '../../forms/fields'
import Review from './review'
import { Loader } from '../../../components/'
import { GET_TALK } from '../../../data/queries'
import { DELETE_NOTE } from '../../../data/mutations'
import { Contain, Text, Head, Title, Hover, BigTitle, Section } from '../../../styles/style'
import '../../../App.css'
import Notes from './notes'
import { ConsoleStore } from '../../../state'

const Circle = styled.div`
  height: 40px;
  width: 40px;
  margin: 0.3rem 0.5rem;
  background-color: ${props => props.background};
  border-radius: 50%;
  box-shadow: 0px 1px 2px grey;
  display: inline-block;
`

const IdeaCard = styled.div`
    box-shadow: 0px 2px 4px grey;
    padding: 1rem 1rem;
    background: ${props => (props.CardColor ? props.CardColor : '#fff')}
    border-radius: 7px;
    margin: 0rem 1rem;
    transition : all 400ms;
    div {
      display: flex;
      justify-content: space-between;
    }
  `

const Dashes = styled.div`
  margin: 0.5rem 3rem;
  display: flex;
  justify-content: space-between;
  div {
    width: 1rem;
    height: 8vh;
    border-right: 5px dashed grey;
  }
`

const HoverCircle = styled(Hover)`
  background: #c0c0c0;
  border-radius: 50%;
  padding: 0.7rem 0.7rem;
  margin: 0px;
`

const colors = [
  {
    color: 'red'
  },
  {
    color: 'violet'
  },
  {
    color: 'green'
  },
  {
    color: 'yellow'
  },
  {
    color: 'blue'
  },
  {
    color: 'white'
  }
]

const Draft = (props): JSX.Element => {
  const { showNotes, openNotes, closeNotes } = props.ConsoleStore

  const Width = useWindowWidth()

  const [reviewPane, openReviewPane] = useState<boolean>(Width >= 800 ? false : true)
  const [isEditing, startEditing] = useState<boolean>(false)
  const [isEditingCard, startEditingCard] = useState<boolean>(false)
  const [noteWindow, setNoteWindow] = useState<boolean>(false)
  const [userNotes, openUserNotes] = useState<boolean>(false)
  const { draftId } = props

  const [CardColor, setCardColor] = useState<string>(null)
  const [CardTextColor, setCardTextColor] = useState<string>(null)
  const [ModalVisibility, setModalVisibility] = useState(false)

  const Padded = styled(Contain)`
    transition : all 300ms;
    overflow : auto;
    padding: 0px 10px;
    height : ${window.innerHeight - 180}
    margin: ${props => (props.reviewOpen ? '0rem 0rem' : '0rem 5rem')};
    border-left : ${props => !props.reviewOpen && '1px solid #c0c0c0'} ;
    box-shadow :    ${props => !props.reviewOpen && '8px 0px 4px #c0c0c0'};
  `

  const Grid = styled.div`
    display: grid;
    background: #eeeee;
    transition: all 300ms;
    grid-gap: ${props => props.reviewOpen && '0rem 1rem'};
    grid-template-columns: ${props => props.reviewOpen && 'auto 27rem'};
  `

  const handleInputs = (value, label) => {
    switch (label) {
      case 'Draft Title':
        break
      case 'Draft Body':
        break
      default:
        break
    }
  }

  const [deleteNote, {}] = useMutation(DELETE_NOTE)

  const NoteWindow = styled.div`
    position: absolute;
    width: 47rem;
    padding: 1rem 0;
    margin-left: 17rem;
    background: #fff;
    box-shadow: 0px 5px 9px grey;
  `

  const Delete = (id: number) => {
    deleteNote({
      variables: {
        id: id //
      }
    })
      .then(() => console.log('deleted'))
      .catch(e => console.log(e))
  }
  // alert(draftId)
  const { loading, error, data } = useQuery(GET_TALK, {
    variables: {
      id: draftId // draftId
    }
  })
  if (error) {
    console.log(error)
    return <Loader type={'error'} />
  }

  if (loading) {
    return <Loader type={'loading'} />
  }

  const { title, id, summary, description, Archived, tags, createdAt, duration, notes } = data.talk

  const colorFunc = color => {
    switch (color) {
      case 'violet':
        setCardTextColor('#fff')
        break
      case 'red':
        setCardTextColor('#fff')
        break
      case 'blue':
        setCardTextColor('#fff')
        break
      case 'yellow':
        setCardTextColor('#0e2f5a')
        break
      case 'white':
        setCardTextColor('#0e2f5a')
        break
      default:
        break
    }
  }

  return (
    <div key={id}>
      <Head header style={{ marginTop: '25px', padding: '1rem 0rem 0.1rem 2rem' }}>
        <Flex>
          <Link to="/drafts">
            <Hover style={{ padding: '0rem 0.7rem' }}>
              <FiArrowLeft style={{ fontSize: '1.8rem' }} />
            </Hover>
          </Link>
          <Section>Drafts</Section>
        </Flex>

        <Flex>
          <div
            onClick={() => setModalVisibility(true)}
            style={{ display: 'flex', cursor: 'pointer', margin: '0rem 1rem' }}
          >
            <Hover style={{ padding: '0rem 0.7rem' }}>
              <IoIosPaper style={{ fontSize: '1.6rem' }} />
            </Hover>
            <Text small> Compile Notes </Text>
          </div>

          <div
            onClick={() => startEditing(!isEditing)}
            style={{ display: 'flex', cursor: 'pointer', margin: '0rem 1rem' }}
          >
            <Link to="/drafts">
              <Hover style={{ padding: '0rem 0.7rem' }}>
                <FiEdit style={{ fontSize: '1.6rem' }} />
              </Hover>
            </Link>
            <Text small>Edit</Text>
          </div>

          <div
            onClick={() => openReviewPane(!reviewPane)}
            style={{ cursor: 'pointer', display: 'flex', margin: '0rem 1rem' }}
          >
            <Link to="/drafts">
              <Hover style={{ padding: '0rem 0.7rem' }}>
                <IoIosPeople style={{ fontSize: '1.7rem' }} />
              </Hover>
            </Link>
            <Text small>Reviews</Text>
          </div>
        </Flex>
      </Head>

      <Modal
        show={ModalVisibility}
        onHide={() => setModalVisibility(false)}
        size={'lg'}
        style={{ marginTop: '3rem' }}
      >
        <div
          style={{
            padding: '0.5rem 1rem',
            borderBottom: '1px solid #c0c0c0',
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Section> Notes Compressor </Section>

          <Hover onClick={() => setModalVisibility(false)}>
            <FiX style={{ fontSize: '1.7rem' }} />
          </Hover>
        </div>
        <Compress />
      </Modal>

      <CSSTransition in={noteWindow} timeout={300} unmountOnExit classNames={'notes'}>
        <NoteWindow>
          <CreateNote talkId={id} />
        </NoteWindow>
      </CSSTransition>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Notes showNotes={showNotes} closeNotes={closeNotes} talkId={id} />
      </div>

      <Grid reviewOpen={reviewPane}>
        <Padded style={{ height: window.innerHeight - 160 }} reviewOpen={reviewPane}>
          <Contain img={TestImg} style={{ height: '25vh' }}>
            <br />
            <Flex justifyBetween>
              <Flex>
                <Hover style={{ padding: '0rem 0.5rem', color: 'grey' }}>
                  <FiCalendar style={{ fontSize: '1.7rem' }} />
                </Hover>

                <Text small color="grey">
                  {createdAt}
                </Text>
              </Flex>

              <Flex>
                <Hover style={{ padding: '0rem 0.6rem', color: 'grey' }}>
                  <FiClock style={{ fontSize: '1.7rem' }} />
                </Hover>

                <Text small color="grey">
                  {duration}{' '}
                </Text>
              </Flex>
            </Flex>
          </Contain>

          <div>
            {isEditing ? (
              <Fields
                name="Draft Title"
                id={1}
                placeholder={title}
                textarea={false}
                value={title}
                type="text"
                onChange={e => handleInputs(e, 'Draft Title')}
              />
            ) : (
              <div
                style={{
                  padding: '0.7rem 0.7rem',
                  background: '#fff',
                  borderRadius: '5px'
                }}
              >
                <BigTitle small={reviewPane} center>
                  {' '}
                  {title}
                </BigTitle>
              </div>
            )}

            <div
              style={{
                padding: '1rem 1rem',
                margin: '2rem 2rem',
                borderLeft: '5px solid  #0e2f5a ',
                background: '#fbfbfb'
              }}
            >
              <Text>
                <ReactMarkdown source={summary} />
              </Text>
            </div>
          </div>

          <br />

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Hover style={{ display: 'flex' }}>
              <Hover onClick={() => openNotes()} style={{ margin: '0rem 0.7rem' }}>
                <IoIosExpand style={{ fontSize: '1.7rem' }} />
              </Hover>
              <Title small> Notes ( {notes !== null && notes.length} ) </Title>
            </Hover>

            <div style={{ display: 'flex' }}>
              <HoverCircle
                onClick={() => setNoteWindow(!noteWindow)}
                style={{ margin: '0rem' + ' 0.5rem' }}
              >
                <FiPlus style={{ fontSize: '1.6rem', color: '#fff' }} />
              </HoverCircle>

              <div>
                <Hover style={{ marginTop: '15px' }}>
                  <FiSearch style={{ fontSize: '1.7rem' }} />
                </Hover>
              </div>
            </div>
          </div>

          <hr />
          {notes !== null &&
            notes.map(({ id, title, content }) => {
              return (
                <div>
                  <IdeaCard CardColor={CardColor}>
                    <div>
                      <Title style={{ color: '#0e2f5a' }} small>
                        # {title}
                      </Title>

                      <div>
                        <Hover
                          onClick={() => startEditingCard(!isEditingCard)}
                          style={{ margin: '0rem 1rem' }}
                        >
                          <FiEdit style={{ fontSize: '1.6rem' }} />
                        </Hover>

                        <Hover
                          onClick={() => {
                            alert(id)
                            Delete(id)
                          }}
                          style={{ margin: '0rem 1rem' }}
                        >
                          <FiTrash2 style={{ fontSize: '1.6rem' }} />
                        </Hover>
                      </div>
                    </div>

                    <hr />
                    <Text
                      style={{
                        textIndent: '30px',
                        color: CardTextColor === null ? '#000' : CardTextColor
                      }}
                    >
                      <ReactMarkdown source={content} />
                    </Text>
                    {isEditingCard && (
                      <div>
                        {colors.map(({ color }) => {
                          return (
                            <div>
                              <hr />

                              <Circle
                                style={{
                                  border: CardColor === color && '3px solid black'
                                }}
                                onClick={() => {
                                  setCardColor(color)
                                  colorFunc(color)
                                }}
                                background={color}
                              />
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </IdeaCard>

                  <Dashes>
                    <div />
                    <div />
                  </Dashes>
                </div>
              )
            })}

          <br />

          <div
            style={{
              padding: '1rem 1rem',
              margin: '2rem 0.5rem',
              background: '#fbfbfb'
            }}
          >
            <Flex>
              <Hover style={{ padding: '0rem 0.6rem', color: 'grey' }}>
                <GrAttachment style={{ fontSize: '1.6rem' }} />
              </Hover>

              <Section>Attachments ( 0 Kb )</Section>
            </Flex>

            <Text small center color="grey">
              No file has been attached to this talk draft. <br /> Drag 'n' drop files to upload
            </Text>
          </div>
        </Padded>

        {reviewPane && <Review />}
      </Grid>
    </div>
  )
}

export default inject('ConsoleStore')(observer(Draft))
