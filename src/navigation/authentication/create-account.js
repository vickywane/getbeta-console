import React, { useState } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import * as Yup from 'yup'
import { FiAlertTriangle } from 'react-icons/fi'
import { Link } from '@reach/router'

import { Text, MdTitle, Button, ErrorAlert, Hover, AuthCards } from '../../styles/style'

const Body = styled.div`
  display: grid;
  grid-template-columns: 40% auto;
  ${media.lessThan('large')`
      display : flex;
      justify-content : center
      align-items : center;
  `};
`
const InputBody = styled.div`
  margin: 2rem 0.5rem;
  display: flex;
  flex-direction: column;
  label {
    font-weight: 600;
  }
  input {
    background: #fbfbfb;
    padding: 0.6rem 1rem;
    border: 1px solid #c0c0c0;
    border-radius: 1px;
    width: 27rem;
    height: 55px;
    font-size: 1.1rem;
  }
`

const Illustration = styled.div`
  background: #0072ce;
  ${media.lessThan('large')`
      display : none;
    `}
`

const accountSchema = Yup.object().shape({
  name: Yup.string().required(),
  password: Yup.string()
    .min(5)
    .required(),
  email: Yup.string().email()
})

const CreateAccount = props => {
  const { createAccount } = props.UserStore

  const [FullName, setFullName] = useState('')
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [ConfirmPassword, setConfirmPassword] = useState('')
  const [detailsError, setDetailsError] = useState(false)

  const handleRegistration = () => {
    const isValid = accountSchema.isValid({
      name: FullName,
      password: Password,
      email: Email
    })

    isValid.then(res => {
      if (res) {
        createAccount(FullName, Email, Password, ConfirmPassword)
      } else {
        setDetailsError(true)
      }
    })
  }

  if (detailsError)
    setTimeout(() => {
      setDetailsError(!detailsError)
    }, 2500)

  return (
    <Body style={{ height: window.innerHeight, background: '#fbfbfb' }}>
      <Illustration />

      <AuthCards>
        <span>
          <ErrorAlert
            style={{ opacity: detailsError ? 1 : 0 }}
            display={detailsError ? 'flex' : 'none'}
          >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Hover style={{ margin: '0 0.5rem' }}>
                <FiAlertTriangle style={{ fontSize: '1.8rem' }} />
              </Hover>
              <Text style={{ fontWeight: 600 }}> Incorrect account credentials. Try Again </Text>
            </div>
          </ErrorAlert>

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
      </AuthCards>
    </Body>
  )
}

export default CreateAccount
