import React, { useState } from "react"
import { Modal } from "react-bootstrap"
import { inject, observer } from "mobx-react"
import { FiX, FiSend } from "react-icons/fi"
import Flex from "styled-flex-component"
import { useMutation } from "@apollo/react-hooks"

import { CREATE_TEAM } from "../../data/mutations"
import { TeamInput } from "../../pages/forms/formsData"
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
  const [Name, setName] = useState("")
  const [Goal, setGoal] = useState("")

  const { EventID } = props

  const onChange = (value, label) => {
    switch (label) {
      case "Team Name":
        setName(value)
        break
      case "Team Goal":
        setGoal(value)
        break
      default:
        break
    }
  }
  const [createTeam, { loading, data, error }] = useMutation(CREATE_TEAM)
  const Submit = () => {
    createTeam({
      variables: {
        EventID: EventID,
        name: Name,
        goal: Goal,
      },
    })
      .catch(e => console.log(e))
      .then(() => closeTeamModal())
  }

  const { closeTeamModal, showTeamModal } = props.ModalStore

  return (
    <Modal
      size="lg"
      style={{ marginTop: "5%" }}
      onHide={() => closeTeamModal()}
      show={showTeamModal}
    >
      <Head>
        <Flex justifyBetween>
          <Section> Create New Team</Section>

          <Hover onClick={() => closeTeamModal()}>
            <FiX style={{ fontSize: "1.75em" }} />
          </Hover>
        </Flex>
      </Head>

      <Body>
        {TeamInput.map(({ id, placeholder, label, type }) => {
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
          Create Team
        </Button>
      </Flex>

      <br />
    </Modal>
  )
}

export default inject("ModalStore")(observer(CreateTrackModal))
