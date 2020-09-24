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
  AccountPlans,
  Preferences,
  Sessions,
  EditContent,
  AllSessions,
  EditCourse,
  UpdateProfilePage,
  CreateCourse,
  Analytics,
  CreateContent,
  Upgrade,
  CoursePage,
  Notification,
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
      <Sidebar UserStore={UserStore} />

      <div style={{ width: '100%' }}>
        <Router>
          <Analytics path="/analytics" UserStore={UserStore} />
          <AccountPlans path="/subscriptions" UserStore={UserStore} />
          <Upgrade path="/upgrade" UserStore={UserStore} />
          <EditCourse CourseStore={CourseStore} path="/edit-course" />
          <EditContent ContentStore={ContentStore} path="/edit-content" />
          <Home UserStore={UserStore} default />
          <Bookings UserStore={UserStore} path="/booking" />
          <Preferences path="/preference" />
          <Sessions path="/sessions" />
          <CreateVendor path="/upgrade" UserStore={UserStore} />
          <Courselist CourseStore={CourseStore} path="/courses" />
          <CoursePage CourseStore={CourseStore} path="/course" />
          <Ticket path="/ticket" />
          <AllSessions path="/all-sessions" />
          <CreateSession path="/create-session/" />
          <Contents ContentStore={ContentStore} path="/contents" />
          <CreateContent ContentStore={ContentStore} path="/create-content" />
          <CreateCourse CourseStore={CourseStore} path="/create-course" />
          <UpdateProfilePage UserStore={UserStore} path="/update-profile" />
          <Notification UserStore={UserStore} path="/notifications" />
        </Router>
      </div>
    </Grid>
  )
}

export default inject('VendorStore', 'CourseStore', 'ContentStore', 'UserStore')(observer(Console))
