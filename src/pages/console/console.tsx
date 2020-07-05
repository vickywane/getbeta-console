import React, { useState } from "react"
import { inject, observer } from "mobx-react"
import Flex from "styled-flex-component"
import { Link } from "react-router-dom"
import { useQuery } from "@apollo/react-hooks"
import { CSSTransition } from "react-transition-group"
import { FiSearch, FiPlus } from "react-icons/fi"
import styled from 'styled-components'

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

const Div  = styled.div`
    transition: all 400ms;
    filter: ${props => props.grayed &&  "grayscale(75%) blur(0.7px)"};
`

const Console = (props): JSX.Element => {
  const { loading, error, data } = useQuery(GET_USER, {
    variables: {
      id: localStorage.getItem("user_id"),
      name: "",
    },
  })
  const { LogOut } = props.AuthStore
  const [activeSection, setActiveSection] = useState("organized")
  const { showWelcomeModal } = props.ModalStore

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
    <Div grayed={showWelcomeModal} >
      <div>
        <Header screen="home" showSearchBar searchText="Search Home Console" />
      </div>

      <br />

      <div
        style={{
          transition: "all 400ms",
           filter: showWelcomeModal && "grayscale(0px) blur(0px)",
        }}
      >
        <WelcomeModal username={data.user.name} />
      </div>

      <Profile User={data} logout={LogOut} />
      <Contain showImage={true}>
        <br />
        <Flex justifyCenter>
          <Switch>
            <Flex>
              <Flex>
                <SwitchBtn
                  active={activeSection === "organized"}
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
                  color="#0e2f5a"
                  active={activeSection === "volunteer"}
                  onClick={() => {
                    setActiveSection("volunteer")
                  }}
                >
                  Volunteering
                </SwitchBtn>
                <div style={{ borderRight: "4px solid  #401364" }} />
              </Flex>

              <SwitchBtn
                active={activeSection === "explore"}
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
    </Div>
  )
}

export default inject(
  "ConsoleStore",
  "AuthStore",
  "ModalStore"
)(observer(Console))
