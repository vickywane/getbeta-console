import React from "react"
import styled from "styled-components"
import { Card } from "react-bootstrap"
import Flex from "styled-flex-component"
import { inject, observer } from "mobx-react"
import { Link } from "react-router-dom"
import io from "socket.io-client"

import { Input, Button, Title } from "../../../styles/style"

import OAuth from "./OAuth"

const Body = styled.div`
  padding: 1em;
`

const API_URL = process.env.SOCKET_URL
const socket = io(API_URL)

const Signin = (props): JSX.Element => {
  const { AuthUser, authenticated } = props.AuthStore
  console.log(authenticated)
  return (
    <Body>
      <Flex justifyCenter>
        <Card style={{ padding: "1em", marginTop: "5%" }}>
          <Title center small bold>
            Event Management Console{" "}
          </Title>
          <Title center small>
            Login{" "}
          </Title>
          <hr />
          <Input type="email" placeholder="Email Address" /> <br />
          <Input type="password" placeholder="password" /> <br />
          <Flex justifyCenter>
            <Link to="/console">
              <Button
                onClick={() => {
                  AuthUser()
                }}
              >
                Login
              </Button>{" "}
            </Link>
          </Flex>
          <br />
          <div>
            <hr />
            <p style={{ textAlign: "center", fontSize: "1.2em" }}>
              Login with{" "}
            </p>

            <OAuth socket={socket} URL={API_URL} />
          </div>
        </Card>
      </Flex>
    </Body>
  )
}

export default inject("AuthStore")(observer(Signin))
