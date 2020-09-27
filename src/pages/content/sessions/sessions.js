import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'
import media from 'styled-media-query'

import Header from '../../../components/headers/header'
import { Text, Title, center } from '../../../styles/style'
import { IoIosVideocam, IoIosLink } from 'react-icons/io'
import CreateSessionCard from './create-session-card'
import { IoIosPeople } from 'react-icons/io'

const Body = styled.div`
  padding: 1rem 2rem;
  ${media.lessThan('medium')`
    padding: 1rem 1rem;
  `};
  ${media.lessThan('medium')`
    padding: 0.5rem 0.5rem;
  `}
`

const CardBody = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #0072ce;
  ${media.lessThan('medium')`
    flex-direction : column;
  `};
`

const Card = styled.div`
  height: 30vh;
  width: 25rem;
  border-radius: 5px;
  display: flex;
  background: #fff;
  color: #0072ce;
  margin: 1.5rem 2rem;
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
  ${media.lessThan('medium')`
    border-radius: 3px;
      width: 24rem;
  `};
  ${media.lessThan('small')`
    width: 20rem;
`};
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 50% auto;
  place-items: center;
  ${media.lessThan('medium')`
    display : flex;
    flex-direction : column;
    align-items : center;
  `};
`

const Sessions = props => {
  const [isCreating, setCreating] = useState(false)

  return (
    <div>
      <Header />
      {!isCreating && (
        <CardBody style={{ background: '#d6e2f0cf' }}>
          <div style={{ display: 'flex', margin: '0 2rem' }}>
            <div style={{ margin: '0 0.7rem', ...center }}>
              <IoIosVideocam style={{ fontSize: '1.8rem' }} />
            </div>
            <div style={{ ...center }}>
              <Text style={{ margin: 0, padding: 0 }}> 10 Live sessions </Text>
            </div>
          </div>

          <div style={{ display: 'flex', margin: '0 2rem' }}>
            <div style={{ margin: '0 0.7rem', ...center }}>
              <IoIosPeople style={{ fontSize: '1.8rem' }} />
            </div>
            <div style={{ ...center }}>
              <Text style={{ margin: 0, padding: 0 }}> 10 Group sessions </Text>
            </div>
          </div>

          <div style={{ display: 'flex', margin: '0 2rem' }}>
            <div style={{ margin: '0 0.7rem', ...center }}>
              <IoIosVideocam style={{ fontSize: '1.8rem' }} />
            </div>
            <div style={{ ...center }}>
              <Text style={{ margin: 0, padding: 0 }}> 10 One - On - One sessions </Text>
            </div>
          </div>
        </CardBody>
      )}

      <Body
        style={{
          display: 'flex',
          height: !isCreating ? window.innerHeight - 145 : window.innerHeight - 70,
          overflow: 'auto',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#d6e2f0cf'
        }}
      >
        <br />
        {!isCreating ? (
          <Grid>
            <Card onClick={() => setCreating(!isCreating)}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ textAlign: 'center', margin: '1rem 0' }}>
                  <IoIosVideocam style={{ fontSize: '2.2rem' }} />
                </div>
                <Text small> Create Live Session </Text>
              </div>
            </Card>

            <Card>
              <Link to="/all-sessions">
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ textAlign: 'center', margin: '1rem 0' }}>
                    <IoIosLink style={{ fontSize: '2.2rem' }} />
                  </div>

                  <Text small> Join Live Session </Text>
                </div>
              </Link>
            </Card>
          </Grid>
        ) : (
          <CreateSessionCard handleClose={val => setCreating(val)} />
        )}
      </Body>
    </div>
  )
}

export default Sessions
