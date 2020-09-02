import React from 'react'
import styled from 'styled-components'
import { Router, Root } from '@reach/router'
import { inject, observer } from 'mobx-react'

import {
  Home,
  Contents,
  Bookings,
  Ticket,
  Preferences,
  Sessions,
  CreateCourse,
  CreateContent,
  CoursePage,
  Courselist,
  CreateSession
} from './'

import Sidebar from '../navigation/sidebar'

const Grid = styled.div`
  display: flex;
`

const Console = props => {
  const { ContentStore, CourseStore, UserStore } = props

  return (
    <Grid>
      <Sidebar />

      <div style={{ width: '100%' }}>
        <Router>
          <Home UserStore={UserStore} default />
          <Bookings path="/booking" />
          <Preferences path="/preference" />
          <Sessions path="/sessions" />
          <Courselist CourseStore={CourseStore} path="/courses" />
          <CoursePage CourseStore={CourseStore} path="/courses/course/:id" />
          <Ticket path="/ticket" />
          <CreateSession path="/create-session/" />
          <Contents ContentStore={ContentStore} path="/contents" />
          <CreateContent ContentStore={ContentStore} path="/create-content" />
          <CreateCourse CourseStore={CourseStore} path="/create-course" />
        </Router>
      </div>
    </Grid>
  )
}

export default inject('CourseStore', 'ContentStore', 'UserStore')(observer(Console))
