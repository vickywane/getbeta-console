import React, { useState, useEffect } from 'react'
import { Redirect } from '@reach/router'
import localforage from 'localforage'

// this omponent cause an  Error => [ object : Object] upon page reload
const ProtectedRoute = props => {
  const [isAuthenticated, setAuthenticated] = useState(null)

  localforage.getItem('isAuthenticated').then(res => {
    setAuthenticated(res)
  })

  const { Component, path } = props

  if (isAuthenticated != null) {
    switch (isAuthenticated) {
      case true:
        return <Component path={path} />
      case false:
        return <Redirect noThrow to="/login" />

      default:
        break
    }
  } else if (isAuthenticated === undefined) {
    return <Redirect noThrow to="/login" />
  } else {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: window.innerHeight
        }}
      >
        <p> Loading ... </p>
      </div>
    )
  }
}

export default ProtectedRoute
