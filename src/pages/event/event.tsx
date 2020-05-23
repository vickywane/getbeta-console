import * as React from "react"
import { inject, observer } from "mobx-react"
import { useQuery } from "@apollo/react-hooks"
import { CSSTransition } from "react-transition-group"
import Activity from "./Activity"
import TeamList from "./teamList"
import Events from "./events"
import Schedule from "./schedule/schedule"

import EventTabs from "./evemttab"

import { Loader, Header, Footer, Detail } from "../../components/"
import { Contain } from "../../styles/style"
import {
  Checklist,
  People,
  Contact,
  CreateTrack,
} from "../../components/modals/"
import useWindowWidth from "../../hook_style"
import {
  UserContext,
  TabContext,
  TabState,
} from "../../state/context/contextState"
import { GET_EVENT } from "../../data/queries"
import EventDetails from "./eventdetails"

const Event = (props): JSX.Element => {
  const TabReducer = (state: any, action: any) => {
    console.log(state, "eventtab page")
    switch (action.type) {
      case "SWITCH_DETAIL":
        return { ...state, active: true, activeTab: "detail" }
        break
      case "SWITCH_TRACKS":
        return { ...state, active: true, activeTab: "tracks" }
        break
      case "SWITCH_TEAMS":
        return { ...state, active: true, activeTab: "teams" }
        break
      case "SWITCH_MEETUPS":
        return { ...state, active: true, activeTab: "meetups" }
        break
      default:
        break
    }
  }

  const [state, dispatch] = React.useReducer(TabReducer, TabState)

  const Hooks = useWindowWidth()
  const { data, loading, error } = useQuery(GET_EVENT, {
    variables: {
      id: props.match.params.id,
      name: "John Doe",
    },
  })

  if (loading) {
    return <Loader type={"loading"} />
  }

  if (error) {
    return <Loader type={"error"} />
  }
  if (data) {
    return (
      <TabContext.Provider value={TabState}>
        <Header event={Hooks >= 900 ? data.event.name : data.event.alias} />
        <div>
          <br />
          <Checklist />
          <People />
          <Contact email={data.event.Email} />
          <CreateTrack EventID={data.event.id} />

          <Contain grey bottomShadow>
            <EventDetails data={data} currentWindowSize={Hooks} />

            <EventTabs state={state} dispatch={dispatch} />
          </Contain>

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
              in={state.activeTab === "tracks"}
              classNames={""}
              unmountOnExit
            >
              <Schedule data={data.event.tracks} />
            </CSSTransition>

            <CSSTransition
              timeout={500}
              in={state.activeTab === "teams"}
              classNames={""}
              unmountOnExit
            >
              <TeamList EventID={data.event.id} />
            </CSSTransition>

            <CSSTransition
              timeout={500}
              in={state.activeTab === "events"}
              classNames={""}
              unmountOnExit
            >
              <Events />
            </CSSTransition>
          </Contain>
        </div>

        <Footer />
      </TabContext.Provider>
    )
  }
}

export default inject("ModalStore")(observer(Event))
