import * as React from "react"
import { inject, observer } from "mobx-react"
import { useQuery } from "@apollo/react-hooks"
import { CSSTransition } from "react-transition-group"
import styled from "styled-components"
import media from "styled-media-query"
import { FixedSizeList as List } from "react-window"

import Scheduel from "./schedule/schedule"
import EditEvent from "./editEvent"
import Activity from "./Activity"
import TeamList from "./teamList"
import Schedule from "./schedule/schedule"
import People from "./people/people"
import EventTabs from "./eventTab"
import MeetupTab from "./meetupTab"
import Timeline from "./timeline"
import Admin from "./admin"
import Access from "./access/acess"
import Team from "./team"
import Overview from "./invitation/overview"

import EventModal from "./eventModal"
import { Loader, Header, Footer } from "../../components/"
import MeetupTabComponents from "./meetupTabComponents"
import MeetupAdmin from "./meetups/adminPane"
import ConferenceTab from "../../components/tabs/conference.tab"
import { Contain, Text, Button } from "../../styles/style"
import {
  Checklist,
  Contact,
  CreateTrack,
  PapersModal,
  BugModal,
  AccessModal,
} from "../../components/modals/"
import AttendPane from "../../components/panes/attend.pane"
import useWindowWidth from "../../hook_style"
import {
  UserContext,
  TabContext,
  AdminContext,
  AdminTabState,
  TabState,
} from "../../state/context/contextState"
import { TabReducer, AdminTabReducer } from "../../state/context/reducers"
import { GET_EVENT } from "../../data/queries"
import EventDetails from "./eventdetails"
import Store from "./store/store"
import Mobile from "../mobile/mobile"
import "../../App.css"
import TestImg from "../../assets/images/test.png"
import MeetupDetails from "./meetups/meetupDetails"

// make grids responsive
const EventGrid = styled.div`
  display: grid;
  grid-gap: 0rem;
  grid-template-columns: ${props =>
    props.permission ? "18rem auto 22rem" : "auto 20rem"} ;
  transition  : all 300ms;
  ${media.lessThan("huge")`
  grid-template-columns: ${props => (props.permission ? "23% 77%" : "78% 22%")};
`} 
  ${media.lessThan("large")`
 grid-template-columns: ${props => (props.permission ? "5rem auto" : "100%")};
`}
  ${media.lessThan("medium")`
  grid-template-columns: 100%;
`}
`

const Event = (props): JSX.Element => {
  // naming conflicts coming up here
  const [staate, dispaatch] = React.useReducer(TabReducer, TabState)
  const [state, dispatch] = React.useReducer(AdminTabReducer, AdminTabState)

  const Hooks = useWindowWidth()
  const EventType = props.match.params.eventType
  const {
    openContactModal,
    openCrashReporter,
    openAccessModal,
    closeAccessModal,
    accessModal,
    openEditModal,
    EventId,
    setEventId,
  } = props.ModalStore

  const t = 1

  React.useEffect(() => {
    setEventId(props.match.params.id)
  }, [t])

  const { data, loading, error } = useQuery(GET_EVENT, {
    variables: {
      id: EventId,
      name: "",
    },
  })

  if (loading) {
    return <Loader type={"loading"} />
  }

  if (error) {
    console.log(error)

    return (
      <Loader
        type={"error"}
        error={error.graphQLErrors[0].message || ""}
        path={error.graphQLErrors[0].path[0] || ""}
      />
    )
  }

  if (data) {
    const userId = localStorage.getItem("user_id")
    const permission = data.event.createdBy[0].id == userId
    const meetupGroupLength =
      data.event.meetupGroups === null ? 0 : data.event.meetupGroups.length

    return (
      <TabContext.Provider value={TabState}>
        <Header event={Hooks >= 900 ? data.event.name : data.event.alias} />

        <br />
        <EventModal />
        <Checklist />
        <PapersModal data={data.event} />
        <Contact email={data.event.Email} />
        <CreateTrack EventID={data.event.id} />
        <BugModal />
        <AccessModal
          closeAccessModal={closeAccessModal}
          accessModal={accessModal}
        />

        <EventGrid permission={permission}>
          {permission && Hooks >= 770 ? (
            EventType === "Conference" ? (
              <Admin
                Width={Hooks}
                openCrashReporter={openCrashReporter}
                openEditModal={openEditModal}
                state={state}
                dispatch={dispatch}
                openAccessModal={openAccessModal}
              />
            ) : (
              <div>
                {meetupGroupLength > 0 ? (
                  <MeetupAdmin
                    Width={Hooks}
                    openCrashReporter={openCrashReporter}
                    openEditModal={openEditModal}
                    state={state}
                    dispatch={dispatch}
                    openAccessModal={openAccessModal}
                  />
                ) : (
                  <Admin
                    Width={Hooks}
                    openCrashReporter={openCrashReporter}
                    openEditModal={openEditModal}
                    state={state}
                    meetupGroupLength={meetupGroupLength}
                    dispatch={dispatch}
                    openAccessModal={openAccessModal}
                  />
                )}
              </div>
            )
          ) : null}

          <div  style={{height : window.innerHeight - 80 , overflow : 'auto' }} >
            <AdminContext.Provider value={AdminTabState}>
              <CSSTransition
                timeout={300}
                className={""}
                unmountOnExit
                in={state.activeTab === "dashboard"}
              >
                <div style={{ overflow: "hidden" }}>
                  {meetupGroupLength > 0 ? null : (
                    <AttendPane event={data.event} />
                  )}

                  {EventType === "Conference" ? (
                    <Contain img={TestImg} grey>
                      <EventDetails
                        state={staate}
                        permissio={permission}
                        data={data}
                        meetupGroupLength={meetupGroupLength}
                        dispatch={dispaatch}
                        eventType={EventType}
                        currentWindowSize={Hooks}
                        openEditModal={openEditModal}
                      />
                    </Contain>
                  ) : (
                    <div>
                      {meetupGroupLength > 0 ? (
                        <Contain grey>
                          <MeetupDetails
                            state={staate}
                            permissio={permission}
                            data={data}
                            meetupGroupLength={meetupGroupLength}
                            dispatch={dispaatch}
                            eventType={EventType}
                            currentWindowSize={Hooks}
                            openEditModal={openEditModal}
                          />
                        </Contain>
                      ) : (
                        <Contain grey img={TestImg}>
                          <EventDetails
                            state={staate}
                            permissio={permission}
                            data={data}
                            meetupGroupLength={meetupGroupLength}
                            dispatch={dispaatch}
                            eventType={EventType}
                            currentWindowSize={Hooks}
                            openEditModal={openEditModal}
                          />
                        </Contain>
                      )}
                    </div>
                  )}
                  <Contain grey bottomShadow>
                    {EventType === "Conference" ? (
                      <EventTabs
                        eventType={EventType}
                        state={staate}
                        dispatch={dispaatch}
                      />
                    ) : (
                      <MeetupTab
                        eventType={EventType}
                        state={staate}
                        dispatch={dispaatch}
                      />
                    )}
                  </Contain>

                  {EventType === "Conference" ? (
                    <ConferenceTab
                      openContact={openContactModal}
                      state={staate}
                      data={data}
                    />
                  ) : (
                    <MeetupTabComponents
                      openContact={openContactModal}
                      state={staate}
                      data={data}
                    />
                  )}
                </div>
              </CSSTransition>
              <CSSTransition
                timeout={300}
                className={""}
                unmountOnExit
                in={state.activeTab === "mobile"}
              >
                <Mobile />
              </CSSTransition>{" "}
              <CSSTransition
                timeout={300}
                className={""}
                unmountOnExit
                in={state.activeTab === "invitation"}
              >
                <Overview data={data} />
              </CSSTransition>
              <CSSTransition
                timeout={300}
                className={""}
                unmountOnExit
                in={state.activeTab === "schedule"}
              >
                <Schedule data={data} />
              </CSSTransition>
              <CSSTransition
                timeout={300}
                className={""}
                unmountOnExit
                in={state.activeTab === "edit"}
              >
                <EditEvent eventData={data} />
              </CSSTransition>
              <CSSTransition
                timeout={300}
                className={""}
                unmountOnExit
                in={state.activeTab === "access"}
              >
                <Access />
              </CSSTransition>
              <CSSTransition
                timeout={300}
                className={""}
                unmountOnExit
                in={state.activeTab === "team"}
              >
                <TeamList data={data.event} />
              </CSSTransition>
              <CSSTransition
                timeout={300}
                className={""}
                unmountOnExit
                in={state.activeTab === "store"}
              >
                <Store data={data} />
              </CSSTransition>
            </AdminContext.Provider>
          </div>

          {Hooks >= 1500 ? <Timeline eventData={data.event} /> : null}
        </EventGrid>
      </TabContext.Provider>
    )
  }
}

export default inject("ModalStore")(observer(Event))
