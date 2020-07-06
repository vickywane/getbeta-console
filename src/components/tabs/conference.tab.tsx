import * as React from "react"
import { CSSTransition } from "react-transition-group"
import styled from "styled-components"
import media from "styled-media-query"
import { FcCustomerSupport } from "react-icons/fc"
import { FiPhone } from "react-icons/fi"
import Schedule from "../../pages/event/schedule/schedule"
import People from "../../pages/event/people/people"
import Shop from "../../pages/event/store/shop"
import Detail from "../detail"

import { Body } from "../../styles/style"

const FAB = styled.div`
  padding: 1rem 1rem;
  background: blue;
  color: white;
  position: absolute;
  position: -webkit-sticky;
  bottom: 1rem;
  float: right;
  width: 4.5rem;
  text-align: center;
  cursor: pointer;
  border-radius: 50%;
  box-shadow: 3px 1px 3px 0px grey;
`

const ConferenceTab = (props): JSX.Element => {
  const { state, data, openContact } = props
  return (
    <Body>
      <FAB onClick={() => openContact()}>
        <FcCustomerSupport style={{ fontSize: "2.7rem" }} />
      </FAB>
      <CSSTransition
        timeout={500}
        in={state.activeTab === "detail"}
        classNames={""}
        unmountOnExit
      >
        <Detail data={data.event} />
      </CSSTransition>

      <CSSTransition
        timeout={500}
        in={state.activeTab === "people"}
        classNames={""}
        unmountOnExit
      >
        <People
          attendees={data.event}
          data={data.event.tracks}
          peopleData={data.event.volunteer}
        />
      </CSSTransition>

      <CSSTransition
        timeout={500}
        in={state.activeTab === "tracks"}
        classNames={""}
        unmountOnExit
      >
        <Schedule screen="event" data={data} />
      </CSSTransition>

      <CSSTransition
        timeout={500}
        in={state.activeTab === "shop"}
        classNames={""}
        unmountOnExit
      >
        <Shop data={data} />
      </CSSTransition>
    </Body>
  )
}

export default ConferenceTab