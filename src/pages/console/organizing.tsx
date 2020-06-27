import React, { useState } from "react"
import Flex from "styled-flex-component"
import { Link } from "react-router-dom"
import { CSSTransition } from "react-transition-group"

import { FiSearch, FiPlus } from "react-icons/fi"
import { EventPlaceholder } from "../../components/placeholders/"
import {
  Bounce,
  Items,
  Button,
  Contain,
  Switch,
  SwitchBtn,
  Title,
} from "../../styles/style"

import EventCard from "../../components/cards/EventCard"

const Organizing = (props): JSX.Element => {
  const { activeSection, events } = props

  return (
    <div>
      <CSSTransition
        timeout={400}
        classNames={"slider"}
        unmountOnExit
        in={activeSection === "organized"}
        onEnter={() => {
          console.log("am in")
        }}
      >
        <div>
          <Flex justifyBetween>
            <Title small> Organizing : </Title>

            <Link to="/create">
              <Button>
                <Flex>
                  <div style={{ paddingRight: "15px" }}>
                    <FiPlus style={{ fontSize: "1.55rem" }} />{" "}
                  </div>{" "}
                  Create Event{" "}
                </Flex>
              </Button>
            </Link>
          </Flex>
          <br />

          <Items>
            {/* I would use the Coalesc operator ( ?? ) here...   */}
            {events == null ? (
              <EventPlaceholder />
            ) : (
              events.map(
                ({
                  id,
                  dateCreated,
                  eventType,
                  name,
                  summary,
                  isVirtual, 
                  createdBy,
                  venue,
                }) => {
                  return (
                    <Bounce>
                      <EventCard
                        id={id}
                        name={name}
                        type={eventType}
                        createdBy={createdBy}
                        created={dateCreated}
                        isVirtual={isVirtual}
                        venue={venue}
                        location={true}
                        summary={summary}
                      />
                    </Bounce>
                  )
                }
              )
            )}
          </Items>
        </div>
      </CSSTransition>
      <br />
      <br />
    </div>
  )
}

export default Organizing
