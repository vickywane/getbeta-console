import React, { useState } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import * as Yup from 'yup'
import { FiAlertTriangle } from 'react-icons/fi'
import { Link } from '@reach/router'
import { Spinner } from 'react-bootstrap'
import { FcGoogle } from 'react-icons/fc'
import { IoLogoFacebook } from 'react-icons/io'

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
import { yupToFormErrors } from 'formik'

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
const mobileReg = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

const CreateAccount = props => {
  const { createAccount, isLoading } = props.UserStore

  const [FullName, setFullName] = useState('')
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [ConfirmPassword, setConfirmPassword] = useState('')
  const [detailsError, setDetailsError] = useState(false)
  const [mobileNumber, setMobileNumber] = useState(null)

  const [emailIsValid, setEmailValidity] = useState(true)

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
                <FiAlertTriangle style={{ fontSize: '1.6rem' }} />
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
                <label style={{ opacity: '.8' }}> Full name </label>
                <input
                  value={FullName}
                  onChange={e => {
                    setFullName(e.target.value)
                  }}
                  type="text"
                  placeholder="Your full name"
                />
              </AuthInputFields>

              <AuthInputFields>
                <label style={{ opacity: '.8' }}> Email Address </label>
                <input
                  value={Email}
                  onChange={e => setEmail(e.target.value)}
                  onBlur={e =>
                    Yup.object()
                      .shape({ email: Yup.string().email() })
                      .isValid({ email: e.target.value })
                      .then(e => setEmailValidity(e))
                  }
                  style={{ boxShadow: !emailIsValid && '0 0 1.5px 1.5px red' }}
                  type="email"
                  placeholder="Your email address"
                />
                {!emailIsValid && (
                  <Text color="red" style={{ paddingTop: '5px' }} small>
                    {' '}
                    Please use a valid email addresss{' '}
                  </Text>
                )}
              </AuthInputFields>

              <AuthInputFields>
                <label style={{ opacity: '.8' }}> Mobile Number </label>
                <input
                  value={mobileNumber}
                  onChange={e => setMobileNumber(e.target.value)}
                  type="number"
                  onBlur={({ target }) => {
                    Yup.object()
                      .shape({ cell_no: Yup.string().matches(mobileReg) })
                      .isValid({ cell_no: target.value })
                      .then(r => {})
                  }}
                  name="phone"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder="Your mobile number"
                />
              </AuthInputFields>

              <AuthInputFields>
                <label style={{ opacity: '.8' }}> Password </label>
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
                <label style={{ opacity: '.8' }}> Confirm Password </label>
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
                  width: '95%',
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
              <Text style={{ margin: '0 1rem' }}> Own An Account ? </Text>

              <Link to="/login">
                <Text> Login Instead </Text>
              </Link>
            </div>
            <hr />
            <div
              style={{
                margin: '.5rem 0',
                display: 'flex',
                flexDirection: 'column'
                // justifyContent: 'space-between'
              }}
            >
              <Text align="center" style={{ opacity: '.8' }}>
                {' '}
                Create Account Using:{' '}
              </Text>

              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                  style={{
                    width: '50%',
                    margin: '0 2rem',
                    background: '#0F9D58',
                    border: '1px solid #0F9D58'
                  }}
                  onClick={() => {}}
                >
                  <Hover style={{ margin: '0 .5rem' }}>
                    <FcGoogle />
                  </Hover>
                  Google
                </Button>

                <Button style={{ width: '50%' }} onClick={() => {}}>
                  <Hover style={{ margin: '0 .5rem' }}>
                    <IoLogoFacebook />
                  </Hover>
                  Facebook
                </Button>
              </div>
            </div>
          </section>
        </span>
      </AuthCards>
    </Body>
  )
}

export default observer(CreateAccount)
