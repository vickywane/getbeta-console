import React from "react"
import styled from "styled-components"
import { Card } from "react-bootstrap"
import Flex from "styled-flex-component"
import { FiTwitter } from "react-icons/fi"
import { IoLogoGoogle } from "react-icons/io"
import media from "styled-media-query"
import { inject, observer } from "mobx-react"
import { Link } from "react-router-dom"
import io from "socket.io-client"

// import { API_URL } from "./config"

import OAuth from "./OAuth"

const Body = styled.div`
  padding: 1em;
`

const Title = styled.h1`
  font-size: ${props => (props.head ? null : "1.77em")};
  font-weight: ${props => (props.head ? "bold" : "normal")};
  text-align: center;
`

const Input = styled.input({
  paddingLeft: "15px",
  padding: "0.5em",
  border: "1px solid #000",
  borderRadius: "3px",
  width: "32em",
  height: "5vh",
  margin: "1em",
})

const Buttons = styled.button`
  background: #361f94;
  border: 1px solid #0e2f5a;
  border-radius: 5px;
  color: #fff;
  margin: 0 1em;
  padding: 1em 2.5em;
  :hover {
    cursor: pointer;
  }
  ${media.lessThan("medium")`
      padding: 0.70em 1em;
      margin: 0 0.50em;
      border-radius: 5px;
    `};
`

const API_URL =
  "https://codeburst.io/react-authentication-with-twitter-google-facebook-and-github-862d59583105"
const socket = io(API_URL)

const Signin = (props): JSX.Element => {
  const { AuthUser, authenticated } = props.AuthStore
  console.log(authenticated)
  return (
    <Body>
      <Flex justifyCenter>
        <Card style={{ padding: "1em", marginTop: "5%" }}>
          <Title head> Event Management Console </Title>
          <Title> Login </Title>
          <hr />
          <Input type="email" placeholder="Email Address" /> <br />
          <Input type="password" placeholder="password" /> <br />
          <Flex justifyCenter>
            <Link to="/console">
              <Buttons
                onClick={() => {
                  AuthUser()
                }}
              >
                Login
              </Buttons>{" "}
            </Link>
          </Flex>
          <br />
          <div>
            <hr />
            <p style={{ textAlign: "center", fontSize: "1.2em" }}>
              Login with{" "}
            </p>

            <OAuth socket={socket} />
          </div>
        </Card>
      </Flex>
    </Body>
  )
}

export default inject("AuthStore")(observer(Signin))
