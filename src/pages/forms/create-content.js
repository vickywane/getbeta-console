import React, { useState } from 'react'
import styled from 'styled-components'
import { Spinner } from 'react-bootstrap'

import { Body, Text, Button, Title } from '../../styles/style'
import Header from '../../components/headers/header'

const InputField = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 1rem;
  label {
    font-size: 1.2rem;
  }
  input {
    height: 50px;
    width: 40rem;
    border: 1px solid #c0c0c0;
    color: #000;
    padding: 0.5rem 1rem;
    outline: 0px;
  }
  textarea {
    height: 10vh;
    width: 40rem;
    border: 1px solid #c0c0c0;
    color: #000;
    padding: 0.5rem 1rem;
    outline: 0px;
  }
`

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

      <Body style={{ padding: '2rem 2rem' }}>
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

            <InputField>
              <label> Content Type </label>
              <input
                onChange={e => setContentType(e.target.value)}
                value={ContentType}
                type="text"
                placeholder="Content Type"
              />
            </InputField>
          </form>
        )}

        <Button onClick={() => handleSubmit()}> Submit Content </Button>
      </Body>
    </div>
  )
}

export default CreateContent
