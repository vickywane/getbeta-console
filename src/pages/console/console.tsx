import React, { useState } from "react"
import { inject, observer } from "mobx-react"
import Flex from "styled-flex-component"
import { Link } from "react-router-dom"
import { useQuery } from "@apollo/react-hooks"

import Profile from "../user/profile"
import { FiSearch, FiPlus } from "react-icons/fi"
import { Header, Footer, Loader } from "../../components/"
import {
  Body,
  Bounce,
  Section,
  Items,
  Button,
  Contain,
  Switch,
  SwitchBtn,
  Title,
} from "../../styles/style"
import { GET_USER } from "../../data/queries"

import EventCard from "../../components/cards/EventCard"
import { Events } from "../../Data"

const Console = (props): JSX.Element => {
  const { loading, error, data } = useQuery(GET_USER, {
    variables: {
      id: 605394647632969758,
      name: "John Doe",
    },
  })
  const [Organize, showVolunteer] = useState<boolean>(true)

  if (error) {
    console.log(error, "data error")
    return <Loader error={true} />
  }

  if (loading) {
    return <Loader loading={true} />
  } else {
    return (
      <div>
        <Header />
        <Body>
          <Profile User={data} />
          <hr />

          <Contain>
            <Flex justifyCenter>
              <Switch two>
                <SwitchBtn
                  style={{
                    background: Organize ? "#401364" : "transparent",
                    color: Organize ? "#fff" : "#401364",
                  }}
                  onClick={() => {
                    showVolunteer(true)
                  }}
                >
                  Organizing
                </SwitchBtn>
                <SwitchBtn
                  style={{
                    background: !Organize ? "#401364" : "transparent",
                    color: !Organize ? "#fff" : "#401364",
                  }}
                  onClick={() => {
                    showVolunteer(false)
                  }}
                >
                  {" "}
                  Volunteering{" "}
                </SwitchBtn>
              </Switch>
            </Flex>
            <br />

            {Organize ? (
              <div>
                <Flex justifyBetween>
                  <Title small> Organizing : </Title>

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
              </div>
            ) : (
              <div>
                <Flex justifyBetween>
                  <Title small> Volunteering : </Title>

                  <Link to="/list" style={{ textDecoration: "none" }}>
                    <Button transparent>
                      {" "}
                      <Flex>
                        <div style={{ paddingRight: "15px" }}>
                          <FiSearch style={{ fontSize: "1.55rem" }} />{" "}
                        </div>
                        Find Events Nearby
                      </Flex>{" "}
                    </Button>
                  </Link>
                </Flex>
                <br />

                <Items>
                  {Events.map(({ i, name, text }) => {
                    return (
                      <Bounce>
                        <EventCard
                          role={"Attendant"}
                          id={i}
                          name={name}
                          summary={text}
                        />
                      </Bounce>
                    )
                  })}
                </Items>
              </div>
            )}
            <br />
            <br />
            <hr />
          </Contain>
        </Body>
        <Footer />
      </div>
    )
  }
}

export default inject("ConsoleStore", "AuthStore")(observer(Console))
