import React, { useState } from 'react'
import styled from 'styled-components'
import Flex from 'styled-flex-component'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useMutation } from '@apollo/react-hooks'
import { inject, observer } from 'mobx-react'
import { Redirect } from 'react-router-dom'
import media from 'styled-media-query'
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiChevronRight,
  FiChevronLeft,
  FiCheck
} from 'react-icons/fi'
import { CSSTransition } from 'react-transition-group'
import { Link } from 'react-router-dom'

import Existing from '../exsiting-event' // i no sabi spell ;)
import { CREATE_EVENT } from '../../../data/mutations'
import { CREATE_EVENT_INPUT, CREATE_STREAM_FORMS } from '../formsData'
import { Checkbox } from '../../../components/'
import Options from '../../imports/createEvent/eventoptions.import'
import {
  Title,
  Label,
  Text,
  Hover,
  Grid,
  BigTitle,
  FormBody as Body,
  FormCard as Card,
  Section
} from '../../../styles/style'
import Field from '../fields'

const UpGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 2rem 2rem;
  ${media.lessThan('huge')`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-gap: 2rem 1rem;
  `};
  ${media.lessThan('large')`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-gap: 2rem 1rem;
  `};
  ${media.lessThan('medium')`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 2rem 1rem;
  `};
`

const CInput = styled.div`
  display: flex;
  padding: 0rem;
  border: 1px solid #c0c0c0;
  border-radius: 5px;
  margin: 0rem 1.5rem;
  input {
    width: 27rem;
    border: 0px;
    height: auto;
    padding: 0.5rem 1.5rem;
    outline: 0px;
  }
`

const InputGrid = styled.div`
  display: grid;
  grid-gap: 1.5rem 2rem;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
`

const Button = styled.div`
  background: ${props => props.background};
  border-radius: 4px;
  height: auto;
  outline: 0px;
  transition: all 400ms;
  border: ${props => (props.background ? props.background : ' 1px solid #0e2f5a')};
  color: ${props => (props.transparent ? '#0e2f5a' : '#fff')};
  margin: 0 1em;
  display: flex;
  padding: ${props => (props.long ? '0.40em 3.5em' : '0.40em 1.5em')};
  font-size: 1em;
  &:hover {
    cursor: pointer;
    color: #0e2f5a;
    background: #fff;
  }
`

const TagCard = styled.div`
  height: 17vh;
  width: 10.5rem;
  box-shadow: 0 2px 3px grey;
  padding: 0.5rem 0.5rem;
  border: 1px solid grey;
  border-radius: 5px;
  &: hover {
    cursor: pointer;
  }
`

const Circle = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 1px solid #c0c0c0;
  display: flex;
  box-shadow: 0 1px 2px #c0c0c0;
  justify-content: center;
  align-items: center;
`

const TagCardGrid = styled.div`
  display: grid;
  grid-gap: 2rem 2rem;
  margin: 0 2rem;
  grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
`

const CreateConference = (props): JSX.Element => {
  // page state
  const { Notify, closeNotify, importPane } = props.PaneStore
  const [ExistingEvent, createExistingEvent] = useState(false)
  const [Terms, agreeTerms] = useState<boolean>(false)
  const [Mail, ConfirmMail] = useState<boolean>(false)
  const [Error, setError] = useState<string>('')

  const [createEvent, { data }] = useMutation(CREATE_EVENT)

  // Collapsing all into one {k.v.p state} gives an uncontrolled form err .
  // Form data state
  const [Name, setName] = useState<string>('')
  const [Alias, setAlias] = useState<string>('')
  const [Description, setDescription] = useState<string>('')
  const [Website, setWebsite] = useState<string>('')
  const [Summary, setSummary] = useState<string>('')
  const [Venue, setVenue] = useState<string>('')
  const [Virtual, setVirtual] = useState<boolean>(false)
  const [EventDate, setEventDate] = useState<any>([])

  const [EventStartDate, setEventStartDate] = useState<any>(new Date())
  const [Email, setEmail] = useState<any>(new Date())
  const [isSingleDate, setSingleDate] = useState<boolean>(false)

  const [FBMediaLinks, addFBMediaLink] = useState<string>('')
  const [TWMediaLinks, addTWMediaLink] = useState<string>('')
  const [INSMediaLinks, addINSMediaLink] = useState<string>('')

  const [ActiveView, setActiveView] = useState('first')

  const SubmitData = () => {
    let MediaLinksArray = []
    MediaLinksArray.push(FBMediaLinks, TWMediaLinks, INSMediaLinks)

    createEvent({
      variables: {
        UserID: localStorage.getItem('user_id'),
        name: Name,
        website: Website,
        alias: Alias,
        description: Description,
        Email: props.email,
        venue: Venue,
        eventType: props.type,
        summary: Summary,
        EventDate: EventDate,
        isVirtual: Virtual,
        isLocked: false,
        mediaLinks: MediaLinksArray,
        isArchived: false,
        isAcceptingTalks: false,
        isAcceptingVolunteers: false
      }
    })
      .then(() => {
        ConfirmMail(true)
        closeNotify()
      })
      .catch(e => {
        console.log(e)
      })
  }

  const handleChange = (value, label) => {
    switch (label) {
      case 'Event Name':
        setName(value)
        break
      case 'Event Alias':
        setAlias(value)
        break
      case 'Event Brand Page':
        setWebsite(value)
        break
      case 'Event Description':
        setDescription(value)
        break
      case 'Event Summary':
        setSummary(value)
        break
      case 'Event-Venue':
        setVenue(value)
        break
      case 'Streaming Location':
        setVenue(value)
        break
      default:
        break
    }
  }

  const handleCheckBox = (value, label) => {
    switch (label) {
      case 'Terms':
        agreeTerms(!Terms)
        break
      case 'isVirtual':
        setVirtual(!Virtual)
        break
      case 'isSingleDate':
        setSingleDate(!isSingleDate)
        break
      default:
        break
    }
  }

  if (data) {
    setTimeout(() => {
      return <Redirect to="/console" message="Loggging in" />
    }, 20000)
  }

  const Tags = [
    {
      id: 1,
      tagName: 'Games',
      clicked: false
    },
    {
      id: 2,
      tagName: 'Fashion',
      clicked: true
    },
    {
      id: 3,
      tagName: 'Review',
      clicked: false
    },
    {
      id: 4,
      tagName: 'Automobile',
      clicked: true
    },
    {
      id: 4,
      tagName: 'Automobile',
      clicked: false
    }
  ]

  return (
    <Body style={{ background: '#eeeeee' }}>
      <br />
      <div>
        <br />
        {!importPane ? (
          <div style={{ height: Mail && window.innerHeight - 177 }}>
            <Body>
              <Text style={{ color: 'red' }}> {Error} </Text>

              <Flex justifyBetween>
                <Title center bold>
                  Create {Name.length < 7 ? `Your ${props.type}` : Name}
                </Title>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Text>
                    <span
                      onClick={() => createExistingEvent(true)}
                      style={{
                        color: 'blue',
                        fontWeight: 500,
                        margin: '0rem 0.4rem',
                        cursor: 'pointer'
                      }}
                    >
                      Launch
                    </span>
                    a new iteration of an existing event.
                  </Text>
                </div>
              </Flex>
              <hr />

              <CSSTransition timeout={300} in={ActiveView === 'first'} unmountOnExit>
                <form onSubmit={SubmitData}>
                  <Card>
                    <br />

                    <div
                      style={{
                        margin: '0rem 1rem',
                        display: 'flex',
                        justifyContent: 'space-between'
                      }}
                    >
                      <div
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                      >
                        <Title small>Details</Title>
                      </div>

                      <Button background="#401364">
                        Auto-fill with existing {props.type} data
                      </Button>
                    </div>
                    <hr />

                    {CREATE_STREAM_FORMS.map(({ id, label, placeholder, textarea }) => {
                      return (
                        <Field
                          id={label}
                          name={label}
                          type={'text'}
                          textarea={textarea}
                          value={label == 'Event Name' ? Name : Alias}
                          onChange={e => handleChange(e, label)}
                          placeholder={placeholder}
                        />
                      )
                    })}

                    <Label small> Links </Label>
                    <InputGrid>
                      <CInput>
                        <Hover
                          style={{
                            padding: '0.6rem 0.5rem',
                            background: '#fbfbfb',
                            color: '#0e2f5a',
                            borderRadius: '5px 0px 0px 5px'
                          }}
                        >
                          <FiTwitter style={{ fontSize: '1.7rem' }} />{' '}
                        </Hover>

                        <input
                          type="url"
                          value={TWMediaLinks}
                          onChange={e => addTWMediaLink(e.target.value)}
                          placeholder="Twitter profile url"
                        />
                      </CInput>

                      <CInput>
                        <Hover
                          style={{
                            padding: '0.6rem 0.5rem',
                            background: '#fbfbfb',
                            color: '#0e2f5a',
                            borderRadius: '5px 0px 0px 5px'
                          }}
                        >
                          <FiFacebook style={{ fontSize: '1.7rem' }} />{' '}
                        </Hover>

                        <input
                          type="url"
                          value={FBMediaLinks}
                          onChange={e => addFBMediaLink(e.target.value)}
                          placeholder="Facebook profile url"
                        />
                      </CInput>

                      <CInput>
                        <Hover
                          style={{
                            padding: '0.6rem 0.5rem',
                            background: '#fbfbfb',
                            color: '#0e2f5a',
                            borderRadius: '5px 0px 0px 5px'
                          }}
                        >
                          <FiInstagram style={{ fontSize: '1.7rem' }} />{' '}
                        </Hover>

                        <input
                          type="url"
                          value={INSMediaLinks}
                          onChange={e => addINSMediaLink(e.target.value)}
                          placeholder="Instagram profile url"
                        />
                      </CInput>
                    </InputGrid>
                    <br />
                    <Label small> Stream Tags </Label>
                    <TagCardGrid>
                      {Tags.map(({ id, tagName, clicked }) => {
                        return (
                          <TagCard key={id}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                              .
                              <Circle>
                                <FiCheck
                                  style={{ fontSize: '1.4rem', color: clicked && 'green' }}
                                />
                              </Circle>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                              <img
                                style={{ maxWidth: '50%', objectFit: 'cover' }}
                                src={require('../../../assets/ssvg/sample.svg')}
                                alt={'tag illustration'}
                              />
                            </div>
                            <br />
                            <Text center> {tagName} </Text>
                          </TagCard>
                        )
                      })}
                    </TagCardGrid>

                    <br />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Text style={{ padding: '0rem 1rem' }}>
                        Filling the above fields means you have agreed to Oasis's
                        <span style={{ margin: '0rem 0.5rem' }}>
                          <a href="/">Terms Of Use </a>.{' '}
                        </span>
                      </Text>

                      <div style={{ textAlign: 'right' }}>
                        <Button
                          onClick={() => {
                            setActiveView('MileStone')
                          }}
                        >
                          Create {props.type}
                          <Hover style={{ marginLeft: ' 0.7rem' }}>
                            <FiChevronRight style={{ fontSize: '1.7rem' }} />
                          </Hover>
                        </Button>
                      </div>
                    </div>
                    <br />
                  </Card>
                </form>
              </CSSTransition>

              <CSSTransition timeout={300} in={ActiveView === 'MileStone'} unmountOnExit>
                <Card
                  style={{
                    boxShadow: '0px 3px 4px grey',
                    padding: '0rem 1rem'
                  }}
                >
                  <br />
                  <br />

                  <div style={{ textAlign: 'center' }}>
                    <img
                      style={{ maxWidth: '15%' }}
                      src={require('../../../assets/images/party-hat.png')}
                      alt="User reached a milestone"
                    />
                  </div>

                  <Text center>
                    You have filled the basic details required for creating an event on Oasis.{' '}
                    <br /> You can view your event while gradually update your event with other
                    details as you keep on preparing for your event
                  </Text>

                  <Text center>
                    You would need to verify the support email address attached to this event before
                    making further updates using the Oasis Console.
                  </Text>
                  <br />
                  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Link style={{ textDecoration: 'none' }} to="/console">
                      <Button background={'#401364'}>Return to Console and update later</Button>
                    </Link>
                    <Button
                      transparent={!Terms}
                      disabled={!Terms}
                      onClick={() => {
                        setActiveView('Second')
                      }}
                    >
                      Continue {props.type} Description
                      <Hover style={{ marginLeft: ' 0.7rem' }}>
                        <FiChevronRight style={{ fontSize: '1.7rem' }} />
                      </Hover>
                    </Button>
                  </div>
                  <br />
                  <br />
                  <br />
                </Card>
              </CSSTransition>

              <br />
            </Body>
          </div>
        ) : (
          <Options />
        )}
      </div>
      <br />
    </Body>
  )
}

export default inject('PaneStore')(observer(CreateConference))
