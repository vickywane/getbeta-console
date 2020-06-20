import React, { useState } from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"
import { FiX } from "react-icons/fi"
import { Modal } from "react-bootstrap"

import MeetupGroupCard from "../../../components/cards/meetupGroupCard"
import CreateGroup from "./createGroup"
import {
  Text,
  Title,
  Head,
  Section,
  Hover,
  Button,
} from "../../../styles/style"

const List = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
`

const Groups = props => {
  const { id, meetupGroups } = props.data
  const [Visibility, setVisibility] = useState(false)

  return (
    <div>
      <br />
      <Modal
        show={Visibility}
        onHide={() => setVisibility(false)}
        style={{ marginTop: "3rem" }}
        size="xl"
      >
        <Head>
          <Section>Create Group</Section>

          <Hover
            onClick={() => {
              setVisibility(false)
            }}
          >
            <FiX style={{ fontSize: "1.8rem" }} />
          </Hover>
        </Head>
        <CreateGroup eventId={id} />
      </Modal>

      <Flex justifyBetween>
        <Text color="grey" style={{ textAlign: "right" }}>
          Showing {meetupGroups === null ? "0" : meetupGroups.length} items{" "}
        </Text>

        <Button
          onClick={() => {
            setVisibility(true)
          }}
        >
          Launch New Meetup Group{" "}
        </Button>
      </Flex>

      <br />

      {meetupGroups === null ? (
        <div>
          <br />
          <Text color="grey" center>
            No Groups Created Yet!{" "}
          </Text>
        </div>
      ) : (
        meetupGroups.map(({ name, id, createdAt, location }) => {
          return (
            <MeetupGroupCard
              name={name}
              id={id}
              createdAt={createdAt}
              location={location}
            />
          )
        })
      )}
    </div>
  )
}

export default Groups
