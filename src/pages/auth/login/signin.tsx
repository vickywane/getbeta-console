import React, { useState } from "react"
import styled from "styled-components"
import { Card } from "react-bootstrap"
import Flex from "styled-flex-component"
import { inject, observer } from "mobx-react"
import { Link } from "react-router-dom"
import io from "socket.io-client"

import { Input, Button, Title, Text, Label } from "../../../styles/style"

import OAuth from "./OAuth"

const Body = styled.div`
  padding: 1em;
`

const API_URL: string = process.env.SOCKET_URL
const socket: string = io(API_URL)

// TODO : Make Forms here more reusable
// TODO : Reduce State her

const SignIn = (props): JSX.Element => {
  const { AuthUser }: any = props.AuthStore

  const [Create, setCreate] = useState<boolean>(false)
  const [Forgot, setForgot] = useState<boolean>(false)
  const [Mail, sendMail] = useState<boolean>(false)

  // input states
  const [Email, setEmail] = useState<string>("")
  const [Password, setPassword] = useState<string>("")
  const [ConfirmPassword, setConfirmPassword] = useState<string>("")

  return (
    <Body>
      <Flex justifyCenter>
        <Card
          style={{
            padding: "1em",
            marginTop: "8%",
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
                    />{" "}
                    <br />
                  </div>
                  <Text
                    small
                    style={{
                      color: "red",
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
                    <Link to="/console">
                      <Button
                        long
                        onClick={() => {
                          AuthUser()
                        }}
                      >
                        Login
                      </Button>{" "}
                    </Link>
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

                    <OAuth socket={socket} URL={API_URL} />
                  </div>{" "}
                </div>
              ) : (
                <div>
                  <hr />
                  <Label small>Email Address</Label>
                  <div>
                    {" "}
                    <Input type="email" placeholder="Email Address" />
                  </div>{" "}
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
                    <Link to="/console">
                      <Button
                        long
                        onClick={() => {
                          AuthUser()
                        }}
                      >
                        Create Account
                      </Button>{" "}
                    </Link>
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
                          setCreate(true)
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

                    <OAuth socket={socket} URL={API_URL} />
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
