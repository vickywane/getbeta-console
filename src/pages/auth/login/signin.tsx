import React, { useState } from "react"
import styled from "styled-components"
import { Card } from "react-bootstrap"
import Flex from "styled-flex-component"
import { inject, observer } from "mobx-react"
import { useMutation, useQuery } from "@apollo/react-hooks"
import { Redirect } from "react-router-dom"

// import io from "socket.io-client"

import { CREATE_USER, LOGIN_USER } from "../../../data/mutations"
import { Input, Button, Title, Text, Label } from "../../../styles/style"

import OAuth from "./OAuth"

const Body = styled.div`
  font-family: Muli', sans-serif;
  padding: 1em;
`

const API_URL: string = process.env.SOCKET_URL
// const socket: string = io(API_URL)

//TODO : I WILL DELETE THIS FILE AND USE THE LOGIN.FORM FILE  LATER

const SignIn = (props): JSX.Element => {
  const { AuthUser }: any = props.AuthStore

  const [Create, setCreate] = useState(false)
  const [Forgot, setForgot] = useState(false)
  const [Mail, sendMail] = useState(false)

  // input states
  const [Name, setName] = useState("")
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [ConfirmPassword, setConfirmPassword] = useState("")

  const [Error, setError] = useState("")

  // const [createUser, { data }] = useMutation(CREATE_USER);
  const [loginUser, { data, loading }] = useMutation(LOGIN_USER, {
    ignoreResults: false,
    onCompleted: () => {},
  })

  const CreateUser = () => {
    // createUser({
    //   variables: {
    //     name: Name,
    //     email: Email,
    //     password: Password,
    //   },
    // }).then(() => {
    //   alert('created');
    //   alert(JSON.stringify(data));
    // });
  }

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
    <Body>
      <Flex justifyCenter>
        <Card
          style={{
            transition: "all 400ms",
            padding: "1em",
            marginTop: "5%",
            boxShadow: "0px 5px 5px grey",
          }}
        >
          <Title center small bold>
            Oasis Management Console{" "}
          </Title>
          {!Forgot ? (
            <Title center small>
              {!Create ? "Login" : "Create Account"}
            </Title>
          ) : (
            <Title center small>
              Reset Password
            </Title>
          )}
          <br />
          {!Forgot ? (
            <Button transparent center>
              {" "}
              Take A Tour - Guest Mode{" "}
            </Button>
          ) : null}
          {!Forgot ? (
            <div>
              {!Create ? (
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
                      setForgot(true)
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
                  <Flex justifyCenter>
                    <Flex>
                      <Text
                        center
                        small
                        style={{ padding: "0rem 1rem", color: "grey" }}
                      >
                        Don't have an account?
                      </Text>

                      <Text
                        center
                        small
                        style={{ color: "blue", cursor: "pointer" }}
                        onClick={() => {
                          setCreate(true)
                        }}
                      >
                        Create Account
                      </Text>
                    </Flex>
                  </Flex>
                  <div>
                    <hr />
                    <p style={{ textAlign: "center", fontSize: "1.2em" }}>
                      Login with{" "}
                    </p>

                    <OAuth URL={API_URL} />
                  </div>{" "}
                </div>
              ) : (
                <div>
                  <hr />
                  <Label small> Name </Label>
                  <div>
                    {" "}
                    <Input
                      type="email"
                      placeholder="Name"
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
                      onChange={e => {
                        setEmail(e.target.value)
                        e.preventDefault()
                      }}
                    />
                  </div>
                  <br />
                  <Label small>Password</Label>
                  <div>
                    <Input type="password" placeholder="Password" /> <br />
                  </div>{" "}
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
                  <br />
                  <Flex justifyCenter>
                    <Button
                      long
                      onClick={() => {
                        CreateUser()
                      }}
                    >
                      Create Account
                    </Button>{" "}
                  </Flex>
                  <br />
                  <Flex justifyCenter>
                    <Flex>
                      <Text
                        center
                        small
                        style={{ padding: "0rem 1rem", color: "grey" }}
                      >
                        Own an account?
                      </Text>

                      <Text
                        center
                        small
                        style={{ color: "blue", cursor: "pointer" }}
                        onClick={() => {
                          setForgot(false)
                        }}
                      >
                        Login Instead
                      </Text>
                    </Flex>
                  </Flex>
                  <div>
                    <hr />
                    <p style={{ textAlign: "center", fontSize: "1.2em" }}>
                      Create Account with{" "}
                    </p>

                    <OAuth URL={API_URL} />
                  </div>{" "}
                </div>
              )}
            </div>
          ) : (
            <div>
              <hr />
              <br />
              {!Mail ? (
                <div>
                  <Text
                    small
                    center
                    style={{
                      padding: "0rem 1rem",
                      width: "30rem",
                      justifyContent: "center",
                    }}
                  >
                    A <b> Tempoary 5 minute </b> valid reset link would be sent
                    to the inputed email address.
                  </Text>
                  <Label small> Email Address</Label>
                  <div>
                    <Input type="email" placeholder="Email Address" />
                  </div>
                  <br />

                  <Flex justifyCenter>
                    <Button long onClick={() => sendMail(true)}>
                      Reset Password{" "}
                    </Button>
                  </Flex>
                </div>
              ) : (
                <div>
                  <br />
                  <Text center small>
                    Email sent to xxx{" "}
                  </Text>
                  <br />
                </div>
              )}
              <br />
            </div>
          )}
        </Card>
      </Flex>
    </Body>
  )
}

export default inject("AuthStore")(observer(SignIn))
