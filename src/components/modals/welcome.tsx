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
                  padding: "2rem 2rem",
                }}
              >
                Skip
              </Text>

              <Title bold>Hi There, </Title>

              <Flex justifyCenter>
                <img
                  alt="Congratulations hat"
                  style={{ height: "auto", maxWidth: "25%" }}
                  src={require("../../assets/images/party-hat.png")}
                />
              </Flex>
              <Body>
                <Title center bold>
                  Welcome To Oasis 
                </Title>
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
