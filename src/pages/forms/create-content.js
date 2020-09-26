import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Spinner } from 'react-bootstrap'
import { FiUploadCloud } from 'react-icons/fi'
import { useDropzone } from 'react-dropzone'
import media from 'styled-media-query'

import {
  Body,
  Text,
  Button,
  Hover,
  StyledHover,
  center,
  CreateCourseInputField as InputField
} from '../../styles/style'
import Header from '../../components/headers/header'

const Image = styled.img`
  object-fit: contain;
  width: 250px;
  height: 200px;
  ${media.lessThan('large')`
  width: 200px;
  height: 200px;
  `};
  ${media.lessThan('medium')`
  width: 150px;
  height: 150px;
  `};
  ${media.lessThan('small')`
  width: 120px;
  height: 120px;
  `};
`

const StyledBody = styled.div`
  padding: 0rem 2rem;
  ${media.lessThan('medium')`
  padding: 0rem 0.5rem;
`};
`

const Grid = styled.div`
  display: flex;
  ${media.lessThan('medium')`
        flex-direction : column;
        align-items : center;
    `};
`

const CreateContent = props => {
  const { createContent, isCreatingContent } = props.ContentStore

  const [ContentName, setContentName] = useState('')
  const [ContentDescription, setContentDescription] = useState('')
  const [ContentPrice, setContentPrice] = useState('')
  const [ContentType, setContentType] = useState('')
  const [contentImage, setContentImage] = useState(null)

  const handleSubmit = () => {
    createContent(ContentName, ContentDescription, ContentPrice, ContentType, contentImage)
  }

  const onDrop = useCallback(([file]) => {
    setContentImage(file)
  }, [])

  const { getRootProps, isDragActive, isDragAccept, getInputProps, isDragReject } = useDropzone({
    onDrop,
    accept: 'image/jpeg , image/jpg, image/png'
  })

  return (
    <div>
      <Header goBack={true} screen="Create New Content " />

      <StyledBody>
        <br />
        {isCreatingContent ? (
          <div
            style={{
              height: window.innerHeight - 150,
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center'
            }}
          >
            <Spinner type="grow" />
          </div>
        ) : (
          <div>
            <Grid>
              <div
                {...getRootProps({
                  isDragActive,
                  isDragAccept,
                  isDragReject
                })}
              >
                <input {...getInputProps()} />

                <Image src={require('../../assets/images/image-icon.png')} />
                {isDragActive && <Text align="center"> Drop Image here </Text>}
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexDirection: 'column'
                }}
              >
                <p style={{ opacity: '0' }}> . </p>
                <div style={{ ...center, marginBottom: '1rem' }}>
                  {!contentImage ? (
                    <StyledHover
                      {...getRootProps({
                        isDragActive,
                        isDragAccept,
                        isDragReject
                      })}
                      style={{ display: 'flex' }}
                    >
                      <input {...getInputProps()} />
                      <Hover style={{ margin: '0 0.7rem', ...center }}>
                        <FiUploadCloud style={{ fontSize: '1.6rem' }} />
                      </Hover>

                      <div style={{ paddingTop: '10px' }}>
                        <Text small style={{ fontWeight: 600 }}>
                          Upload Content Image{' '}
                        </Text>
                      </div>
                    </StyledHover>
                  ) : (
                    <Text> {contentImage.path} </Text>
                  )}
                </div>
              </div>
            </Grid>

            <form onSubmit={() => handleSubmit()}>
              {/* <MdTitle style={{fontWeight : 600}} >Create New Content</MdTitle> */}

              <InputField>
                <label> Content Name </label>
                <input
                  onChange={e => setContentName(e.target.value)}
                  value={ContentName}
                  type="text"
                  placeholder="Content Name"
                />
              </InputField>

              <InputField>
                <label> Content Description </label>
                <textarea
                  onChange={e => setContentDescription(e.target.value)}
                  value={ContentDescription}
                  type="text"
                  placeholder="A description of your new Content"
                />
              </InputField>

              <InputField>
                <label> Content Price </label>
                <input
                  onChange={e => setContentPrice(e.target.value)}
                  value={ContentPrice}
                  type="text"
                  placeholder="Content Price"
                />
              </InputField>

              <InputField>
                <label> Content Type </label>
                <input
                  onChange={e => setContentType(e.target.value)}
                  value={ContentType}
                  type="text"
                  placeholder="Content Type"
                />
              </InputField>

              <div style={{ paddingLeft: '2%' }}>
                <Button
                  style={{
                    background: ContentName.length < 5 && 'transparent',
                    color: ContentName.length < 5 && '#0072ce'
                  }}
                  disabled={ContentName.length < 5}
                  onClick={e => {
                    e.preventDefault()

                    handleSubmit()
                  }}
                >
                  Submit Content{' '}
                </Button>
              </div>
            </form>
            <br />
          </div>
        )}
      </StyledBody>
    </div>
  )
}

export default CreateContent
