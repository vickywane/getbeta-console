import React from 'react'

import { Router } from '@reach/router'
import { Home } from '../pages/'

const Index = () => {
  return (
    <Router>
      <Home path="/" />
    </Router>
  )
}

export default Index
