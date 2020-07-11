import React, { useState } from "react"
import styled from "styled-components"
import {
  FiX,
  FiEdit,
  FiShoppingCart,
  FiBook,
  FiArrowLeft,
} from "react-icons/fi"
import {
  IoIosBug,
  IoMdMail,
  IoIosPhonePortrait,
  IoIosHome,
  IoIosPeople,
  IoMdConstruct,
} from "react-icons/io"
import { GrSchedules } from "react-icons/gr"

import media from "styled-media-query"
import { Link } from "react-router-dom"

import { Hover, Title, Text, Section } from "../../../../styles/style"

const Window = styled.div`
  width: auto;
  height: ${window.innerHeight};
  background: #fbfbfb;
  border-right: 0.3px solid #c0c0c0;
`

const Head = styled.div`
  padding: 1.2rem 0.5rem;
  display: flex;
  box-shadow: 0px 1px 3px grey;
  justify-content: center;
  h5 {
  }
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
  transition : all 300ms; 
  border-left:  ${props => (props.active ? "5px solid #0e2f5a;" : null)}; 
  &: hover {
    color : #0e2f5a;
    cursor : pointer;
  border-left: 4px solid grey;
} 
  ${media.lessThan("large")`
  border-left:  ${props => (props.active ? "4px solid #0e2f5a;" : null)}; 
     padding : 0.4rem 0.1rem 
     margin : 0.4rem 0.1rem;
`}
`

const Info = styled.div`
  position: relative;
  height: auto;
  width: 13rem;
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
  background: #0e2f5a;
  padding: 0.5rem 1rem;
  margin-left: 1.2rem;
  color: #fff;
  border-radius: 0px 5px 5px 0px;
`

const T = styled.div`
  display: flex;
  div {
    visibility: hidden;
    transition: all 400ms;
  }
  &: hover {
    div {
      visibility: visible;
    }
  }
`

const Admin = props => {
  const {
    state,
    dispatch,
    openCrashReporter,
    openAccessModal,
    openEditModal,
    Width,
    alias,
    id,

    eventType,
  } = props

  return (
    <Window>
      <div>
        <br />

        <List>
          <Link
            style={{ textDecoration: "none" }}
            to={`oasis/${eventType}/${id}`}
          >
            <Tab>
              <T style={{ padding: "0rem 1rem" }}>
                <FiArrowLeft style={{ fontSize: "1.7rem" }} />

                {Width <= 1200 ? <Info> {alias} </Info> : null}
              </T>
              {Width >= 1200 ? alias : null}
            </Tab>
          </Link>

          <Tab
            onClick={() => dispatch({ type: "SWITCH_DASHBOARD" })}
            active={state.activeTab === "dashboard"}
          >
            <T style={{ padding: "0rem 1rem" }}>
              <IoIosHome style={{ fontSize: "1.7rem" }} />

              {Width <= 1200 ? <Info>Preview</Info> : null}
            </T>
            {Width >= 1200 ? "Preview" : null}
          </Tab>

          <Tab
            onClick={() => {
              dispatch({ type: "SWITCH_EDIT" })
            }}
            active={state.activeTab === "edit"}
          >
            <T style={{ padding: "0rem 1rem" }}>
              <FiEdit style={{ fontSize: "1.7rem" }} />

              {Width <= 1200 ? <Info>Edit Event</Info> : null}
            </T>
            {Width >= 1200 ? "Edit Event" : null}
          </Tab>

          <Tab
            onClick={() => openAccessModal()}
            active={state.activeTab === "access"}
          >
            <T style={{ padding: "0rem 1rem" }}>
              <IoMdConstruct style={{ fontSize: "1.7rem" }} />
              {Width <= 1200 ? <Info>Event Actions</Info> : null}
            </T>
            {Width >= 1200 ? "Event Actions " : null}
          </Tab>

          <Tab
            onClick={() => dispatch({ type: "SWITCH_INVITATION" })}
            active={state.activeTab === "invitation"}
          >
            <T style={{ padding: "0rem 1rem" }}>
              <IoMdMail style={{ fontSize: "1.8rem" }} />
              {Width <= 1200 ? <Info>Invitations</Info> : null}{" "}
            </T>
            {Width >= 1200 ? "Invitation" : null}
          </Tab>

          <Tab
            onClick={() => dispatch({ type: "SWITCH_SCHEDULE" })}
            active={state.activeTab === "schedule"}
          >
            <T style={{ padding: "0rem 1rem" }}>
              <GrSchedules style={{ fontSize: "1.7rem", color: "grey" }} />
              {Width <= 1200 ? <Info>Schedule</Info> : null}
            </T>
            {Width >= 1200 ? "Event Schedule" : null}
          </Tab>

          <Tab
            onClick={() => dispatch({ type: "SWITCH_STORE" })}
            active={state.activeTab === "store"}
          >
            <T style={{ padding: "0rem 1rem" }}>
              <FiShoppingCart style={{ fontSize: "1.8rem" }} />
              {Width <= 1200 ? <Info>Store</Info> : null}
            </T>
            {Width >= 1200 ? "Event Store" : null}
          </Tab>
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
            <T style={{ padding: "0rem 1rem" }}>
              <IoIosBug style={{ fontSize: "1.8rem" }} />
              {Width <= 1200 ? <Info>Preview</Info> : null}
            </T>
            {Width >= 1200 ? "Report Bug" : null}
          </Tab>
        </List>
      </div>
    </Window>
  )
}

export default Admin
