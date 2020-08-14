import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'

import { CourseCardsData } from '../../../mockData'
import Header from '../../../components/headers/header'
import { Text, Title } from '../../../styles/style'
import { IoIosVideocam, IoIosLink } from 'react-icons/io'
import CreateSessionCard from './create-session-card'
import CreateSession from './create-session-card'

const Body = styled.div`
  padding: 1rem 3rem;
`

const Searchbox = styled.div`
width  : 42rem;
border : 1px solid #000;
border-radius : 2px;
padding : 0.5rem 0.5rem;
display : flex;
padding   : 0.7rem 0.5rem;
justify-content: space-between;
input {
     padding : 0.2rem 1rem;
    width  : 42rem
    outline : 0;
    border : 0;
  }
  div {
    display  : flex;
    justify-content : center;
    align-items : center;
  }
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
  height: 35vh;
  width: 27rem;
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
              <div style={{ margin: '0 0.7rem' }}>
                <IoIosVideocam style={{ fontSize: '1.7rem' }} />
              </div>
              <Title small> 10 Live sessions </Title>
            </div>

            <div style={{ display: 'flex', margin: '0 2rem' }}>
              <div style={{ margin: '0 0.7rem' }}>
                <IoIosVideocam style={{ fontSize: '1.7rem' }} />
              </div>
              <Title small> 10 Group sessions </Title>
            </div>

            <div style={{ display: 'flex', margin: '0 2rem' }}>
              <div style={{ margin: '0 0.7rem' }}>
                <IoIosVideocam style={{ fontSize: '1.7rem' }} />
              </div>
              <Title small> 10 One - On - One sessions </Title>
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
                  <IoIosVideocam style={{ fontSize: '3rem' }} />
                </div>
                <Title small> Create Live Session </Title>
              </div>
            </Card>

            <Card>
              <Link to="#">
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ textAlign: 'center', margin: '1rem 0' }}>
                    <IoIosLink style={{ fontSize: '3rem' }} />
                  </div>

                  <Title small> Join Live Session </Title>
                </div>
              </Link>
            </Card>
          </div>
        ) : (
          <CreateSessionCard closeBtnRef={''} />
        )}
      </Body>
    </div>
  )
}

export default Sessions
