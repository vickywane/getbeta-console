import React, { useState } from 'react'
import { Router } from '@reach/router'
import { inject, observer } from 'mobx-react'

import { Console } from '../pages'
import Protected from './protectedRoute'
import { CreateAccount, Login, ResetPassword } from './authentication'

const Index = props => {
  const { isAuthenticated } = props.UserStore
  const { UserStore } = props

  return (
    <Router>
      <Protected authenticated={isAuthenticated} Component={Console} default path="/*" />
      <CreateAccount UserStore={UserStore} path="create-account" />
      <Login UserStore={UserStore} path="/login" />
      <ResetPassword UserStore={UserStore} path="reset-password" />
    </Router>
  )
}

export default inject('UserStore')(observer(Index))
