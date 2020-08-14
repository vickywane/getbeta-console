import React from 'react'
import { Redirect } from '@reach/router'

// this omponent cause an  Error => [ object : Object] upon page reload
const ProtectedRoute = props => {
  const { Component, authenticated, path } = props
  console.log(typeof Component)
  switch (authenticated) {
    case true:
      return <Component path={path} />
    case false:
      return <Redirect to="/login" />
    default:
      // add a create-account route ... maybe
      break
  }
}

export default ProtectedRoute