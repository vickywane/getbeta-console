import React, { useState } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

import { Link } from '@reach/router'
import { Text, MdTitle, Button } from '../../styles/style'

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
    padding: 2rem 2rem;
    border-radius: 10px;
  }
`

const InputBody = styled.div`
  margin: 1.5rem 0.5rem;
  display: flex;
  flex-direction: column;
  label {
    font-weight: 600;
  }
  input {
    padding: 0.6rem 1rem;
    border: 1px solid #c0c0c0;
    border-radius: 1px;
    width: 27rem;
    height: 55px;
  }
`

const Illustration = styled.div`
  background: #0072ce;
  ${media.lessThan('large')`
      display : none;
    `}
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
    <Body style={{ height: window.innerHeight, background: '#fbfbfb' }}>
      <Illustration />

      <Contain>
        <span>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <MdTitle style={{ fontWeight: 600 }} small center>
              Create An Account
            </MdTitle>
          </div>
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

          <div style={{ display: 'flex', justifyContent: 'center' }}>
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

          <br />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Text style={{ margin: '0 1rem' }}> Own An Account </Text>

            <Link to="/login">
              <Text> Login </Text>
            </Link>
          </div>
        </span>
      </Contain>
    </Body>
  )
}

export default CreateAccount
