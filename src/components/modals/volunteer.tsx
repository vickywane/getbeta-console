import React from "react"
import { Modal } from "react-bootstrap"
import { inject, observer } from "mobx-react"
import { FiX, FiSend } from "react-icons/fi"
import Flex from "styled-flex-component"

import {
  Hover,
  Head,
  Section,
  Body,
  BigInput,
  Text,
  Button,
} from "../../styles/style"

const Volunteer = props => {
  const { showVolunteerModal, closeVolunteerModal, EventID } = props

  return (
    <Modal
      size="lg"
      style={{ marginTop: "5%" }}
      onHide={() => closeVolunteerModal()}
      show={showVolunteerModal}
    >
      <Head>
        <Flex justifyBetween>
          <Section> Volunteer for {EventID}</Section>

          <Hover onClick={() => closeVolunteerModal()}>
            <FiX style={{ fontSize: "1.75em" }} />
          </Hover>
        </Flex>
      </Head>

      <Body>
        <Text small>
          EXAMPLE_EVENT is currently seeking volunteers to fill out the
          following roles during the EXAMPLE_EVENT_NAME.
        </Text>
        <Text> Available Roles </Text>

        <br />

        <div style={{ border: "1px solid grey", padding: "0.7rem 1rem" }}>
          <Text> Incentives </Text>
        </div>
        <br />

        <Text> Pick a time slot </Text>

        <br />
        <BigInput small placeholder="Tell us about yourself" />
        <br />
        <Flex justifyCenter>
          <Button long> Submit Application </Button>
        </Flex>
      </Body>
    </Modal>
  )
}

export default Volunteer
