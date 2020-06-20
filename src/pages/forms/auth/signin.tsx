import React, { useState } from "react"
import styled from "styled-components"
import { Card } from "react-bootstrap"
import Flex from "styled-flex-component"
import { useMutation, useQuery } from "@apollo/react-hooks"
import { Redirect } from "react-router-dom"
import { FiMail, FiLock } from "react-icons/fi"

import { AuthInput } from "../formsData"
import Fields from "../fields"
import { LOGIN_USER } from "../../../data/mutations"
import { Input, Button, Title, Text, Label } from "../../../styles/style"

const SignIn = (props): JSX.Element => {
  const { AuthUser, setAuthState }: any = props

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
        console.log(label)
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
    return <Redirect to="/console" message="Loggging in" />
  }

  if (loading) {
    return <h2> Logging in ... </h2>
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
          />
        )
      })}

      <Text
        small
        style={{
          color: "red",
          textAlign: "center",
        }}
      >
        {Error}
      </Text>
      <Text
        small
        style={{
          color: "blue",
          cursor: "pointer",
          textAlign: "right",
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
