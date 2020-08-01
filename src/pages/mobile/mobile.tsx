import React, { useState } from 'react'
import styled from 'styled-components'

import {} from '../../components/'

import { Contain, Body, Text, Title, Button } from '../../styles/style'
import { CSSTransition } from 'react-transition-group'
import { UserMobileOnboard } from '../event/user-onboard/'

const Grid = styled.div`
  display : grid
  grid-gap : 1rem 1rem
  grid-template-columns : 27rem auto
`

const List = styled.div`
  width: 30rem;
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

const Mobile = props => {
  const { data } = props
  const { mobileOnboarding } = props.data

  return (
    <div>
      <CSSTransition timeout={300} in={!mobileOnboarding} unmountOnExit>
        <UserMobileOnboard data={data} />
      </CSSTransition>

      <CSSTransition timeout={300} in={mobileOnboarding} unmountOnExit>
        <Body>
          <Grid>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                placeItems: 'center'
              }}
            >
              <img
                alt="iphone"
                style={{ height: '600px', width: '500px' }}
                src={require('../../assets/ssvg/iphone.svg')}
              />
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Body>
                <List>
                  <h4> Mobile Interface </h4>
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
                  <Button long>Get Started</Button>
                </div>
              </Body>
            </div>
          </Grid>
        </Body>
      </CSSTransition>
    </div>
  )
}

export default Mobile
