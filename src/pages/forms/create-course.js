import React, { useState } from 'react'
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

const CreateCourse = () => {
  const [courseName, setCourseName] = useState('')
  const [courseDescription, setCourseDescription] = useState('')
  const [coursePrice, setCoursePrice] = useState('')
  const [courseDuration, setCourseDuration] = useState('')

  return (
    <div>
      <Header goBack={true} screen="Create New Course " />

      <Body style={{ padding: '2rem 2rem' }}>
        <br />

        <InputField>
          <label> Course Name </label>
          <input
            onChange={e => setCourseName(e.target.value)}
            value={courseName}
            type="text"
            placeholder="Course Name"
          />
        </InputField>

        <InputField>
          <label> Course Description </label>
          <textarea
            onChange={e => setCourseDescription(e.target.value)}
            value={courseDescription}
            type="text"
            placeholder="A description of your new course"
          />
        </InputField>

        <InputField>
          <label> Course Price </label>
          <input
            onChange={e => setCoursePrice(e.target.value)}
            value={coursePrice}
            type="text"
            placeholder="Course Price"
          />
        </InputField>

        <InputField>
          <label> Course Duration </label>
          <input
            onChange={e => setCourseDuration(e.target.value)}
            value={courseDuration}
            type="text"
            placeholder="Course Duration"
          />
        </InputField>

        <Button> Submit Course </Button>
      </Body>
    </div>
  )
}

export default CreateCourse
