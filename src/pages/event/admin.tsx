import React, { useState } from 'react'
import styled from 'styled-components'
import { FiEdit, FiChevronRight, FiShoppingCart, FiSettings as IoMdConstruct } from 'react-icons/fi'
import {
  IoMdMail,
  IoIosPhonePortrait,
  IoIosHome,
  IoIosCode,
  IoIosPeople,
  IoIosChatboxes,
  IoIosTrendingUp,
  IoIosNotifications,
  IoMdInformationCircle,
  IoMdToday,
  IoIosCart,
  IoIosBookmarks,
  IoIosMail,
  IoMdEye
} from 'react-icons/io'
import { Hover, Text } from '../../styles/style'

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
  span {
    display: none;
    visibility: hidden;
    justify-content: center;
    align-items: center;
    transition : all 500ms;
  }
  &: hover {
    color : #0e2f5a;
    cursor : pointer;
    border-left: 4px solid grey;
    span {
       display: flex;
      visibility: visible;
    }
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

const Tooltip = styled.span`
  height: auto;
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 25rem;
  transform: translate(68%) ${props => props.bottom && 'translateY(-97%)'};
  padding: 1rem 0.5rem;
  border: 1px solid #000;
  background: #22263d;
  margin-top: 0.95rem;
  text-align: center;
  border-radius: 0px 10px 10px 10px;
  color: #fff;
`

const Tip = styled.span`
  position: absolute;
  transform: translate(650%) rotate(180deg);
  margin: -0.3rem 0;
  width: 0;
  height: 0;
  overflow: hidden;
  border: 20px solid transparent;
  border-right-color: #22263d;
`

const Admin = props => {
  const { state, dispatch, Width } = props

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
            <Tip />
            <Tooltip>
              <Text small center>
                {' '}
                An analytical overview of your entire event including notifications.{' '}
              </Text>

              <div>
                <Hover style={{ display: 'flex', justifyContent: 'center' }}>
                  <div style={{ margin: '0rem 0.5rem' }}>
                    <IoIosNotifications style={{ fontSize: '1.5rem' }} />
                  </div>

                  <Text small> 1 pending issue </Text>
                </Hover>
              </div>
            </Tooltip>
          </Tab>

          <br />
          <Tab
            onClick={() => dispatch({ type: 'SWITCH_DASHBOARD' })}
            active={state.activeTab === 'dashboard'}
          >
            <T style={{ padding: '0rem 1rem' }}>
              <IoMdEye style={{ fontSize: '1.7rem' }} />

              {Width <= 1200 ? <Info>Preview</Info> : null}
            </T>
            {Width >= 1200 ? 'Preview' : null}

            <Tip />
            <Tooltip>
              <Text small center>
                {' '}
                A preview of your event page shown to attendees through the web and mobile clients{' '}
              </Text>
              <Text small center>
                {' '}
                Includes : Event Templates{' '}
              </Text>

              <div>
                <Hover style={{ display: 'flex', justifyContent: 'center' }}>
                  <div style={{ margin: '0rem 0.5rem' }}>
                    <IoIosNotifications style={{ fontSize: '1.5rem' }} />
                  </div>
                </Hover>
              </div>
            </Tooltip>
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

            <Tip />
            <Tooltip>
              <Text small center>
                Edit and update supplied information with regards to your event{' '}
              </Text>

              <div>
                <Hover style={{ display: 'flex', justifyContent: 'center' }}>
                  <div style={{ margin: '0rem 0.5rem' }}>
                    <IoIosNotifications style={{ fontSize: '1.5rem' }} />
                  </div>

                  <Text small> 5 information fields are blank </Text>
                </Hover>
              </div>
            </Tooltip>
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

            <Tip />
            <Tooltip>
              <Text small center>
                {' '}
                An analytical overview of your entire event including notifications.{' '}
              </Text>

              <div>
                <Hover style={{ display: 'flex', justifyContent: 'center' }}>
                  <div style={{ margin: '0rem 0.5rem' }}>
                    <IoIosNotifications style={{ fontSize: '1.5rem' }} />
                  </div>

                  <Text small> 1 pending issue </Text>
                </Hover>
              </div>
            </Tooltip>
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

            <Tip />
            <Tooltip>
              <Text small center>
                {' '}
                Email invitations sent to targeted potentials attendees of your event.{' '}
              </Text>
              <Text small center>
                {' '}
                Includes : Email Templates and Drafts.{' '}
              </Text>

              <div>
                <Hover style={{ display: 'flex', justifyContent: 'center' }}>
                  <div style={{ margin: '0rem 0.5rem' }}>
                    <IoIosMail style={{ fontSize: '1.5rem' }} />
                  </div>

                  <Text small> 0 invitations sent out. </Text>
                </Hover>
              </div>
            </Tooltip>
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

            <Tip />
            <Tooltip>
              <Text small center>
                {' '}
                Teams and volunteers added to your event to help in planning.{' '}
              </Text>
              <Text small center>
                {' '}
                Includes: Teams, Volunteers and Attendees.{' '}
              </Text>

              <div>
                <Hover style={{ display: 'flex', justifyContent: 'center' }}>
                  <div style={{ margin: '0rem 0.5rem' }}>
                    <IoIosNotifications style={{ fontSize: '1.5rem' }} />
                  </div>

                  <Text small> 0 created team. </Text>
                </Hover>
              </div>
            </Tooltip>
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

            <Tip />
            <Tooltip>
              <Text small center>
                {' '}
                A schedule of everything happening during your event.{' '}
              </Text>
              <Text small center>
                Includes: Talks and Tracks .{' '}
              </Text>

              <div>
                <Hover style={{ display: 'flex', justifyContent: 'center' }}>
                  <div style={{ margin: '0rem 0.5rem' }}>
                    <IoIosBookmarks style={{ fontSize: '1.5rem' }} />
                  </div>

                  <Text small> 0 created schedules </Text>
                </Hover>
              </div>
            </Tooltip>
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

            <Tip />
            <Tooltip>
              <Hover style={{ margin: '0.5rem 0' }}>
                <IoMdInformationCircle style={{ fontSize: '1.5rem' }} />
              </Hover>

              <Text small center>
                {' '}
                Marketplace for your attendees to easily purchase items relating to your event{' '}
              </Text>

              <div>
                <Hover style={{ display: 'flex', justifyContent: 'center' }}>
                  <div style={{ margin: '0rem 0.5rem' }}>
                    <IoIosCart style={{ fontSize: '1.5rem' }} />
                  </div>

                  <Text small> 10 cart items added </Text>
                </Hover>
              </div>
            </Tooltip>
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

              <Tip />
              <Tooltip bottom>
                <Hover style={{ margin: '0.5rem 0' }}>
                  <IoMdInformationCircle style={{ fontSize: '1.5rem' }} />
                </Hover>
                <Text small center>
                  {' '}
                  An analytical overview of your entire event including notifications.{' '}
                </Text>

                <div>
                  <Hover style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ margin: '0rem 0.5rem' }}>
                      <IoIosNotifications style={{ fontSize: '1.5rem' }} />
                    </div>

                    <Text small> 5 unmodified settings </Text>
                  </Hover>
                </div>
              </Tooltip>
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

              <Tip />
              <Tooltip bottom>
                <Hover style={{ margin: '0.5rem 0' }}>
                  <IoMdInformationCircle style={{ fontSize: '1.5rem' }} />
                </Hover>

                <Text small center>
                  External consumable API's and third-party integrations to be used by events
                  wanting to consume stored data on Oasis on blog pages.
                </Text>

                <div>
                  <Hover style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ margin: '0rem 0.5rem' }}>
                      <IoIosNotifications style={{ fontSize: '1.5rem' }} />
                    </div>

                    <Text small> 5 available third party services </Text>
                  </Hover>
                </div>
              </Tooltip>
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

              <Tip />
              <Tooltip bottom>
                <Hover style={{ margin: '0.5rem 0' }}>
                  <IoMdInformationCircle style={{ fontSize: '1.5rem' }} />
                </Hover>

                <Text small center>
                  {' '}
                  Forms used to collect feedbacks and suggestions from event attendees. This can be
                  used to launch surveys in collecting data about your event{' '}
                </Text>

                <div>
                  <Hover style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ margin: '0rem 0.5rem' }}>
                      <IoMdToday style={{ fontSize: '1.5rem' }} />
                    </div>

                    <Text small> O feedbacks received. </Text>
                  </Hover>
                </div>
              </Tooltip>
            </Tab>
          </Bottom>
        </List>
      </div>
    </Window>
  )
}

export default Admin
