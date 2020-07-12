import React, { useState } from "react"
import { useMutation } from "@apollo/react-hooks"
import styled from "styled-components"
import { FiX, FiAlertCircle } from "react-icons/fi"
import { Modal } from "react-bootstrap"
import { FcCustomerSupport } from "react-icons/fc"

import Field from "../../forms/fields"
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

  const [Name, setName] = useState<string>("")
  const [Location, setLocation] = useState<string>("")
  const [Alias, setAlias] = useState<string>("")
  const [Email, setEmail] = useState<string>("")
  const [Website, setWebsite] = useState<string>("")
  const [Description, setDescription] = useState<string>("")

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
      case "Meetup Group Description":
        setDescription(value)
        break
      case "Meetup Group Website":
        setWebsite(value)
        break
      case "Meetup Group Email":
        setEmail(value)
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
        email: Email,
        website: Website,
        description: Description,
      },
    })
      .then(() => alert("Created"))
      .catch(e => console.log(e))
  }
  const { first, second, third } = CREATE_MEETUP_GROUP_DATA

  return (
    <Body>
      <Text small style={{ padding: "0rem 1rem" }}>
        Meetup groups are a way to manage multiple groups of your event across
        multiple regions. A meetup group inherits the properties of the parent
        event. Control of a meetup group is passed to the team lead who manages
        the group.
      </Text>

      {first.map(({ id, label, placeholder, textarea }) => {
        return (
          <Field
            key={id}
            id={label}
            name={label}
            type={"text"}
            textarea={textarea}
            value={label == "Meetup Group Name" ? Name : Description}
            onChange={e => handleChange(e, label)}
            placeholder={placeholder}
          />
        )
      })}

      {third.map(({ id, label, placeholder, textarea }) => {
        return (
          <Field
            key={id}
            id={label}
            name={label}
            type={"text"}
            textarea={textarea}
            onChange={e => handleChange(e, label)}
            value={label == "Meetup Group Alias" ? Alias : Location}
            placeholder={placeholder}
          />
        )
      })}

      {second.map(({ id, label, limit, placeholder, textarea }) => {
        return (
          <Field
            key={id}
            id={label}
            limit={limit}
            name={label}
            type={"text"}
            textarea={textarea}
            value={label === "Meetup Group Email" ? Email : Website}
            onChange={e => handleChange(e, label)}
            placeholder={placeholder}
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
  )
}

export default CreateGroup
