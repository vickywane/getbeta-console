import * as React from "react"
import { CSSTransition } from "react-transition-group"

import Schedule from "../../pages/event/schedule/schedule"
import People from "../../pages/event/people/people"
import Detail from "../detail"

import { Contain } from "../../styles/style"

const MeetupTab = (props): JSX.Element => {
  const { state, data } = props

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
        in={state.activeTab === "groups"}
        classNames={""}
        unmountOnExit
      >
        <p> meetup groups </p>
      </CSSTransition>

      <CSSTransition
        timeout={500}
        in={state.activeTab === "tracks"}
        classNames={""}
        unmountOnExit
      >
        <Schedule data={data.event.tracks} />
      </CSSTransition>

      <CSSTransition
        timeout={500}
        in={state.activeTab === "shop"}
        classNames={""}
        unmountOnExit
      >
        <p> SOMETHING HERE </p>
      </CSSTransition>
    </Contain>
  )
}

export default MeetupTab
