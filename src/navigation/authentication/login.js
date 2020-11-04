import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from '@reach/router'
import { FiCheck, FiAlertTriangle } from 'react-icons/fi'

import { observer } from 'mobx-react'
import {
  Text,
  Title,
  Button,
  MdTitle,
  Hover,
  AuthCards,
  ErrorAlert,
  AuthInputFields,
  center
} from '../../styles/style'

import { Spinner } from 'react-bootstrap'

const Body = styled.div`
  display: grid;
  grid-template-columns: 40% auto;
  ${media.lessThan('large')`
      display : flex;
      justify-content : center
      align-items : center;
  `};
`

const Illustration = styled.div`
  background: #0072ce;
  ${media.lessThan('large')`
      display : none;
    `}
`

//TODO: Split reset logic to seperate component

const Login = props => {
  const {
    authUser,
    sentResetLink,
    isSendingResetLink,
    isLoading,
    errorMessage,
    forgotPassword,
    hasLoginError,
    setLoginError
  } = props.UserStore

  const [resetPassword, setPasswordReset] = useState(false)
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')

  const handleLogin = () => {
    authUser(Email, Password)
  }

  if (hasLoginError)
    setTimeout(() => {
      setLoginError(!hasLoginError)
    }, 2500)

  const handlePasswordReset = () => {
    forgotPassword(Email)
  }

  useEffect(() => {
    if (sentResetLink) {
      setTimeout(() => {
        setPasswordReset(false)
      }, 4000)
    }
  }, [sentResetLink])

  return (
    <Body style={{ height: window.innerHeight, background: '#fbfbfb' }}>
      <Illustration />

      <AuthCards style={{ background: 'transparent' }}>
        <span>
          <ErrorAlert
            style={{ opacity: hasLoginError ? 1 : 0 }}
            display={hasLoginError ? 'flex' : 'none'}
          >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Hover style={{ margin: '0 0.3rem' }}>
                <FiAlertTriangle style={{ fontSize: '1.4rem' }} />
              </Hover>
              <Text style={{ paddingTop: '5px' }}> Email or Password Invalid ! </Text>
            </div>
          </ErrorAlert>

          {!resetPassword ? (
            <section>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <MdTitle small center>
                  Account Login
                </MdTitle>
              </div>
              <hr />
              <form onSubmit={() => handleLogin()}>
                <AuthInputFields>
                  <label> Email Address </label>
                  <input
                    value={Email}
                    onChange={e => setEmail(e.target.value)}
                    type="email"
                    placeholder="Your email address"
                  />
                </AuthInputFields>
                <AuthInputFields>
                  <label> Password </label>
                  <input
                    value={Password}
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                    placeholder="Your account password"
                  />
                </AuthInputFields>
              </form>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <Button
                  style={{
                    background: Password.length < 5 && !isLoading && 'transparent',
                    color: Password.length < 5 && '#0072ce',
                    width: '95%'
                  }}
                  disabled={Password.length < 5}
                  onClick={() => {
                    handleLogin()
                  }}
                >
                  {isLoading ? 'Logging In' : 'Login'}

                  {isLoading && (
                    <div style={{ paddingLeft: '.7rem' }}>
                      <Spinner size="sm" animation="border" role="status" />
                    </div>
                  )}
                </Button>
              </div>
              <br />
              <br />
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Text style={{ margin: '0 .7rem' }}>Don't Own An Account ? </Text>

                <Link to="/create-account">
                  <Text> Create An Account </Text>
                </Link>
              </div>

              <div style={{ ...center }}>
                <Link to="#" onClick={() => setPasswordReset(true)}>
                  <Text> Forgot Password ? </Text>
                </Link>
              </div>
            </section>
          ) : (
            <section>
              {sentResetLink && (
                <ErrorAlert
                  color="#155724"
                  background="#d4edda"
                  style={{ opacity: hasLoginError ? 1 : 0 }}
                  display={hasLoginError ? 'flex' : 'none'}
                >
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Hover style={{ margin: '0 0.3rem' }}>
                      <FiCheck style={{ fontSize: '1.4rem' }} />
                    </Hover>
                    <Text style={{ paddingTop: '5px' }}> Password reset link sent! </Text>
                  </div>
                </ErrorAlert>
              )}

              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <MdTitle small center>
                  Reset Account Password
                </MdTitle>
              </div>
              <hr />
              {!isSendingResetLink ? (
                <form onSubmit={() => handleLogin()}>
                  <AuthInputFields>
                    <label> Account Email Address </label>
                    <input
                      value={Password}
                      onChange={e => setPassword(e.target.value)}
                      type="email"
                      placeholder="Registered Email Address"
                    />
                  </AuthInputFields>
                </form>
              ) : (
                <div
                  style={{
                    height: '28.5vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <Spinner variant="primary" animation="grow" role="loading" />
                </div>
              )}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <Button
                  style={{
                    background: Password.length < 5 && !isLoading && 'transparent',
                    color: Password.length < 5 && '#0072ce',
                    width: '95%'
                  }}
                  disabled={Password.length < 5}
                  onClick={() => {
                    handlePasswordReset()
                  }}
                >
                  Send Reset Link
                </Button>
              </div>
              <br />
              <br />
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Text style={{ margin: '0 .7rem' }}>Login Instead ? </Text>

                <Link to="#" onClick={_ => setPasswordReset(false)}>
                  <Text> Login </Text>
                </Link>
              </div>
            </section>
          )}
        </span>
      </AuthCards>
    </Body>
  )
}

export default observer(Login)
