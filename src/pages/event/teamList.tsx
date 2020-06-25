import React, { useState } from "react"
import Flex from "styled-flex-component"
import { inject, observer } from "mobx-react"
import { Link } from "react-router-dom"
import { FiChevronRight, FiUser } from "react-icons/fi"
import { CSSTransition } from "react-transition-group"
import styled from "styled-components"
import { IoIosPeople } from "react-icons/io"
import { FiArrowLeft } from "react-icons/fi"

import Team from "./team"
import {
  Text,
  Button,
  Body,
  Title,
  Hover,
  Head,
  Section,
} from "../../styles/style"
import { TeamModal } from "../../components/modals/"
import { EmptyData } from "../../components/placeholders/"

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

const TeamList = (props): JSX.Element => {
  const { openTeamModal, closeTeamModal } = props.ModalStore
  const { teams, id } = props.data

  const [ActiveView, setView] = useState("list")
  const [TeamId, setTeamId] = useState(null)

  const List = styled.div`
    list-style: none;
    padding: 0rem 1rem;
    li {
      list-style: none;
      display: flex;
      justify-content: space-between;
      margin: 1rem 0.4rem;
      padding: 0.7rem 1rem;
      border: 1px solid grey;
      border-radius: 7px;
    }
  `

  return (
    <div>
      <Head style={{ padding: "1rem 1rem" }} header>
        {ActiveView !== "list" ? (
          <Flex>
            <HoverCircle onClick={() => setView("list")}  >
              <FiArrowLeft style={{ fontSize: "1.7rem" }} />
            </HoverCircle>

            <Section
              style={{
                padding: "0.6rem 0.2rem",
              }}
            >
              {ActiveView}
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

        <Button
          onClick={() => {
            openTeamModal()
          }}
        >
          Create Team
        </Button>
      </Head>
      <TeamModal EventID={id} close={closeTeamModal} type={"Team"} />

      <CSSTransition timeout={300} unmountOnExit in={ActiveView === "list"}>
        <Body>
          {teams === null ? (
            <div>
              <Text center>
                Use the
                <b
                  style={{
                    textDecoration: "underline",
                    fontWeight: 500,
                    padding: "0rem 0.7rem",
                    cursor: "pointer",
                    color: "blue",
                  }}
                  onClick={() => openTeamModal()}
                >
                  Create Team
                </b>
                button to create your first team.
              </Text>

              <EmptyData
                message={
                  " There are no created teams within this event \n Use the **Create Team** to get started with creating your first team."
                }
                link="https://event.com"
                feature="Collaboration"
              />
            </div>
          ) : (
            <List>
              {teams.map(({ id, name }) => {
                return (
                  <li key={id}>
                    <img
                      alt="team sketch"
                      src={require("../../assets/images/developer.png")}
                      style={{ height: "70px", width: "70px" }}
                    />

                    <Title
                      small
                      center
                      onClick={() => {
                        setTeamId(id)
                        setView(name)
                      }}
                      bold
                      style={{ fontWeight: "normal", cursor: "pointer" }}
                    >
                      {name}
                    </Title>

                    <Flex>
                      <Flex>
                        <Hover style={{ padding: "0rem 0.3rem" }}>
                          <IoIosPeople style={{ fontSize: "1.8rem" }} />
                        </Hover>

                        <Text small color="grey">
                          12
                        </Text>
                      </Flex>
                    </Flex>
                  </li>
                )
              })}
            </List>
          )}
        </Body>
      </CSSTransition>

      <CSSTransition in={ActiveView !== "list"} timeout={300} unmountOnExit>
        <Team TeamId={TeamId} />
      </CSSTransition>
    </div>
  )
}

export default inject("ModalStore")(observer(TeamList))
