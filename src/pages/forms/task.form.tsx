import React, { useState } from "react"
import Flex from "styled-flex-component"
import { useMutation } from "@apollo/react-hooks"

import { CREATE_TASK } from "../../data/mutations"
import { Body, Button, Input, Label } from "../../styles/style"

const TaskForm = () => {
  const [Name, setName] = useState<string>("axaxaaxaaxaxaxaxaxax")
  const [Completed, setCompleted] = useState<boolean>(false)
  const [Type, setType] = useState<string>("DESIGN")

  const [createTask, { data }] = useMutation(CREATE_TASK)
  const Submit = () => {
    createTask({
      variables: {
        name: Name,
        type: Type,
        isCompleted: Completed,
      },
    }).then(() => {
      alert("CREATED")
    })
  }

  return (
    <div>
      <Body>
        <Flex column>
          <Label small>
            {" "}
            Team Name
            <Input
              onChange={e => {
                setName(e.target.value)
              }}
              value={Name}
              placeholder={"Team Name"}
              type={"text"}
            />{" "}
          </Label>
        </Flex>{" "}
        <br />
        <Flex column>
          <Label small>
            {" "}
            Team Goal
            <Input
              onChange={e => {
                setType(e.target.value)
              }}
              value={Type}
              placeholder={"Team Goal"}
              type={"text"}
            />
          </Label>
        </Flex>{" "}
        <br />
        <Flex justifyCenter>
          <Button
            onClick={() => {
              Submit()
            }}
          >
            {" "}
            Create Team{" "}
          </Button>
        </Flex>
      </Body>
    </div>
  )
}

export default TaskForm
