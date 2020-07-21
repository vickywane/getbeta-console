import React, { useState } from 'react'
import Flex from 'styled-flex-component'
import { useMutation } from '@apollo/react-hooks'
import styled from 'styled-components'
import { FiMoreHorizontal } from 'react-icons/fi'
import { IoIosSearch, IoIosArrowUp } from 'react-icons/io'
import { CSSTransition } from 'react-transition-group'

import { UPDATE_EVENT_SETTINGS } from '../../data/mutations'
import {
  Hover,
  Title,
  Text,
  Section,
  Head,
  Body as Bod,
  Button,
  TabColumn,
  Tab
} from '../../styles/style'
import { Switch, Tip } from '../../components'

const Body = styled(Bod)`
  padding: 0.5rem 1.5rem;
`

const SettingsBox = styled.div`
  display: flex;
  width: 35rem;
  border-radius: 5px;
  background: #fff;
  border: 1px solid #0e2f5a;
  input {
    display: flex;
    flex: 1;
    width: auto;
    color: #0e2f5a;
    font-size: 1.1rem;
    padding: 0.7rem 0.7rem;
    background: transparent;
    outline: 0px;
    border-radius: 30px;
    border: 0px;
  }
  div {
    height: auto;
    width: 4rem;
    border-radius: 5px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #0e2f5a;
    cursor: pointer;
  }
`

const HoverCircle = styled(Hover)`
  width: 45px;
  height: 40px;
  transition: all 300ms;
  display: flex;
  justify-content: center;
  color: #0e2f5a;
  align-items: center;
  border-radius: 5px;
  &: hover {
    background: #0e2f5a;
    color: #fff;
  }
`

const EventSettings = props => {
  const { data } = props
  const [ActiveColumn, setActiveColumn] = useState<String>('Event Actions')

  const [HideActive, setHideActive] = useState<boolean>(false)
  const [LockActive, setLockActive] = useState<boolean>(false)
  const [VolunteerAcessActive, setVolunteerTab] = useState<boolean>(false)

  const [Tips, showTips] = useState(false)
  const [TipMessage, setTipMessage] = useState('')

  const [Delete, setDelete] = useState<boolean>(false)
  const { id, isLocked, isArchived } = data
  const [updateEventSettings, { error }] = useMutation(UPDATE_EVENT_SETTINGS)

  const switchClick = (value, name) => {
    switch (name) {
      case 'accept-attendees':
        if (value === 'on') {
          setHideActive(true)
        } else {
          setHideActive(false)
        }
        break

      case 'access':
        if (value === 'on') {
          setHideActive(true)
        } else {
          setHideActive(true)
        }
        break

      case 'hide-tab':
        if (value === 'on') {
          setLockActive(true)
        } else {
          setLockActive(false)
        }
        break
      case 'archive-event':
        if (value === 'on') {
          setTipMessage('Archiving your event ...')

          updateEventSettings({
            variables: {
              eventId: id,
              isLocked: isLocked,
              isArchived: !isArchived
            }
          }).then(() => {
            showTips(true)
            setVolunteerTab(true)
          })
        } else {
          setVolunteerTab(false)
        }

        break

      case 'lock-event':
        if (value === 'on') {
          setTipMessage('Locking your event ...')

          updateEventSettings({
            variables: {
              eventId: id,
              isLocked: !isLocked,
              isArchived: isArchived
            }
          }).then(() => {
            showTips(true)
            setVolunteerTab(true)
          })
        } else {
          setVolunteerTab(false)
        }

        break
      case 'delete-event':
        setDelete(!Delete)
        break
      default:
        break
    }
  }

  return (
    <div>
      <Head header>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Section> Event Configuration </Section>
        </div>

        <SettingsBox>
          <input placeholder={'Find a setting'} />
          <div>
            <IoIosSearch style={{ fontSize: '1.8rem' }} />
          </div>
        </SettingsBox>
      </Head>

      <Body style={{ height: '25vh', background: '#fbfbfb' }}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Button> Delete Event </Button>
        <div style={{ height: '60px', width: '100%' }}>
          <Tab>
            <TabColumn
              onClick={() => {
                setActiveColumn('Event Actions')
              }}
              active={ActiveColumn === 'Event Actions'}
              small
            >
              Event Actions
            </TabColumn>
            <TabColumn
              onClick={() => {
                setActiveColumn('Notifications')
              }}
              small
              active={ActiveColumn === 'Notifications'}
            >
              Notifications
            </TabColumn>
            <TabColumn
              onClick={() => {
                setActiveColumn('Billings')
              }}
              small
              active={ActiveColumn === 'Billings'}
            >
              Billings
            </TabColumn>
            <TabColumn
              onClick={() => {
                setActiveColumn('Privacy')
              }}
              small
              active={ActiveColumn === 'Privacy'}
            >
              Privacy
            </TabColumn>
            <TabColumn
              onClick={() => {
                setActiveColumn('Marketplace')
              }}
              small
              active={ActiveColumn === 'Marketplace'}
            >
              Marketplace
            </TabColumn>
            <TabColumn
              onClick={() => {
                setActiveColumn('Authorization')
              }}
              small
              active={ActiveColumn === 'Authorization'}
            >
              Authorization
            </TabColumn>
          </Tab>
        </div>
      </Body>

      <br />

      {Tips && (
        <Tip
          message={TipMessage}
          timeout={500}
          icon={<FiMoreHorizontal style={{ fontSize: '1.9rem' }} />}
        />
      )}
      <Body>
        <CSSTransition in={ActiveColumn === 'Actions'} timeout={300} unmountOnExit>
          <div></div>
        </CSSTransition>
      </Body>

      <Body>
        <Title small> Community Involvement </Title>
        <hr />
        <Flex justifyBetween>
          <Text small style={{ padding: '0rem 0.5rem' }}>
            Allow viewers to register for event
          </Text>

          <Switch color={'#120B6A'} handleClick={switchClick} name="accept-attendees" />
        </Flex>
      </Body>

      <Body>
        <Title small> Event Console Access </Title>
        <hr />
        <Flex justifyBetween>
          <Text small style={{ padding: '0rem 0.5rem' }}>
            Grant Console Access to volunteers
          </Text>

          <Switch color={'#120B6A'} handleClick={switchClick} name="access" />
        </Flex>

        <Flex justifyBetween>
          <Text small style={{ padding: '0rem 0.5rem' }}>
            Grant Console Access
          </Text>

          <Text small style={{ cursor: 'pointer', color: 'blue' }}>
            Grant Permission
          </Text>
        </Flex>
      </Body>

      <Body>
        <Title small> Attendees and Volunteers </Title>
        <hr />

        <Flex justifyBetween>
          <div
            style={{
              padding: '0rem 0.3rem',
              display: 'flex'
            }}
          >
            <Text small style={{ padding: '0rem 0.5rem' }}>
              Hide list of volunteers and attendees tab.
            </Text>
          </div>

          <Switch color={'#120B6A'} handleClick={switchClick} name="hide-tab" />
        </Flex>
      </Body>

      <Body>
        <Title small> Mobile Event Lock </Title>
        <hr />

        <Flex justifyBetween>
          <div
            style={{
              padding: '0rem 0.3rem',
              display: 'flex'
            }}
          >
            <Text style={{ padding: '0rem 0.5rem' }} small>
              Lock event details on mobile device until event date.
            </Text>
          </div>
          <Switch
            initialState={isLocked}
            color={'#120B6A'}
            handleClick={switchClick}
            name="lock-event"
          />
        </Flex>
      </Body>

      <Body>
        <Title small> Actions </Title>
        <hr />

        <Flex justifyBetween>
          <div
            style={{
              padding: '0rem 0.3rem'
            }}
          >
            <Text style={{ padding: '0rem 0.5rem' }} small>
              Archive Event. Suspend your event until a later time.
            </Text>
          </div>
          <Switch
            initialState={isArchived}
            color={'#120B6A'}
            handleClick={switchClick}
            name="archive-event"
          />
        </Flex>

        <Flex justifyBetween>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                padding: '0rem 0.3rem'
              }}
            >
              <Text style={{ padding: '0rem 0.5rem' }} small>
                Delete Your Event. We advise you archive your event and pull out of archive later!
              </Text>
            </div>
          </div>

          <Switch color={'red'} handleClick={switchClick} name="delete-event" />
        </Flex>
      </Body>

      <Body>
        <Title small> Event Marketplace </Title>
        <hr />

        <Flex justifyBetween>
          <div
            style={{
              padding: '0rem 0.3rem',
              display: 'flex'
            }}
          >
            <Text style={{ padding: '0rem 0.5rem' }} small>
              Lock event details on mobile device until event date.
            </Text>
          </div>
          <Switch
            initialState={isLocked}
            color={'#120B6A'}
            handleClick={switchClick}
            name="lock-event"
          />
        </Flex>
      </Body>
    </div>
  )
}

export default EventSettings
