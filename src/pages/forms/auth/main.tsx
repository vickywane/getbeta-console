import React, { useState } from "react"
import styled from "styled-components"
import { Card } from "react-bootstrap"
import Flex from "styled-flex-component"
import { inject, observer } from "mobx-react"
import { useMutation, useQuery } from "@apollo/react-hooks"
import { Redirect } from "react-router-dom"
import { CSSTransition } from "react-transition-group"

// import io from "socket.io-client"
import { CREATE_USER, LOGIN_USER } from "../../../data/mutations"
import { Input, Button, Title, Text, Label } from "../../../styles/style"
import Fields from "../fields"
import SignIn from "./signin"
import CreateAccount from "./createAccount"

import OAuth from "./OAuth"
const StyledCard = styled.div`
  transition: all 400ms;
  padding: 1rem 1rem;
  margin-top: 3%;
  width: 32rem;
  box-shadow: 0px 4px 7px grey;
`

const API_URL: string = process.env.SOCKET_URL
// const socket: string = io(API_URL)

const Authentication = (props): JSX.Element => {
  const {
    AuthUser,
    Login,
    authState,
    setAuthState,
    authenticated,
  }: any = props.AuthStore

  // input states
  const [ResetEmail, setEmail] = useState("")
  const [Error, setError] = useState("")

  const onChange = (value, label) => {
    setEmail(value)
  }

  return (
    <Flex justifyCenter>
      <StyledCard>
        <Title center small bold>
          Oasis Management Console <br /> Beta Test
        </Title>
        <br />
        <Flex justifyCenter>
          <Button long transparent center>
            Take A Tour - Guest Mode{" "}
          </Button>
        </Flex>
        <hr />

        <div>
          <CSSTransition timeout={300} unmountOnExit in={authState === "Login"}>
            <SignIn
              authenticated={authenticated}
              setAuthState={setAuthState}
              AuthUser={AuthUser}
            />
          </CSSTransition>
          <CSSTransition
            timeout={300}
            unmountOnExit
            in={authState === "CreateAccount"}
          >
            <CreateAccount setAuthState={setAuthState} AuthUser={AuthUser} />
          </CSSTransition>
          <CSSTransition
            timeout={300}
            unmountOnExit
            in={authState === "Forgot Password"}
          >
            <div>
              <br />
              <Text
                small
                center
                style={{
                  padding: "0rem 1rem",
                  width: "30rem",
                  justifyContent: "center",
                }}
              >
                A <b> Tempoary 12 minute </b> reset link would be sent to your
                email address used in creating your Oasis Account.
              </Text>

              <Fields
                textarea={false}
                id={1}
                name="Reset Email Address "
                type="email"
                placeholder="Account Email Address"
                value={ResetEmail}
                onChange={e => onChange(e, "Reset Email Address")}
              />
              <br />

              <Flex justifyCenter>
                <Button
                  long
                  onClick={() => {
                    console.log("ss")
                  }}
                >
                  Reset Password{" "}
                </Button>
              </Flex>
            </div>
          </CSSTransition>
          <CSSTransition
            timeout={300}
            unmountOnExit
            in={authState === "SentEmail"}
          >
            <div>
              <br />
              <Text center small>
                Email sent to xxx{" "}
              </Text>
              <br />
            </div>
          </CSSTransition>
          <br />
          <CSSTransition timeout={300} unmountOnExit in={authState === "Login"}>
            <Flex justifyCenter>
              <Flex>
                <Text
                  center
                  small
                  style={{ padding: "0rem 1rem", color: "grey" }}
                >
                  Dont have an account?
                </Text>

                <Text
                  center
                  small
                  style={{ color: "blue", cursor: "pointer" }}
                  onClick={() => {
                    setAuthState("CreateAccount")
                  }}
                >
                  Create Account
                </Text>
              </Flex>
            </Flex>
          </CSSTransition>
          <div>
            <hr />
            <OAuth authState={authState} URL={API_URL} />
          </div>
        </div>
      </StyledCard>
    </Flex>
  )
}

export default inject("AuthStore")(observer(Authentication))
