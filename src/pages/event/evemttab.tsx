import * as React from "react"
import styled from "styled-components"
import { TabContext } from "../../state/context/contextState"

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

// TODO : This component should be a reusable component using props!
const EventTabs = () => {
  return (
    <TabContext.Consumer>
      {tab => {
        console.log(tab)
        return (
          <Tab key={tab.id}>
            <Column
              active
              onClick={() => {
                tab.activeTab = "detail"
              }}
            >
              About
            </Column>
            <Column
              onClick={() => {
                tab.activeTab = "track"
              }}
            >
              Tracks{" "}
            </Column>
            <Column
              onClick={() => {
                tab.activeTab = "teams"
              }}
            >
              Teams{" "}
            </Column>
            <Column
              onClick={() => {
                tab.activeTab = "meetups"
              }}
            >
              Meetups{" "}
            </Column>
          </Tab>
        )
      }}
    </TabContext.Consumer>
  )
}

export default EventTabs
