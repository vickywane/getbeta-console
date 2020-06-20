import * as React from "react"
import Flex from "styled-flex-component"
import styled from "styled-components"
import { FiUser, FiTrash2, FiEdit } from "react-icons/fi"
import { useMutation } from "@apollo/react-hooks"

import { Text } from "../../styles/style"
import { DELETE_EVENT } from "../../data/mutations"

//Todo: Check styled-component usage with classNames

const SettingsBody = styled.div`
  position: absolute;
  padding: 0.7rem 0rem;
  box-shadow: 0px 2px 4px grey;
  margin: 1.1rem 0rem;
  height: 23vh;
  transform: translateX(-15%);
  border-radius: 6px;
  li {
    display: flex;
    list-style: none;
    padding: 0.5rem 0.5rem;
    margin: 0.4rem 0rem;
  }
  &: hover {
    li {
      cursor: pointer;
      filter: brightness(1.2);
    }
  }
`

const EventCardOptions = props => {
  const { eventId } = props
  const [deleteEvent] = useMutation(DELETE_EVENT)

  const handleDelete = () => {
    deleteEvent({
      variables: {
        eventId: eventId,
      },
    })
      .then(() => alert("deleted"))
      .catch(e => console.log(e))
  }

  return (
    <SettingsBody>
      <li>
        <FiEdit style={{ fontSize: "1.6rem" }} />
        <Text white small style={{ padding: "0rem 0.9rem" }}>
          Rename Event
        </Text>
      </li>

      <li>
        <FiUser style={{ fontSize: "1.6rem" }} />
        <Text white small style={{ padding: "0rem 0.9rem" }}>
          Do Something
        </Text>
      </li>

      <li onClick={() => handleDelete()}>
        <FiTrash2 style={{ fontSize: "1.6rem" }} />
        <Text white small style={{ padding: "0rem 0.9rem" }}>
          Delete Event
        </Text>
      </li>
    </SettingsBody>
  )
}

export default EventCardOptions
