import React, { useState } from "react"
import { Modal } from "react-bootstrap"
import { inject, observer } from "mobx-react"
import { FiX, FiSend } from "react-icons/fi"
import Flex from "styled-flex-component"
import { useMutation } from "@apollo/react-hooks"

import { CREATE_TRACK } from "../../data/mutations"
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

const CreateTrackModal = props => {
  const { showCreateTrack, closeCreateTrack } = props.ModalStore

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
        break
    }
  }

  const [createTrack, { loading, data, error }] = useMutation(CREATE_TRACK)
  const Submit = () => {
    createTrack({
      variables: {
        EventID: props.EventID,
        totalTalks: 0,
        name: Name,
        summary: Summary,
        duration: Duration,
        isCompleted: false,
        Archived: false,
      },
    })
      .catch(e => console.log(e))
      .then(() => closeCreateTrack())
  }

  return (
    <Modal
      size="lg"
      style={{ marginTop: "5%" }}
      onHide={() => closeCreateTrack()}
      show={showCreateTrack}
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
            <Field
              onChange={e => onChange(e, label)}
              id={id}
              placeholder={placeholder}
              name={label}
              type={type}
              textarea={false}
            />
          )
        })}
      </Body>
      <br />
      <Flex justifyCenter>
        <Button
          onClick={() => {
            Submit()
          }}
          long
        >
          Create Track{" "}
        </Button>
      </Flex>

      <br />
    </Modal>
  )
}

export default inject("ModalStore")(observer(CreateTrackModal))
