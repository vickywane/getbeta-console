import * as React from "react"
import { CSSTransition } from "react-transition-group"
import styled from "styled-components"
import media from "styled-media-query"
import { FcCustomerSupport } from "react-icons/fc"
import { FiPhone, FiX } from "react-icons/fi"
import Schedule from "../../pages/event/schedule/schedule"
import People from "../../pages/event/people/people"
import Shop from "../../pages/event/store/shop"
import Support from "../../pages/event/supportWindow"
import Detail from "../detail"

import { Body, Text } from "../../styles/style"

const FAB = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: blue;
  color: white;
  position: absolute;
  position: -webkit-sticky;
  bottom: 2rem;
  float: right;
  transition: all 800ms;
  text-align: center;
  cursor: pointer;
  border-radius: 50%;
  box-shadow: 3px 1px 3px 0px grey;
`

const SupportWindow = styled.div`
  width: 26%;
  height: 72vh;
  background: #fff;
  color: #000;
  position: absolute;
  position: -webkit-sticky;
  bottom: 2rem;
  margin-left: 5.5rem;
  float: right;
  text-align: center;
  border-radius: 7px;
  box-shadow: 3px 1px 3px 0px grey;
`

const ConferenceTab = (props): JSX.Element => {
  const { state, data, openContact } = props
  const [Window, openWindow] = React.useState(false)

  return (
    <Body>
      <FAB onClick={() => openWindow(!Window)}>
        {!Window ? (
          <FcCustomerSupport style={{ fontSize: "2.7rem" }} />
        ) : (
          <FiX style={{ fontSize: "2rem" }} />
        )}
      </FAB>

      {Window && (
        <SupportWindow>
          <Support data={data} />
        </SupportWindow>
      )}

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
