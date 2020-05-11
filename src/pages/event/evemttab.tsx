import * as React from "react"
import styled from "styled-components"
import { TabState } from "../../state/context/contextState"

const Tab = styled.div`
  padding: 0rem 1rem;
  margin: 0.5rem 0rem 0rem;
  display: flex;
  justify-content: center;
`

const Column = styled.div`
    text-align: center
    font-size : 1.1rem;
    padding: 1rem  2rem;
    transition : all 200ms;
    margin: 0rem 1rem; 
    font-weight: ${props => (props.active ? "600" : "normal")}
    border-bottom: ${props => (props.active ? "4px solid blue" : "0px")} ;
&: hover {
    cursor: pointer;
    border-bottom: 4px solid blue;
}
`

const TabReducer = (state, action) => {
  console.log(state, "tab reducer")
  switch (action.type) {
    case "SWITCH_DETAIL":
      return { ...state, activeTab: "detail" }
    case "SWITCH_TRACKS":
      return { ...state, activeTab: "activity" }
    case "SWITCH_TEAMS":
      return { ...state, activeTab: "teams" }
    case "SWITCH_MEETUPS":
      return { ...state, activeTab: "meetups" }
    default:
      break
  }
}

// TODO : This component should be a reusable component using props!
const EventTabs = () => {
  // @ts-ignore
  const [state, dispatch] = React.useReducer(TabReducer, TabState)

  console.log(state, "state")
  return (
    <Tab key={state.id}>
      <Column
        active
        onClick={() => {
          dispatch({ type: "SWITCH_DETAIL" })
        }}
      >
        About
      </Column>
      <Column
        onClick={() => {
          dispatch({ type: "SWITCH_TRACKS" })
        }}
      >
        Tracks{" "}
      </Column>
      <Column
        onClick={() => {
          dispatch({ type: "SWITCH_TEAMS" })
        }}
      >
        Teams{" "}
      </Column>
      <Column
        onClick={() => {
          dispatch({ type: "SWITCH_MEETUP" })
        }}
      >
        Meetups{" "}
      </Column>
    </Tab>
  )
}

export default EventTabs
