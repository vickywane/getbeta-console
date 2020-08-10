import React from 'react'
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
    border: 1px solid #000;
    border-radius: 1px;
    width: 27rem;
  }
`

const CreateAccount = props => {
  return (
    <Body style={{ height: window.innerHeight }}>
      <div style={{ background: '#0072CE' }} />

      <Contain>
        <div>
          <Title small center>
            Sign Up Form{' '}
          </Title>
          <hr />
          <InputBody>
            <label> Full name </label>
            <input type="text" placeholder="Your full name" />
          </InputBody>

          <InputBody>
            <label> Email Address </label>
            <input type="email" placeholder="Your email address" />
          </InputBody>

          <InputBody>
            <label> Password </label>
            <input type="password" placeholder="Your account password" />
          </InputBody>

          <InputBody>
            <label> Confirm Password </label>
            <input type="password" placeholder="Retype selected password" />
          </InputBody>
          <br />

          <div style={{ textAlign: 'center' }}>
            <Link to="/console">
              <Button>Create Account</Button>
            </Link>
          </div>
        </div>
      </Contain>
    </Body>
  )
}

export default CreateAccount
