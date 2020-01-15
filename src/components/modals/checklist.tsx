import React from "react"
import { Modal } from "react-bootstrap"
import { inject, observer } from "mobx-react"
import { FiX } from "react-icons/fi"
import Flex from "styled-flex-component"

import { Hover, Head } from "../../styles/style"

const Checklist = props => {
  const { showChecklist, closeChecklist } = props.ModalStore
  return (
    <Modal onHide={() => closeChecklist()} show={showChecklist}>
      <Head>
        <Flex justifyBetween>
          <p> CheckList </p>

          <Hover onClick={() => closeChecklist()}>
            <FiX style={{ fontSize: "1.7em" }} />
          </Hover>
        </Flex>
      </Head>

      <p> Event Checklist </p>
    </Modal>
  )
}

export default inject("ModalStore")(observer(Checklist))
