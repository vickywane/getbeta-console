import React from "react"
import { Modal } from "react-bootstrap"
import { inject, observer } from "mobx-react"
import { FiX } from "react-icons/fi"
import Flex from "styled-flex-component"

import { Hover, Head, Section, Body } from "../../styles/style"

const Checklist = props => {
  const { showChecklist, closeChecklist } = props.ModalStore
  return (
    <Modal
      size="lg"
      style={{ marginTop: "5%" }}
      onHide={() => closeChecklist()}
      show={showChecklist}
    >
      <Head>
        <Flex justifyBetween>
          <Section> CheckList </Section>

          <Hover onClick={() => closeChecklist()}>
            <FiX style={{ fontSize: "1.7em" }} />
          </Hover>
        </Flex>
        <hr />
      </Head>

      <Body>
        <p> Event Checklist </p>
      </Body>
    </Modal>
  )
}

export default inject("ModalStore")(observer(Checklist))
