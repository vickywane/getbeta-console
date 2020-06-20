import * as React from "react"
import styled from "styled-components"
import {
  FiShoppingCart,
  FiUsers,
  FiSquare,
  FiAlignJustify,
  FiLayers,
} from "react-icons/fi"

import { FiChevronUp, FiChevronDown } from "react-icons/fi"
import { Tab, TabColumn } from "../../styles/style"
import { Hover } from "../../styles/style"

// TODO : This component should be a reusable component using props!
const MeetupTabs = props => {
  const { dispatch, state } = props
  return (
    <div
      style={{
        display: "flex",
        padding: "1rem 0rem 0rem 0rem",
        justifyContent: "space-between",
      }}
    >
      {state.showEventDetails ? (
        <Hover
          onClick={() => {
            dispatch({ type: "CLOSE_EVENT_PANE" })
          }}
          style={{ padding: "0.5rem 0rem" }}
        >
          <FiChevronUp style={{ fontSize: "2.5rem" }} />
        </Hover>
      ) : null}
      {!state.showEventDetails ? (
        <Hover
          onClick={() => {
            dispatch({ type: "SHOW_EVENT_PANE" })
          }}
          style={{ padding: "0.5rem 0rem" }}
        >
          <FiChevronDown style={{ fontSize: "2.5rem" }} />
        </Hover>
      ) : null}
      <Tab style={{ justifyContent: "center" }} key={state.id}>
        <TabColumn
          active={state.activeTab === "detail"}
          onClick={() => {
            dispatch({ type: "SWITCH_DETAIL" })
          }}
        >
          <Hover style={{ padding: "0rem 1rem" }}>
            <FiAlignJustify style={{ fontSize: "1.7rem" }} />
          </Hover>
          About
        </TabColumn>
        <TabColumn
          active={state.activeTab === "people"}
          onClick={() => {
            dispatch({ type: "CLOSE_EVENT_PANE" })
            dispatch({ type: "SWITCH_PEOPLE" })
          }}
        >
          <Hover style={{ padding: "0rem 1rem" }}>
            <FiUsers style={{ fontSize: "1.7rem" }} />
          </Hover>
          Meetup Groups
        </TabColumn>
        <TabColumn
          active={state.activeTab === "tracks"}
          onClick={() => {
            dispatch({ type: "SWITCH_TRACKS" })
          }}
        >
          <Hover style={{ padding: "0rem 1rem" }}>
            <FiLayers style={{ fontSize: "1.7rem" }} />
          </Hover>
          Meetings
        </TabColumn>
        <TabColumn
          active={state.activeTab === "shop"}
          onClick={() => {
            dispatch({ type: "SWITCH_SHOP" })
          }}
        >
          <Hover style={{ padding: "0rem 1rem" }}>
            <FiShoppingCart style={{ fontSize: "1.7rem" }} />
          </Hover>
          Shop
        </TabColumn>
      </Tab>
      .
    </div>
  )
}

export default MeetupTabs
