import React, { useState } from "react"
import { inject, observer } from "mobx-react"
import Flex from "styled-flex-component"
import { Link } from "react-router-dom"
import { useQuery } from "@apollo/react-hooks"
import { CSSTransition } from "react-transition-group"

import Profile from "../user/profile"
import { FiSearch, FiPlus } from "react-icons/fi"
import { Header, Footer, Loader } from "../../components/"
import {
  Body,
  Bounce,
  Items,
  Slide,
  Button,
  Contain,
  Switch,
  SwitchBtn,
  Title,
} from "../../styles/style"
import { GET_USER } from "../../data/queries"

import EventCard from "../../components/cards/EventCard"
import { Events } from "../../Data"
import "../extra.css"

const Console = (props): JSX.Element => {
  const { loading, error, data } = useQuery(GET_USER, {
    variables: {
      id: 605394647632969758,
      name: "John Doe",
    },
  })

  const [activeSection, setActiveSection] = useState<string>("organized")

  if (error) {
    console.log(error, "data error")
    return <Loader type={"error"} />
  }
  if (loading) {
    return <Loader type={"loading"} />
  } else {
    //Todo : Slide-in animation for sections hasn't been fixed
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
                    background:
                      activeSection === "organized" ? "#401364" : "transparent",
                    color: activeSection === "organized" ? "#fff" : "#401364",
                  }}
                  onClick={() => {
                    setActiveSection("organized")
                  }}
                >
                  Organizing
                </SwitchBtn>
                <SwitchBtn
                  style={{
                    background:
                      activeSection === "volunteer" ? "#401364" : "transparent",
                    color: activeSection === "volunteer" ? "#fff" : "#401364",
                  }}
                  onClick={() => {
                    setActiveSection("volunteer")
                  }}
                >
                  {" "}
                  Volunteering{" "}
                </SwitchBtn>
              </Switch>
            </Flex>
            <br />

            <CSSTransition
              timeout={900}
              classNames={"slider"}
              unmountOnExit
              in={activeSection === "organized"}
              onEnter={() => {
                console.log("am in")
              }}
            >
              <Slide>
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
                  {data.user.events.map(({ id, name, summary, venue }) => {
                    return (
                      <Bounce>
                        <EventCard
                          id={id}
                          name={name}
                          venue={venue}
                          location={true}
                          summary={summary}
                        />
                      </Bounce>
                    )
                  })}
                </Items>
              </Slide>
            </CSSTransition>

            <CSSTransition
              timeout={900}
              unmountOnExit
              in={activeSection === "volunteer"}
              classNames={"slider"}
            >
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
                          location={true}
                          summary={text}
                        />
                      </Bounce>
                    )
                  })}
                </Items>
              </div>
            </CSSTransition>
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
