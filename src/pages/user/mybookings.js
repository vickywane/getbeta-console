import React, { useState } from 'react'
import styled from 'styled-components'
import { FiSearch, FiCalendar, FiPhoneCall } from 'react-icons/fi'
import { IoIosCalendar } from 'react-icons/io'
import { Link } from '@reach/router'
import media from 'styled-media-query'
import { Tabs, Tab } from 'react-bootstrap'

import { Text, Hover, center, StyledSearchbox } from '../../styles/style'

const Body = styled.div`
  box-shadow: 0 2px 3px grey;
  section {
    padding: 0.5rem 1.5rem;
  }
  ${media.lessThan('small')`
    padding: 0.5rem 0.5rem;
  `}
`
const Data = [
  {
    id: 1,
    reason: 'Learning Maths',
    duration: '30mins',
    date: '12-12-12',
    with: 'Anonymous User'
  },
  {
    id: 2,
    reason: 'Learning English',
    duration: '30mins',
    date: '12-12-12',
    with: 'Anonymous User'
  }
]

const ContentContainer = styled.div`
  padding: 1rem;
  display: flex;
  background: #fff;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0 3px 5px #c0c0c0;
  margin: 1rem 0;
  width: 40rem;
  ${media.lessThan('huge')`
    width: 37rem;
  `};
  ${media.lessThan('large')`
    width: 40rem;
  `};
  ${media.lessThan('medium')`
    width: 30rem;
  `};
  ${media.lessThan('small')`
    width : 24rem;
  `};
`

const ContentImage = styled.div`
  height: 45px;
  width: 50px;
  border-radius: 3px;
  border: 1px solid #c0c0c0;
  ${media.lessThan('medium')`
      display : none;
  `};
`

const Date = styled.div`
  display: flex;
  ${media.lessThan('medium')`
    display : none;
`};
`

const ListGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
  place-items: center;
  grid-gap: 1.5rem 1.5rem;
  ${media.lessThan('huge')`
    grid-template-columns: repeat(auto-fit, minmax(37rem, 1fr));
  `}
  ${media.lessThan('large')`
  grid-template-columns : repeat(auto-fit, minmax(34rem, 1fr))
`};
  ${media.lessThan('medium')`
    display : flex;
    flex-direction : column;
    align-items : center;
   `};
`

const Mybookings = props => {
  const [TabState, setTabState] = useState('my-bookings')
  const { UserStore, Width } = props

  return (
    <Body>
      <div
        style={{
          background: '#E0E9F5',
          display: 'flex',
          height: '67px',
          padding: '0.7rem 0.5rem',
          borderBottom: '1px solid #c0c0c0',
          justifyContent: 'space-between'
        }}
      >
        <div style={{ ...center }}>
          <Text small style={{ color: '#0072CE' }}>
            All Bookings
          </Text>
        </div>

        {Width >= 1200 ? (
          <StyledSearchbox style={{ height: '50px' }}>
            <div>
              <FiSearch style={{ fontSize: '1.4rem' }} />
            </div>

            <input placeholder="Search for a course" />
          </StyledSearchbox>
        ) : (
          <Hover>
            <FiSearch style={{ color: '#0072ce', fontSize: '1.4rem' }} />
          </Hover>
        )}
      </div>

      <section>
        <Tabs id="bookings-tab" activeKey={TabState} onSelect={k => setTabState(k)}>
          <Tab eventKey={'my-bookings'} title="My Bookings">
            <ListGrid style={{ margin: '0', padding: '0', listStyle: 'none' }}>
              {Data.map(({ id, reason, date }) => {
                return (
                  <li key={id}>
                    <ContentContainer>
                      <ContentImage style={{ ...center }}>
                        <FiPhoneCall style={{ fontSize: '1.5rem' }} />
                      </ContentImage>

                      <Text> {reason} </Text>

                      <Date>
                        <div style={{ margin: '0 0.4rem' }}>
                          <FiCalendar style={{ fontSize: '1.4rem' }} />
                        </div>
                        <Text style={{ padding: 0, margin: 0 }}> 12 - 12 - 12 </Text>
                      </Date>
                    </ContentContainer>
                  </li>
                )
              })}
            </ListGrid>
          </Tab>

          <Tab eventKey={'bookings'} title="Bookings By Me">
            <ListGrid style={{ margin: '0', padding: '0', listStyle: 'none' }}>
              {Data.map(({ id, reason, date }) => {
                return (
                  <li key={id}>
                    <ContentContainer>
                      <ContentImage style={{ ...center }}>
                        <FiPhoneCall style={{ fontSize: '1.5rem' }} />
                      </ContentImage>

                      <Text> {reason} </Text>

                      <Date>
                        <div style={{ margin: '0 0.4rem' }}>
                          <IoIosCalendar style={{ fontSize: '1.4rem' }} />
                        </div>
                        <Text style={{ padding: 0, margin: 0 }}> 12 - 12 - 12 </Text>
                      </Date>
                    </ContentContainer>
                  </li>
                )
              })}
            </ListGrid>
          </Tab>
        </Tabs>
      </section>
    </Body>
  )
}

export default Mybookings
