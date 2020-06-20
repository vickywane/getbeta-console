import * as React from "react"
import { CSSTransition } from "react-transition-group"
import Flex from "styled-flex-component"
import { FiX, FiAlertCircle } from "react-icons/fi"
import { Link } from "react-router-dom"

import { Body, Text, Title, Hover, Tab, TabColumn } from "../../../styles/style"
import { AttendeesList, TeamMateList, VolunteerList } from "./"

import {
  PeopleTabState,
  PeopleTabContext,
} from "../../../state/context/contextState"
import { PeopleTabReducer } from "../../../state/context/reducers"

const People = props => {
  const [state, dispatch] = React.useReducer(PeopleTabReducer, PeopleTabState)

  return (
    <PeopleTabContext.Provider value={PeopleTabState}>
      <div
        style={{
          padding: "1.5rem 0rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Hover style={{ padding: "0rem 0.7rem" }}>
          <FiAlertCircle style={{ fontSize: "1.7rem" }} />
        </Hover>
        <Text center>
          This tab is only visible to members of your event.{" "}
          <Link to="/" style={{ textDecoration: "none" }}>
            <code> Edit Accessibility </code>
          </Link>
        </Text>
      </div>

      <div>
        <Flex justifyBetween>
          <Title small> People </Title>

          <Tab>
            <TabColumn
              active={state.activeTab === "attendees"}
              onClick={() => {
                dispatch({ type: "SWITCH_ATTENDEES" })
              }}
              style={{ padding: "0rem 0.5rem" }}
            >
              Attendees{" "}
            </TabColumn>

            <TabColumn
              active={state.activeTab === "volunteers"}
              onClick={() => {
                dispatch({ type: "SWITCH_VOLUNTEERS" })
              }}
              style={{ padding: "0rem 0.5rem" }}
            >
              Volunteers{" "}
            </TabColumn>
          </Tab>
        </Flex>
        <hr />
        <div>
          <CSSTransition
            timeout={200}
            classNames={""}
            unmountOnExit
            in={state.activeTab === "attendees"}
          >
            <AttendeesList attendees={props.attendees} />
          </CSSTransition>

          <CSSTransition
            timeout={200}
            classNames={""}
            unmountOnExit
            in={state.activeTab === "volunteers"}
          >
            <VolunteerList volunteer={props.peopleData} />
          </CSSTransition>
        </div>
      </div>
    </PeopleTabContext.Provider>
  )
}

export default People
