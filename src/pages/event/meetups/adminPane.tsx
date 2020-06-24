import React, { useState } from "react"
import styled from "styled-components"
import { FiX, FiEdit, FiShoppingCart } from "react-icons/fi"
import {
  IoIosBug,
  IoMdMail,
  IoIosPhonePortrait,
  IoIosHome,
  IoIosPeople,
  IoMdConstruct,
} from "react-icons/io"
import media from "styled-media-query"
import { Link } from "react-router-dom"

import { Hover, Title, Text, Section } from "../../../styles/style"

const Window = styled.div`
  width: auto;
  height: ${window.innerHeight};
  background: #fbfbfb;
  border-right: 0.7px solid grey;
`

const Head = styled.div`
  padding: 1.2rem 0.5rem;
  display: flex;
  box-shadow: 0px 1px 3px grey;
  justify-content: center;
`

const List = styled.li`
  list-style: none;
  padding: 0rem 0.5rem;
  display: flex;
  flex-direction: column;
`

const Tab = styled.div`
  display: flex;
  width : auto;
  font-size  : 1.2rem;
  padding : 0.5rem 0.5rem
  margin : 0.7rem 0.5rem;
  color: ${props => (props.active ? "#0e2f5a;" : "grey")};
  font-family: calibri;
  transition : all 300ms; 
  border-left:  ${props => (props.active ? "5px solid #0e2f5a;" : null)}; 
  &: hover {
    color : #0e2f5a;
    cursor : pointer;
    border-left: 4px solid grey;
  }
  ${media.lessThan("large")`
    margin : 0.7rem 0.2rem;
    padding : 0.5rem 0.2rem
  `};
`

const Admin = props => {
  const {
    state,
    dispatch,
    openCrashReporter,
    openAccessModal,
    openEditModal,
    Width,
  } = props

  console.log(state.activeTab, "active")

  return (
    <Window>
      <div>
        <br />
        <br />

        <List>
          <Tab
            onClick={() => dispatch({ type: "SWITCH_DASHBOARD" })}
            active={state.activeTab === "dashboard"}
          >
            <div style={{ padding: "0rem 1rem" }}>
              <IoIosHome style={{ fontSize: "1.7rem" }} />
            </div>
            {Width >= 1200 ? "Dashboard" : null}
          </Tab>

          <Tab
            onClick={() => {
              dispatch({ type: "SWITCH_EDIT" })
            }}
            active={state.activeTab === "edit"}
          >
            <div style={{ padding: "0rem 1rem" }}>
              <FiEdit style={{ fontSize: "1.7rem" }} />
            </div>
            {Width >= 1200 ? "Edit Event" : null}
          </Tab>

          <Tab
            onClick={() => openAccessModal()}
            active={state.activeTab === "access"}
          >
            <div style={{ padding: "0rem 1rem" }}>
              <IoMdConstruct style={{ fontSize: "1.7rem" }} />
            </div>
            {Width >= 1200 ? "Access Management " : null}
          </Tab>
          <Tab
            onClick={() => dispatch({ type: "SWITCH_MOBILE" })}
            active={state.activeTab === "mobile"}
          >
            <div style={{ padding: "0rem 1rem" }}>
              <IoIosPhonePortrait style={{ fontSize: "1.8rem" }} />
            </div>
            {Width >= 1200 ? "Mobile Interface" : null}
          </Tab>

          <Tab
            onClick={() => dispatch({ type: "SWITCH_TEAM" })}
            active={state.activeTab === "team"}
          >
            <div style={{ padding: "0rem 1rem" }}>
              <IoIosPeople style={{ fontSize: "1.8rem" }} />
            </div>
            {Width >= 1200 ? "Meetup Groups" : null}
          </Tab>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Tab
            onClick={() => {
              dispatch({ type: "SWITCH_BUG" })
              openCrashReporter()
            }}
            active={state.active}
          >
            <div style={{ padding: "0rem 1rem" }}>
              <IoIosBug style={{ fontSize: "1.8rem" }} />
            </div>
            {Width >= 1300 ? "Report Bug" : null}
          </Tab>
        </List>
      </div>
    </Window>
  )
}

export default Admin
