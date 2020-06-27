import React, { useState } from "react"
import { useMutation } from "@apollo/react-hooks"
import styled from "styled-components"
import { FiX, FiAlertCircle } from "react-icons/fi"
import { Modal } from "react-bootstrap"
import { FcCustomerSupport } from "react-icons/fc"

import Fields from "../../forms/fields"
import { CREATE_MEETUP_GROUP as CREATE_MEETUP_GROUP_DATA } from "../../forms/formsData"
import { CREATE_MEETUP_GROUP } from "../../../data/mutations"
import {
  Text,
  Title,
  Hover,
  Section,
  Body,
  Button,
} from "../../../styles/style"

const List = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
`

const CreateGroup = props => {
  const { eventId } = props

  const [createMeetupGroup, { data, loading, error }] = useMutation(
    CREATE_MEETUP_GROUP
  )

  const [Name, setName] = useState("")
  const [Location, setLocation] = useState("")
  const [Alias, setAlias] = useState("")

  function handleChange(value, label) {
    switch (label) {
      case "Meetup Group Name":
        setName(value)
        break
      case "Meetup Group Alias":
        setAlias(value)
        break
      case "Meetup Group Region":
          setLocation(value)
        break  
      default:
        break
    }
  }

  function handleSubmit() {
    createMeetupGroup({
      variables: {
        leadId: localStorage.getItem("user_id"),
        eventId: eventId,
        name: Name,
        alias: Alias,
        location: Location,
      },
    })
      .then(() => alert("Created"))
      .catch(e => console.log(e))
  }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "4rem auto" }}>
      <div
        style={{
          padding: "1rem 1rem",
          height: "auto",
          width: "auto",
          background: "#0e2f5a",
        }}
      >
        <FcCustomerSupport style={{ fontSize: "2.5rem" }} />
      </div>

      <Body>
        <Title bold> New Meetup Group </Title>
        <Text small style={{ padding: "0rem 1rem" }}>
          Meetup groups are a way to manage multiple groups of your event across
          multiple regions. A meetup group inherits the properties of the parent
          event. Control of a meetup group is passed to the team lead who
          manages the group.
        </Text>

        {CREATE_MEETUP_GROUP_DATA.map(({ id, placeholder, label, type }) => {
          return (
            <Fields
              onChange={e => handleChange(e, label)}
              id={id}
              placeholder={placeholder}
              name={label}
              type={type}
              textarea={false}
            />
          )
        })}

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Hover style={{ padding: "0.1rem 0.5rem" }}>
            <FiAlertCircle style={{ fontSize: "1.7rem", color: "grey" }} />
          </Hover>

          <Text center small color="grey">
            Launching <b> Meetup Groups </b> changes the outlook of your Meetup
            inorder to depict multiple groups.
          </Text>
        </div>
        <Text small center color="grey">
          <a style={{ textAlign: "center" }} href="/">
            {" "}
            View Sample{" "}
          </a>
        </Text>

        <div style={{ textAlign: "right", padding: "0rem 2rem" }}>
          <Button onClick={() => handleSubmit()}> Launch {Name} </Button>
        </div>
      </Body>
    </div>
  )
}

export default CreateGroup
