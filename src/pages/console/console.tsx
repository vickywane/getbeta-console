import React, { useState } from "react"
import { inject, observer } from "mobx-react"
import Flex from "styled-flex-component"
import { Link } from "react-router-dom"
import { useQuery } from "@apollo/react-hooks"
import { CSSTransition } from "react-transition-group"
import { FiSearch, FiPlus } from "react-icons/fi"

import Explore from "./explore"
import Organizing from "./organizing"
import Volunteering from "./volunteering"
import Profile from "../user/profile"
import { Header, Footer, Loader } from "../../components/"
import { EventPlaceholder } from "../../components/placeholders/"
import { WelcomeModal } from "../../components/modals/"
import {
  Body,
  Bounce,
  Items,
  Button,
  Contain,
  Switch,
  SwitchBtn,
  Title,
} from "../../styles/style"
import { GET_USER } from "../../data/queries"

import EventCard from "../../components/cards/EventCard"
import "../../App.css"

const Console = (props): JSX.Element => {
  const { loading, error, data } = useQuery(GET_USER, {
    variables: {
      id: localStorage.getItem("user_id"),
      name: "",
    },
  })
  const { LogOut } = props.AuthStore
  const [activeSection, setActiveSection] = useState("organized")

  if (error) {
    return (
      <Loader
        type={"error"}
        error={error.graphQLErrors[0].message}
        path={error.graphQLErrors[0].path[0]}
      />
    )
  }

  if (loading) {
    return <Loader type={"loading"} />
  }

  return (
    <div>
      <Header showSearchBar searchText="Search Home Console" />
      <br />
      <WelcomeModal />
      <Profile User={data} logout={LogOut} />
      <Contain showImage={true}>
        <br />
        <Flex justifyCenter>
          <Switch>
            <Flex>
              <Flex>
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
                <div style={{ borderRight: "4px solid  #401364" }} />
              </Flex>

              <Flex>
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
                  Volunteering{" "}
                </SwitchBtn>
                <div style={{ borderRight: "4px solid  #401364" }} />
              </Flex>

              <SwitchBtn
                style={{
                  background:
                    activeSection === "explore" ? "#401364" : "transparent",
                  color: activeSection === "explore" ? "#fff" : "#401364",
                }}
                onClick={() => {
                  setActiveSection("explore")
                }}
              >
                Explore Events
              </SwitchBtn>
            </Flex>
          </Switch>
        </Flex>
        <br />

        <Organizing activeSection={activeSection} events={data.user.events} />
        <Volunteering
          data={data}
          eventVolunteered={data.user.volunteering}
          activeSection={activeSection}
        />
        <Explore activeSection={activeSection} />
        <br />
      </Contain>
      <Footer />
    </div>
  )
}

export default inject(
  "ConsoleStore",
  "AuthStore",
  "ModalStore"
)(observer(Console))
