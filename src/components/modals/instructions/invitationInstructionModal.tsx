import React, { useState } from "react"
import { Modal } from "react-bootstrap"
import styled from "styled-components"
import { FiX } from "react-icons/fi"
import { useMutation } from "@apollo/react-hooks"

import { Body as Bod, Text, Hover, Title, Button } from "../../../styles/style"
import { UPDATE_SETTINGS } from "../../../data/mutations"

const List = styled.div`
  h4 {
    font-weight: 600;
    font-size: 1.4rem;
  }
  li {
    list-style: none;
    padding: 0.5rem 1rem;
    margin: 1.5rem 0.5rem;
    border: 2px solid violet;
    border-radius: 5px;
    h5 {
      cursor: pointer;
      font-weight: 500;
      font-size: 1.3rem;
    }
  }
`

const Body = styled(Bod)`
  padding: 0.7rem 1.5rem;
`

const InvitationModalInstruction = (props): JSX.Element => {
  const { data, eventId } = props

  const {
    id,
    showTeamInstruction,
    showWelcomeMeetupGroup,
    showInvitationInstruction,
    showWelcomeEventInstruction,
    eventThemeColour,
  } = data

  const [ModalVisibility, setModalVisibility] = useState(
    showInvitationInstruction
  )

  const [updateEventModals, { error }] = useMutation(UPDATE_SETTINGS)

  const Update = (value: boolean) => {
    updateEventModals({
      variables: {
        settingsId: id,
        eventId: eventId,
        welcomeEventInstruction: showWelcomeEventInstruction,
        teamInstruction: showTeamInstruction,
        welcomeMeetupGroup: showWelcomeMeetupGroup,
        invitationInstruction: value,
        eventTheme: eventThemeColour,
      },
    })
      .then(() => setModalVisibility(false))
      .catch(e => console.log(e))
  }

  return (
    <Modal
      show={ModalVisibility}
      onHide={() => Update(false)}
      size="lg"
      style={{ marginTop: "3rem" }}
    >
      <Body>
        <Hover style={{ textAlign: "right" }}>
          <Text onClick={() => Update(false)} small color="grey">
            Skip{" "}
          </Text>
        </Hover>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              alt="email"
              src={require("../../../assets/ssvg/Email.svg")}
              style={{ maxWidth: "16%" }}
            />
          </div>
          <Title center small>
            Custom Event Invitations{" "}
          </Title>
        </div>
        <Text small center>
          Send, Compose and monitor email invitations sent to your event
          attendees. You could even broadcast hundred of mails or add them to a
          list.
        </Text>
        <List>
          <h4>Recommended Invitations :</h4>
          <hr />

          <li>
            <h5>Attendees Invitations</h5>
            <Text small> Send invitations to attendees and peple </Text>
          </li>

          <li>
            <h5>Attendees Invitations</h5>
            <Text small> Send email invitations to some people </Text>
          </li>

          <li>
            <h5>Attendees Invitations</h5>
            <Text small> Send email invitations to some people </Text>
          </li>
        </List>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button long>Create Sample Invitations</Button>
        </div>
      </Body>
    </Modal>
  )
}

export default InvitationModalInstruction
