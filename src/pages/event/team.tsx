import React from "react"
import Flex from "styled-flex-component"
import { inject, observer } from "mobx-react"
import { Link } from "react-router-dom"
import { FiChevronRight, FiUser } from "react-icons/fi"

import { Text, Button } from "../../styles/style"

const data = [
  { id: 1, name: " OSCA Design Team" },
  { id: 2, name: "OSCA Sales Team" },
  { id: 2, name: "OSCA Design Team" },
  { id: 2, name: "OSCA Design Team" },
  { id: 2, name: "OSCA Media Team" },
]

const Team = (): JSX.Element => {
  return (
    <div>
      <br />
      <Flex column>
        <Flex justifyBetween>
          <h5> Teams </h5>

          <Button>Create Team</Button>
        </Flex>
        <br />
        {data.map(({ id, name }) => {
          return (
            <ul style={{ listStyle: "none" }}>
              <li>
                <Flex justifyBetween>
                  <img
                    alt="team sketch"
                    src={require("../../assets/images/developer.png")}
                    style={{ maxWidth: "3.2em", maxHeight: "3.2em" }}
                  />
                  <Link style={{ textDecoration: "none" }}>
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

export default inject("ModalStore")(observer(Team))
