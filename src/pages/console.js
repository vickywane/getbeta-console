import React from 'react'
import styled from 'styled-components'
import { Router } from '@reach/router'
import { inject, observer } from 'mobx-react'

import {
  Home,
  Contents,
  Bookings,
  Ticket,
  CreateVendor,
  AccountPlans,
  Settings,
  Sessions,
  Content,
  AllSessions,
  ContactUser,
  UpdateProfilePage,
  Analytics,
  CreateContent,
  Upgrade,
  ContentPlayer,
  Notification,
  UserSurvey,
  CreatorsHub,
  Integrations,
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

      <div style={{ width: '100%', height: '100%' }}>
        <Router>
          <ContentPlayer path="/player" UserStore={UserStore} />
          <Analytics path="/analytics" UserStore={UserStore} />
          <AccountPlans path="/subscriptions" UserStore={UserStore} />
          <Upgrade path="/upgrade" UserStore={UserStore} />
          <Content ContentStore={ContentStore} path="/content" />
          <ContactUser UserStore={UserStore} path="u/:username" />
          <Home UserStore={UserStore} default />
          <Bookings UserStore={UserStore} path="/booking" />
          <Settings path="/settings" />
          <Sessions path="/sessions" />
          <CreateVendor path="/upgrade" UserStore={UserStore} />
          <Ticket path="/ticket" />
          <AllSessions path="/all-sessions" />
          <CreatorsHub path="/creators" />
          <Integrations path="/integrations" />
          <CreateSession path="/create-session/" />
          <Contents ContentStore={ContentStore} path="/contents" />
          <CreateContent ContentStore={ContentStore} path="/create-content" />
          <UpdateProfilePage UserStore={UserStore} path="/update-profile" />
          <Notification UserStore={UserStore} path="/notifications" />
          <UserSurvey UserStore={UserStore} path="/user-survey" />
        </Router>
      </div>
    </Grid>
  )
}

export default inject('CourseStore', 'ContentStore', 'UserStore')(observer(Console))
