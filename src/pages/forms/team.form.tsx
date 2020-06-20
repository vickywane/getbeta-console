import React, { useState } from "react"
import Flex from "styled-flex-component"
import { useMutation } from "@apollo/react-hooks"

import { Body, Label, Input, Button, Text } from "../../styles/style"
import { CREATE_TEAM } from "../../data/mutations"

const TeamForm = props => {
  const [Name, setName] = useState<string>("dwddwddddwdwddwddddw")
  const [Goal, setGoal] = useState<string>("dwddwddddwdwddwddddwdwddwddddw")

  const [createTeam, { data }] = useMutation(CREATE_TEAM)

  const { EventID } = props

  const Submit = () => {
    createTeam({
      variables: {
        eventId: Name,
        name: Name,
        goal: Goal,
        EventID: EventID,
      },
    }).then(() => {
      alert("CREATED")
    })
  }

  console.log(EventID)
  // const { closeFormModal } = props.close
  return (
    <Body>
      {" "}
      <Text center> team</Text>
      <Flex column>
        <Label small>
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
              setGoal(e.target.value)
            }}
            value={Goal}
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
  )
}

export default TeamForm
