import React from "react"
import { useQuery } from "@apollo/react-hooks"
import styled from "styled-components"
import media from "styled-media-query"
import { FiArrowRight } from "react-icons/fi"
import { CSSTransition } from "react-transition-group"

import EditEvent from "./editMeetupGroup"
import Timeline from "../../timeline"
import { GET_EVENT_MEETUP_GROUP } from "../../../../data/queries"
import { Header, Footer, Loader } from "../../../../components/"
import { Body, Text, Title, Head, Contain } from "../../../../styles/style"
import ProfileDetail from "./meetupgroupprofile.detail"
import {
  AdminContext,
  AdminTabState,
  TabContext,
  TabState,
} from "../../../../state/context/contextState"
import { AdminTabReducer, TabReducer } from "../../../../state/context/reducers"
import useWindowWidth from "../../../../hook_style"
import MeetupAdmin from "./meetupadmin"
import TestImg from "../../../../assets/images/test.png"
import MeetupDetail from "./meetupgroup.detail"

const Grid = styled.div`
  display: grid;
  grid-gap: 0rem;
  grid-template-columns: 18rem auto 22rem;
  transition  : all 300ms;
  ${media.lessThan("huge")`
   grid-template-columns: 20rem auto;
`} 
  ${media.lessThan("large")`
 grid-template-columns: 100%;
`}
  ${media.lessThan("medium")`
  grid-template-columns: 100%;
`}
`

const MeetupGroup = props => {
  const Width = useWindowWidth()
  const { data, loading, error } = useQuery(GET_EVENT_MEETUP_GROUP, {
    variables: {
      id: props.match.params.id,
    },
  })

  // for the sidebar -->
  const [staate, dispaatch] = React.useReducer(AdminTabReducer, AdminTabState)

  // for the detail && segment views
  const [state, dispatch] = React.useReducer(TabReducer, TabState)

  if (error) {
    console.log(error)
    return <Loader type="error" />
  }

  if (loading) {
    return <Loader type="loading" />
  }

  if (data) {
    const { name, summary, event } = data.getMeetupGroup

    const { actions } = event[0]
    console.log(staate)

    return (
      <TabContext.Provider value={TabState}>
        <Header />
        <br />
        <br />
        <Grid>
          <MeetupAdmin
            state={staate}
            dispatch={dispaatch}
            Width={Width}
            alias={event[0].alias}
            id={event[0].id}
            eventType={event[0].eventType}
          />

          <div style={{ height: window.innerHeight - 100, overflow: "auto" }}>
            <CSSTransition
              in={staate.activeTab === "dashboard"}
              unmountOnExit
              timeout={300}
            >
              <div>
                <Head header style={{ justifyContent: "center" }}>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Title small center>
                      {name}
                    </Title>{" "}
                    <div style={{ margin: "0rem 0.7rem" }}>
                      <FiArrowRight style={{ fontSize: "1.8rem" }} />{" "}
                    </div>
                    <Title small center>
                      {event[0].name}
                    </Title>
                  </div>
                </Head>

                <ProfileDetail
                  permission={true}
                  state={state}
                  data={data}
                  dispatch={dispatch}
                  currentWindowSize={Width}
                />
                <MeetupDetail
                  state={state}
                  dispatch={dispatch}
                  data={data}
                  createdBy={event[0].name}
                />
              </div>
            </CSSTransition>

            <CSSTransition
              in={staate.activeTab === "edit"}
              unmountOnExit
              timeout={300}
            >
              <div>
                <EditEvent eventData={data} />
              </div>
            </CSSTransition>
          </div>

          {Width >= 1500 && (
            <Timeline eventData={data.getMeetupGroup.event[0]} />
          )}
        </Grid>
      </TabContext.Provider>
    )
  }
}

export default MeetupGroup
