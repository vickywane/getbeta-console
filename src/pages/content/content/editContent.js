import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import {
  FiChevronRight,
  FiMoreVertical,
  FiUploadCloud,
  FiCalendar,
  FiDownload,
  FiPlus
} from 'react-icons/fi'
import { toJS } from 'mobx'
import { observer } from 'mobx-react'
import { Spinner } from 'react-bootstrap'
import moment from 'moment'
import media from 'styled-media-query'
import { useDropzone } from 'react-dropzone'

import useWindowWidth from '../../../utils/hook_style'

import ModalWrapper from '../../../components/modals/modalWrapper'
import { Text, MdTitle, Hover, Title, Button, center, StyledHover } from '../../../styles/style'
import Header from '../../../components/headers/header'
import { IoMdPeople } from 'react-icons/io'

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  padding: 0 1.5rem;
  border-bottom: 1px solid #c0c0c0;
  ${media.lessThan('medium')`
    padding: 0 1rem;
  `};
  ${media.lessThan('small')`
    height: 45px;
    padding: 0 .5rem;
`};
`

const List = styled.ul`
  margin: 1rem 0;
  list-style: none;
  padding: 0;
  li {
    margin: 1rem 1rem;
    display: flex;
    flex-direction: column;
    span {
      padding: 10px 0;
      justify-content: space-between;
      display: flex;
      flex-direction: row;
    }
  }
  ${media.lessThan('medium')`
   padding: 0rem;
   margin: 0rem;
   li {
      margin: 1rem 0.5rem;
      span {
        padding-bottom : 10px 0;
      }
    }
  `};
  ${media.lessThan('small')`
   li {
      margin: 1rem 0.2rem;
      span {
        padding-bottom : 10px 0;
      }
    }
  `};
`

const Body = styled.div`
  padding: 0.5rem 1.5rem;
  ${media.lessThan('medium')`
    padding : .5rem .5rem;
  `};
`

const InputBody = styled.div`
  label {
    font-size: 1rem;
  }
  textarea {
    font-size: 0.9rem;
    margin: 0.5rem 0.5rem;
    display: flex;
    padding: 1rem 1rem;
    flex: 1;
    border: 1px solid #c0c0c0;
    border-radius: 5px;
    height: 20vh;
    width: 95%;
    color: #000;
  }
  ${media.lessThan('medium')`
      label {
        font-size : .85rem;
      }
      textarea {
        font-size : .8rem;
        margin : 0;
        width : 100%;
      }
  `};
`

const Preview = styled.div`
  height: 15rem;
  width: 20rem;
  background: #c0c0c0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  text-align: center;
  ${media.lessThan('large')`
  height: 13rem;
  width: 15rem;
`};
`

const ContentBody = styled.div`
  display: grid;
  grid-template-columns: auto 25rem;
  transition: all 300ms;
  ${media.lessThan('large')`
    grid-template-columns: auto 17rem;
  `};
  ${media.lessThan('medium')`
    grid-template-columns: auto;
  `};
`

const ContentFileOverview = styled.div`
  border-left: 1px solid #c0c0c0;
  ${media.lessThan('medium')`
      display : none;
  `};
`

const EditContent = props => {
  const Width = useWindowWidth()

  const [ModalVisibility, setModalVisibility] = useState(false)
  const [Content, setContent] = useState(null)

  const {
    getContent,
    content,
    isLoadingContents,
    getContentFiles,
    contentFiles,
    addContentFile
  } = props.ContentStore
  const { contentId } = props.location.state
  const [isContentOpen, setContentOpen] = useState(true)

  useEffect(() => {
    getContent(contentId)
    getContentFiles(contentId)
  }, [])

  let data = toJS(content)
  const files = toJS(contentFiles)

  const onDrop = useCallback(([file]) => {
    setContent(file)
  }, [])

  const { getRootProps, isDragActive, isDragAccept, getInputProps, isDragReject } = useDropzone({
    onDrop,
    accept: 'image/jpeg , image/jpg, image/png'
  })

  const uploadContentFile = () => {
    addContentFile(contentId, Content)
  }

  return (
    <div>
      <Header goBack={true} />

      <ModalWrapper
        visibility={ModalVisibility}
        size="lg"
        closeModal={() => setModalVisibility(false)}
        title="Upload Content File"
      >
        <div>
          <div style={{ display: 'flex', justifyContent: 'center', padding: '1rem 0' }}>
            <Button
              style={{ display: 'flex' }}
              {...getRootProps({
                isDragActive,
                isDragAccept,
                isDragReject
              })}
            >
              <input {...getInputProps()} />
              <Hover style={{ margin: '0 .5rem' }}>
                <FiUploadCloud />
              </Hover>
              Add Content File
            </Button>
          </div>
          <InputBody>
            <label> File Description </label>
            <textarea placeholder="A description of your content file" type="text" />
          </InputBody>

          <hr />
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p style={{ opacity: '0' }}> .</p>

              <Button
                disabled={Content === null}
                style={{
                  background: Content === null && 'transparent',
                  color: Content === null && '#000'
                }}
                onClick={() => {
                  uploadContentFile()
                  setModalVisibility(false)
                }}
              >
                Upload Content File
              </Button>
            </div>
          </div>
        </div>
      </ModalWrapper>

      {isLoadingContents ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <br />
          <Spinner variant="primary" animation="grow" role="loading" />
        </div>
      ) : (
        <div>
          <ContentBody>
            <Body>
              <Head>
                <div style={{ ...center }}>
                  <Title> {data.title} </Title>
                </div>

                <div style={{ ...center }}>
                  <Hover>
                    <FiMoreVertical style={{ fontSize: '1.4rem' }} />
                  </Hover>
                </div>
              </Head>

              <div style={{ display: 'flex' }}>
                <Hover style={{ margin: '0 .4rem' }}>
                  <FiCalendar />
                </Hover>

                <Text style={{ ...center, paddingTop: '5px' }}>
                  {moment(data.createdAt).format('D MMMM YYYY')}
                </Text>
              </div>
              <br />
              <Text style={{ paddingLeft: '20px' }}> {data.descrp} </Text>
              <br />
              <div>
                <div style={{ display: 'flex' }}>
                  <div style={{ margin: '0 .4rem' }}>
                    <IoMdPeople />
                  </div>

                  <div style={{ paddingTop: '5px' }}>
                    <Text>
                      {data.subscribers !== undefined && data.subscribers.length} Subscribers
                    </Text>
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid #c0c0c0',
                  padding: '0.5rem 0rem'
                }}
              >
                <div
                  style={{ display: 'flex', cursor: 'pointer' }}
                  onClick={() => setContentOpen(!isContentOpen)}
                >
                  <Hover style={{ margin: '0 0.5rem' }}>
                    <FiChevronRight
                      style={{
                        transition: 'all 250ms',
                        fontSize: '1.3rem',
                        transform: isContentOpen && 'rotate(90deg)'
                      }}
                    />
                  </Hover>

                  <Title style={{ paddingTop: '7px' }}> Content Files </Title>
                </div>

                {Width >= 700 ? (
                  <Button onClick={() => setModalVisibility(true)}>Add Content File</Button>
                ) : (
                  <StyledHover onClick={() => setModalVisibility(true)}>
                    <FiPlus />
                  </StyledHover>
                )}
              </div>
              {isContentOpen && (
                <List>
                  {data.contentfiles !== undefined &&
                    data.contentfiles.map(({ id, name }) => {
                      return (
                        <li key={id}>
                          <span>
                            <div style={{ display: 'flex' }}>
                              <Title style={{ margin: '0 .5rem' }}>{name}. </Title>

                              {Width >= 600 && <Text color="grey"> Uploaded 5 minutes ago </Text>}
                            </div>
                          </span>
                          <Text style={{ marginLeft: '15px' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
                            aperiam optio perferendis magni beatae in excepturi nulla vero
                            aspernatur hic.
                          </Text>
                        </li>
                      )
                    })}
                </List>
              )}
            </Body>

            <ContentFileOverview>
              <Body>
                <br />
                <Preview>
                  <Text> Select a file to preview </Text>
                </Preview>
              </Body>
            </ContentFileOverview>
          </ContentBody>
        </div>
      )}
    </div>
  )
}

export default observer(EditContent)
