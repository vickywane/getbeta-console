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
  Bounce,
  Section,
  Items,
  Button,
  Contain,
} from "../../styles/style"
import { GET_USER } from "../../data/queries"

import EventCard from "../../components/cards/EventCard"
import { Events } from "../../Data"

const Console = (props): JSX.Element => {
  const { loading, error, data } = useQuery(GET_USER, {})
  console.log(data, "data from graphql")

  if (error) {
    console.log(error, "data error")
    return (
      <div>
        <Header />
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
        <h2 style={{ textAlign: "center" }}>
          An error has occurred with the server <br /> Switching to offline mode
          ....{" "}
        </h2>{" "}
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <Footer />
      </div>
    )
  }

  if (loading) {
    return (
      <div>
        <br /> <br /> <br /> <br />
        <h2 style={{ textAlign: "center" }}> Data is Loading </h2>{" "}
      </div>
    )
  } else {
    return (
      <div>
        <Header />
        <Body>
          <Profile User={data} />
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
            <br />
            <Items>
              {Events.map(({ i, name, text }) => {
                return (
                  <Bounce>
                    <EventCard id={i} name={name} summary={text} />
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
            <br />

            <Items>
              {Events.map(({ i, name, text }) => {
                return (
                  <Bounce>
                    <EventCard id={i} name={name} summary={text} />
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
}

export default inject("ConsoleStore", "AuthStore")(observer(Console))
