import React from 'react'
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
  const { isAuthenticated, authUser } = props.UserStore

  console.log(isAuthenticated)
  return (
    <Body style={{ height: window.innerHeight }}>
      <div style={{ background: '#0072CE' }} />

      <Contain>
        <div>
          <Title small center>
            Account Login
          </Title>
          <hr />

          <InputBody>
            <label> Email Address </label>
            <input type="email" placeholder="Your email address" />
          </InputBody>

          <InputBody>
            <label> Password </label>
            <input type="password" placeholder="Your account password" />
          </InputBody>
          <br />

          <div style={{ textAlign: 'center' }}>
            <Button onClick={() => authUser(true)}> Login </Button>
          </div>
        </div>
      </Contain>
    </Body>
  )
}

export default inject('UserStore')(observer(Login))
