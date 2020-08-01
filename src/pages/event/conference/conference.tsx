import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { CSSTransition } from 'react-transition-group'
import styled from 'styled-components'

import EditEvent from '../editEvent'
import TeamList from '../teamList'
import Schedule from '../schedule/schedule'
import EventTabs from '../eventTab'
import Overview from '../invitation/overview'
import Archive from '../archive/itetations'

import Developer from '../../developer/event/api'
import ConferenceTab from '../../../components/tabs/conference.tab'
import { Contain, Hover, Text } from '../../../styles/style'
import Configuration from '../configuration/main'
import { ArchivedEvent } from '../../../components/placeholders/'
import AttendPane from '../../../components/panes/attend.pane'
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
import EventStatistics from '../stats'
import Timeline from '../timeline'
import Feedback from '../feedback/main'
import EventPreviewBar from '../previewBar'

const Conference = (props): JSX.Element => {
  const { Width, data, EventType, permission, state, staate, dispatch, dispaatch } = props

  const { openContactModal, openEditModal } = props.ModalStore

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
            in={state.activeTab === 'stats'}
          >
            <EventStatistics state={state} dispatch={dispatch} data={data.event} />
          </CSSTransition>

          <CSSTransition
            timeout={300}
            className={''}
            unmountOnExit
            in={state.activeTab === 'dashboard'}
          >
            <div>
              <div
                style={{
                  display: 'grid',
                  border: '5px solid red',
                  height: window.innerHeight - 150,
                  overflow: 'auto',
                  marginRight: '2rem',
                  marginLeft: '2rem',
                  marginTop: '0.5rem',
                  boxShadow: '0px' + ' 3px' + ' 4px' + ' grey',
                  borderRadius: '10px'
                }}
              >
                <div style={{ overflow: 'hidden' }}>
                  {!permission && <AttendPane permission={permission} event={data.event} />}

                  <EventDetails
                    state={staate}
                    permission={permission}
                    data={data}
                    dispatch={dispaatch}
                    eventType={EventType}
                    currentWindowSize={Width}
                    openEditModal={openEditModal}
                  />
                  <Contain grey bottomShadow>
                    <EventTabs
                      data={data}
                      eventType={EventType}
                      state={staate}
                      dispatch={dispaatch}
                    />
                  </Contain>

                  <ConferenceTab openContact={openContactModal} state={staate} data={data} />

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
              </div>

              <EventPreviewBar />
            </div>
          </CSSTransition>

          <CSSTransition
            timeout={300}
            className={''}
            unmountOnExit
            in={state.activeTab === 'mobile'}
          >
            <Mobile data={data.event} />
          </CSSTransition>

          <CSSTransition
            timeout={300}
            className={''}
            unmountOnExit
            in={state.activeTab === 'event-settings'}
          >
            <Configuration data={data.event} />
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

          <CSSTransition
            timeout={300}
            className={''}
            unmountOnExit
            in={state.activeTab === 'feedback'}
          >
            <Feedback data={data} />
          </CSSTransition>
        </AdminContext.Provider>
      </div>
    </TabContext.Provider>
  )
}

export default inject('ModalStore', 'AuthStore')(observer(Conference))
