import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { GoLocation } from "react-icons/go"
import {
  FiCalendar,
  FiMoreVertical,
  FiBookmark,
  FiCast,
  FiLock,
} from "react-icons/fi"
import Flex from "styled-flex-component"
import styled from "styled-components"
import { CSSTransition } from "react-transition-group"

import EventImage from "../../assets/images/test.png"
import { Card, Text, Button, Hover } from "../../styles/style"
import EventCardOption from "./eventcard.options"
import "../../App.css"

const Contain = styled.div`
  background-image: url(${props => props.img});
  width: 25rem;
  height: auto;
`

//Todo : Create a proper ts interface here
interface CardProperties {
  location?: string
  name: string
  id?: string
  meetupGroups: any
  summary?: string
  role?: string
  created?: string
  venue?: string
  volunteerScreen?: string
  isVirtual?: string
  approvalStatus?: string
  type: string
  showAprrovalStatus?: boolean
  volunteerOption?: string
  event?: string
  createdBy?: string
  openVolunteerModal?: any
}

const EventCard = (props): JSX.Element => {
  const {
    location,
    name,
    id,
    summary,
    role,
    created,
    venue,
    volunteerScreen,
    isVirtual,
    isLocked,
    isArchived,
    approvalStatus,
    screen,
    meetupGroups,
    type,
    showAprrovalStatus,
    volunteerOption,
    event,
    createdBy,
    openVolunteerModal,
  } = props
  // alert(isArchived)
  const [optionVisibility, setOptionVisibility] = useState(false)
  const [EventAuthorId, setEventAuthorId] = useState<number>(null)

  useEffect(() => {
    switch (screen) {
      case "organizing":
        setEventAuthorId(createdBy[0].id)
        break

      case "Volunteering":
        event.map(id => setEventAuthorId(id.author_id))
        break

      case "event-list":
        setEventAuthorId(createdBy !== null && createdBy[0].id)
        break

      default:
        break
    }
  }, [event])

  const userId = localStorage.getItem("user_id")
  const creator = EventAuthorId !== null && EventAuthorId

  // casting into str... overlap err
  const permission = String(creator) === userId

  return (
    <Card key={id}>
      <div>
        <Contain img={"EventImage"}>
          {permission && (
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
          )}

          {!permission && (
            <div>
              {isArchived ? (
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p style={{ color: "white" }}> . </p>
                  <Hover
                    style={{ textAlign: "right", padding: "0rem 1rem" }}
                    onClick={() => {}}
                  >
                    <FiLock style={{ fontSize: "1.8rem" }} />
                  </Hover>
                </div>
              ) : (
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p style={{ color: "white" }}> . </p>
                  <Hover
                    style={{ textAlign: "right", padding: "0rem 1rem" }}
                    onClick={() => {}}
                  >
                    <FiBookmark style={{ fontSize: "1.8rem" }} />
                  </Hover>
                </div>
              )}
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
                  {isArchived ? (
                    <div>
                      {permission ? (
                        <Link
                          to={`oasis/${type}/${id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <h4> {name}</h4>
                        </Link>
                      ) : (
                        <h4> {name}</h4>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={`oasis/${type}/${id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <h4> {name}</h4>
                    </Link>
                  )}

                  <Text small>{summary}</Text>
                </div>
              )
            })}
          </div>
        )}

        {isArchived ? (
          <div>
            {permission && (
              <Link
                to={`oasis/${type}/${id}`}
                style={{ textDecoration: "none" }}
              >
                <h4> {name}</h4>
              </Link>
            )}

            {!permission && <h4 style={{ color: "#0e2f5a" }}> {name}</h4>}
          </div>
        ) : (
          <Link to={`oasis/${type}/${id}`} style={{ textDecoration: "none" }}>
            <h4> {name}</h4>
          </Link>
        )}

        <Text small center>
          {summary}
        </Text>

        <hr />
        <Text style={{ textAlign: "right", padding: "0rem 1rem" }} center>
          {type}
        </Text>
        {location && (
          <Flex justifyBetween>
            {isVirtual ? (
              <Flex>
                <FiCast style={{ fontSize: "1.5rem" }} />

                <Text center small style={{ padding: "0rem 0.5rem" }}>
                  {venue}
                </Text>
              </Flex>
            ) : (
              <Flex>
                <GoLocation style={{ fontSize: "1.5rem" }} />

                <Text center small style={{ padding: "0rem 0.5rem" }}>
                  {venue}
                </Text>
              </Flex>
            )}
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
        {volunteerOption && !isArchived && (
          <Button
            onClick={() => openVolunteerModal(id)}
            long
            disabled={permission}
            transparent={permission}
          >
            Volunteer
          </Button>
        )}
      </div>

      {meetupGroups > 0 && type === "Meetup" && (
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
