import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Spinner } from 'react-bootstrap'
import { FiUploadCloud } from 'react-icons/fi'
import { useDropzone } from 'react-dropzone'

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
`
const CreateContent = props => {
  const { createContent, isCreatingContent } = props.ContentStore

  const [ContentName, setContentName] = useState('')
  const [ContentDescription, setContentDescription] = useState('')
  const [ContentPrice, setContentPrice] = useState('')
  const [ContentType, setContentType] = useState('')
  const [contentImage, setContentImage] = useState(null)
  const [contentImageName, setContentImageName] = useState(null)

  const handleSubmit = () => {
    createContent(ContentName, ContentDescription, ContentPrice, ContentType, contentImage)
  }

  const onDrop = useCallback(([file]) => {
    setContentImage(file)
    setContentImageName(file.name)
  }, [])

  const { getRootProps, isDragActive, isDragAccept, getInputProps, isDragReject } = useDropzone({
    onDrop,
    accept: 'image/jpeg , image/jpg, image.png'
  })

  const isReadyToCreate = () => {
    if (
      ContentName.length < 5 &&
      !contentImage &&
      contentImageName &&
      ContentPrice.legnth < 1 &&
      ContentDescription < 10
    ) {
      return false
    } else {
      return true
    }
  }

  return (
    <div>
      <Header goBack={true} screen="Create New Content " />

      <Body style={{ padding: '0rem 2rem' }}>
        {/* <Title> Create New Content </Title> */}

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
            <div style={{ display: 'flex' }}>
              <div
                {...getRootProps({
                  isDragActive,
                  isDragAccept,
                  isDragReject
                })}
              >
                <Image src={require('../../assets/images/image-icon.png')} />
                {isDragActive && <Text align="center"> Drop Image here </Text>}
              </div>

              <div style={{ ...center }}>
                {!contentImageName ? (
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
                      <FiUploadCloud style={{ fontSize: '1.8rem' }} />
                    </Hover>

                    <div style={{ paddingTop: '10px' }}>
                      <Text small style={{ fontWeight: 600 }}>
                        Upload Content Image{' '}
                      </Text>
                    </div>
                  </StyledHover>
                ) : (
                  <Text> {contentImageName} </Text>
                )}
              </div>
            </div>
            <hr />
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
                  onClick={() => handleSubmit()}
                >
                  Submit Content{' '}
                </Button>
              </div>
            </form>
          </div>
        )}
      </Body>
    </div>
  )
}

export default CreateContent
