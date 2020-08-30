import React from 'react'
import styled from 'styled-components'

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

function Create() {
  return (
    <div>
      <Header screen="Create New Course " />

      <Body style={{ padding: '2rem 2rem' }}>
        {/* <Title> Create New Course </Title> */}

        <br />

        <InputField>
          <label> Course Name </label>
          <input placeholder="Course Name" />
        </InputField>

        <InputField>
          <label> Course Description </label>
          <textarea placeholder="A description of your new course" />
        </InputField>

        <InputField>
          <label> Course Tags </label>
          <input placeholder="Course Tags" />
        </InputField>

        <Button> Submit Course </Button>
      </Body>
    </div>
  )
}

export default Create
