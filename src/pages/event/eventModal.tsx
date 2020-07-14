import React, { useState, useEffect } from "react"
import { inject, observer } from "mobx-react"
import { Modal } from "react-bootstrap"
import { FcCustomerSupport } from "react-icons/fc"
import styled from "styled-components"
import { useMutation } from "@apollo/react-hooks"

import { UPDATE_SETTINGS } from "../../data/mutations"
import {
  Contain,
  Text,
  Body,
  Button,
  Title,
  Hover,
  Label,
} from "../../styles/style"

const Items = styled.div`
  padding: 0rem 1rem li {
    margin: 1rem 0rem;
  }
`

const EventModal = props => {
  const { show, eventId, data } = props

  const {
    id,
    showTeamInstruction,
    showWelcomeMeetupGroup,
    showInvitationInstruction,
    showWelcomeEventInstruction,
    eventThemeColour,
  } = data.settings[0]

  const [ModalVisibility, setModalVisibility] = useState(
    showWelcomeEventInstruction
  )
  const [updateEventModals, { error }] = useMutation(UPDATE_SETTINGS)

  const update = () => {
    updateEventModals({
      variables: {
        settingsId: id,
        eventId: eventId,
        welcomeEventInstruction: false,
        teamInstruction: showTeamInstruction,
        welcomeMeetupGroup: showWelcomeMeetupGroup,
        invitationInstruction: showInvitationInstruction,
        eventTheme: eventThemeColour,
      },
    })
      .then(() => {
        setModalVisibility(!ModalVisibility)
      })
      .catch(e => console.log(e))
  }

  return (
    <Modal
      size="xl"
      onHide={() => {
        update()
      }}
      style={{ marginTop: "3rem" }}
      show={ModalVisibility}
    >
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
          <div>
            <Text
              onClick={() => {
                update()
              }}
              color="grey"
              style={{
                textAlign: "right",
                cursor: "pointer",
                padding: "0rem 1rem",
              }}
            >
              Skip
            </Text>
            <br />

            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                alt="Congratulations"
                src={require("../../assets/ssvg/calendar.svg")}
                style={{ height: "auto", maxWidth: "10%" }}
              />
            </div>

            <Title center bold>
              Congratulations On Your New Event!{" "}
            </Title>

            <Text center style={{ padding: "0rem 1rem" }}>
              We are stoked and excited watching you plan and launch your next
              event with Oasis. <br /> <br />
            </Text>
            <hr />

            <Text small center style={{ padding: "0rem 1rem" }}>
              Here is quick rundown of things we would like you to take note of
              while using your Oasis console.
            </Text>

            <br />
            <Title small>Default Actions</Title>
            <hr />
            <Text>
              We believe it takes a period of time to properly plan an event.
              Hence , Oasis steps in while you make your arrangements. The
              following default actions can be changed from your{" "}
              <b> Event Actions </b> pane.
            </Text>

            <Items>
              <li>
                <Text small>
                  Volunteer Support is closed until event details have been
                  finalised.
                </Text>
              </li>

              <li>
                <Text small>
                  Talk submissions are closed until the Call For Speakers
                  support is configured and a Code of Conduct for Speakers is
                  added.
                </Text>
              </li>

              <li>
                <Text small>
                  Event Details would not be visible until a selected mobile
                  interface is choosen{" "}
                </Text>
              </li>
            </Items>

            <br />
          </div>
        </Body>
      </div>
    </Modal>
  )
}

export default inject("ModalStore")(observer(EventModal))
