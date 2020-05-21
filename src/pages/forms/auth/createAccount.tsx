import React, { useState } from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"
import { useMutation, useQuery } from "@apollo/react-hooks"
import { Redirect } from "react-router-dom"
import { CSSTransition } from "react-transition-group"

import { CREATE_USER } from "../../../data/mutations"
import { Input, Button, Title, Text, Label } from "../../../styles/style"

const Body = styled.div`
  font-family: Muli', sans-serif;
  padding: 1em;
`

const SignOut = (props): JSX.Element => {
  const { AuthUser, setAuthState }: any = props

  // input states
  const [Name, setName] = useState("")
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [ConfirmPassword, setConfirmPassword] = useState("")
  const [Error, setError] = useState("")

  const [CreationStage, setCreationStage] = useState("1")

  const [createUser, { data, loading, error }] = useMutation(CREATE_USER, {
    ignoreResults: false,
    onCompleted: () => {},
  })

  const CreateUser = () => {
    createUser({
      variables: {
        name: Name,
        email: Email,
        password: Password,
      },
    }).catch(e => alert(JSON.stringify(e)))
  }

  if (data) {
    const details = data.createUser.user
    AuthUser(details)
    return <Redirect to="/console" message="Loggging in" />
  }

  if (loading) {
    return <h2> Logging in ... </h2>
  }

  return (
    <Flex justifyCenter>
      <div>
        <br />
        <CSSTransition timeout={300} unmountOnExit in={CreationStage === "1"}>
          <div>
            <Label small> Name </Label>
            <div>
              {" "}
              <Input
                type="text"
                placeholder="Name"
                value={Name}
                onChange={e => {
                  setName(e.target.value)
                  e.preventDefault()
                }}
              />
            </div>{" "}
            <br />
            <Label small>Email Address</Label>
            <div>
              <Input
                type="email"
                placeholder="Email Address"
                value={Email}
                onChange={e => {
                  setEmail(e.target.value)
                  e.preventDefault()
                }}
              />
            </div>
            <br />
          </div>
        </CSSTransition>

        <CSSTransition timeout={300} unmountOnExit in={CreationStage === "2"}>
          <div>
            <Label small>Password</Label>
            <div>
              <Input
                onChange={e => {
                  e.preventDefault()
                  setPassword(e.target.value)
                }}
                value={Password}
                type="password"
                placeholder="Password"
              />{" "}
              <br />
            </div>
            <br />
            <Label small>Confirm Password</Label>
            <div>
              <Input
                onChange={event => {
                  setConfirmPassword(event.target.value)
                  event.preventDefault()
                }}
                type="password"
                value={ConfirmPassword}
                placeholder="Retype Password"
              />{" "}
              <br />
            </div>
          </div>
        </CSSTransition>
        <p style={{ color: "red" }}> {Error} </p>

        <div style={{ textAlign: "right" }}>
          <CSSTransition unmountOnExit timeout={200} in={CreationStage === "1"}>
            <Button
              long
              onClick={() => {
                setCreationStage("2")
              }}
            >
              Proceed
            </Button>
          </CSSTransition>
        </div>
        <br />
        <Flex justifyCenter>
          <CSSTransition unmountOnExit timeout={200} in={CreationStage === "2"}>
            <Button
              long
              onClick={() => {
                CreateUser()
              }}
            >
              Create Account
            </Button>
          </CSSTransition>
        </Flex>
        <br />
        <Flex justifyCenter>
          <Flex>
            <Text center small style={{ padding: "0rem 1rem", color: "grey" }}>
              Own an account?
            </Text>

            <Text
              center
              small
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => {
                setAuthState("Login")
              }}
            >
              Login Instead
            </Text>
          </Flex>
        </Flex>
      </div>
    </Flex>
  )
}

export default SignOut
