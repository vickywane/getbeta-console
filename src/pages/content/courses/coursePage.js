import React from 'react'
import styled from 'styled-components'
import { FiCalendar } from 'react-icons/fi'

import Header from '../../../components/headers/header'
import CourseDetails from './course-details'
import { Body, Title, SmallUserImage, Hover, Text } from '../../../styles/style'

const StyledBody = styled(Body)`
    padding : 1rem 3rem
    background : #d6e2f0cf;
    display : flex;
    justify-content : center;
`

const CoursePage = props => {
  return (
    <div>
      <Header screen="Chemistry For WAEC Students" />

      <StyledBody style={{ height: window.innerHeight - 70, overflow: 'auto' }}>
        <div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              style={{ objectFit: 'contain', width: '80rem', height: '55vh' }}
              alt="Course"
              src={require('../../../assets/images/college-chemistry.jpg')}
            />
          </div>
          <br />

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex' }}>
              <SmallUserImage src={require('../../../assets/images/img.jpg')} />

              <div
                style={{
                  display: 'flex',
                  margin: '0 1rem',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Title> John Doe </Title>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                margin: '0 1rem',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <div style={{ display: 'flex' }}>
                <Hover style={{ margin: '0 0.7rem' }}>
                  <FiCalendar style={{ fontSize: '1.6rem' }} />
                </Hover>
                <Text> 12 12 12 </Text>
              </div>
            </div>
          </div>
          <br />
          <CourseDetails />
          <br />
          <br />
        </div>
      </StyledBody>
    </div>
  )
}

export default CoursePage
