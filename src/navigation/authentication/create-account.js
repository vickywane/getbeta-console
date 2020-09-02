import React, { useState } from 'react'
import styled from 'styled-components'
import { Text, Title, Button } from '../../styles/style'
import { Link } from '@reach/router'

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
    padding: 0.6rem 1rem;
    border: 1px solid #c0c0c0;
    border-radius: 1px;
    width: 27rem;
  }
`

const CreateAccount = props => {
  const { createAccount } = props.UserStore

  const [FullName, setFullName] = useState('')
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [ConfirmPassword, setConfirmPassword] = useState('')

  const handleRegistration = () => {
    createAccount(FullName, Email, Password, ConfirmPassword)
  }

  return (
    <Body style={{ height: window.innerHeight }}>
      <div style={{ background: '#0072CE' }} />

      <Contain>
        <div>
          <Title small center>
            Sign Up Form{' '}
          </Title>
          <hr />

          <form onSubmit={() => handleRegistration()}>
            <InputBody>
              <label> Full name </label>
              <input
                value={FullName}
                onChange={e => setFullName(e.target.value)}
                type="text"
                placeholder="Your full name"
              />
            </InputBody>

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
                onChange={e => {
                  setPassword(e.target.value)
                  e.preventDefault()
                }}
                type="password"
                placeholder="Your account password"
              />
            </InputBody>

            <InputBody>
              <label> Confirm Password </label>
              <input
                value={ConfirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                type="password"
                placeholder="Retype selected password"
              />
            </InputBody>
          </form>

          <br />

          <div style={{ textAlign: 'center' }}>
            <Button
              style={{
                background: Password !== ConfirmPassword && 'transparent',
                color: Password !== ConfirmPassword && '#0072ce'
              }}
              onClick={() => handleRegistration()}
              disabled={Password !== ConfirmPassword}
            >
              Create Account
            </Button>
          </div>
        </div>
      </Contain>
    </Body>
  )
}

export default CreateAccount
