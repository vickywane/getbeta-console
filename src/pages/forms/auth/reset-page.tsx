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
import { AuthInput } from "../formsData"

import OAuth from "./OAuth"
const StyledCard = styled.div`
  transition: all 400ms;
  padding: 1rem 1rem;
  margin-top: 5%;
  width: 32rem;
  box-shadow: 0px 4px 7px grey;
`

const API_URL: string = process.env.SOCKET_URL
// const socket: string = io(API_URL)

const Authentication = (props): JSX.Element => {
  const { AuthUser, Login, authState, setAuthState }: any = props.AuthStore

  // input states
  const [Password, setPassword] = useState("")
  const [ConfirmPassord, setConfirmPassword] = useState("")
  const [Error, setError] = useState("")

  const onChange = (value, label) => {
    switch (label) {
      case "Account Password":
        setPassword(value)

        break
      case "Confirm  Password":
        setConfirmPassword(value)

        break
      default:
        break
    }
  }

  const { ChangePassword } = AuthInput

  return (
    <Flex justifyCenter>
      <StyledCard>
        <Title style={{ margin: "0.8rem 0rem" }} center small bold>
          Oasis Management Console
        </Title>

        <Flex justifyCenter>
          <Button long transparent center>
            Take A Tour - Guest Mode{" "}
          </Button>
        </Flex>
        <hr />

        <div>
          <br />

          {ChangePassword.map(({ id, type, label, textarea, placeholder }) => {
            return (
              <Fields
                textarea={textarea}
                id={id}
                name={label}
                type={type}
                placeholder={placeholder}
                value={label === "Account Password" ? Password : ConfirmPassord}
                onChange={e => onChange(e, label)}
              />
            )
          })}

          <br />

          <Flex justifyCenter>
            <Button
              long
              disabled={Password !== ConfirmPassord}
              transparent={Password !== ConfirmPassord}
              onClick={() => {
                console.log("ss")
              }}
            >
              Change Account Passord
            </Button>
          </Flex>
        </div>

        <br />
      </StyledCard>
    </Flex>
  )
}

export default inject("AuthStore")(observer(Authentication))
