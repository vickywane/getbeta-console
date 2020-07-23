import React, { useState } from 'react'
import styled from 'styled-components'
import { FiEdit, FiChevronRight, FiShoppingCart, FiSettings as IoMdConstruct } from 'react-icons/fi'
import {
  IoIosBug,
  IoMdMail,
  IoIosPhonePortrait,
  IoIosHome,
  IoIosCode,
  IoIosPeople,
  IoIosChatboxes,
  IoIosTrendingUp
} from 'react-icons/io'

import { GrSchedules } from 'react-icons/gr'

import media from 'styled-media-query'

const Window = styled.div`
  width: auto;
  height: ${window.innerHeight};
  background: #fbfbfb;
  border-right: 0.3px solid #c0c0c0;
`

const List = styled.li`
  list-style: none;
  padding: 0rem 0.5rem;
  display: flex;
  flex-direction: column;
`

const Tab = styled.div`
  display: flex;
  width : auto;
  font-size  : 1.2rem;
  padding : 0.5rem 0.5rem
  margin : 0.7rem 0.5rem;
  color: ${props => (props.active ? '#0e2f5a;' : 'grey')};
  transition : all 300ms; 
  border-left:  ${props => (props.active ? '5px solid #0e2f5a;' : null)}; 
  &: hover {
    color : #0e2f5a;
    cursor : pointer;
  border-left: 4px solid grey;
} 
  ${media.lessThan('large')`
  border-left:  ${props => (props.active ? '4px solid #0e2f5a;' : null)}; 
     padding : 0.4rem 0.1rem 
     margin : 0.4rem 0.1rem;
`}
`

const Info = styled.div`
  position: relative;
  height: auto;
  width: 13rem;
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
  background: #0e2f5a;
  padding: 0.5rem 1rem;
  margin-left: 1.2rem;
  color: #fff;
  border-radius: 0px 5px 5px 0px;
`

const T = styled.div`
  display: flex;
  div {
    visibility: hidden;
    transition: all 400ms;
  }
  &: hover {
    div {
      visibility: visible;
    }
  }
`

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  position: -webkit-sticky;
  bottom: 0.5rem;
`

const Admin = props => {
  const { state, dispatch, openCrashReporter, Width } = props

  return (
    <Window>
      <div>
        <br />

        <List>
          <Tab
            onClick={() => dispatch({ type: 'SWITCH_STATS' })}
            active={state.activeTab === 'stats'}
          >
            <T style={{ padding: '0rem 0.7rem' }}>
              <IoIosTrendingUp style={{ fontSize: '1.7rem' }} />

              {Width <= 1200 ? <Info>Event Statistics</Info> : null}
            </T>
            {Width >= 1200 ? 'Event Statistics' : null}

            {state.activeTab === 'stats' && Width >= 1200 && (
              <FiChevronRight style={{ fontSize: '1.7rem' }} />
            )}
          </Tab>

          <br />
          <Tab
            onClick={() => dispatch({ type: 'SWITCH_DASHBOARD' })}
            active={state.activeTab === 'dashboard'}
          >
            <T style={{ padding: '0rem 1rem' }}>
              <IoIosHome style={{ fontSize: '1.7rem' }} />

              {Width <= 1200 ? <Info>Preview</Info> : null}
            </T>
            {Width >= 1200 ? 'Preview' : null}
          </Tab>

          <Tab
            onClick={() => {
              dispatch({ type: 'SWITCH_EDIT' })
            }}
            active={state.activeTab === 'edit'}
          >
            <T style={{ padding: '0rem 1rem' }}>
              <FiEdit style={{ fontSize: '1.7rem' }} />

              {Width <= 1200 ? <Info>Edit Event</Info> : null}
            </T>
            {Width >= 1200 ? 'Edit Event' : null}
          </Tab>

          <Tab
            onClick={() => dispatch({ type: 'SWITCH_MOBILE' })}
            active={state.activeTab === 'mobile'}
          >
            <T style={{ padding: '0rem 1rem' }}>
              <IoIosPhonePortrait style={{ fontSize: '1.8rem' }} />
              {Width <= 1200 ? <Info>Mobile Interface</Info> : null}{' '}
            </T>
            {Width >= 1200 ? 'Mobile Interface' : null}
          </Tab>

          <Tab
            onClick={() => dispatch({ type: 'SWITCH_INVITATION' })}
            active={state.activeTab === 'invitation'}
          >
            <T style={{ padding: '0rem 1rem' }}>
              <IoMdMail style={{ fontSize: '1.8rem' }} />
              {Width <= 1200 ? <Info>Invitations</Info> : null}{' '}
            </T>
            {Width >= 1200 ? 'Invitation' : null}
          </Tab>

          <Tab
            onClick={() => dispatch({ type: 'SWITCH_TEAM' })}
            active={state.activeTab === 'team'}
          >
            <T style={{ padding: '0rem 1rem' }}>
              <IoIosPeople style={{ fontSize: '1.8rem' }} />
              {Width <= 1200 ? <Info>Teams</Info> : null}
            </T>
            {Width >= 1200 ? 'Event Support' : null}
          </Tab>

          <Tab
            onClick={() => dispatch({ type: 'SWITCH_SCHEDULE' })}
            active={state.activeTab === 'schedule'}
          >
            <T style={{ padding: '0rem 1rem' }}>
              <GrSchedules style={{ fontSize: '1.7rem', color: 'grey' }} />
              {Width <= 1200 ? <Info>Schedule</Info> : null}
            </T>
            {Width >= 1200 ? 'Event Schedule' : null}
          </Tab>

          <Tab
            onClick={() => dispatch({ type: 'SWITCH_STORE' })}
            active={state.activeTab === 'store'}
          >
            <T style={{ padding: '0rem 1rem' }}>
              <FiShoppingCart style={{ fontSize: '1.8rem' }} />
              {Width <= 1200 ? <Info>Marketplace</Info> : null}
            </T>
            {Width >= 1200 ? 'Marketplace' : null}
          </Tab>

          <Bottom>
            <Tab
              onClick={() => {
                dispatch({ type: 'SWITCH_EVENT_SETTINGS' })
              }}
              active={state.activeTab === 'access'}
            >
              <T style={{ padding: '0rem 1rem' }}>
                <IoMdConstruct style={{ fontSize: '1.7rem' }} />
                {Width <= 1200 ? <Info>Event Actions</Info> : null}
              </T>
              {Width >= 1200 ? 'Configuration ' : null}
            </Tab>
            <Tab
              onClick={() => {
                dispatch({ type: 'SWITCH_DEVELOPER' })
              }}
              active={state.activeTab === 'developer'}
            >
              <T style={{ padding: '0rem 1rem' }}>
                <IoIosCode style={{ fontSize: '1.8rem' }} />
                {Width <= 1200 ? <Info>Developer APIs</Info> : null}
              </T>
              {Width >= 1200 ? 'Developer APIs' : null}
            </Tab>

            <Tab
              onClick={() => {
                dispatch({ type: 'SWITCH_FEEDBACK' })
              }}
              active={state.activeTab === 'feedback'}
            >
              <T style={{ padding: '0rem 1rem' }}>
                <IoIosChatboxes style={{ fontSize: '1.8rem' }} />
                {Width <= 1200 ? <Info>Event Feedback</Info> : null}
              </T>
              {Width >= 1200 ? 'Event Feedback' : null}
            </Tab>
          </Bottom>
        </List>
      </div>
    </Window>
  )
}

export default Admin
