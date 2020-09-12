import React from 'react'
import styled from 'styled-components'
import { Router, Root } from '@reach/router'
import { inject, observer } from 'mobx-react'

import {
  Home,
  Contents,
  Bookings,
  Ticket,
  CreateVendor,
  Preferences,
  Sessions,
  EditContent,
  EditCourse,
  CreateCourse,
  CreateContent,
  MyContent,
  MyCourses,
  Mybookings,
  CoursePage,
  Courselist,
  CreateSession
} from './'

import Sidebar from '../navigation/sidebar'

const Grid = styled.div`
  display: flex;
`

const Console = props => {
  const { VendorStore, ContentStore, CourseStore, UserStore } = props

  return (
    <Grid>
      <Sidebar UserStore={UserStore} />

      <div style={{ width: '100%' }}>
        <Router>
          <EditCourse CourseStore={CourseStore} path="/edit-course" />
          <EditContent ContentStore={ContentStore} path="/edit-content" />
          <Home UserStore={UserStore} default />
          <Bookings path="/booking" />
          <Preferences path="/preference" />
          <Sessions path="/sessions" />
          <CreateVendor path="/create-vendor" VendorStore={VendorStore} UserStore={UserStore} />
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

export default inject('VendorStore', 'CourseStore', 'ContentStore', 'UserStore')(observer(Console))
