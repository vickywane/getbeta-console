import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { FiUploadCloud } from 'react-icons/fi'
import { useDropzone } from 'react-dropzone'
import { Spinner } from 'react-bootstrap'

import {
  Body,
  Text,
  Button,
  Title,
  center,
  Hover,
  StyledHover,
  CreateCourseInputField as InputField
} from '../../styles/style'
import Header from '../../components/headers/header'

const Image = styled.img`
  object-fit: contain;
  width: 250px;
  height: 200px;
`

const CreateCourse = props => {
  const { createCourse } = props.CourseStore

  const [courseName, setCourseName] = useState('Crazy men course')
  const [courseDescription, setCourseDescription] = useState('A course for crazy people here')
  const [coursePrice, setCoursePrice] = useState(159)
  const [courseDuration, setCourseDuration] = useState('2 hours')
  const [courseImage, setcourseImage] = useState('')

  const handleSubmit = () => {
    createCourse(courseName, courseDescription, coursePrice, courseDuration, courseImage)
  }

  const onDrop = useCallback(([file]) => {
    setcourseImage(file)
  }, [])

  const { getRootProps, isDragActive, isDragAccept, getInputProps, isDragReject } = useDropzone({
    onDrop,
    accept: 'image/jpeg , image/jpg, image/png'
  })

  return (
    <div>
      <Header goBack={true} screen="Create New Course " />

      <Body style={{ padding: '2rem 2rem' }}>
        <br />

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
            {!courseImage ? (
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
                    Upload Course Image{' '}
                  </Text>
                </div>
              </StyledHover>
            ) : (
              <Text> {courseImage.path} </Text>
            )}
          </div>
        </div>
        <hr />
        <form onSubmit={() => handleSubmit()}>
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
        </form>
        <br />
        <div style={{ paddingLeft: '2%' }}>
          <Button
            style={{
              background: courseName.length < 5 && 'transparent',
              color: courseName.length < 5 && '#0072ce'
            }}
            disabled={courseName.length < 5}
            onClick={() => handleSubmit()}
          >
            Submit Course{' '}
          </Button>
        </div>
      </Body>
    </div>
  )
}

export default CreateCourse
