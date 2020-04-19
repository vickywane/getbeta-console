import React from "react"
import Flex from "styled-flex-component"
import { inject, observer } from "mobx-react"
import { Link } from "react-router-dom"
import { FiChevronRight } from "react-icons/fi"

import { Bounce, Card } from "../../styles/style"
import { Checklist } from "../../components/modals/"

const data = [
  { id: 1, name: "design" },
  { id: 2, name: "gifts" },
  { id: 3, name: "food" },
  { id: 4, name: "attendees" },
]

const Team = (props): JSX.Element => {
  return (
    <div>
      <br />
      <Flex column>
        <h5 style={{ textAlign: "center" }}> TEAMS </h5>
        <Flex justifyAround>
          {data.map(({ id, name }) => {
            return (
              <Bounce>
                <Card key={id} team>
                  <Flex justifyBetween>
                    {" "}
                    <img
                      alt="team sketch"
                      src={require("../../assets/images/developer.png")}
                      style={{ maxWidth: "3.4em", maxHeight: "3.4em" }}
                    />
                    <h5 style={{ fontWeight: "normal" }}> {name} </h5>{" "}
                    <Link to={`/team/${id}`} style={{ textDecoration: "none" }}>
                      <FiChevronRight style={{ fontSize: "3rem" }} />
                    </Link>{" "}
                  </Flex>{" "}
                </Card>
              </Bounce>
            )
          })}
        </Flex>
      </Flex>
    </div>
  )
}

export default inject("ModalStore")(observer(Team))
