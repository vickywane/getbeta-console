import React, { useState } from "react"
import { Link } from "react-router-dom"
import { GoLocation } from "react-icons/go"
import { FiCalendar, FiMoreVertical, FiUser } from "react-icons/fi"
import Flex from "styled-flex-component"
import styled from "styled-components"
import { CSSTransition } from "react-transition-group"
import { inject, observer } from "mobx-react"

import { Card, Text, Button, Hover, Title } from "../../styles/style"
import EventCardOption from "./eventcard.options"

//Todo : Create a proper ts interface here
const Contain = styled.div`
  background-image: url(${props => props.img});
  width: 25rem;
  height: auto;
`

const List = styled.li`
  display: flex;
  padding: 1rem 1rem;
  margin: 1.5rem 0rem;
  box-shadow: 0px 1px 2px grey;
`

const MeetupGroupCard = props => {
  const {
    location,
    name,
    id,
    summary,
    role,
    created,
    venue,
    volunteerScreen,
    approvalStatus,
    type,
    showAprrovalStatus,
    volunteerOption,
    event,
  } = props
  const { setEventId } = props.ModalStore
  const [optionVisibility, setOptionVisibility] = useState(false)

  return (
    <List>
      <img
        alt="group"
        style={{
          height: "85px",
          width: "85px",
          margin: "0.5rem 1rem",
        }}
        src={require("../../assets/images/developer.png")}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Title
            center
            small
            style={{ color: "#0e2f5a",  marginLeft: "10rem", cursor: "pointer" }}
            onClick={() => setEventId(id)}
            key={id}
          >
            {name}
          </Title>

          <Hover style={{ marginLeft: "12rem" }}>
            <FiMoreVertical style={{ fontSize: "1.7rem" }} />
          </Hover>
        </div>
<br />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex" }}>
              <Hover style={{ padding: "0rem 0.7rem" }}>
                <GoLocation style={{ fontSize: "1.5rem" }} />{" "}
              </Hover>
              <Text small> {location} </Text>
            </div>
            <div style={{ display: "flex" }}>
              <Hover style={{ padding: "0rem 0.7rem" }}>
                <FiUser style={{ fontSize: "1.5rem" }} />{" "}
              </Hover>
              <Text small> 2000 </Text>
            </div>
          </div>

          <img
            alt="group"
            style={{
              height: "55px",
              width: "55px",
              margin: "0rem 0.5rem",
            }}
            src={require("../../assets/images/developer.png")}
          />
        </div>
      </div>
    </List>
  )
}

export default inject("ModalStore")(observer(MeetupGroupCard))
