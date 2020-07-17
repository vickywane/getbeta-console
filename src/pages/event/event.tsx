import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { useQuery } from '@apollo/react-hooks'
import { CSSTransition } from 'react-transition-group'
import styled from 'styled-components'
import media from 'styled-media-query'

import EditEvent from './editEvent'
import TeamList from './teamList'
import Schedule from './schedule/schedule'
import EventTabs from './eventTab'
import MeetupTab from './meetupTab'
import Timeline from './timeline'
import Admin from './admin'
import Overview from './invitation/overview'
import Archive from './archive/itetations'

import Developer from '../developer/event/api'
import EventModal from './eventModal'
import { Header, Loader } from '../../components/'
import MeetupTabComponents from './meetupTabComponents'
import MeetupAdmin from './meetups/adminPane'
import ConferenceTab from '../../components/tabs/conference.tab'
import { Contain, Text } from '../../styles/style'
import {
  AccessModal,
  BugModal,
  Checklist,
  Contact,
  CreateTrack,
  PapersModal
} from '../../components/modals/'
import { ArchivedEvent } from '../../components/placeholders/'
import AttendPane from '../../components/panes/attend.pane'
import useWindowWidth from '../../hook_style'
import { AdminContext, AdminTabState, TabContext, TabState } from '../../state/context/contextState'
import { AdminTabReducer, TabReducer } from '../../state/context/reducers'
import { GET_EVENT } from '../../data/queries'
import EventDetails from './eventdetails'
import Store from './store/store'
import Mobile from '../mobile/mobile'
import '../../App.css'
import TestImg from '../../assets/images/test.png'
import MeetupDetails from './meetups/meetupDetails'

import Conference from './conference/conference'
import Meetup from './meetups/meetup'

// make grids responsive
const EventGrid = styled.div`
  display: grid;
  grid-gap: 0rem;
  grid-template-columns: ${props => (props.permission ? '17rem auto 21rem' : 'auto 23rem')} ;
  transition  : all 300ms;
  ${media.lessThan('huge')`
      grid-template-columns: ${props => (props.permission ? '16rem auto' : '78% auto')};
`} 
  ${media.lessThan('large')`
 grid-template-columns: ${props => (props.permission ? '5rem auto' : '100%')};
`}
  ${media.lessThan('medium')`
  grid-template-columns: 100%;
`}
`

const Event = (props): JSX.Element => {
  // naming conflicts coming up here
  const [staate, dispaatch] = React.useReducer(TabReducer, TabState)
  const [state, dispatch] = React.useReducer(AdminTabReducer, AdminTabState)
  const { authenticated } = props.AuthStore

  const Hooks = useWindowWidth()
  const EventType = props.match.params.eventType
  const {
    EventId,
    setEventId,
    openContactModal,
    openCrashReporter,
    openAccessModal,
    openEditModal
  } = props.ModalStore

  const t = 1

  React.useEffect(() => {
    // revert
    setEventId(props.match.params.id)
  }, [t])

  const { data, loading, error } = useQuery(GET_EVENT, {
    variables: {
      id: EventId,
      name: ''
    }
  })

  if (loading) {
    return <Loader type={'loading'} />
  }

  if (error) {
    console.log(error)

    return (
      <Loader
        type={'error'}
        error={error.graphQLErrors[0].message || ''}
        path={error.graphQLErrors[0].path[0] || ''}
      />
    )
  }

  if (data) {
    const userId = localStorage.getItem('user_id')
    const permission = data.event.createdBy[0].id == userId
    const meetupGroupLength = data.event.meetupGroups === null ? 0 : data.event.meetupGroups.length
    const { id, isLocked, name, dateCreated } = data.event

    if (!permission && isLocked) {
      return <ArchivedEvent name={name} date={dateCreated} />
    }

    return (
      <div>
        {authenticated && (
          <div>
            {' '}
            <Header event={Hooks >= 900 ? data.event.name : data.event.alias} />
            <div style={{ marginBottom: '2.2rem' }} />
          </div>
        )}

        <EventModal data={data.event} eventId={id} />
        <Checklist />
        <PapersModal data={data.event} />
        <Contact email={data.event.Email} />
        <CreateTrack EventID={data.event.id} />
        <BugModal eventId={data.event.id} />

        <EventGrid permission={permission}>
          {permission && Hooks >= 770 ? (
            EventType === 'Conference' ? (
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

          {EventType === 'Conference' ? (
            <Conference data={data} EventType={EventType} />
          ) : (
            <Meetup data={data} EventType={EventType} />
          )}

          {Hooks >= 1500 && <Timeline state={state} dispatch={dispatch} eventData={data.event} />}
        </EventGrid>
      </div>
    )
  }
}

export default inject('ModalStore', 'AuthStore')(observer(Event))
