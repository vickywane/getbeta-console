import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'
import { toJS } from 'mobx'
import { FiMoreVertical } from 'react-icons/fi'
import { Spinner } from 'react-bootstrap'

import { Body, Text, Title, Hover, center, MdTitle } from '../../../styles/style'
import Header from '../../../components/headers/header'

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  padding: 0 2rem;
`

const EditCourse = props => {
  const { getMyCourse, course } = props.CourseStore
  const { courseId } = props.location.state

  useEffect(() => {
    getMyCourse(courseId)
  }, [])

  const singleCourse = toJS(course)

  return (
    <div>
      <Header goBack={true} />

      <Body>
        <div>
          <Head>
            <div style={{ ...center }}>
              <MdTitle> {singleCourse.name} </MdTitle>
            </div>

            <div style={{ ...center }}>
              <Hover>
                <FiMoreVertical style={{ fontSize: '1.6rem' }} />
              </Hover>
            </div>
          </Head>
          <hr />
        </div>
      </Body>
    </div>
  )
}

export default observer(EditCourse)
