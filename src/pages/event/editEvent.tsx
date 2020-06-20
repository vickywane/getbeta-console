import React, { useState } from "react"
import { Modal } from "react-bootstrap"
import { inject, observer } from "mobx-react"
import { FiX, FiSend, FiEdit } from "react-icons/fi"
import Flex from "styled-flex-component"
import { useMutation } from "@apollo/react-hooks"
import { CSSTransition } from "react-transition-group"

import Media from "./media"
import {
  Hover,
  Head,
  Label,
  Section,
  Body,
  Input,
  Tab,
  TabColumn,
  Text,
  Button,
} from "../../styles/style"
import { UPDATE_EVENT } from "../../data/mutations"
import { CREATE_EVENT_INPUT } from "../../pages/forms/formsData"
import Field from "../../pages/forms/fields"

const EditEvent = props => {
  const { editEventModal, closeEditModal } = props.ModalStore
  const { eventData } = props

  const [ActiveColumn, setActiveColumn] = useState("forms")

  const [Name, setName] = useState("")
  const [Alias, setAlias] = useState("")
  const [Description, setDescription] = useState("")
  const [Website, setWebsite] = useState("")
  const [Summary, setSummary] = useState("")
  const [Venue, setVenue] = useState("")
  const [NewEmail, setEmail] = useState("")
  const [EventType, setEventType] = useState("")

  const {
    id,
    name,
    eventType,
    alias,
    website,
    Email,
    description,
    summary,
  } = eventData.event
  const { first, second, third } = CREATE_EVENT_INPUT
  const [updateEvent, { data }] = useMutation(UPDATE_EVENT)

  const handleChange = (value, label) => {
    switch (label) {
      case "Event Name":
        setName(value)
        break
      case "Event Alias":
        setAlias(value)
        break
      case "Event Brand Page":
        setWebsite(value)
        break
      case "Event Support Email":
        setEmail(value)
        break
      case "Event Description":
        setDescription(value)
        break
      case "Event Summary":
        setSummary(value)
        break
      case "Event-Venue":
        setVenue(value)
        break
      default:
        console.log(label)
    }
  }

  const SubmitData = () => {
    updateEvent({
      variables: {
        id: id,
        name: Name,
        website: Website,
        alias: Alias,
        description: Description,
        Email: NewEmail,
        venue: Venue,
        Date: 11,
        eventType: EventType,
        summary: Summary,
      },
    })
      .then(() => {
        alert("update")
      })
      .catch(e => {
        console.log(e)
        // setError(e.graphQLErrors[0].message)
      })
  }

  return (
    <div>
      <Head style={{ padding: "1.5rem 0rem" }} header>
        <Flex>
          <Hover style={{ padding: "0rem 1rem" }}>
            <FiEdit style={{ fontSize: "1.75em" }} />
          </Hover>

          <Section>
            Edit {name} {eventType}
          </Section>
        </Flex>

        <Tab>
          <TabColumn
            onClick={() => setActiveColumn("forms")}
            active={ActiveColumn === "forms"}
          >
            Details
          </TabColumn>

          <TabColumn
            onClick={() => setActiveColumn("media")}
            active={ActiveColumn === "media"}
          >
            Media Assets
          </TabColumn>

          <TabColumn
            onClick={() => setActiveColumn("media")}
            active={ActiveColumn === "sponsors"}
          >
            Event Sponsors
          </TabColumn>
        </Tab>
      </Head>

      <CSSTransition timeout={300} unmountOnExit in={ActiveColumn === "forms"}>
        <Body>
          <Body>
            {first.map(({ id, label, placeholder, textarea }) => {
              return (
                <Field
                  key={id}
                  id={label}
                  name={label}
                  type={"text"}
                  textarea={textarea}
                  value={label == "Event Name" ? Name : Alias}
                  onChange={e => handleChange(e, label)}
                  placeholder={label == "Event Name" ? name : alias}
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
                  value={label == "Event Brand Page" ? Website : NewEmail}
                  onChange={e => handleChange(e, label)}
                  placeholder={label == "Event Brand Page" ? website : Email}
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
                  value={label === "Event Description" ? Description : Summary}
                  onChange={e => handleChange(e, label)}
                  placeholder={
                    label === "Event Description" ? description : summary
                  }
                />
              )
            })}

            <Section>Media Links</Section>
            <Flex justifyBetween>
              <Label>
                Facebook
                <div>
                  {" "}
                  <input placeholder="Facebook" />
                </div>
              </Label>
              <Label>
                Twitter
                <div>
                  {" "}
                  <input placeholder="Twitter" />
                </div>
              </Label>
              <Label>
                Instagran
                <div>
                  {" "}
                  <input placeholder="Instagran" />
                </div>
              </Label>
            </Flex>
          </Body>
          <Flex justifyCenter>
            <Button onClick={() => SubmitData()} long>
              Update Event
            </Button>
          </Flex>
        </Body>
      </CSSTransition>

      <CSSTransition timeout={300} unmountOnExit in={ActiveColumn === "media"}>
        <Media eventId={id} />
      </CSSTransition>

      <br />
    </div>
  )
}

export default inject("ModalStore")(observer(EditEvent))
