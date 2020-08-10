import React from 'react'

import { Router } from '@reach/router'
import { Console } from '../pages'

import { CreateAccount, Login, ResetPassword } from './authentication'

const Index = () => {
  return (
    <Router>
      <Console path="console/*" />
      <CreateAccount path="create-account" />
      <Login path="/login" />
      <ResetPassword path="reset-password" />
    </Router>
  )
}

export default Index
