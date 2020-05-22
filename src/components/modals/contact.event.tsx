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
  Input,
  Text,
  Button,
} from "../../styles/style"

const Contact = props => {
  const { showContactModal, closeContactModal } = props.ModalStore

  return (
    <Modal
      size="lg"
      style={{ marginTop: "5%" }}
      onHide={() => closeContactModal()}
      show={showContactModal}
    >
      <Head>
        <Flex justifyBetween>
          <Section> Contact Support </Section>

          <Hover onClick={() => closeContactModal()}>
            <FiX style={{ fontSize: "1.75em" }} />
          </Hover>
        </Flex>
      </Head>

      <Body>
        <Flex>
          <Text style={{ padding: "0rem 1rem" }}> To : </Text>
          <Text> {props.email}</Text>
        </Flex>
        <br />
        <Input placeholder="Type in your message. " />
        <br />
        <Flex justifyCenter>
          <Button long> Send Message </Button>
        </Flex>
      </Body>
    </Modal>
  )
}

export default inject("ModalStore")(observer(Contact))
