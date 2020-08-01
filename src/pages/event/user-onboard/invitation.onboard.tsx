import React, { useState } from 'react'
import styled from 'styled-components'

import { Body, Text, Title, Button } from '../../../styles/style'
import { useMutation } from '@apollo/react-hooks'
import { UPDATE_EVENT_ONBOARDING } from '../../../data/mutations'

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
      font-size: 1.3rem;
    }
  }
`

const InvitationsOnboard = (props): JSX.Element => {
  const {
    id,
    marketplaceOnboarding,
    mobileOnboarding,
    teamsOnboarding,
    scheduleOnboarding
  } = props.data

  const [updateEventOnboarding, { loading }] = useMutation(UPDATE_EVENT_ONBOARDING, {})

  const Update = (id: number) => {
    updateEventOnboarding({
      variables: {
        id: id,
        mobileOnboarding: mobileOnboarding,
        marketplaceOnboarding: marketplaceOnboarding,
        teamsOnboarding: teamsOnboarding,
        scheduleOnboarding: scheduleOnboarding,
        invitationsOnboarding: true
      }
    })
      .then(() => alert('done'))
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
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <List>
              <Title center> Oasis Custom Event Invitations </Title>
              <hr />
              <Text center>
                Invitations are a great way to invite people to take part in your event.
                <br />
                <br />
                Send, Compose and monitor email invitations sent to your event attendees. You could
                even broadcast hundred of mails or add them to a list.
              </Text>

              <Text center>
                {' '}
                <a href={'https://my-event.netlify.com'}> Learn More </a> about Invitations on Oasis{' '}
              </Text>

              <hr />
              <h4>Recommended Invitations :</h4>
              <hr />
              <li>
                <h5 style={{ fontWeight: 'normal' }}> Attendees Invitations </h5>
                <Text small> Send invitations to attendees and peple </Text>
              </li>

              <li>
                <h5> Attendees Invitations </h5>
                <Text small> Send email invitations to some people </Text>
              </li>

              <li>
                <h5> Attendees Invitations </h5>
                <Text small> Send email invitations to some people </Text>
              </li>
            </List>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button long onClick={() => {}}>
              Create Sample Invitations{' '}
            </Button>
            <Button long onClick={() => Update(id)}>
              Continue with Invitations{' '}
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
          src={require('../../../assets/ssvg/Email.svg')}
        />
      </Body>
    </div>
  )
}

export default InvitationsOnboard
