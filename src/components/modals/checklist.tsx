import React from "react"
import { Modal } from "react-bootstrap"
import { inject, observer } from "mobx-react"

const Checklist = props => {
  const { showChecklist } = props.ModalStore
  return (
    <Modal onHide={() => {}} show={showChecklist}>
      <p> checklist </p>
    </Modal>
  )
}

export default inject("ModalStore")(observer(Checklist))
