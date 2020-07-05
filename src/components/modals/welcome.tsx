import React from "react"
import { CSSTransition } from "react-transition-group"
import { inject, observer } from "mobx-react"
import Flex from "styled-flex-component"
import { FiX } from "react-icons/fi"
import { FcCustomerSupport } from "react-icons/fc"

import {
  Body,
  Hover,
  MyCard,
  Text,
  Button,
  Head,
  Title,
} from "../../styles/style"

import "../../App.css"

const Welcome = (props): JSX.Element => {
  const { showWelcomeModal, closeWelcomeModal } = props.ModalStore
  const [show, setShow] = React.useState(showWelcomeModal)
  const { username } = props

  return (
    <CSSTransition
      timeout={300}
      in={showWelcomeModal}
      classNames={"welcome"}
      unmountOnExit
    >
      <Flex justifyCenter>
        <MyCard center>
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

            <div>
              <Text
                onClick={() => closeWelcomeModal(!showWelcomeModal)}
                color="grey"
                style={{
                  textAlign: "right",
                  cursor: "pointer",
                  padding: "1rem 2rem",
                }}
              >
                Skip
              </Text>

              <Title bold>Hi {username} , </Title>

              <Flex justifyCenter>
                <img
                  alt="Congratulations hat"
                  style={{ height: "auto", maxWidth: "20%" }}
                  src={require("../../assets/images/party-hat.png")}
                />
              </Flex>
              <Body>
                <Title center bold>
                  Welcome To Oasis!
                </Title>
                <Text small>
                  We are stoked to see you join Oasis in imporving the event
                  experience as an end user.
                  <br />
                  <br />
                   We aim to improve events by
                  providing a means for Small and Large Conferences, Meetups and
                  groups to leverage our Open Sourced platform in making their
                  event public and fully managed.
                  <br />

                  <br />
                  While not organizing events, you can leverage Oasis to create
                  and review your personal talk drafts. These drafts can be
                  submitted to events when applying as a Speaker.
                  <br />
                </Text>
              </Body>

              <Flex justifyCenter>
                <Button
                  long
                  onClick={() => closeWelcomeModal(!showWelcomeModal)}
                >
                  I understand{" "}
                </Button>
              </Flex>
              <br />
              <br />
            </div>
          </div>
        </MyCard>
      </Flex>
    </CSSTransition>
  )
}

export default inject("ModalStore")(observer(Welcome))
