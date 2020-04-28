import React from "react"
import { FiX } from "react-icons/fi"
import Flex from "styled-flex-component"
import { inject, observer } from "mobx-react"

import { Head, Hover, Text, CustomModal } from "../../styles/style"
import Forms from "../../pages/forms/forms"

const FormModal = (props): JSX.Element => {
  const { closeFormModal, showFormModal } = props.ModalStore

  return (
    <CustomModal
      size={"lg"}
      show={showFormModal}
      onHide={() => {
        closeFormModal()
      }}
    >
      <Head>
        <Flex justifyBetween>
          <Text> Create </Text>

          <Hover
            onClick={() => {
              closeFormModal()
            }}
          >
            <FiX style={{ fontSize: "1.7rem" }} />
          </Hover>
        </Flex>
      </Head>

      <Forms type={props.type} />
    </CustomModal>
  )
}

export default inject("ModalStore")(observer(FormModal))
