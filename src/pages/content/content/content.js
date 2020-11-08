import React, { useState, useEffect, useRef, useCallback } from 'react'
import styled from 'styled-components'
import {
  FiChevronRight,
  FiMoreVertical,
  FiUploadCloud,
  FiCalendar,
  FiCheck,
  FiEdit,
  FiPlus
} from 'react-icons/fi'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  DrawerContent,
  DrawerCloseButton
} from '@chakra-ui/core'

import { toJS } from 'mobx'
import { observer } from 'mobx-react'
import { Spinner } from 'react-bootstrap'
import moment from 'moment'
import media from 'styled-media-query'
import { useDropzone } from 'react-dropzone'
import { CSSTransition } from 'react-transition-group'
import * as Lodash from 'lodash'

import ContentFilePreview from '../../../components/contentFilePreview'
import ContentFileCard from '../../../components/contentFileCard'
import useWindowWidth from '../../../utils/hook_style'
import Player from './player'
import ModalWrapper from '../../../components/modals/modalWrapper'
import { Text, MdTitle, Hover, Title, Button, center, StyledHover } from '../../../styles/style'
import Header from '../../../components/headers/header'
import { IoMdPeople } from 'react-icons/io'
import { FiX } from 'react-icons/fi'

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

const Body = styled.div`
  padding: 0.5rem 1rem;
  ${media.lessThan('large')`
    padding : .5rem .5rem;
  `};
  ${media.lessThan('small')`
  padding : .5rem .1rem;
`};
`

const InputBody = styled.div`
  label {
    font-size: 1rem;
  }
  input {
    width: 60rem;
    padding: 0.5rem 0.5rem;
    font-size: 0.85rem;
    border: 1px solid #c0c0c0;
    height: 42px;
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
    width: 100%;
    color: #000;
  }
  ${media.lessThan('medium')`
      label {
        font-size : .85rem;
      }
      input {
        height : 40px;
        padding : .3rem .6rem;
        border  : 1px solid #c0c0c0;
        width : 18.5rem;
        border-radius : 2px;
        font-size : .80rem;
      }
      textarea {
        font-size : .8rem;
        margin : 0;
        width : 100%;
      }
  `};
`

const ContentBody = styled.div`
  display: grid;
  grid-template-columns: ${props => (props.showPreview ? 'auto 22rem' : 'auto')};
  transition: all 300ms;
  ${media.lessThan('large')`
    grid-template-columns:  ${props => (props.showPreview ? 'auto 15rem' : 'auto')};
  `};
  ${media.lessThan('medium')`
    grid-template-columns: auto;
  `};
`

const ContentFileOverview = styled.div`
  display: ${props => (props.open ? 'flex' : 'none')};
  border-left: 1px solid #c0c0c0;
  ${media.lessThan('medium')`
      display : none;
  `};
`

const EditContent = props => {
  const Width = useWindowWidth()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [ModalVisibility, setModalVisibility] = useState(false)
  const [Content, setContent] = useState(null)
  const [currentView, setCurrentView] = useState('content')
  const [showContentPreview, setContentPreview] = useState(true)
  const [isEditing, setEditing] = useState(false)
  const [headerName, setHeaderName] = useState('')

  // for the content player
  const [contentDetail, setContentDetail] = useState(null)
  const [contentFileDescripiton, setContentFileDescription] = useState('')
  const [previewUrl, setPreviewUrl] = useState(null)

  const {
    getContent,
    content,
    isLoadingContents,
    getContentFiles,
    updateContent,
    contentFiles,
    isLoading,
    isCreatingContentFile,
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

  useEffect(() => {
    if (Lodash.isEmpty(files)) {
      setContentPreview(false)
    } else {
      setContentPreview(true)
    }
  }, [files])

  const [updateTitle, setUpdateTitle] = useState(data.title)
  const [updateDescription, setUpdatedDescription] = useState(data.descrp)

  const onDrop = useCallback(([file]) => {
    setContent(file)
  }, [])

  const { getRootProps, isDragActive, isDragAccept, getInputProps, isDragReject } = useDropzone({
    onDrop
  })

  const uploadContentFile = () => {
    addContentFile(contentId, Content, contentFileDescripiton)
  }

  const handleUpdate = () => {
    setEditing(false)

    updateContent(contentId, updateTitle, updateDescription)
  }

  const btnRef = useRef()

  return (
    <div>
      <Header goBack={true} screen={headerName} />

      <ModalWrapper
        visibility={ModalVisibility}
        size="lg"
        closeModal={() => {
          setContent(null)
          setModalVisibility(false)
        }}
        title="Upload Content File"
      >
        <div>
          <div style={{ display: 'flex', justifyContent: 'center', padding: '1rem 0' }}>
            {!Content ? (
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
            ) : (
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img
                  alt="a default content cover for uploads"
                  src={require('../../../assets/images/image-icon.png')}
                  style={{ height: '90px', width: '90px', objectFit: 'contain' }}
                />

                <div style={{ ...center }}>
                  <Text style={{ margin: '0 .5rem' }}> {Content && Content.path} </Text>
                </div>
              </div>
            )}
          </div>

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
                  // setModalVisibility(false)
                }}
              >
                {!isCreatingContentFile ? 'Upload' : 'Uploading'} Content File
                {isCreatingContentFile && (
                  <div style={{ paddingLeft: '.7rem' }}>
                    <Spinner size="sm" animation="border" role="status" />
                  </div>
                )}
              </Button>
            </div>
          </div>
        </div>
      </ModalWrapper>

      <Drawer isOpen={isOpen} placement="right" size="md" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Title> Edit Content </Title>{' '}
          </DrawerHeader>
          <hr />
          <DrawerBody>
            <div>
              <InputBody>
                <label> Content Title </label>
                <input
                  type="text"
                  value={updateTitle}
                  placeholder={data.title}
                  onChange={e => {
                    setUpdateTitle(e.target.value)
                  }}
                />
              </InputBody>
              <br />
              <InputBody>
                <label> Content Description </label>
                <textarea
                  type="text"
                  value={updateDescription}
                  placeholder={data.descrp}
                  onChange={e => setUpdatedDescription(e.target.value)}
                />
              </InputBody>
            </div>
          </DrawerBody>

          <DrawerFooter>
            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
              <Button onClick={onClose} style={{ background: 'grey' }}>
                Cancel
              </Button>

              <Button
                onClick={() => {
                  handleUpdate()
                  onClose()
                }}
              >
                {isLoading ? 'Saving' : 'Save'} Changes.
                {isLoading && (
                  <div style={{ paddingLeft: '.7rem' }}>
                    <Spinner size="sm" animation="border" role="status" />
                  </div>
                )}
              </Button>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <CSSTransition in={currentView === 'player'} timeout={300} unmountOnExit>
        <Player contentDetails={contentDetail} goBack={() => setCurrentView('content')} />
      </CSSTransition>

      <CSSTransition in={currentView === 'content'} timeout={300} unmountOnExit>
        <div>
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
            <ContentBody showPreview={showContentPreview}>
              <div>
                <Body style={{ background: 'rgba(233, 241, 251, 0.81)' }}>
                  <Head>
                    <div style={{ ...center }}>
                      {isEditing ? (
                        <InputBody>
                          <input
                            type="text"
                            value={updateTitle}
                            placeholder={data.title}
                            onChange={e => {
                              setUpdateTitle(e.target.value)
                            }}
                          />
                        </InputBody>
                      ) : (
                        <Title small> {data.title} </Title>
                      )}
                    </div>

                    <div style={{ ...center }}>
                      {!isEditing ? (
                        <Hover onClick={onOpen}>
                          <FiEdit style={{ fontSize: '1.3rem' }} />
                        </Hover>
                      ) : (
                        <Hover onClick={_ => handleUpdate()}>
                          <FiCheck style={{ fontSize: '1.3rem' }} />
                        </Hover>
                      )}
                    </div>
                  </Head>

                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex' }}>
                      <Hover style={{ margin: '0 .4rem' }}>
                        <FiCalendar />
                      </Hover>

                      <Text small style={{ ...center, paddingTop: '8px' }}>
                        {moment(data.createdAt).format('D MMMM YYYY')}
                      </Text>
                    </div>

                    <div style={{ display: 'flex' }}>
                      <div style={{ margin: '0 .4rem' }}>
                        <IoMdPeople />
                      </div>

                      <div style={{ paddingTop: '5px' }}>
                        <Text small>
                          {data.subscribers !== undefined && data.subscribers.length} Subscribers
                        </Text>
                      </div>
                    </div>
                  </div>

                  {!isEditing ? (
                    <Text style={{ paddingLeft: '20px' }}> {data.descrp} </Text>
                  ) : (
                    <InputBody>
                      <textarea
                        type="text"
                        value={updateDescription}
                        placeholder={data.descrp}
                        onChange={e => setUpdatedDescription(e.target.value)}
                      />
                    </InputBody>
                  )}

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
                      <Hover style={{ margin: '0 0.3rem' }}>
                        <FiChevronRight
                          style={{
                            transition: 'all 250ms',
                            fontSize: '1.3rem',
                            transform: isContentOpen && 'rotate(90deg)'
                          }}
                        />
                      </Hover>

                      <Title style={{ paddingTop: '7px' }} small>
                        {' '}
                        Content Files{' '}
                      </Title>
                    </div>

                    {Width >= 700 ? (
                      <Button onClick={() => setModalVisibility(true)}>Add Content File</Button>
                    ) : (
                      <StyledHover onClick={() => setModalVisibility(true)}>
                        <FiPlus />
                      </StyledHover>
                    )}
                  </div>
                </Body>

                {Lodash.isEmpty(files) ? (
                  <div>
                    <br />
                    <br />
                    <Title small color="grey" align="center">
                      You dont have any content file. <br /> Use the <b> Add Content File</b> button
                      to add your first content file{' '}
                    </Title>
                  </div>
                ) : (
                  isContentOpen && (
                    <ContentFileCard
                      setPreviewUrl={val => setPreviewUrl(val)}
                      setContentDetail={({ filename, url, dateCreated }) =>
                        setContentDetail({
                          name: filename,
                          url: url,
                          dateCreated: dateCreated,
                          description:
                            'Content file description is lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aperiam optio perferendis magni  beatae in.'
                        })
                      }
                      contentStore={props.ContentStore}
                      data={data}
                      setCurrentView={() => setCurrentView('player')}
                      setHeaderName={val => setHeaderName(val)}
                      Width={Width}
                      files={files}
                    />
                  )
                )}
              </div>

              <ContentFileOverview open={showContentPreview}>
                <ContentFilePreview url={previewUrl} />
              </ContentFileOverview>
            </ContentBody>
          )}
        </div>
      </CSSTransition>
    </div>
  )
}

export default observer(EditContent)
