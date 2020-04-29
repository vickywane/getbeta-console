import React from "react"
import Flex from "styled-flex-component"
import { FiX, FiCalendar, FiPlus } from "react-icons/fi"
import { Link } from "react-router-dom"

import { Hover, Notification, Text } from "../../styles/style"

const Pane = props => {
  const { color, Data, type } = props
  console.log(Data, "pane")

  const Panes = props => {
    const { Data, type } = props
    console.log(Data, "panes")
    switch (type) {
      case "Schedule":
        return (
          <Flex justifyBetween>
            <Flex>
              <Hover style={{ padding: "0rem 0.9rem" }}>
                <FiCalendar style={{ fontSize: "1.8rem" }} />
              </Hover>
              {Data.map(({ id }) => {
                return (
                  <Link style={{ textDecoration: "none" }} to={"/create"}>
                    <Text white key={id} style={{ padding: "0rem 0.8rem" }}>
                      {" "}
                      Day {id} >{" "}
                    </Text>
                  </Link>
                )
              })}{" "}
            </Flex>

            <Hover>
              <FiPlus style={{ fontSize: "2rem" }} />
            </Hover>
          </Flex>
        )
      default:
        return <p> Panes. No Pane has been matched </p>
    }
  }

  return (
    <Notification white color={color}>
      <br />
      <Panes type={type} Data={Data} />
    </Notification>
  )
}

export default Pane
