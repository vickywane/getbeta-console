import React, { useState } from "react"
import Flex from "styled-flex-component"
import { inject, observer } from "mobx-react"
import { Link } from "react-router-dom"
import { FiChevronRight, FiUser } from "react-icons/fi"
import { CSSTransition } from "react-transition-group"
import styled from "styled-components"
import { IoIosPeople } from "react-icons/io"

import Team from "./team"
import { Text, Button, Body, Title, Hover } from "../../styles/style"
import { TeamModal } from "../../components/modals/"

const TeamList = (props): JSX.Element => {
  const { openTeamModal, closeTeamModal } = props.ModalStore
  const { teams, id } = props.data

  const [ActiveView, setView] = useState("list")
  const [TeamId, setTeamId] = useState(null)

  const List = styled.li`
    list-style: none;
    padding : 0rem 1rem
    margin : 0.5rem 3rem
    div {
      display: flex;
      justify-content: space-between;
      margin: 0.5rem 0.4rem;
    }
  `

  return (
    <div>
      <TeamModal EventID={id} close={closeTeamModal} type={"Team"} />

      <CSSTransition timeout={300} unmountOnExit in={ActiveView === "list"}>
        {teams === null ? (
          <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Title small center>
              You do not have any team yet{" "}
            </Title>
            <br />
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

            <Text color="grey" center>
              <a
                style={{ textDecoration: "none" }}
                href="https://my_event.netlify.com"
                target="_blank"
              >
                Learn More{" "}
              </a>
              about the <b> Collaboration </b> feature on Oasis{" "}
            </Text>
          </div>
        ) : (
          <Body>
            {" "}
            <br />
            <Flex justifyBetween>
              <h5> Teams </h5>

              <Button
                onClick={() => {
                  openTeamModal()
                }}
              >
                Create Team
              </Button>
            </Flex>
            <hr />
            <List style={{ listStyle: "none" }}>
              {teams.map(({ id, name }) => {
                return (
                  <div key={id}>
                    <img
                      alt="team sketch"
                      src={require("../../assets/images/developer.png")}
                      style={{ maxWidth: "3.2em", maxHeight: "3.2em" }}
                    />

                    <Title
                      small
                      center
                      onClick={() => {
                        setTeamId(id)
                        setView("team")
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
                          {" "}
                          12{" "}
                        </Text>
                      </Flex>

                      <Hover style={{ padding: "0rem 0.7rem" }}>
                        <FiChevronRight style={{ fontSize: "2rem" }} />
                      </Hover>
                    </Flex>
                  </div>
                )
              })}
            </List>
          </Body>
        )}
      </CSSTransition>

      <CSSTransition in={ActiveView === "team"} timeout={300} unmountOnExit>
        <Team TeamId={TeamId} />
      </CSSTransition>
    </div>
  )
}

export default inject("ModalStore")(observer(TeamList))
