import React, { useState } from "react"
import Flex from "styled-flex-component"
import { FiFacebook } from "react-icons/fi"
import { inject, observer } from "mobx-react"
import styled from "styled-components"
import { Modal } from "react-bootstrap"
import { FcCustomerSupport } from "react-icons/fc"
import { useMutation } from "@apollo/react-hooks"

import { UPDATE_SETTINGS } from "../../../data/mutations"
import {
  Hover,
  Contain,
  Text,
  Body,
  Title,
  Button,
  BigTitle,
} from "../../../styles/style"

const Items = styled.div`
  padding: 0rem 1rem;
  li {
    list-style: none;
    margin: 1rem 0rem;
  }
`

const WelcomeMeetupGroups = (props): JSX.Element => {
  const { close, show, eventId } = props

  const {
    id,
    showTeamInstruction,
    showWelcomeMeetupGroup,
    showInvitationInstruction,
    showWelcomeEventInstruction,
    eventThemeColour,
  } = props.data

  const [ModalVisibility, setModalVisibility] = useState(showWelcomeMeetupGroup)
  const [updateEventModals, { error }] = useMutation(UPDATE_SETTINGS)

  const update = value => {
    updateEventModals({
      variables: {
        settingsId: id,
        eventId: eventId,
        welcomeEventInstruction: showWelcomeEventInstruction,
        teamInstruction: showTeamInstruction,
        welcomeMeetupGroup: value,
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
      onHide={() => update(false)}
      style={{ marginTop: "3rem" }}
      show={show}
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
              onClick={() => update(false)}
              color="grey"
              style={{
                textAlign: "right",
                cursor: "pointer",
                padding: "0rem 1rem",
              }}
            >
              Skip
            </Text>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                alt="Congratulations"
                src={require("../../../assets/images/party-hat.png")}
                style={{ height: "auto", maxWidth: "10%" }}
              />
            </div>

            <Title center bold>
              Yay! Your Event has now been distributed!
            </Title>

            <Text center style={{ padding: "0rem 1rem" }}>
              We are glad watching you manage and launch your meetup across
              different regions while using Oasis. <br /> <br />
            </Text>
            <hr />

            <Text small center style={{ padding: "0rem 1rem" }}>
              Launching a new Meetup group within a Meetup event type has
              therefore made the following changes to your event
            </Text>

            <br />
            <Title small> Event Structure </Title>
            <hr />

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

export default WelcomeMeetupGroups
