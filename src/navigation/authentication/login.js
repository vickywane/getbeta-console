import React, { useState } from 'react'
import styled from 'styled-components'
import { Text, Title, Button } from '../../styles/style'
import { Link } from '@reach/router'
import { inject, observer } from 'mobx-react'

const Body = styled.div`
  display: grid;
  grid-template-columns: 40% auto;
`

const Contain = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const InputBody = styled.div`
  margin: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  label {
  }
  input {
    font-size: 0.9rem;
    padding: 0.6rem 1rem;
    border: 1px solid #000;
    border-radius: 1px;
    width: 27rem;
  }
`

const Login = props => {
  const { authUser } = props.UserStore
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')

  const handleLogin = () => {
    authUser(Email, Password)
  }

  return (
    <Body style={{ height: window.innerHeight }}>
      <div style={{ background: '#0072CE' }} />

      <Contain>
        <div>
          <Title small center>
            Account Login
          </Title>
          <hr />

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

          <div
            style={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Button
              style={{
                background: Password.length < 5 && 'transparent',
                color: Password.length < 5 && '#0072ce',
                width: '100%'
              }}
              disabled={Password.length < 5}
              onClick={() => handleLogin()}
            >
              Login{' '}
            </Button>
          </div>
        </div>
      </Contain>
    </Body>
  )
}

export default Login
