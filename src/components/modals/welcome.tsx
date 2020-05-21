import React from "react"
import { CSSTransition } from "react-transition-group"
import { inject, observer } from "mobx-react"
import Flex from "styled-flex-component"
import { FiX } from "react-icons/fi"

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
      in={show === true}
      classNames={"welcome"}
      unmountOnExit
    >
      <Flex justifyCenter>
        <MyCard center>
          <Head>
            <Title bold small center>
              {" "}
              Welcome To Oasis
            </Title>
          </Head>

          <Body>
            <Text center>
              Welcome to the Oasis, here are our terms and conditions here are
              our terms and conditions here are our terms and conditions here
              are our terms and conditions here are our terms and conditions
              here are our terms and conditions here are our terms and
              conditions here are our terms and conditions here are our terms
              and conditions here are our terms and conditions here are our
              terms and conditions here are our terms and conditions here are
              our terms and conditions here are our terms and conditions here
              are our terms and conditions here are our terms and conditions
              here are our terms and conditions here are our terms and
              conditions here are our terms and conditions here are our terms
              and conditions here are our terms and conditions here are our
              terms and conditions here are our terms and conditions{" "}
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
        </MyCard>
      </Flex>
    </CSSTransition>
  )
}

export default inject("ModalStore")(observer(Welcome))
