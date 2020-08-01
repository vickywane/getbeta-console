import React, { useState } from 'react'
import styled from 'styled-components'

import { Body, Text, Title, Button } from '../../../styles/style'
import { useMutation, useQuery } from '@apollo/react-hooks'
import { UPDATE_EVENT, UPDATE_EVENT_ONBOARDING } from '../../../data/mutations'

const List = styled.div`
  width: 35rem;
  h4 {
    font-weight: 600;
    font-size: 1.6rem;
  }
  ul {
    margin: 0;
    padding: 0;
    text-align: center;
  }
  li {
    list-style: none;
    padding: 0.5rem 1rem;
    margin: 1.5rem 0.5rem;
    border: 2px solid violet;
    border-radius: 5px;
    h5 {
      cursor: pointer;
      font-weight: 500;
      font-size: 1.3rem;
    }
  }
`

const UserMobileOnboard = (props): JSX.Element => {
  const {
    id,
    marketplaceOnboarding,
    teamsOnboarding,
    scheduleOnboarding,
    invitationsOnboarding
  } = props.data

  const [updateEventOnboarding, { loading }] = useMutation(UPDATE_EVENT_ONBOARDING)

  const closeOnboard = (id: number) => {
    updateEventOnboarding({
      variables: {
        id: id,
        mobileOnboarding: true,
        marketplaceOnboarding: marketplaceOnboarding,
        teamsOnboarding: teamsOnboarding,
        scheduleOnboarding: scheduleOnboarding,
        invitationsOnboarding: invitationsOnboarding
      }
    })
      .then(() => console.log('updated'))
      .catch(e => console.log(e))
  }

  return (
    <div
      style={{
        height: window.innerHeight - 90,
        display: 'grid',
        gridTemplateColumns: 'auto' + ' 60rem'
      }}
    >
      <Body
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <div>
          <List>
            <Title center> Mobile Event Interface </Title>
            <hr />
            <Text center>
              Mobile interface for events attendees using the Oasis mobile app.
              <br />
              <br />
              Your event mobile interface pulls data in realtime from your event schedules. Each
              talk is represented and shown as the time overlaps each other
            </Text>

            <Text center>
              {' '}
              <a href={'https://my-event.netlify.com'}> Learn More </a> about Oasis Mobile{' '}
            </Text>

            <hr />
            <li>
              <h5> Event Schedules </h5>
              <Text small> Send invitations to attendees and peple </Text>
            </li>

            <li>
              <h5> Event Reminders </h5>
              <Text small> Send email invitations to some people </Text>
            </li>

            <li>
              <h5>Realtime Talk Slides</h5>
              <Text small> Send email invitations to some people </Text>
            </li>

            <li>
              <h5>In-Event Attendee Engagement</h5>
              <Text small> Send email invitations to some people </Text>
            </li>
          </List>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button long onClick={() => closeOnboard(id)}>
              Get Started
            </Button>
          </div>
        </div>
      </Body>

      <Body
        style={{
          background: '#f84e06',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <img
          alt="iphone"
          style={{ height: '650px', width: '550px' }}
          src={require('../../../assets/ssvg/iphone.svg')}
        />
      </Body>
    </div>
  )
}

export default UserMobileOnboard
