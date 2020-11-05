import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Spinner } from 'react-bootstrap'
import { FiUploadCloud } from 'react-icons/fi'
import { useDropzone } from 'react-dropzone'
import media from 'styled-media-query'
import { Stack, Select } from '@chakra-ui/core'
import { observer } from 'mobx-react'
import * as Yup from 'yup'

import {
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
  width: 230px;
  height: 200px;
  border-radius: 15px;
  ${media.lessThan('large')`
  width: 200px;
  height: 200px;
  `};
  ${media.lessThan('medium')`
  border-radius: 20px;
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

const InputsContainer = styled.div`
  margin: 1.5rem 0.5rem;
  ${media.lessThan('large')`
    width : 100%;    
  `}
`

const contentSchema = Yup.object().shape({
  name: Yup.string().required(),
  description: Yup.string()
    .min(10)
    .required(),
  price: Yup.number(),
  type: Yup.string()
})

const CreateContent = props => {
  const { createContent, isCreatingContent, isLoading } = props.ContentStore

  const [ContentName, setContentName] = useState('')
  const [ContentDescription, setContentDescription] = useState('')
  const [ContentPrice, setContentPrice] = useState(0)
  const [ContentType, setContentType] = useState('Article')
  const [contentImage, setContentImage] = useState(null)

  const handleSubmit = () => {
    const isValidContent = contentSchema.isValid({
      name: ContentName,
      description: ContentDescription,
      price: ContentPrice,
      type: ContentType
    })

    isValidContent
      .then(() => {
        createContent(ContentName, ContentDescription, ContentPrice, ContentType, contentImage)
      })
      .catch(e => {})
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

      <StyledBody style={{ height: window.innerHeight - 70, overflow: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <InputsContainer>
            <Grid>
              <div
                {...getRootProps({
                  isDragActive,
                  isDragAccept,
                  isDragReject
                })}
              >
                <input {...getInputProps()} />

                <Image
                  src={
                    'https://res.cloudinary.com/dkfptto8m/image/upload/v1603528071/freelance/placeholer.png'
                  }
                />
                {isDragActive && <Text align="center"> Drop Image here </Text>}
              </div>

              <div style={{ ...center }}>
                {!contentImage ? (
                  <div style={{ ...center }}>
                    <StyledHover
                      {...getRootProps({
                        isDragActive,
                        isDragAccept,
                        isDragReject
                      })}
                      style={{ display: 'flex', padding: '7px' }}
                    >
                      <input {...getInputProps()} />
                      <Hover style={{ margin: '0 0.6rem', ...center }}>
                        <FiUploadCloud />
                      </Hover>

                      <Text small style={{ padding: 0, margin: 0 }}>
                        Upload Content Image{' '}
                      </Text>
                    </StyledHover>
                  </div>
                ) : (
                  <Text> {contentImage.path} </Text>
                )}
              </div>
            </Grid>
            <form onSubmit={() => handleSubmit()}>
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

              <Stack spacing={3}>
                <InputField>
                  <label> Content Type </label>
                  <Select
                    onChange={e => setContentType(e.target.value)}
                    size="md"
                    defaultValue="Article"
                    placeholder="Article"
                  >
                    <option value="Article"> Article </option>
                    <option value="Music"> Music </option>
                    <option value="Video">Video </option>
                    <option value="Document"> Document </option>
                  </Select>
                </InputField>

                <InputField>
                  <label> Content Tags </label>
                  <Select size="md" placeholder="Health">
                    <option value="Health"> Health Care </option>
                    <option value="Arts">Arts </option>
                    <option value="Commerce"> Commerce </option>
                    <option value="Politics"> Politics </option>
                    <option value="Education"> Education </option>
                  </Select>
                </InputField>
              </Stack>

              <br />
              <div style={{ ...center }}>
                <Button
                  style={{
                    width: '90%',
                    background: ContentName.length < 5 && 'transparent',
                    color: ContentName.length < 5 && '#0072ce'
                  }}
                  disabled={ContentName.length < 5}
                  onClick={e => {
                    e.preventDefault()

                    handleSubmit()
                  }}
                >
                  {isLoading ? 'Creating' : 'Create'} Content
                  {isLoading && (
                    <div style={{ paddingLeft: '.7rem' }}>
                      <Spinner size="sm" animation="border" role="status" />
                    </div>
                  )}
                </Button>
              </div>
            </form>
            <br />
          </InputsContainer>
        </div>
      </StyledBody>
    </div>
  )
}

export default observer(CreateContent)
