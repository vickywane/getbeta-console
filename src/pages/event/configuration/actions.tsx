import React, { useState } from 'react'
import Flex from 'styled-flex-component'
import { useMutation } from '@apollo/react-hooks'
import styled from 'styled-components'
import { FiMoreHorizontal } from 'react-icons/fi'

import { UPDATE_EVENT_SETTINGS } from '../../../data/mutations'
import { Title, Text, Body as Bod } from '../../../styles/style'
import { Switch, Tip } from '../../../components'

const Body = styled(Bod)`
  padding: 0.5rem 1.5rem;
`

const Action = props => {
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
      {Tips && (
        <Tip
          message={TipMessage}
          timeout={500}
          icon={<FiMoreHorizontal style={{ fontSize: '1.9rem' }} />}
        />
      )}

      <Body>
        <Title small> Actions </Title>

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
      </Body>
    </div>
  )
}

export default Action
