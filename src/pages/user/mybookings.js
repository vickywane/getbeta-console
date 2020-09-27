import React from 'react'
import styled from 'styled-components'
import { FiSearch, FiCalendar, FiPhoneCall } from 'react-icons/fi'
import { Link } from '@reach/router'
import media from 'styled-media-query'

import { Text, Title, Section, Hover, center, StyledSearchbox } from '../../styles/style'

const Body = styled.div`
  padding: 0.5rem 1.5rem;
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
  margin: 1.5rem 0;
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

const Mybookings = props => {
  const { UserStore, Width } = props

  return (
    <div>
      <br />

      <Body>
        <br />

        <Section id="#courses">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ ...center }}>
              <Title small style={{ color: '#0072CE' }}>
                Bookings
              </Title>
            </div>

            {Width >= 1200 ? (
              <StyledSearchbox>
                <div>
                  <FiSearch style={{ fontSize: '1.6rem' }} />
                </div>

                <input placeholder="Search for a course" />
              </StyledSearchbox>
            ) : (
              <Hover>
                <FiSearch style={{ color: '#0072ce', fontSize: '1.6rem' }} />
              </Hover>
            )}
          </div>
          <hr />
          <ul style={{ margin: '0', padding: '0', listStyle: 'none' }}>
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
                        <FiCalendar style={{ fontSize: '1.5rem' }} />
                      </div>
                      <Text style={{ padding: 0, margin: 0 }}> 12 - 12 - 12 </Text>
                    </Date>
                  </ContentContainer>
                </li>
              )
            })}
          </ul>
        </Section>
      </Body>
    </div>
  )
}

export default Mybookings
