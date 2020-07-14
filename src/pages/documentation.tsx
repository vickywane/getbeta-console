import React from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"
import { Link } from "react-router-dom"

import { Header, Footer } from "../components/"

const Body = styled.div`
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Title = styled.h2`
  text-align: center;
`
const Text = styled.p``
const TitleText = styled.p`
  font-size: 1.3em;
`

const Button = styled.button`
    background: #0e2f5a
    text-align: right;
    border-radius: 5px;
    height: 50px;
    border: 1px solid #0e2f5a;
    color: #fff;
    margin: 0 1em;
    padding: 0.50em 3em;
    font-size: 1em;
    &:hover {
      color: #0e2f5a;
      background: #fff;
    }
  `

const Documentation = (): JSX.Element => {
  return (
    <div>
      <Header screen="Docs" />
      <Body
        style={{
          height: window.innerHeight - 115,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <br />
          <br />
          <Title> Event Playground </Title>
          <TitleText> Content Management Console for Event </TitleText>
          <br />

          <Flex justifyCenter>
            <Link to="/console">
              <Button> Open Console </Button>{" "}
            </Link>
          </Flex>
        </div>
      </Body>

      <Footer />
    </div>
  )
}

export default Documentation
