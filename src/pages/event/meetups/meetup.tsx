import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { CSSTransition } from 'react-transition-group'
import styled from 'styled-components'
import media from 'styled-media-query'

import EditEvent from '../editEvent'
import TeamList from '../teamList'
import Schedule from '../schedule/schedule'
import MeetupTab from '../meetupTab'
import Timeline from '../timeline'
import Admin from '../admin'
import Overview from '../invitation/overview'
import Archive from '../archive/itetations'

import Developer from '../../developer/event/api'
import MeetupTabComponents from '../meetupTabComponents'
import MeetupAdmin from './adminPane'
import { Contain, Text } from '../../../styles/style'

import {
  AccessModal,
  BugModal,
  Checklist,
  Contact,
  CreateTrack,
  PapersModal
} from '../../../components/modals/'
import { ArchivedEvent } from '../../../components/placeholders/'
import AttendPane from '../../../components/panes/attend.pane'
import useWindowWidth from '../../../hook_style'
import {
  AdminContext,
  AdminTabState,
  TabContext,
  TabState
} from '../../../state/context/contextState'
import { AdminTabReducer, TabReducer } from '../../../state/context/reducers'
import { GET_EVENT } from '../../../data/queries'
import EventDetails from '../eventdetails'
import Store from '../store/store'
import Mobile from '../../mobile/mobile'
import '../../../App.css'
import TestImg from '../../../assets/images/test.png'
import MeetupDetails from '../meetups/meetupDetails'

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

const Meetup = (props): JSX.Element => {
  const { data, EventType } = props

  // naming conflicts coming up here
  const [staate, dispaatch] = React.useReducer(TabReducer, TabState)
  const [state, dispatch] = React.useReducer(AdminTabReducer, AdminTabState)

  const Hooks = useWindowWidth()
  const { openContactModal, openCrashReporter, openAccessModal, openEditModal } = props.ModalStore

  const t = 1

  const userId = localStorage.getItem('user_id')
  const permission = data.event.createdBy[0].id == userId
  const meetupGroupLength = data.event.meetupGroups === null ? 0 : data.event.meetupGroups.length
  const { id, isLocked, name, dateCreated } = data.event

  if (!permission && isLocked) {
    return <ArchivedEvent name={name} date={dateCreated} />
  }

  // window.addEventListener("scroll", () => {
  // 	alert("meetup comp listener")
  // })

  return (
    <TabContext.Provider value={TabState}>
      <div style={{ height: window.innerHeight - 90, overflow: 'auto' }}>
        <AdminContext.Provider value={AdminTabState}>
          <CSSTransition
            timeout={300}
            className={''}
            unmountOnExit
            in={state.activeTab === 'dashboard'}
          >
            <div style={{ overflow: 'hidden' }}>
              {meetupGroupLength > 0 ? null : (
                <AttendPane permission={permission} event={data.event} />
              )}
              <div>
                {meetupGroupLength > 0 ? (
                  <Contain grey style={{ transition: 'all 300ms' }}>
                    <MeetupDetails
                      state={staate}
                      permission={permission}
                      data={data}
                      meetupGroupLength={meetupGroupLength}
                      dispatch={dispaatch}
                      eventType={EventType}
                      currentWindowSize={Hooks}
                      openEditModal={openEditModal}
                    />
                  </Contain>
                ) : (
                  <Contain grey img={TestImg} style={{ transition: 'all 300ms' }}>
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

              <Contain grey bottomShadow>
                <MeetupTab data={data} eventType={EventType} state={staate} dispatch={dispaatch} />
              </Contain>

              <MeetupTabComponents openContact={openContactModal} state={staate} data={data} />

              <div
                style={{
                  paddingTop: '10px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '50px',
                  width: 'auto',
                  background: '#c0c0c0'
                }}
              >
                <Text color="#0e2f5a">
                  Organized by {data.event.name} on {data.event.dateCreated}{' '}
                </Text>
              </div>
            </div>
          </CSSTransition>

          <CSSTransition
            timeout={300}
            className={''}
            unmountOnExit
            in={state.activeTab === 'mobile'}
          >
            <Mobile />
          </CSSTransition>

          <CSSTransition
            timeout={300}
            className={''}
            unmountOnExit
            in={state.activeTab === 'event-settings'}
          >
            <AccessModal data={data.event} />
          </CSSTransition>

          <CSSTransition
            timeout={300}
            className={''}
            unmountOnExit
            in={state.activeTab === 'invitation'}
          >
            <Overview data={data} />
          </CSSTransition>
          <CSSTransition
            timeout={300}
            className={''}
            unmountOnExit
            in={state.activeTab === 'schedule'}
          >
            <Schedule data={data} />
          </CSSTransition>

          <CSSTransition timeout={300} className={''} unmountOnExit in={state.activeTab === 'edit'}>
            <EditEvent eventData={data} />
          </CSSTransition>

          <CSSTransition timeout={300} className={''} unmountOnExit in={state.activeTab === 'team'}>
            <TeamList data={data.event} />
          </CSSTransition>
          <CSSTransition
            timeout={300}
            className={''}
            unmountOnExit
            in={state.activeTab === 'store'}
          >
            <Store data={data} />
          </CSSTransition>

          <CSSTransition
            timeout={300}
            className={''}
            unmountOnExit
            in={state.activeTab === 'archive'}
          >
            <Archive data={data} />
          </CSSTransition>

          <CSSTransition
            timeout={300}
            className={''}
            unmountOnExit
            in={state.activeTab === 'developer'}
          >
            <Developer data={data} />
          </CSSTransition>
        </AdminContext.Provider>
      </div>
    </TabContext.Provider>
  )
}

export default inject('ModalStore', 'AuthStore')(observer(Meetup))
