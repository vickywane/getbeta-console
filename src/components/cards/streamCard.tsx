import React from 'react'
import styled from 'styled-components'

import { EmptyData } from '../../components/placeholders/'
import { FiCalendar } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Body, Hover, Text, Title } from '../../styles/style'

const Card = styled.div`
  width: auto;
  padding: 1rem 1rem;
  flex: 1;
  -webkit-border-top-right-radius: 30px;
  -webkit-border-bottom-right-radius: 30px;
  -moz-border-radius-topright: 30px;
  -moz-border-radius-bottomright: 30px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  margin: 0rem 1rem;
  box-shadow: 0px 3px 4px grey;
`

const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justify};
`

const Image = styled.div`
  height : 13vh;
  width : 13rem;
  border-radius : 10px
  border: 1px solid grey;
`

const UImage = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: grey;
  border: 1px solid grey;
`

const Items = styled.div`
  padding: 0.5rem 1rem;
  border: 1px solid grey;
  border-radius: 20px;
  margin: 0rem 1rem;
  text-align: center;
  &: hover {
    cursor: pointer;
  }
`

const StreamCard = props => {
  const { streams } = props

  return (
    <Body>
      <Title small>Your Streams </Title>
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
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div
                  style={{
                    borderRight: '4px dashed #0e2f5a',
                    width: '0.5rem',
                    marginTop: '20px',
                    marginLeft: '80px',
                    height: 'auto'
                  }}
                />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex' }}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: '0.2rem',
                        paddingBottom: '15px'
                      }}
                    >
                      <div style={{ borderBottom: '4px dashed #0e2f5a', width: '3.5rem' }} />
                    </div>
                    <div style={{ display: 'flex' }}>
                      <Hover style={{ margin: '0 0.5rem' }}>
                        <FiCalendar style={{ fontSize: '1.5rem' }} />
                      </Hover>
                      <Text> {createdAt} </Text>
                    </div>
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
              </div>

              <div>
                <Card key={id}>
                  <Flex flexDirection={'row'} justify={'space-between'}>
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

                    <div
                      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >
                      <UImage />
                    </div>
                  </Flex>

                  <Flex direction={'row'} justify={'center'}>
                    <Items>Next.js</Items>

                    <Items>Next.js</Items>

                    <Items>Next.js</Items>
                  </Flex>
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
