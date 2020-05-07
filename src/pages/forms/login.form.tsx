import React, { useState } from "react"
import styled from "styled-components"
import { Card } from "react-bootstrap"
import Flex from "styled-flex-component"
import { inject, observer } from "mobx-react"
import { Link } from "react-router-dom"
import { useMutation } from "@apollo/react-hooks"
// import io from "socket.io-client"

import { CREATE_USER } from "../../data/mutations"
import { Input, Button, Title, Text, Label } from "../../styles/style"
import { LoginData, CreateAccountFields } from "./formsData"
import Forms from "./forms"

import OAuth from "../auth/login/OAuth"
const Body = styled.div`
  padding: 1em;
`
const API_URL: string = process.env.SOCKET_URL
// const socket: string = io(API_URL)

// TODO : I plan to use this as a single REGISTER / LOGIN component and map inputs using d login data

const Column = styled.div`
  display: flex;
  flex-direction: column;
`

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
  const [createUser, { data }] = useMutation(CREATE_USER)

  // trying to do something
  const [f, setF] = useState(
    LoginData.map(label => ({
      ...label,
      name: label,
      value: "",
    }))
  )

  const handleChange = e => {
    const name = e.target.getAttribute("name")

    const newF = f.map(f => {
      return f.name === name ? { ...f, value: e.target.value } : f
    })
    setF(newF)
  }

  console.log(f, "feild")

  const CreateUser = () => {
    if (Password != ConfirmPassword) {
      throw new Error("Passwords dont match")
    }

    createUser({
      variables: {
        name: Name,
        email: Email,
        password: Password,
      },
    }).then(() => {
      alert("created")
      alert(JSON.stringify(data))
    })
  }

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
                  {LoginData.map(({ id, label, type, placeholder }) => {
                    return (
                      <div>
                        <Column key={id}>
                          <Label small>{label}</Label>
                          <Input
                            onChange={handleChange}
                            value={Email}
                            type={type}
                            placeholder={placeholder}
                          />
                          <br />
                        </Column>
                      </div>
                    )
                  })}
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

                    <OAuth URL={API_URL} />
                  </div>{" "}
                </div>
              ) : (
                <div>
                  <hr />
                  {CreateAccountFields.map(
                    ({ id, label, type, placeholder }) => {
                      return (
                        <div>
                          <Column key={id}>
                            <Label small>{label}</Label>
                            <Input
                              onChange={event => {
                                setEmail(event.target.value)
                                event.preventDefault()
                              }}
                              value={Email}
                              type={type}
                              placeholder={placeholder}
                            />
                            <br />
                          </Column>
                        </div>
                      )
                    }
                  )}
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
