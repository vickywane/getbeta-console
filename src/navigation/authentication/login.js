import React, { useState } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from '@reach/router'
import { FiAlertTriangle } from 'react-icons/fi'

import { observer } from 'mobx-react'
import {
  Text,
  Title,
  Button,
  MdTitle,
  Hover,
  AuthCards,
  ErrorAlert,
  AuthInputFields
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

const Login = props => {
  const { authUser, isLoading, errorMessage, hasLoginError, setLoginError } = props.UserStore

  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')

  const handleLogin = () => {
    authUser(Email, Password)
  }

  if (hasLoginError)
    setTimeout(() => {
      setLoginError(!hasLoginError)
    }, 2500)

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
              <Text> Email or Password Invalid ! </Text>
            </div>
          </ErrorAlert>

          <section>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <MdTitle small center>
                Account Login
              </MdTitle>
            </div>
            <hr />
            {!isLoading ? (
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
                <br />
              </form>
            ) : (
              <div
                style={{
                  height: '27vh',
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
                  width: '100%'
                }}
                disabled={Password.length < 5}
                onClick={() => {
                  handleLogin()
                }}
              >
                Login
              </Button>
            </div>
            <br />
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Text style={{ margin: '0 1rem' }}>Don't Own An Account ? </Text>

              <Link to="/create-account">
                <Text> Create An Account </Text>
              </Link>
            </div>
          </section>
        </span>
      </AuthCards>
    </Body>
  )
}

export default observer(Login)
