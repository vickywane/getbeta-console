import React, { useState } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from '@reach/router'
import { FiAlertTriangle } from 'react-icons/fi'

import { observer } from 'mobx-react'
import { Text, Title, Button, MdTitle, Hover, AuthCards, ErrorAlert } from '../../styles/style'

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

const InputBody = styled.div`
  margin: 2rem 0.5rem;
  display: flex;
  flex-direction: column;
  label {
    font-size: 1.05em;
    font-weight: 600;
  }
  input {
    padding: 0.6rem 1rem;
    height: 55px;
    background: #fbfbfb;
    font-size: 1.1rem;
    border: 1px solid #c0c0c0;
    border-radius: 1px;
    width: 27rem;
  }
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
              <Hover style={{ margin: '0 0.5rem' }}>
                <FiAlertTriangle style={{ fontSize: '1.8rem' }} />
              </Hover>
              <Text style={{ fontWeight: 600 }}> Email or Password Invalid ! </Text>
            </div>
          </ErrorAlert>

          <section>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <MdTitle small style={{ fontWeight: 'bold' }} center>
                Account Login
              </MdTitle>
            </div>
            <hr />
            {!isLoading ? (
              <form onSubmit={() => handleLogin()}>
                <InputBody>
                  <label> Email Address </label>
                  <input
                    value={Email}
                    onChange={e => setEmail(e.target.value)}
                    type="email"
                    placeholder="Your email address"
                  />
                </InputBody>
                <InputBody>
                  <label> Password </label>
                  <input
                    value={Password}
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                    placeholder="Your account password"
                  />
                </InputBody>
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
                onClick={() => handleLogin()}
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
