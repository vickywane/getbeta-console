import React from 'react'
import styled from 'styled-components'

import { EmptyData } from '../../components/placeholders/'
import { FiClock } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Body, Hover, Text, Title } from '../../styles/style'

const Streams = [
  {
    id: 1,
    type: 'Stream',
    date: 'Tuesday - 12 -2020',
    name: 'Learning Gatsby.js for simple SPAs',
    summary: 'Join my as i learn how to use  Gatsby.js for simple SPAs in the modern developer',
    length: '30mins'
  },
  {
    id: 2,
    type: 'Stream',
    date: 'Friday - 12 -2020',
    name: 'Learning Next.js for creating my portfolio SPAs',
    summary: 'Join my as i learn how to use  Gatsby.js for simple SPAs in the modern developer',
    length: '30mins'
  }
]

const Card = styled.div`
  width: auto;
  display: flex;
  padding: 1rem 1rem;
  flex: 1;
  border-radius: 5px;
  justify-content: space-between;
  margin: 0rem 1rem;
  box-shadow: 0px 3px 4px grey;
  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`

const Image = styled.div`
  height : 13vh;
  width : 13rem;
  border-radius : 10px
  border: 1px solid grey;
`

const StreamCard = props => {
  const { streams } = props

  console.log(streams)
  return (
    <Body>
      <Title small center>
        Your Streams{' '}
      </Title>
      {streams === null ? (
        <EmptyData
          message={`You currently do not have any created streams. \n Use **Create Event** Button to create a new stream `}
          feature={'Events'}
          link={'https://my-event.netlify.com'}
        />
      ) : (
        streams.map(({ id, title, createdAt, duration, summary }) => {
          return (
            <Body
              style={{ display: 'grid', gridGap: '1rem 2rem', gridTemplateColumns: '30% auto' }}
            >
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex' }}>
                  <Hover style={{ margin: '0 0.5rem' }}>
                    <FiClock style={{ fontSize: '1.6rem' }} />
                  </Hover>
                  <Text> {createdAt} </Text>
                </div>

                <div
                  style={{
                    borderBottom: '2.5px dashed #000',
                    width: 'auto',
                    display: 'flex',
                    flex: 1
                  }}
                />
              </div>

              <div>
                <Card key={id}>
                  <Image />
                  <div>
                    <Link style={{ textDecoration: 'none' }} to={`/stream/${id}`}>
                      <Title small center>
                        {title}
                      </Title>
                    </Link>

                    <Text small center>
                      {summary}{' '}
                    </Text>
                    <Text small center>
                      {duration}
                    </Text>
                  </div>
                </Card>
              </div>
            </Body>
          )
        })
      )}
    </Body>
  )
}

export default StreamCard
