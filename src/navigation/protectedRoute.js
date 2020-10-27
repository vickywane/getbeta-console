import React, { useState, useEffect } from 'react'
import { Redirect } from '@reach/router'
import localforage from 'localforage'

// this omponent cause an  Error => [ object : Object] upon page reload
const ProtectedRoute = props => {
  const [isAuthenticated, setAuthenticated] = useState(null)

  /*
  NOTE: The application's authenticated state is being store in LocalForage 
        which takes few secs to be read, defaulting to a null value. To mitigate this, 
        the if !== null conditional is being used and also for new users the authenticated is null, 
        to mitigate this, we track for new users from the `App.js` state and check it here, then 
        redirect to login page
        
  TODO: Improve this logic later on!
  */

  localforage
    .getItem('isAuthenticated')
    .then(res => {
      if (res === null) {
        localforage.getItem('newUser').then(res => {
          if (res) {
            setAuthenticated(false)
          } else {
            setAuthenticated(res)
          }
        })
      } else {
        setAuthenticated(res)
      }
    })
    .catch(e => console.log('error', e))

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
