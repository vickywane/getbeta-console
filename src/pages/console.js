import React from 'react'
import styled from 'styled-components'
import { Router, Root } from '@reach/router'

import { Home, Bookings, Preferences, Sessions, Course, Courselist, CreateSession } from './'

import Sidebar from '../navigation/sidebar'

const Grid = styled.div`
  display: flex;
`

const Console = props => {
  return (
    <Grid>
      <Sidebar />

      <div style={{ width: '100%' }}>
        <Router>
          <Home default />
          <Bookings path="/booking" />
          <Preferences path="/preference" />
          <Sessions path="/sessions" />
          <Courselist path="/courses" />
          <Course path="/course" />
          <CreateSession path="/create-session/" />
        </Router>
      </div>
    </Grid>
  )
}

export default Console
