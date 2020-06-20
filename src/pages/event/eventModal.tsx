import React from "react"
import { inject, observer } from "mobx-react"
import { Modal } from "react-bootstrap"
import { FcCustomerSupport } from "react-icons/fc"
import styled from "styled-components"

import { Contain, Text, Body, Button, Title, Hover } from "../../styles/style"

const Items = styled.div`
  padding : 0rem 1rem
  li {
    margin : 1rem 0rem
    list-style: none
  }
`

const EventModal = props => {
  const { welcomeEventModal, closeWelcomeEventModal } = props.ModalStore

  return (
    <Modal
      size="lg"
      onHide={() => closeWelcomeEventModal()}
      style={{ marginTop: "3rem" }}
      show={welcomeEventModal}
    >
      <div style={{ display: "grid", gridTemplateColumns: "5rem 90%" }}>
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
              onClick={() => closeWelcomeEventModal()}
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
            <Title bold> New Oasis Event Prep Up! </Title>
            <hr />
            <Text style={{ padding: "0rem 1rem" }}>
              We are stoked and excited watching you plan and launch your next
              event with Oasis. <br /> <br />
              Inorder to help you make the best of Oasis, here is rundown of the
              awesomeness that Oasis has to offer!
            </Text>

            <Items>
              <li>
                <Text small> Edit Event</Text>
              </li>

              <li>
                <Text small> Acess Management</Text>
              </li>

              <li>
                <Text small> Mobile Interface</Text>
              </li>

              <li>
                <Text small> Invitations </Text>{" "}
              </li>

              <li>
                <Text small> Team Support</Text>
              </li>

              <li>
                <Text small> Event Schedule</Text>
              </li>

              <li>
                <Text small> Store </Text>
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
