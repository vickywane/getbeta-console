import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { CSSTransition } from 'react-transition-group'

import EditEvent from '../editEvent'
import TeamList from '../teamList'
import Schedule from '../schedule/schedule'
import MeetupTab from '../meetupTab'
import Overview from '../invitation/overview'
import Archive from '../archive/itetations'

import Developer from '../../developer/event/api'
import MeetupTabComponents from '../meetupTabComponents'
import { Contain, Text } from '../../../styles/style'

import { AccessModal } from '../../../components/modals/'
import { ArchivedEvent } from '../../../components/placeholders/'
import AttendPane from '../../../components/panes/attend.pane'
import useWindowWidth from '../../../hook_style'
import {
  AdminContext,
  AdminTabState,
  TabContext,
  TabState
} from '../../../state/context/contextState'
import EventDetails from '../eventdetails'
import Store from '../store/store'
import Mobile from '../../mobile/mobile'
import '../../../App.css'
import TestImg from '../../../assets/images/test.png'
import MeetupDetails from '../meetups/meetupDetails'
import MeetupEventLaunch from './meetupgroup/meetupEventLaunch'

const Meetup = (props): JSX.Element => {
  const { data, EventType, state, staate, dispaatch } = props

  // naming conflicts coming up here
  const Hooks = useWindowWidth()
  const {
    openContactModal,
    openEditModal,
    showMeetupLaunch,
    openMeetupEventLaunch,
    closeMeetupEventLaunch
  } = props.ModalStore

  const userId = localStorage.getItem('user_id')
  const permission = data.event.createdBy[0].id == userId
  const meetupGroupLength = data.event.meetupGroups === null ? 0 : data.event.meetupGroups.length
  const { id, isLocked, name, dateCreated } = data.event

  if (!permission && isLocked) {
    return <ArchivedEvent name={name} date={dateCreated} />
  }

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
