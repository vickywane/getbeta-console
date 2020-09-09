import React, { useState } from 'react'
import styled from 'styled-components'
import { Spinner } from 'react-bootstrap'
import { FiUploadCloud } from 'react-icons/fi'

import { Body, Text, Button, Hover, StyledHover } from '../../styles/style'
import Header from '../../components/headers/header'

const InputField = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 1rem;
  label {
    font-size: 1.2rem;
    font-weight: 600;
  }
  input {
    height: 50px;
    width: 50rem;
    border: 1px solid #c0c0c0;
    color: #000;
    padding: 0.5rem 1rem;
    outline: 0px;
  }
  textarea {
    height: 10vh;
    width: 50rem;
    border: 1px solid #c0c0c0;
    color: #000;
    padding: 0.5rem 1rem;
    outline: 0px;
  }
`

const Image = styled.img`
  object-fit: contain;
  width: 250px;
  height: 200px;
`

const center = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const CreateContent = props => {
  const [ContentName, setContentName] = useState('smashing magazine')
  const [ContentDescription, setContentDescription] = useState('smashing magazine for me')
  const [ContentPrice, setContentPrice] = useState('12')
  const [ContentType, setContentType] = useState('1 hour')

  const { createContent, isCreatingContent } = props.ContentStore

  const handleSubmit = () => {
    createContent(ContentName, ContentDescription, ContentPrice, ContentType)
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
              <Image src={require('../../assets/images/image-icon.png')} />

              <div style={{ ...center }}>
                <StyledHover style={{ display: 'flex' }}>
                  <Hover style={{ margin: '0 0.7rem', ...center }}>
                    <FiUploadCloud style={{ fontSize: '1.8rem' }} />
                  </Hover>

                  <div style={{ ...center }}>
                    <Text style={{ fontWeight: 600 }}> Upload Content Image </Text>
                  </div>
                </StyledHover>
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

              <Button onClick={() => handleSubmit()}> Submit Content </Button>
            </form>
          </div>
        )}
      </Body>
    </div>
  )
}

export default CreateContent
