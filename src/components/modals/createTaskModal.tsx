import React, { useState } from "react"
import { Modal } from "react-bootstrap"
import { inject, observer } from "mobx-react"
import { FiX, FiSend } from "react-icons/fi"
import Flex from "styled-flex-component"
import { useMutation } from "@apollo/react-hooks"

import { CREATE_TASK } from "../../data/mutations"
import { CREATE_TASK as CREATE_TASK_INPUT } from "../../pages/forms/formsData"
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

const CreateTaskModal = props => {
  const [Name, setName] = useState("")
  const [Category, setCategory] = useState("")
  const [Priority, setPriority] = useState("")

  const { teamId } = props

  const onChange = (value: string, label: string) => {
    switch (label) {
      case "Task":
        setName(value)
        break
      case "Task Category":
        setCategory(value)
        break
       case "Task Priority":
        setPriority(value)
        break
      default:
        break
    }
  }

  const [createTask, { loading, data, error }] = useMutation(CREATE_TASK)
  const Submit = () => {
    createTask({
      variables: {
        teamId: teamId,
        userId: localStorage.getItem("user_id"),
        name: Name,
        priority: Priority,
        category: Category,
        status: "IDLE",
      },
    })
      .then(() => close())
      .catch(e => console.log(e))
  }

  const { show, close } = props
  return (
    <Modal
      size="lg"
      style={{ marginTop: "5%" }}
      onHide={() => close()}
      show={show}
    >
      <Head>
        <Section> Create New Task</Section>

        <Hover onClick={() => close()}>
          <FiX style={{ fontSize: "1.75em" }} />
        </Hover>
      </Head>

      <Body>
        {CREATE_TASK_INPUT.map(({ id, placeholder, label, type }) => {
          return (
            <Field
              onChange={(e: string) => onChange(e, label)}
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
          Create Task
        </Button>
      </Flex>

      <br />
    </Modal>
  )
}

export default inject("ModalStore")(observer(CreateTaskModal))
