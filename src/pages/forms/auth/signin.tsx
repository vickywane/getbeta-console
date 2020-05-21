import React, { useState } from "react"
import styled from "styled-components"
import { Card } from "react-bootstrap"
import Flex from "styled-flex-component"
import { useMutation, useQuery } from "@apollo/react-hooks"
import { Redirect } from "react-router-dom"

import { LOGIN_USER } from "../../../data/mutations"
import { Input, Button, Title, Text, Label } from "../../../styles/style"

const Body = styled.div`
  font-family: Muli', sans-serif;
  padding: 1em;
`

const API_URL: string = process.env.SOCKET_URL
// const socket: string = io(API_URL)

const SignIn = (props): JSX.Element => {
  const { AuthUser, setAuthState }: any = props

  // input states
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [Error, setError] = useState("")

  // const [createUser, { data }] = useMutation(CREATE_USER);
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

  return (
    <Flex justifyCenter>
      <div>
        <hr />
        <Label small>Email Address</Label>
        <div>
          <Input
            onChange={event => {
              setEmail(event.target.value)
              event.preventDefault()
            }}
            value={Email}
            type="email"
            placeholder="Email Address"
          />
        </div>{" "}
        <br />
        <Label small>Password</Label>
        <div>
          <Input
            value={Password}
            onChange={event => {
              setPassword(event.target.value)
              event.preventDefault()
            }}
            type="password"
            placeholder="Password"
          />
          <br />
        </div>
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
            onClick={() => {
              LoginUser()
            }}
          >
            Login
          </Button>{" "}
        </Flex>
        <br />
      </div>
    </Flex>
  )
}

export default SignIn
