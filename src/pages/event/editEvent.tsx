import React, { useState } from "react"
import { Modal } from "react-bootstrap"
import { inject, observer } from "mobx-react"
import {
  FiX,
  FiSend,
  FiEdit,
  FiFacebook,
  FiTwitter,
  FiInstagram,
} from "react-icons/fi"
import Flex from "styled-flex-component"
import { useMutation } from "@apollo/react-hooks"
import { CSSTransition } from "react-transition-group"
import styled from "styled-components"

import Media from "./media"
import SponsorsControl from "./sponsors.control"
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

const CInput = styled.div`
  display: flex;
  padding: 0rem;
  border: 1px solid grey;
  border-radius: 5px;
  input {
    width: 27rem;
    border: 0px;
    height: auto;
    padding: 0.5rem 1.5rem;
    outline: 0px;
  }
`

const InputGrid = styled.div`
  display: grid;
  grid-gap: 3rem 3rem;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
`

const EditEvent = (props): JSX.Element => {
  const [ActiveColumn, setActiveColumn] = useState("forms")

  const { editEventModal, closeEditModal } = props.ModalStore
  const { eventData } = props
  const {
    id,
    name,
    eventType,
    alias,
    website,
    Email,
    description,
    venue,
    isVirtual,
    speakerConduct, // null when not updated
    confirmedEmail,
    isArchived,
    isLocked,
    EventDate, // null
    isAcceptingVolunteers,
    isAcceptingTalks,
    summary,
  } = eventData.event

  const [Name, setName] = useState<string>(name)
  const [Alias, setAlias] = useState<string>(alias)
  const [Description, setDescription] = useState<string>(description)
  const [Website, setWebsite] = useState<string>(website)
  const [Summary, setSummary] = useState<string>(summary)
  const [Venue, setVenue] = useState<string>(venue)
  const [NewEmail, setEmail] = useState<string>(Email)
  const [EventType, setEventType] = useState<string>(eventType)

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
    console.table([
      id,
      name,
      eventType,
      alias,
      website,
      Email,
      description,
      venue,
      isVirtual,
      speakerConduct, // is undefined
      confirmedEmail, // is undefined
      isArchived,
      isLocked,
      EventDate,
      isAcceptingVolunteers, // is undefined
      isAcceptingTalks,
      summary,
    ])

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
        isVirtual: isVirtual,
        isLocked: isLocked,
        isArchived: isArchived,
        isAcceptingVolunteers: isAcceptingVolunteers,
        speakerConduct: speakerConduct,
        confirmedEmail: confirmedEmail,
        eventType: EventType,
        summary: Summary,
        EventDate: EventDate,
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Hover style={{ padding: "0rem 0.7rem" }}>
            <FiEdit style={{ fontSize: "1.75em" }} />
          </Hover>

          <Section>Edit {eventType}</Section>
        </div>

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
            onClick={() => setActiveColumn("sponsors")}
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

            <Body>
              <Section>Media Links</Section>
              <br />

              <InputGrid>
                <CInput>
                  <Hover
                    style={{
                      padding: "0.6rem 0.5rem",
                      background: "#fbfbfb",
                      color: "#0e2f5a",
                      borderRadius: "5px 0px 0px 5px",
                    }}
                  >
                    <FiTwitter style={{ fontSize: "1.7rem" }} />{" "}
                  </Hover>

                  <input placeholder="Twitter profile url" />
                </CInput>

                <CInput>
                  <Hover
                    style={{
                      padding: "0.6rem 0.5rem",
                      background: "#fbfbfb",
                      color: "#0e2f5a",
                      borderRadius: "5px 0px 0px 5px",
                    }}
                  >
                    <FiFacebook style={{ fontSize: "1.7rem" }} />{" "}
                  </Hover>

                  <input placeholder="Facebook profile url" />
                </CInput>

                <CInput>
                  <Hover
                    style={{
                      padding: "0.6rem 0.5rem",
                      background: "#fbfbfb",
                      color: "#0e2f5a",
                      borderRadius: "5px 0px 0px 5px",
                    }}
                  >
                    <FiInstagram style={{ fontSize: "1.7rem" }} />{" "}
                  </Hover>

                  <input placeholder="Instagram profile url" />
                </CInput>
              </InputGrid>
            </Body>
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

      <CSSTransition
        timeout={300}
        unmountOnExit
        in={ActiveColumn === "sponsors"}
      >
        <SponsorsControl eventId={id} />
      </CSSTransition>
      <br />
    </div>
  )
}

export default inject("ModalStore")(observer(EditEvent))
