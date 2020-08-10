import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { Router, Root } from '@reach/router'

import { Home, Bookings, Preferences, Sessions, Course, Courselist } from './'

import Sidebar from '../navigation/sidebar'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 20rem auto;
  ${media.lessThan('large')`
      grid-template-columns: 17rem auto;
  `};
  ${media.lessThan('medium')`
  grid-template-columns: 17rem auto;
`};
  ${media.lessThan('small')`
grid-template-columns: 20rem auto;
`};
`

const Console = props => {
  return (
    <div>
      <Grid>
        <div style={{ height: window.innerHeight, background: '#0072CE' }}>
          <Sidebar />
        </div>

        <Router>
          <Home default />
          <Bookings path="/booking" />
          <Preferences path="/preference" />
          <Sessions path="/sessions" />
          <Courselist path="/courses" />
          <Course path="/course" />
        </Router>
      </Grid>
    </div>
  )
}

export default Console
