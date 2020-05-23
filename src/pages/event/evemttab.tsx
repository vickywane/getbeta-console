import * as React from "react"
import styled from "styled-components"
import { TabState } from "../../state/context/contextState"

import { Tab, TabColumn } from "../../styles/style"

// TODO : This component should be a reusable component using props!
const EventTabs = props => {
  const { dispatch, state } = props
  return (
    <Tab key={state.id}>
      <TabColumn
        active={state.activeTab === "detail"}
        onClick={() => {
          dispatch({ type: "SWITCH_DETAIL" })
        }}
      >
        About
      </TabColumn>
      <TabColumn
        active={state.activeTab === "tracks"}
        onClick={() => {
          dispatch({ type: "SWITCH_TRACKS" })
        }}
      >
        Tracks
      </TabColumn>
      <TabColumn
        active={state.activeTab === "teams"}
        onClick={() => {
          dispatch({ type: "SWITCH_TEAMS" })
        }}
      >
        Teams
      </TabColumn>
      <TabColumn
        active={state.activeTab === "meetups"}
        onClick={() => {
          dispatch({ type: "SWITCH_MEETUP" })
        }}
      >
        Meetups
      </TabColumn>
    </Tab>
  )
}

export default EventTabs
