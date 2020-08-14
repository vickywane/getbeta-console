import React, { useState } from 'react'
import { Router } from '@reach/router'
import { inject, observer } from 'mobx-react'

import { Console } from '../pages'
import Protected from './protectedRoute'
import { CreateAccount, Login, ResetPassword } from './authentication'

const Index = props => {
  const { isAuthenticated } = props.UserStore

  return (
    <Router>
      <Protected authenticated={isAuthenticated} Component={Console} default path="/*" />
      <CreateAccount path="create-account" />
      <Login path="/login" />
      <ResetPassword path="reset-password" />
    </Router>
  )
}

export default inject('UserStore')(observer(Index))
