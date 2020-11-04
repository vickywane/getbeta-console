import React, { useState } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import * as Yup from 'yup'
import { FiAlertTriangle } from 'react-icons/fi'
import { Link } from '@reach/router'
import { Spinner } from 'react-bootstrap'

import { observer } from 'mobx-react'

import {
  Text,
  MdTitle,
  Button,
  ErrorAlert,
  Hover,
  AuthCards,
  AuthInputFields
} from '../../styles/style'

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

const accountSchema = Yup.object().shape({
  name: Yup.string().required(),
  password: Yup.string()
    .min(5)
    .required(),
  email: Yup.string().email()
})

const CreateAccount = props => {
  const { createAccount, isLoading } = props.UserStore

  const [FullName, setFullName] = useState('')
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [ConfirmPassword, setConfirmPassword] = useState('')
  const [detailsError, setDetailsError] = useState(false)
  const [mobileNumber, setMobileNumber] = useState('')

  const handleRegistration = () => {
    const isValid = accountSchema.isValid({
      name: FullName,
      password: Password,
      email: Email
    })

    isValid.then(res => {
      if (res) {
        createAccount(FullName, Email, Password, ConfirmPassword, mobileNumber)
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
              <Text> Incorrect account credentials. Try Again </Text>
            </div>
          </ErrorAlert>

          <section>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <MdTitle small center>
                Create An Account
              </MdTitle>
            </div>
            <hr />

            <form onSubmit={() => handleRegistration()}>
              <AuthInputFields>
                <label> Full name </label>
                <input
                  value={FullName}
                  onChange={e => setFullName(e.target.value)}
                  type="text"
                  placeholder="Your full name"
                />
              </AuthInputFields>

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
                <label> Mobile Number </label>
                <input
                  value={mobileNumber}
                  onChange={e => setMobileNumber(e.target.value)}
                  type="tel"
                  name="phone"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder="Your mobile number"
                />
              </AuthInputFields>

              <AuthInputFields>
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
              </AuthInputFields>

              <AuthInputFields>
                <label> Confirm Password </label>
                <input
                  value={ConfirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  type="password"
                  placeholder="Retype selected password"
                />
              </AuthInputFields>
            </form>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                style={{
                  background: Password !== ConfirmPassword && 'transparent',
                  color: Password !== ConfirmPassword && '#0072ce'
                }}
                onClick={() => handleRegistration()}
                disabled={Password !== ConfirmPassword}
              >
                {isLoading ? 'Creating Account' : 'Create Account'}

                {isLoading && (
                  <div style={{ paddingLeft: '.7rem' }}>
                    <Spinner size="sm" animation="border" role="status" />
                  </div>
                )}
              </Button>
            </div>

            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Text style={{ margin: '0 1rem' }}> Own An Account </Text>

              <Link to="/login">
                <Text> Login </Text>
              </Link>
            </div>
          </section>
        </span>
      </AuthCards>
    </Body>
  )
}

export default observer(CreateAccount)
