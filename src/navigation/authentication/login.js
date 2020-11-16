import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from '@reach/router'
import { FiAlertTriangle } from 'react-icons/fi'
import { IoLogoFacebook } from 'react-icons/io'
import * as Yup from 'yup'

import { FcGoogle } from 'react-icons/fc'

import { observer } from 'mobx-react'
import {
  Text,
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
                  onBlur={e =>
                    Yup.object()
                      .shape({ email: Yup.string().email() })
                      .isValid({ email: e.target.value })
                      .then(e => setEmailValidity(e))
                  }
                  style={{ boxShadow: !emailIsValid && '0 0 1.5px 1.5px red' }}
                  placeholder="Your email address"
                />
                {!emailIsValid && (
                  <Text color="red" style={{ paddingTop: '5px' }} small>
                    Please use a valid email addresss{' '}
                  </Text>
                )}
              </AuthInputFields>
              <AuthInputFields>
                <label style={{ display: 'flex', justifyContent: 'space-between' }}>
                  Password
                  <div style={{ ...center }}>
                    <Link to="/reset-password" onClick={() => setPasswordReset(true)}>
                      <Text> Forgotten? </Text>
                    </Link>
                  </div>
                </label>
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

            <div
              style={{
                margin: '.5rem 0',
                display: 'flex',
                flexDirection: 'column'
                // justifyContent: 'space-between'
              }}
            >
              <Text align="center" style={{ opacity: '.8' }}>
                {' '}
                Or Login With:{' '}
              </Text>

              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                  style={{
                    width: '50%',
                    margin: '0 2rem',
                    background: '#0F9D58',
                    border: '1px solid #0F9D58'
                  }}
                  onClick={() => {
                    handleLogin()
                  }}
                >
                  <Hover style={{ margin: '0 .5rem' }}>
                    <FcGoogle />
                  </Hover>
                  Google
                </Button>

                <Button
                  style={{ width: '50%' }}
                  onClick={() => {
                    handleLogin()
                  }}
                >
                  <Hover style={{ margin: '0 .5rem' }}>
                    <IoLogoFacebook />
                  </Hover>
                  Facebook
                </Button>
              </div>
            </div>
          </section>
        </span>
      </AuthCards>
    </Body>
  )
}

export default observer(Login)
