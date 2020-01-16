import React from "react"
import { inject, observer } from "mobx-react"
import Flex from "styled-flex-component"
import { FiX, FiLogOut, FiEdit3 } from "react-icons/fi"
import { IoMdClipboard } from "react-icons/io"
import { Link } from "react-router-dom"
import { Image } from "react-bootstrap"

import { Header, Footer } from "../../components/"
import {
  Body,
  Detail,
  Card,
  Bounce,
  Name,
  Section,
  Contain,
  Bio,
  Hover,
} from "../../styles/style"

import Create from "./create"

const Console = (props): JSX.Element => {
  // const { closeProfilePane, ProfilePane } = props.ConsoleStore;
  // const { hasEvent, hasVolunteer, setEvent, setVolunter } = props.AuthStore;

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
              <Link to="/talks">
                <Hover>
                  {" "}
                  <IoMdClipboard style={{ fontSize: "2.2em" }} />{" "}
                </Hover>
              </Link>
              <br />
              <Link to="/signup">
                <Hover>
                  <FiLogOut style={{ fontSize: "2.2em" }} />{" "}
                </Hover>
              </Link>
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
