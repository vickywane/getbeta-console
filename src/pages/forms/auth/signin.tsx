import React, { useState } from "react"
import styled from "styled-components"
import { Card } from "react-bootstrap"
import Flex from "styled-flex-component"
import { useMutation, useQuery } from "@apollo/react-hooks"
import { Redirect, Link } from "react-router-dom"
import { FiMail, FiLock } from "react-icons/fi"

import { AuthInput } from "../formsData"
import Fields from "../fields"
import { LOGIN_USER } from "../../../data/mutations"
import { Input, Button, Title, Text, Label } from "../../../styles/style"
import { Spinner } from "react-bootstrap"

const SignIn = (props): JSX.Element => {
  const { AuthUser, setAuthState, authenticated }: any = props

  // input states
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [Error, setError] = useState("")

  const handleChange = (value, label) => {
    switch (label) {
      case "Email Address":
        setEmail(value)
        break
      case "Password":
        setPassword(value)
        break
      default:
        break
    }
  }

  const [loginUser, { data, loading }] = useMutation(LOGIN_USER, {
    ignoreResults: false,
    onCompleted: () => {},
  })

  const LoginUser = () => {
    loginUser({
      variables: {
        email: Email,
        password: Password,
      },
    }).catch(e => {
      setError(e.graphQLErrors[0].message)
    })
  }

  if (data) {
    const details = data.loginUser.user
    AuthUser(details)

    if (authenticated) {
      console.log(authenticated)
      return <Redirect to="/console" message="Loggging in now " />
    }
  }

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "22rem",
        }}
      >
        <Spinner variant="primary" animation="grow" role="loading" />
      </div>
    )
  }

  const { Login } = AuthInput
  return (
    <div>
      {Login.map(({ placeholder, label, id, type }) => {
        return (
          <Fields
            showIcon={true}
            placeholder={placeholder}
            type={type}
            Icon={
              label === "Email Address" ? (
                <FiMail style={{ fontSize: "1.7rem" }} />
              ) : (
                <FiLock style={{ fontSize: "1.7rem" }} />
              )
            }
            textarea={false}
            value={label === "Email Address" ? Email : Password}
            name={label}
            onChange={e => handleChange(e, label)}
            id={id}
            key={id}
          />
        )
      })}

      {Error && (
        <Text
          small
          style={{
            color: "red",
            textAlign: "center",
          }}
        >
          {Error}
        </Text>
      )}

      <Text
        small
        style={{
          color: "blue",
          cursor: "pointer",
          padding: "10px",
        }}
        onClick={() => {
          setAuthState("Forgot Password")
        }}
      >
        Forgot Password ?
      </Text>

      <Flex justifyCenter>
        <Button
          long
          transparent={
            Password.length < 5 || Email.length < 7 || !Email.includes("@")
          }
          disabled={
            Password.length < 5 || Email.length < 7 || !Email.includes("@")
          }
          onClick={() => {
            LoginUser()
          }}
        >
          Login
        </Button>{" "}
      </Flex>
      <br />
    </div>
  )
}

export default SignIn
