import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Spinner } from 'react-bootstrap'
import { FiUploadCloud } from 'react-icons/fi'
import { useDropzone } from 'react-dropzone'
import media from 'styled-media-query'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

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

const contentTags = [
  { value: 'Science', label: 'Science' },
  { value: 'Arts', label: 'Arts' },
  { value: 'Finance', label: 'Finance' },
  { value: 'Commerce', label: 'Commerce' },
  { value: 'Politics', label: 'Politics' },
  { value: 'Education', label: 'Education' }
]

const contentType = [
  { value: 'Article', label: 'Article' },
  { value: 'Music', label: 'Music' },
  { value: 'Image', label: 'Image' },
  { value: 'Video', label: 'Video' }
]

const animatedComponents = makeAnimated()

const CreateContent = props => {
  const { createContent, isCreatingContent } = props.ContentStore

  const [ContentName, setContentName] = useState('')
  const [ContentDescription, setContentDescription] = useState('')
  const [ContentPrice, setContentPrice] = useState(0)
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
                        <FiUploadCloud style={{ fontSize: '1.5rem' }} />
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
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  // defaultValue={[colourOptions[4], colourOptions[5]]}
                  isMulti
                  options={contentType}
                />
              </InputField>

              <InputField>
                <label> Content contentTags </label>
                <Select
                style={{fontSize : ".9rem"}}
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  // defaultValue={[colourOptions[4], colourOptions[5]]}
                  isMulti
                  options={contentTags}
                />
              </InputField>

              <br />
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
