import React, { useState } from "react"
import { Modal } from "react-bootstrap"
import { FiX, FiPlus } from "react-icons/fi"
import { IoMdConstruct } from "react-icons/io"
import Flex from "styled-flex-component"
import { useMutation } from "@apollo/react-hooks"

import {
  Hover,
  Title,
  Text,
  Section,
  Button,
  Head,
  Body,
} from "../../styles/style"

import { Switch } from "../../components/"
const Access = props => {
  const { accessModal, closeAccessModal } = props
  const [HideActive, setHideActive] = useState<boolean>(false)
  const [LockActive, setLockActive] = useState<boolean>(false)
  const [VolunteerAcessActive, setVolunteerTab] = useState<boolean>(false)

  const switchClick = (value, name) => {
    switch (name) {
      case "accept-attendees":
        if (value === "on") {
          setHideActive(true)
        }

        break
      case "access":
        if (value === "on") {
          setHideActive(true)
        }

        break
      case "hide-tab":
        if (value === "on") {
          setLockActive(true)
        }

        break
      case "lock-event":
        if (value === "on") {
          setVolunteerTab(true)
        }

        break
      default:
        break
    }
  }

  return (
    <Modal
      size="xl"
      style={{ marginTop: "3rem" }}
      show={accessModal}
      onHide={closeAccessModal}
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
          <IoMdConstruct style={{ fontSize: "2rem", color: "#fff" }} />
        </div>

        <div>
          <Head>
            <Section>  Event Actions </Section>
            <Hover onClick={() => closeAccessModal()}>
              <FiX style={{ fontSize: "1.8rem" }} />
            </Hover>
          </Head>

          <Body>
            <Title small> Community Involvement </Title>
            <hr />
            <Flex justifyBetween>
              <Text small style={{ padding: "0rem 0.5rem" }}>
                Allow viewers to register for event
              </Text>

              <Switch
                color={"#120B6A"}
                handleClick={switchClick}
                name="accept-attendees"
              />
            </Flex>
          </Body>

          <Body>
            <Title small> Event Console Access </Title>
            <hr />
            <Flex justifyBetween>
              <Text small  style={{ padding: "0rem 0.5rem" }}>
                Grant Console Access to volunteers
              </Text>

              <Switch
                color={"#120B6A"}
                handleClick={switchClick}
                name="access"
              />
            </Flex>

            <Flex justifyBetween>
              <Text small style={{ padding: "0rem 0.5rem" }}>Grant Console Access</Text>

              <Text small style={{ cursor: "pointer", color: "blue" }}>
                Grant Permission
              </Text>
            </Flex>
          </Body>

          <Body>
            <Title small> Attendees and Volunteers </Title>
            <hr />

            <Flex justifyBetween>
              <Text small style={{ padding: "0rem 0.5rem" }}>
                Hide list of volunteers and attendees tab.
              </Text>

              <Switch
                color={"#120B6A"}
                handleClick={switchClick}
                name="hide-tab"
              />
            </Flex>
          </Body>

          <Body>
            <Title small> Mobile Event Lock </Title>
            <hr />

            <Flex justifyBetween>
              <Text  style={{ padding: "0rem 0.5rem" }} small>
                Lock event details on mobile device until event date.
              </Text>

              <Switch
                color={"#120B6A"}
                handleClick={switchClick}
                name="lock-event"
              />
            </Flex>
          </Body>

           <Body>
            <Title small> Actions </Title>
            <hr />

            <Flex justifyBetween>
              <Text  style={{ padding: "0rem 0.5rem" }} small>
                Delete Event. This Irrevisble, we advise you archive your event and pull out of archive later!
              </Text>

              <Switch
                color={"#120B6A"}
                handleClick={switchClick}
                name="lock-event"
              />
            </Flex>
            <Flex justifyBetween>
              <Text  style={{ padding: "0rem 0.5rem" }} small>
                Archive Event. Suspend your event until a later time.
              </Text>

              <Switch
                color={"#120B6A"}
                handleClick={switchClick}
                name="lock-event"
              />
            </Flex>
          </Body>
          <br />
        </div>
      </div>
    </Modal>
  )
}

export default Access
