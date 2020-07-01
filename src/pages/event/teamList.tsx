import React, { useState } from "react"
import Flex from "styled-flex-component"
import { inject, observer } from "mobx-react"
import { Link } from "react-router-dom"
import { FiChevronRight, FiUser, FiClock, FiMoreVertical } from "react-icons/fi"
import { CSSTransition } from "react-transition-group"
import styled from "styled-components"
import { IoIosPeople, IoIosListBox } from "react-icons/io"
import { FiArrowLeft } from "react-icons/fi"

import TeamInstruction from "./people/teamInstructionModal"
import Team from "./team"
import {
  Text,
  Button,
  Body,
  TabColumn,
  Tab,
  Title,
  Hover,
  Head,
  Section,
} from "../../styles/style"
import { TeamModal } from "../../components/modals/"
import { EmptyData } from "../../components/placeholders/"
import Volunteer from "./people/volunteer.list"

const HoverCircle = styled(Hover)`
  padding : 0.6rem 0.7rem;
  border-radius : 50%
   background : transparent;
    color : #0e2f5a;
    transition : all 300ms;
   &: hover {
    background : #0e2f5a;
    color : #fff;
   }
`

const List = styled.div`
  list-style: none;
  padding: 0rem 1rem;
  li {
    box-shadow: 0px 2px 3px grey;
    list-style: none;
    display: flex;
    margin: 2rem 0.4rem;
    padding: 0.7rem 1rem;
    flex-direction: column;
    border-left: 8px solid #0e2f5a;
    border-radius: 7px;
    div {
      display: flex;
      flex-direction: row;
      img {
        height: 50px;
        width: 50px;
        margin: 0rem 0.8rem;
      }
    }
  }
`

const TeamList = (props): JSX.Element => {
  const { openTeamModal, closeTeamModal } = props.ModalStore
  const { teams, id } = props.data

  const [ActiveView, setView] = useState<string>("Overview") // Overview
  const [TeamId, setTeamId] = useState<number>(null)
  const [TeamName, setTeamName] = useState<string>("Overview")
  const [TabView, setTabView] = useState<string>("Teams")
  const [Volunteers, showVolunteers] = useState<boolean>(false)

  return (
    <div>
      <Head style={{ padding: "1rem 1rem" }} header>
        <TeamInstruction />

        {ActiveView !== "Overview" ? (
          <Flex>
            <HoverCircle
              onClick={() => {
                setView("Overview")
                setTabView("Teams")
              }}
            >
              <FiArrowLeft style={{ fontSize: "1.7rem" }} />
            </HoverCircle>

            <Section
              style={{
                padding: "0.6rem 0.2rem",
              }}
            >
              {TeamName}
            </Section>
          </Flex>
        ) : (
          <Section
            style={{
              padding: "0.6rem 0.2rem",
            }}
          >
            Team Support
          </Section>
        )}

        <Tab>
          <TabColumn
            onClick={() => setView("Teams")}
            active={TabView === "Teams"}
          >
            Teams
          </TabColumn>

          <TabColumn
            onClick={() => {
              showVolunteers(true)
              setView("Volunteers")
              setTabView("Volunteers")
            }}
            active={TabView === "Volunteers"}
          >
            Volunteers
          </TabColumn>
        </Tab>
      </Head>

      <TeamModal EventID={id} close={closeTeamModal} type={"Team"} />

      <CSSTransition timeout={300} unmountOnExit in={ActiveView === "Overview"}>
        <Body>
          {teams === null ? (
            <div>
              <div style={{ textAlign: "right" }}>
                <Button
                  onClick={() => {
                    openTeamModal()
                  }}
                >
                  Create Team
                </Button>
              </div>

              <EmptyData
                message={
                  "There are no created teams within this event. \n \n Use the **Create Team** to get started with creating your first team."
                }
                link="https://event.com"
                feature="Collaborations"
              />
            </div>
          ) : (
            <List>
              <div style={{ textAlign: "right" }}>
                <Button
                  onClick={() => {
                    openTeamModal()
                  }}
                >
                  Create Team
                </Button>
              </div>

              {teams.map(({ id, name, createdAt, goal, tasks }) => {
                return (
                  <div>
                    <li key={id}>
                      <div style={{ justifyContent: "space-between" }}>
                        <div style={{ flexDirection: "column" }}>
                          <Title
                            small
                            center
                            onClick={() => {
                              setTeamId(id)
                              setTeamName(name)
                              setView("Teams")
                            }}
                            bold
                            style={{ fontWeight: "normal", cursor: "pointer" }}
                          >
                            {name}
                          </Title>

                          <div style={{ color: "grey" }}>
                            <Hover style={{ padding: "0rem 0.3rem" }}>
                              <FiClock style={{ fontSize: "1.7rem" }} />
                            </Hover>

                            <Text small>{createdAt}</Text>
                          </div>
                        </div>

                        <div>
                          <Hover style={{ padding: "0rem 0.3rem" }}>
                            <FiMoreVertical style={{ fontSize: "1.7rem" }} />
                          </Hover>
                        </div>
                      </div>

                      <Text small center>
                        {goal}
                      </Text>

                      <br />
                      <div style={{ justifyContent: "space-between" }}>
                        <div
                          style={{
                            color: "grey",
                          }}
                        >
                          <Hover>
                            <IoIosListBox style={{ fontSize: "1.8rem" }} />
                          </Hover>
                          <Text style={{ padding: "0rem 0.6rem" }} small>
                            {tasks !== null ? tasks.length : "0"} tasks
                            Availabele
                          </Text>
                        </div>

                        <div>
                          <img
                            alt="members"
                            src={require("../../assets/images/developer.png")}
                          />

                          <img
                            alt="members"
                            src={require("../../assets/images/developer.png")}
                          />

                          <img
                            alt="members"
                            src={require("../../assets/images/developer.png")}
                          />
                        </div>
                      </div>
                    </li>
                  </div>
                )
              })}
            </List>
          )}
        </Body>
      </CSSTransition>

      <CSSTransition
        classNames={""}
        in={ActiveView === "Teams"}
        timeout={300}
        unmountOnExit
      >
        <Team TeamId={TeamId} />
      </CSSTransition>

      <CSSTransition
        in={ActiveView === "Volunteers"}
        timeout={300}
        unmountOnExit
      >
        <Volunteer />
      </CSSTransition>
    </div>
  )
}

export default inject("ModalStore")(observer(TeamList))