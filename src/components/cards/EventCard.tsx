import React, { useState } from "react"
import { Link } from "react-router-dom"
import { GoLocation } from "react-icons/go"
import { FiCalendar, FiMoreVertical, FiBookmark } from "react-icons/fi"
import Flex from "styled-flex-component"
import styled from "styled-components"
import { CSSTransition } from "react-transition-group"

import EventImage from "../../assets/images/test.png"
import { Card, Text, Button, Hover } from "../../styles/style"
import EventCardOption from "./eventcard.options"
import "../../App.css"

//Todo : Create a proper ts interface here
const Contain = styled.div`
  background-image: url(${props => props.img});
  width: 25rem;
  height: auto;
`

const EventCard = props => {
  const {
    location,
    name,
    id,
    summary,
    role,
    created,
    venue,
    volunteerScreen,
    approvalStatus,
    type,
    showAprrovalStatus,
    volunteerOption,
    event,
    createdBy,
    openVolunteerModal,
  } = props

  const [optionVisibility, setOptionVisibility] = useState(false)

  const userId = localStorage.getItem("user_id")
  const creator = createdBy === null ? 1 : createdBy[0].id
  const permission = creator == userId

  return (
    <Card key={id}>
      <div>
        <Contain img={"EventImage"}>
          {permission ? (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ color: "white" }}> . </p>

              <Hover
                style={{ padding: "0rem 1rem" }}
                onClick={() => setOptionVisibility(!optionVisibility)}
              >
                <FiMoreVertical
                  style={{ fontSize: "1.75rem", textAlign: "right" }}
                />
              </Hover>
            </div>
          ) : (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ color: "white" }}> . </p>
              <Hover
                style={{ textAlign: "right", padding: "0rem 1rem" }}
                onClick={() => {}}
              >
                <FiBookmark style={{ fontSize: "1.8rem" }} />
              </Hover>
            </div>
          )}
        </Contain>

        <CSSTransition
          timeout={300000}
          in={optionVisibility}
          classNames={"options"}
          unmountOnExit
        >
          <EventCardOption eventId={id} />
        </CSSTransition>

        <img
          src={require("../../assets/images/test.png")}
          style={{ maxWidth: "70%" }}
        />

        <hr />

        {volunteerScreen && (
          <div>
            {event.map(({ name, id, summary }) => {
              return (
                <div>
                  <Link
                    to={`/${type}/${id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <h4> {name}</h4>
                  </Link>

                  <Text small>{summary}</Text>
                </div>
              )
            })}
          </div>
        )}

        <Link to={`/${type}/${id}`} style={{ textDecoration: "none" }}>
          <h4> {name}</h4>
        </Link>

        <Text small center>
          {summary}
        </Text>

        <hr />
        <Text style={{ textAlign: "right", padding: "0rem 1rem" }} center>
          {type}
        </Text>
        {location && (
          <Flex justifyBetween>
            <Flex>
              <GoLocation style={{ fontSize: "1.5rem" }} />

              <Text center small style={{ padding: "0rem 0.5rem" }}>
                {venue}
              </Text>
            </Flex>

            <Flex>
              <FiCalendar style={{ fontSize: "1.5rem" }} />

              <Text center small style={{ padding: "0rem 0.5rem" }}>
                {created}
              </Text>
            </Flex>
          </Flex>
        )}

        {showAprrovalStatus && (
          <Flex justifyBetween>
            <Flex>
              <Text color="grey" style={{ padding: "0rem 0.7rem" }}>
                Role:
              </Text>
              <Text bold> {role} </Text>
            </Flex>

            <Flex>
              <Text color="grey" style={{ padding: "0rem 0.7rem" }}>
                Status:
              </Text>
              <Text bold> {approvalStatus} </Text>
            </Flex>
          </Flex>
        )}
        {volunteerOption && (
          <Button onClick={() => openVolunteerModal(id)} long transparent>
            Volunteer
          </Button>
        )}
      </div>

      {type === "Meetup" && (
        <div
          style={{
            fontSize: "1.1rem",
            fontFamily: "calibri",
            borderTop: "1px solid grey ",
            padding: "0.7rem 0.5rem",
            marginTop: "0.5rem",
          }}
        >
          {name}
        </div>
      )}
    </Card>
  )
}

export default EventCard
