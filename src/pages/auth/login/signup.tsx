import React from "react"
import styled from "styled-components"
import { Card } from "react-bootstrap"
import Flex from "styled-flex-component"
import { FiTwitter } from "react-icons/fi"
import { IoLogoGoogle } from "react-icons/io"

import { Button, Hover, Input, Title } from "../../../styles/style"

const Body = styled.div`
  padding: 1em;
`

const Signup = (): JSX.Element => {
  return (
    <Body>
      <Flex justifyCenter>
        <Card style={{ padding: "1em" }}>
          <Title center> Create Account </Title>
          <hr />
          <Input type="text" placeholder="Name" /> <br />
          <Input type="email" placeholder="Email Address" /> <br />
          <Input type="password" placeholder="password" /> <br />
          <Flex justifyCenter>
            <Button> Create Account </Button>{" "}
          </Flex>
          <div>
            <hr />
            <p style={{ textAlign: "center" }}> Create an account with </p>

            <Flex justifyAround>
              <Hover>
                <FiTwitter style={{ fontSize: "2em" }} />{" "}
              </Hover>
              <Hover>
                <IoLogoGoogle style={{ fontSize: "2em" }} />{" "}
              </Hover>
              <Hover>
                <IoLogoGoogle style={{ fontSize: "2em" }} />{" "}
              </Hover>
            </Flex>
          </div>
        </Card>
      </Flex>
    </Body>
  )
}

export default Signup
