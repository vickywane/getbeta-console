import React, { useState } from "react"
import { useQuery } from "@apollo/react-hooks"
import styled from "styled-components"
import Flex from "styled-flex-component"
import { CSSTransition } from "react-transition-group"

import { Text, Body, Title, Button, BigTitle } from "../../styles/style"
import { Loader } from "../../components/"
import { GET_USER_EVENTS } from "../../data/queries"
import Field from "./fields"

const Container = styled.div`
  width: 60rem;
  border: 1px solid grey;
  height: 50vh;
  padding: 2rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 7px;
`

const UpdateExistingEvent = props => {
  const [Name, setName] = useState()
  const { name, eventId } = props

  const handleChange = (value, label) => {
    switch (label) {
      case "Existing Event Name":
        setName(value)
        break
      default:
        console.log(label)
    }
  }

  const { data, loading, error } = useQuery(GET_USER_EVENTS, {
    variables: {
      id: localStorage.getItem("user_id"),
      name: "",
    },
  })

  const { eventName } = props.data
  return (
    <Body style={{ background: "#fff" }}>
      <Text> {eventName} </Text>

      <Button> Launch New Iteration </Button>
    </Body>
  )
}
export default UpdateExistingEvent
