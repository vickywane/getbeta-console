import React, { useState } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from '@reach/router'
import { FiAlertTriangle } from 'react-icons/fi'

import { Text, Title, Button, MdTitle, Hover } from '../../styles/style'

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

const Contain = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fbfbfb;
  span {
    background: #fff;
    box-shadow: 0 2px 3px #c0c0c0;
    border-radius: 10px;
    section {
      padding: 2rem 2rem;
    }
  }
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
    font-size: 0.9rem;
    padding: 0.6rem 1rem;
    height: 55px;
    background: #fbfbfb;
    font-size: 1.1rem;
    border: 1px solid #c0c0c0;
    border-radius: 1px;
    width: 27rem;
  }
`

const LoginError = styled.div`
  height: 60px;
  display: ${props => props.display};
  transition: all 700ms;
  margin-bottom: 1rem;
  border-radius: 10px 10px 0px 0;
  background: red;
  justify-content: center;
  align-items: center;
  color: #fff;
`

const Login = props => {
  const { authUser, isLoading, errorMessage, hasLoginError } = props.UserStore

  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [ErrorMessage, setErrorMessae] = useState(errorMessage)
  const [showLoginError, setLoginError] = useState(hasLoginError)

  console.log(hasLoginError, 'login err')

  const handleLogin = () => {
    authUser(Email, Password)
  }

  if (showLoginError)
    setTimeout(() => {
      setLoginError(!LoginError)
    }, 2500)

  return (
    <Body style={{ height: window.innerHeight, background: '#fbfbfb' }}>
      <Illustration />

      <Contain style={{ background: 'transparent' }}>
        <span>
          <LoginError
            style={{ opacity: showLoginError ? 1 : 0 }}
            display={showLoginError ? 'flex' : 'none'}
          >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Hover style={{ margin: '0 1rem' }}>
                <FiAlertTriangle style={{ fontSize: '1.8rem' }} />
              </Hover>
              <Text style={{ fontWeight: 600 }}> Username or Password Invalid </Text>
            </div>
          </LoginError>

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
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
      </Contain>
    </Body>
  )
}

export default Login
