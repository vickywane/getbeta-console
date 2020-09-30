import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import {
  FiChevronRight,
  FiMoreVertical,
  FiUploadCloud,
  FiCalendar,
  FiDownload
} from 'react-icons/fi'
import { toJS } from 'mobx'
import { observer } from 'mobx-react'
import { Spinner } from 'react-bootstrap'
import moment from 'moment'
import media from 'styled-media-query'
import { useDropzone } from 'react-dropzone'

import ModalWrapper from '../../../components/modals/modalWrapper'
import { Text, MdTitle, Hover, Title, Button, center, StyledHover } from '../../../styles/style'
import Header from '../../../components/headers/header'

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  padding: 0 2rem;
  border-bottom: 1px solid #c0c0c0;
`

const DummyFiles = [
  {
    id: 1,
    name: 'Some file.mp4',
    date: '12-12-12'
  },
  {
    id: 2,
    name: 'Some long file.mp4',
    date: '12-12-12'
  },
  {
    id: 3,
    name: 'Some academic file.png',
    date: '12-12-12'
  }
]

const List = styled.ul`
  margin: 1rem 0.5rem;
  list-style: none;
  padding: 0 0.7rem;
  li {
    margin: 1rem 1rem;
    display: flex;
    flex-direction: column;
    div {
      justify-content: space-between;
      display: flex;
      flex-direction: row;
    }
  }
  ${media.lessThan('medium')`
  padding: 0 0.3rem;
  margin: 1rem 0.3rem;
      li {
        margin: 1rem 0.5rem;
      }
  `};
`

const Body = styled.div`
  padding: 1rem 2rem;
  ${media.lessThan('medium')`
    padding : 1rem 1rem;
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
`

const EditContent = props => {
  const [ModalVisibility, setModalVisibility] = useState(false)
  const [Content, setContent] = useState(null)

  const { getContent, content, isLoadingContents, uploadContent } = props.ContentStore
  const { contentId } = props.location.state
  const [isContentOpen, setContentOpen] = useState(true)

  useEffect(() => {
    getContent(contentId)
  }, [])

  let data = toJS(content)

  const onDrop = useCallback(([file]) => {
    setContent(file)
  }, [])

  const { getRootProps, isDragActive, isDragAccept, getInputProps, isDragReject } = useDropzone({
    onDrop,
    accept: 'image/jpeg , image/jpg, image/png'
  })

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
            <Button style={{ display: 'flex' }}>
              <div style={{ margin: '0 .5rem' }}>
                <FiUploadCloud style={{ fontSize: '1.4rem' }} />
              </div>
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
                onClick={() => {
                  setModalVisibility(false)
                }}
              >
                <input {...getInputProps()} />
                Upload File
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
        <Body>
          <Head>
            <div style={{ ...center }}>
              <Title> {data.title} </Title>
            </div>

            <div style={{ ...center }}>
              <Hover>
                <FiMoreVertical style={{ fontSize: '1.6rem' }} />
              </Hover>
            </div>
          </Head>
          <br />

          <div style={{ display: 'flex' }}>
            <Hover style={{ margin: '0 .4rem' }}>
              <FiCalendar style={{ fontSize: '1.4rem' }} />
            </Hover>

            <Text style={{ ...center, margin: 0 }}>
              {' '}
              {moment(data.createdAt).format('D MMMM YYYY')}{' '}
            </Text>
          </div>

          <Text style={{ paddingLeft: '20px' }}> {data.descrp} </Text>
          <br />
          <br />

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              borderBottom: '1px solid #c0c0c0',
              padding: '0.7rem 0rem'
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
                    fontSize: '1.4rem',
                    transform: isContentOpen && 'rotate(90deg)'
                  }}
                />
              </Hover>
              <Title> Content Files </Title>
            </div>

            <Button onClick={() => setModalVisibility(true)}>Add Content File</Button>
          </div>
          {isContentOpen && (
            <List>
              {DummyFiles.map(({ id, name }) => {
                return (
                  <li key={id}>
                    <div>
                      <div style={{ display: 'flex' }}>
                        <Title style={{ margin: '0 .5rem' }}>{name}. </Title>
                        <Text style={{ color: 'grey' }}> Uploaded 5 minutes ago </Text>
                      </div>
                      <StyledHover>
                        <FiDownload style={{ fontSize: '1.4rem' }} />
                      </StyledHover>
                    </div>

                    <Text style={{ marginLeft: '15px' }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aperiam
                      optio perferendis magni beatae in excepturi nulla vero aspernatur hic.{' '}
                    </Text>
                  </li>
                )
              })}
            </List>
          )}
        </Body>
      )}
    </div>
  )
}

export default observer(EditContent)
