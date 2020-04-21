import React from "react"
import { Modal } from "react-bootstrap"
import { inject, observer } from "mobx-react"
import { FiX, FiSend } from "react-icons/fi"
import Flex from "styled-flex-component"

import { Hover, Head, Section, Body, Input } from "../../styles/style"

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
        <hr />
      </Head>

      <Body>
        <Flex justifyCenter>
          <Flex>
            <Input long placeholder="Email Address" />
            <Hover style={{ paddingTop: "10px" }}>
              <FiSend style={{ fontSize: "2em" }} />
            </Hover>
          </Flex>
        </Flex>
      </Body>
    </Modal>
  )
}

export default inject("ModalStore")(observer(Contact))
