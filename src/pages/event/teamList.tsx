import React, { createElement } from "react"
import Flex from "styled-flex-component"
import { inject, observer } from "mobx-react"
import { Link } from "react-router-dom"
import { FiChevronRight, FiUser } from "react-icons/fi"

import { useMutation } from "@apollo/react-hooks"

// import { CREATE_TEAM } from "../../data/mutations"
import { Text, Button } from "../../styles/style"
import { TeamList as Data } from "../../Data"
import { FormModal } from "../../components/modals/"

const TeamList = (props): JSX.Element => {
  const { openFormModal, closeFormModal } = props.ModalStore

  // const [createTeam, { data }] = useMutation(CREATE_TEAM)

  return (
    <div>
      <br /> <FormModal close={closeFormModal} type={"Team"} />
      <Flex column>
        <Flex justifyBetween>
          <h5> Teams </h5>

          <Button
            onClick={() => {
              openFormModal()
            }}
          >
            Create Team
          </Button>
        </Flex>
        <hr />
        <br />
        {Data.map(({ id, name }) => {
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
                      {name}{" "}
                    </Text>{" "}
                  </Link>
                  <Flex>
                    <div style={{ display: "flex", paddingRight: "20px" }}>
                      <FiUser style={{ fontSize: "1.7rem" }} />
                      <Text style={{ paddingLeft: "5px" }}> 11 </Text>
                    </div>

                    <Link to={`/team/${id}`} style={{ textDecoration: "none" }}>
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

export default inject("ModalStore")(observer(TeamList))
