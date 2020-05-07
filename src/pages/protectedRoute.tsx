import React from "react"
import { Route, Redirect } from "react-router-dom"

interface CustomProps {
  component: any
  path: String
  authenticated: Boolean
}

const ProtectedRoute = ({
  component: Component,
  authenticated,
  path,
  ...rest
}: CustomProps): JSX.Element => {
  return (
    <Route
      render={props =>
        authenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" message="Please Signin to continue " />
        )
      }
      {...rest}
    />
  )
}

export default ProtectedRoute
