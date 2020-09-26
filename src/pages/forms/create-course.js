import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { FiUploadCloud } from 'react-icons/fi'
import { useDropzone } from 'react-dropzone'
import media from 'styled-media-query'

import {
  Body,
  Text,
  Button,
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

const CreateCourse = props => {
  const { createCourse } = props.CourseStore

  const [courseName, setCourseName] = useState('')
  const [courseDescription, setCourseDescription] = useState('')
  const [coursePrice, setCoursePrice] = useState(0)
  const [courseDuration, setCourseDuration] = useState('')
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

      <StyledBody>
        <br />

        <Grid>
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
                style={{ display: 'flex', padding: '7px' }}
              >
                <input {...getInputProps()} />
                <Hover style={{ margin: '0 0.6em', ...center }}>
                  <FiUploadCloud style={{ fontSize: '1.5rem' }} />
                </Hover>

                <Text style={{ padding: 0, margin: 0 }} small>
                  Upload Course Image{' '}
                </Text>
              </StyledHover>
            ) : (
              <Text> {courseImage.path} </Text>
            )}
          </div>
        </Grid>
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
        <br />
      </StyledBody>
    </div>
  )
}

export default CreateCourse
