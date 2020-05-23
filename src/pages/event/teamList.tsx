import React from "react"
import Flex from "styled-flex-component"
import { inject, observer } from "mobx-react"
import { Link } from "react-router-dom"
import { FiChevronRight, FiUser } from "react-icons/fi"
import { useQuery } from "@apollo/react-hooks"

import { TEAMS } from "../../data/queries"
import { Text, Button } from "../../styles/style"
import { TeamModal } from "../../components/modals/"

const TeamList = (props): JSX.Element => {
  const { openTeamModal, closeTeamModal } = props.ModalStore
  const { teams, EventID } = props
  const { data, loading, error } = useQuery(TEAMS)
  if (data) {
    return (
      <div>
        <br />{" "}
        <TeamModal EventID={EventID} close={closeTeamModal} type={"Team"} />
        <Flex column>
          <Flex justifyBetween>
            <h5> Teams </h5>

            <Button
              long
              onClick={() => {
                openTeamModal()
              }}
            >
              Create Team
            </Button>
          </Flex>
          <hr />
          <br />
          {data.teams.map(({ id, name }) => {
            return (
              <ul style={{ listStyle: "none" }}>
                <li>
                  <Flex justifyBetween>
                    <img
                      alt="team sketch"
                      src={require("../../assets/images/developer.png")}
                      style={{ maxWidth: "3.2em", maxHeight: "3.2em" }}
                    />
                    <Link to={`/team/${id}`} style={{ textDecoration: "none" }}>
                      <Text bold style={{ fontWeight: "normal" }}>
                        {name}
                      </Text>
                    </Link>
                    <Flex>
                      <Link
                        to={`/team/${id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <FiChevronRight style={{ fontSize: "2.2rem" }} />
                      </Link>
                    </Flex>
                  </Flex>
                </li>
              </ul>
            )
          })}
        </Flex>
      </div>
    )
  }
}

export default inject("ModalStore")(observer(TeamList))
