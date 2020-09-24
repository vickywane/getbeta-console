import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'

import Header from '../../../components/headers/header'
import { Text, Title, center } from '../../../styles/style'
import { IoIosVideocam, IoIosLink } from 'react-icons/io'
import CreateSessionCard from './create-session-card'
import { IoIosPeople } from 'react-icons/io'

const Body = styled.div`
  padding: 1rem 3rem;
`

const CardBody = styled.div`
  width: 90%;
  height: 90%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3px 4px grey;
`

const Card = styled.div`
  height: 30vh;
  width: 25rem;
  border-radius: 5px;
  display: flex;
  background: #fff;
  color: #0072ce;
  margin: 0 3rem;
  transition: all 400ms;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
  }
  &: hover {
    border: 0;
    cursor: pointer;
    box-shadow: 0 2px 3px grey;
  }
`

const Sessions = props => {
  const [isCreating, setCreating] = useState(false)

  return (
    <div style={{}}>
      <Header />
      {!isCreating && (
        <div>
          <CardBody style={{ width: '100%', height: '8vh', color: '#0072ce' }}>
            <div style={{ display: 'flex', margin: '0 2rem' }}>
              <div style={{ margin: '0 0.7rem', ...center }}>
                <IoIosVideocam style={{ fontSize: '2rem' }} />
              </div>
              <div style={{ ...center }}>
                <Text style={{ margin: 0, padding: 0 }}> 10 Live sessions </Text>
              </div>
            </div>

            <div style={{ display: 'flex', margin: '0 2rem' }}>
              <div style={{ margin: '0 0.7rem', ...center }}>
                <IoIosPeople style={{ fontSize: '2rem' }} />
              </div>
              <div style={{ ...center }}>
                <Text style={{ margin: 0, padding: 0 }}> 10 Group sessions </Text>
              </div>
            </div>

            <div style={{ display: 'flex', margin: '0 2rem' }}>
              <div style={{ margin: '0 0.7rem', ...center }}>
                <IoIosVideocam style={{ fontSize: '2rem' }} />
              </div>
              <div style={{ ...center }}>
                <Text style={{ margin: 0, padding: 0 }}> 10 One - On - One sessions </Text>
              </div>
            </div>
          </CardBody>
        </div>
      )}

      <Body
        style={{
          display: 'flex',
          height: !isCreating ? window.innerHeight - 145 : window.innerHeight - 70,
          justifyContent: 'center',
          alignItems: 'center',
          background: '#d6e2f0cf'
        }}
      >
        {!isCreating ? (
          <div style={{ display: 'flex' }}>
            <Card onClick={() => setCreating(!isCreating)}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ textAlign: 'center', margin: '1rem 0' }}>
                  <IoIosVideocam style={{ fontSize: '2.5rem' }} />
                </div>
                <Title small> Create Live Session </Title>
              </div>
            </Card>

            <Card>
              <Link to="/all-sessions">
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ textAlign: 'center', margin: '1rem 0' }}>
                    <IoIosLink style={{ fontSize: '2.5rem' }} />
                  </div>

                  <Title small> Join Live Session </Title>
                </div>
              </Link>
            </Card>
          </div>
        ) : (
          <CreateSessionCard handleClose={val => setCreating(val)} />
        )}
      </Body>
    </div>
  )
}

export default Sessions
