import React, { useState } from 'react'
import styled from 'styled-components'

import { Body, Text, Title, Button, Label } from '../../../styles/style'

const List = styled.div`
  width: 45rem;
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

const TeamsOnboard = (props): JSX.Element => {
  const {} = props

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
              <Title center> Oasis Event Teams </Title>
              <hr />

              <Text center>
                {' '}
                Teams on Oasis are a great way to have others collaborate with you while organizing
                your events.{' '}
              </Text>

              <Text center>
                Using the team based access control, you can now grant a specific access level to
                volunteers based on the team they belong to.
              </Text>

              <Text center>
                {' '}
                <a href={'https://my-event.netlify.com'}> Learn More </a> about Invitations on Oasis{' '}
              </Text>

              <hr />
              <h4>Sample Event Teams</h4>
              <hr />
              <li>
                <Label small> Media Team </Label>
                <Text small>
                  Each member manages and has access to your event gallery and media assets.
                </Text>
              </li>

              <li>
                <Label small> Talk Submissions Team </Label>
                <Text small>
                  Each member manages Call For Papers setting and review incoming talk drafts.
                </Text>
              </li>

              <li>
                <Label small> Attendee Support Team </Label>
                <Text small>
                  Each member manages the feedback channel and also the event Invitations.
                </Text>
              </li>
            </List>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button long onClick={() => {}}>
              {' '}
              Create Sample Teams{' '}
            </Button>
            <Button long onClick={() => {}}>
              {' '}
              Continue with Teams{' '}
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
          src={require('../../../assets/ssvg/team.svg')}
        />
      </Body>
    </div>
  )
}

export default TeamsOnboard
