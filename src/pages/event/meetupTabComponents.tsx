import * as React from "react"
import { CSSTransition } from "react-transition-group"
import styled from "styled-components"
import media from "styled-media-query"

import { FiPhone } from "react-icons/fi"
import Schedule from "../../pages/event/schedule/schedule"
import Groups from "./meetups/groups"
import Archive from "../../pages/event/archive/overview"
import Detail from "../../components/detail"

import { Contain } from "../../styles/style"

const MeetupTabComponents = (props): JSX.Element => {
  const { state, data, openContact } = props

  return (
    <Contain>
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
        <Groups data={data.event} />
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
        <Archive screen="event" data={data} />
      </CSSTransition>
    </Contain>
  )
}

export default MeetupTabComponents