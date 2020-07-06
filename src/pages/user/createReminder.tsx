import React, { useState } from "react"
import styled from "styled-components"
import { FiClock, FiEdit, FiMail, FiTrash2, FiFilter } from "react-icons/fi"
import Flex from "styled-flex-component"
import {
  Body,
  Button as Butt,
  Contain,
  Hover,
  Text,
  Title,
} from "../../styles/style"
import media from "styled-media-query"
import { IoIosAlarm } from "react-icons/io"
import { useMutation } from "@apollo/react-hooks"

import Fields from "../forms/fields"
import { Loader } from "../../components/"
import { EmptyData } from "../../components/placeholders"
import { CREATE_REMINDER } from "../../data/mutations"

const ReminderBody = styled.div`
  background: #0e2f5a;
  color: #fff;
  padding: 1rem 1rem;
  border-left: 6px solid yellow;
`

const Button = styled(Butt)`
  background: ${props => props.background};
`

const CreateReminder = (props): JSX.Element => {
  const {} = props

  const [Name, setName] = useState<string>("")
  const [Description, setDescription] = useState<string>("")
  const [DueDate, setDueDate] = useState<string>("")

  const [createReminder, { data, loading, error }] = useMutation(
    CREATE_REMINDER
  )

  const handleInput = (value, label) => {
    switch (label) {
      case "Reminder Name":
        setName(value)
        break
      case "Due Date":
        setDueDate(value)
        break
      default:
        break
    }
  }

  const addReminder = () => {
    createReminder({
      variables: {
        userId: localStorage.getItem("user_id"),
        name: Name,
        from: "PERSONAL",
        due: DueDate,
      },
    })
      .then(() => alert("created"))
      .catch(e => console.log(e))
  }

  return (
    <ReminderBody>
      <br />
      <Title small center>
        Create Reminder{" "}
      </Title>
      <hr />
      <Fields
        placeholder="Reminder Name"
        textarea={false}
        id={1}
        onChange={e => handleInput(e, "Reminder Name")}
        name="Reminder Name"
        type="text"
      />

      <Fields
        placeholder="Due Date"
        textarea={false}
        id={1}
        onChange={e => handleInput(e, "Due Date")}
        name="Due Date"
        type="text"
      />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        .
        <div style={{ display: "flex" }}>
          <Text small>Send Reminder via mail.</Text>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Button background="violet" onClick={() => addReminder()}>
          Create Reminder
        </Button>

        <Button background="red">Cancel</Button>
      </div>
    </ReminderBody>
  )
}

export default CreateReminder
