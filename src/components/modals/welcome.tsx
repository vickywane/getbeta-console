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

const Welcome = props => {
  const { showWelcomeModal, closeWelcomeModal } = props.ModalStore
  const [show, setShow] = React.useState(showWelcomeModal)

  return (
    <CSSTransition
      timeout={300}
      in={showWelcomeModal}
      classNames={"welcome"}
      unmountOnExit
    >
      <Flex justifyCenter>
        <MyCard center>
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

            <div>
              <br />
              <Text
                onClick={() => closeWelcomeModal(!showWelcomeModal)}
                color="grey"
                style={{
                  textAlign: "right",
                  cursor: "pointer",
                  padding: "0rem 1rem",
                }}
              >
                Skip
              </Text>

              <Title bold>Hi There, </Title>
              <Body>
                <Text small>
                  Welcome to the Oasis, here are our terms and conditions here
                  are our terms and conditions here are our terms and conditions
                  here are our terms and conditions here are our terms and
                  <br />
                  <br />
                  Welcome to the Oasis, here are our terms and conditions here
                  are our terms and conditions here are our terms and conditions
                  here are our terms and conditions here are our terms and
                  <br />
                  <br />
                  Welcome to the Oasis, here are our terms and conditions here
                  are our terms and conditions here are our terms and conditions
                  here are our terms and conditions here are our terms and
                </Text>
              </Body>

              <Flex justifyCenter>
                <Button
                  long
                  onClick={() => {
                    setShow(!show)
                  }}
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
