import React from "react"
import { inject, observer } from "mobx-react"
import Flex from "styled-flex-component"
import { Link } from "react-router-dom"
import { useQuery } from "@apollo/react-hooks"
import Profile from "../user/profile"
import { FiSearch, FiPlus } from "react-icons/fi"
import { Header, Footer } from "../../components/"
import {
  Body,
  Card,
  Bounce,
  Section,
  Items,
  Text,
  Button,
  Contain,
} from "../../styles/style"
import { TEST } from "../../data/queries"
// import Create from "./create"

const Console = (props): JSX.Element => {
  const { loading, error, data } = useQuery(TEST, {})

  const datas = [
    { i: 1, name: "OSCA" },
    { i: 2, name: "FB Open Source" },
    { i: 4, name: "FB DevC" },
    { i: 5, name: "CCHUB" },
  ]

  return (
    <div>
      <Header />
      <Body>
        <Profile />
        <hr />

        <Contain>
          <Flex justifyBetween>
            <Section> Organizing : </Section>

            <Link to="/create">
              <Button>
                {" "}
                <Flex>
                  <div style={{ paddingRight: "15px" }}>
                    <FiPlus style={{ fontSize: "1.55rem" }} />{" "}
                  </div>{" "}
                  Create Event{" "}
                </Flex>
              </Button>
            </Link>
          </Flex>
          <Items>
            {datas.map(({ i, name }) => {
              return (
                <Bounce>
                  <Card key={i}>
                    <div style={{ textAlign: "center" }}>
                      <img
                        alt="event cover"
                        src={require("../../assets/images/test.png")}
                        style={{ maxWidth: "50%" }}
                      />

                      <hr />
                      <Link
                        to={`/event/${i}`}
                        style={{ textDecoration: "none" }}
                      >
                        <h5> {name}</h5>
                      </Link>

                      <Text small center>
                        Some description of the event description of the event
                        description of the event.
                      </Text>
                    </div>
                  </Card>
                </Bounce>
              )
            })}
          </Items>
          <br />

          <Flex justifyBetween>
            <Section> Volunteering : </Section>

            <Link to="/list" style={{ textDecoration: "none" }}>
              <Button transparent>
                {" "}
                <Flex>
                  <div style={{ paddingRight: "15px" }}>
                    <FiSearch style={{ fontSize: "1.55rem" }} />{" "}
                  </div>{" "}
                  Search For Events{" "}
                </Flex>{" "}
              </Button>
            </Link>
          </Flex>
          <Items>
            {datas.map(({ i, name }) => {
              return (
                <Bounce>
                  <Card key={i}>
                    <div style={{ textAlign: "center" }}>
                      <img
                        alt="event cover"
                        src={require("../../assets/images/test.png")}
                        style={{ maxWidth: "50%" }}
                      />

                      <hr />
                      <Link
                        to={`/event/${i}`}
                        style={{ textDecoration: "none" }}
                      >
                        <h5> {name}</h5>
                      </Link>

                      <Text small center>
                        Some description of the event description of the event
                        description of the event.
                      </Text>
                    </div>
                  </Card>
                </Bounce>
              )
            })}
          </Items>
        </Contain>
      </Body>
      <Footer />
    </div>
  )
}

export default inject("ConsoleStore", "AuthStore")(observer(Console))
