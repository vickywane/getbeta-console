import React, { useState } from "react"
import Flex from "styled-flex-component"
import styled from "styled-components"
import { FiSearch, FiClock, FiCalendar, FiX, FiBook } from "react-icons/fi"
import media from "styled-media-query"
import { Modal } from "react-bootstrap"
import { inject, observer } from "mobx-react"
import { useMutation } from "@apollo/react-hooks"

import { UPDATE_EVENT } from "../../data/mutations"
import { TALK_GUIDELINE } from "../../pages/forms/formsData"
import Fields from "../../pages/forms/fields"
import { Switch } from "../../components/"
import {
  Grid,
  Body,
  ScheduleCard,
  Button,
  Notification,
  Text,
  Hover,
  Head,
  Section,
  Title,
} from "../../styles/style"

const PapersModal = props => {
  const { showPapersModal, closePapersModal } = props.ModalStore

  const {
    name,
    eventType,
    Email,
    isAcceptingTalks,
    venue,
    alias,
    id,
    website,
    EventDate,
    summary,
    description,
  } = props.data

  const [Guidelines, setGuidlines] = useState("")
  const [Conduct, setConduct] = useState("")
  const [AcceptTalks, setAcceptTalks] = useState(isAcceptingTalks)

  const onChange = (value, label) => {
    switch (label) {
      case "Talk Guideline":
        setGuidlines(value)
        break
      case "Speakers Code of Conduct":
        setConduct(value)
        break
      default:
        break
    }
  }

  const [updateEvent, {}] = useMutation(UPDATE_EVENT)

  const handleUpdate = () => {
    updateEvent({
      variables: {
        id: id,
        name: name,
        isAcceptingTalks: AcceptTalks,
        speakerConduct: Conduct,
        website: website,
        alias: alias,
        description: description,
        Email: Email,
        venue: venue,
        eventType: eventType,
        summary: summary,
        EventDate: EventDate,
        isVirtual: false,
        isLocked: false,
        isArchived: false,
        isAcceptingVolunteers: false,
      },
    })
      .then(() => closePapersModal())
      .catch(e => console.log(e))
  }

  const switchClick = (value, name) => {
    switch (name) {
      case "draft-control":
        if (value === "on") {
          setAcceptTalks(!AcceptTalks)
        }
      default:
        break
    }
  }

  return (
    <Modal
      show={showPapersModal}
      onHide={() => closePapersModal()}
      style={{ marginTop: "3rem" }}
      size={"xl"}
    >
      <div style={{ display: "grid", gridTemplateColumns: "5rem auto" }}>
        <div
          style={{
            padding: "1rem 1rem",
            height: "auto",

            width: "auto",
            background: "#0e2f5a",
          }}
        >
          <FiBook style={{ fontSize: "2rem", color: "#fff" }} />
        </div>

        <div>
          <Head>
            <Section>Call For Papers</Section>
            <Hover onClick={() => closePapersModal()}>
              <FiX style={{ fontSize: "1.8rem" }} />
            </Hover>
          </Head>

          <Body>
            <Flex>
              <Switch
                color={"#120B6A"}
                handleClick={switchClick}
                name="draft-control"
              />
              <Text style={{ padding: "0rem 1rem" }}>
                {!AcceptTalks ? "Open" : "Close"} Call For Speakers{" "}
              </Text>
            </Flex>

            <br />
            {TALK_GUIDELINE.map(
              ({ id, limit, placeholder, label, type, textarea }) => {
                return (
                  <Fields
                    onChange={e => onChange(e, label)}
                    id={id}
                    placeholder={placeholder}
                    name={label}
                    type={type}
                    limit={limit}
                    textarea={textarea}
                  />
                )
              }
            )}
            <br />

            <Flex justifyCenter>
              <Button onClick={() => handleUpdate()}>
                {" "}
                Update Call For Papers{" "}
              </Button>
            </Flex>
          </Body>
        </div>
      </div>
    </Modal>
  )
}

export default inject("ModalStore")(observer(PapersModal))
