import React, { useState } from "react"
import { Modal } from "react-bootstrap"
import { inject, observer } from "mobx-react"
import { FiX, FiSend } from "react-icons/fi"
import Flex from "styled-flex-component"
import { useMutation } from "@apollo/react-hooks"

import { TrackInputs } from "../../pages/forms/formsData"
import Field from "../../pages/forms/fields"
import {
  Hover,
  Head,
  Section,
  Body,
  Input,
  Text,
  Label,
  Button,
} from "../../styles/style"

const Contact = props => {
  const { createTrack, closeCreateTrack } = props.ModalStore

  const [Name, setName] = useState("")
  const [Summary, setSummary] = useState("")
  const [Description, setDescription] = useState("")
  const [Duration, setDuration] = useState("")

  const onChange = (value, label) => {
    switch (label) {
      case "Track Name":
        setName(value)
        break
      case "Track Description":
        setSummary(value)
        break
      case "Track Summary":
        setDescription(value)
        break
      case "Track Duration":
        setDuration(value)
        break
      default:
        console.log(label)
    }
  }

  return (
    <Modal
      size="lg"
      style={{ marginTop: "5%" }}
      onHide={() => closeCreateTrack()}
      show={createTrack}
    >
      <Head>
        <Flex justifyBetween>
          <Section> Create New Track</Section>

          <Hover onClick={() => closeCreateTrack()}>
            <FiX style={{ fontSize: "1.75em" }} />
          </Hover>
        </Flex>
      </Head>

      <Body>
        {TrackInputs.map(({ id, placeholder, label, type }) => {
          return (
            <div>
              <Field
                onChange={e => onChange(e, label)}
                id={id}
                value={""}
                placeholder={placeholder}
                name={label}
                type={type}
                textarea={false}
              />
              <br />
            </div>
          )
        })}
      </Body>
      <br />
      <Flex justifyCenter>
        <Button long> Create Track </Button>
      </Flex>

      <br />
    </Modal>
  )
}

export default inject("ModalStore")(observer(Contact))
