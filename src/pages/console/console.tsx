import React from "react"
import styled from "styled-components"
import { inject, observer } from "mobx-react"
import Flex from "styled-flex-component"
import { FiX, FiLogOut, FiEdit3 } from "react-icons/fi"
import { IoMdClipboard } from "react-icons/io"
import posed from "react-pose"
import { Link } from "react-router-dom"
import { Image } from "react-bootstrap"

import { Header, Footer } from "../../components/"
import Create from "./create"

const Body = styled.div`
  padding: 1em;
`

const Pane = styled.div`
  padding: 0.5em;
`

const Button = styled.button`
    background: #0e2f5a
    text-align: right;
    border-radius: 5px;
    height: 40px;
    border: 1px solid #0e2f5a;
    color: #fff;
    margin: 0 1em;
    padding: 0.50em 1.5em;
    font-size: 1em;
    &:hover {
      color: #0e2f5a;
      background: #fff;
    }
  `

const Card = styled.div({
  height: "7.5vh",
  padding: "0.5em",
  paddingTop: "0.2em",
  width: "5em",
  borderRadius: "5px",
  boxShadow: "0px 2px 6px grey",
  background: "black",
  color: "white",
  cursor: "pointer",
})

const Bounce = posed.div({
  hoverable: true,
  init: {
    scale: 1,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)",
    textAlign: "center",
  },
  hover: {
    scale: 1.1,
  },
  press: {
    scale: 1.1,
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
  },
})

const Contain = styled.div`
  padding: 1em;
`

const Section = styled.h3`
  font-weight: normal;
`

const Name = styled.h2`font-weight : 500
text-align : center
`

const Detail = styled.div`
padding-left : 10px
width :  20em
`

const Bio = styled.p`
  text-align: center;
`

const Hover = styled.div`
  cursor: pointer;
`

const Console = (props): JSX.Element => {
  const { closeProfilePane, ProfilePane } = props.ConsoleStore
  const { hasEvent, hasVolunteer, setEvent, setVolunter } = props.AuthStore

  const data = [
    { i: 1, name: "a" },
    { i: 2, name: "b" },
    { i: 3, name: "b" },
    { i: 4, name: "c" },
    { i: 5, name: "d" },
    { i: 6, name: "e" },
  ]

  return (
    <div>
      <Header />
      <Body>
        <Contain>
          <Flex justifyBetween>
            <Flex>
              <Image
                alt="profile"
                src={require("../../assets/images/developer.png")}
                style={{ maxWidth: "10em", maxHeight: "10em" }}
                roundedCircle
                rounded
                fluid
              />

              <Detail>
                <Name> Nwani Victory </Name>
                <Bio>
                  Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                  bla bla bla bla{" "}
                </Bio>
                <Hover style={{ textAlign: "center" }}>
                  <FiEdit3 style={{ fontSize: "2em" }} />{" "}
                </Hover>
              </Detail>
            </Flex>

            <Flex column>
              <br /> <br />
              <Hover>
                {" "}
                <IoMdClipboard style={{ fontSize: "2.2em" }} />{" "}
              </Hover>
              <br />
              <Hover>
                <FiLogOut style={{ fontSize: "2.2em" }} />{" "}
              </Hover>
            </Flex>
          </Flex>
        </Contain>
        <hr />

        <Section> Organizing : </Section>
        <Flex justifyAround>
          {data.map(({ i, name }) => {
            return (
              <Bounce>
                <Link to={`/event/${i}`}>
                  <Card key={i}>
                    <div style={{ textAlign: "center" }}>
                      <h5> {name}</h5>
                    </div>
                  </Card>
                </Link>
              </Bounce>
            )
          })}
        </Flex>
        <br />
        <Section> Volunteering : </Section>
        <Flex justifyAround>
          {data.map(({ i, name }) => {
            return (
              <Bounce>
                <Link to={`/event/${i}`}>
                  <Card key={i}>
                    <div style={{ textAlign: "center" }}>
                      <h5> {name}</h5>
                    </div>
                  </Card>
                </Link>
              </Bounce>
            )
          })}
        </Flex>
      </Body>
      <Footer />
    </div>
  )
}

export default inject("ConsoleStore", "AuthStore")(observer(Console))
