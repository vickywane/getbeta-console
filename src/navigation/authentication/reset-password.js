import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from '@reach/router'
import { FiCheck, FiAlertTriangle } from 'react-icons/fi'
import * as Yup from 'yup'

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
  const [emailIsValid, setEmailValidity] = useState(true)

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
                    style={{ boxShadow: !emailIsValid && '0 0 1.5px 1.5px red' }}
                    onBlur={e =>
                      Yup.object()
                        .shape({ email: Yup.string().email() })
                        .isValid({ email: e.target.value })
                        .then(e => setEmailValidity(e))
                    }
                    placeholder="Registered Email Address"
                  />
                  {!emailIsValid && (
                    <Text color="red" style={{ paddingTop: '5px' }} small>
                      {' '}
                      Please input a valid email address to recieve a reset link.{' '}
                    </Text>
                  )}
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
                  width: '15rem'
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
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Text style={{ margin: '0 .7rem' }}>Login Instead ? </Text>

              <Link to="/login" onClick={_ => setPasswordReset(false)}>
                <Text> Login </Text>
              </Link>
            </div>
          </section>
        </span>
      </AuthCards>
    </Body>
  )
}

export default observer(Login)
