import React, { useState } from "react"
import { useQuery } from "@apollo/react-hooks"
import styled from "styled-components"
import Flex from "styled-flex-component"
import { CSSTransition } from "react-transition-group"
import { GoLocation } from "react-icons/go"
import { FiUser } from "react-icons/fi"
import UpdateEvent from "./updateExistingEvent"
import { Text, Body, Title, BigTitle, Button, Hover } from "../../styles/style"
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
  margin: 5rem 1rem;
`

const List = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 1.2rem 0.5rem;
`

const Existing = props => {
  const [Name, setName] = useState()
  const [ActiveView, setActiveView] = useState("find-event")
  const [EventDetail, setEventDetail] = useState({
    eventName: "",
    eventId: "",
  })
  const {} = props

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

  if (error) {
    return (
      <Loader style={{ background: "#fff" }} type={"error"} error={error} />
    )
  }

  if (loading) {
    return <Loader style={{ background: "#fff" }} type={"loading"} />
  }

  if (data) {
    const { id, events } = data.user
    return (
      <Body style={{ background: "#fff" }}>
        <br />

        <CSSTransition
          in={ActiveView === "find-event"}
          unmountOnExit
          timeout={300}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Container>
              <Field
                id={1}
                name={"Existing Event Name"}
                type={"text"}
                textarea={false}
                value={Name}
                onChange={e => handleChange(e, "Existing Event Name")}
                placeholder={"Name of Existing Event"}
              />

              <Title small> Your Events </Title>
              <hr />
              {events.map(({ name, id, venue }) => {
                return (
                  <List>
                    <Title
                      small
                      onClick={() => {
                        setEventDetail({ eventName: name, eventId: id })
                        setActiveView("update-event")
                      }}
                      key={id}
                    >
                      {name}
                    </Title>

                    <Button> Update Event </Button>
                  </List>
                )
              })}
              <br />
            </Container>
          </div>
        </CSSTransition>

        <CSSTransition
          in={ActiveView === "update-event"}
          unmountOnExit
          timeout={300}
        >
          <UpdateEvent data={EventDetail} />
        </CSSTransition>
        <br />
      </Body>
    )
  }
}

export default Existing
