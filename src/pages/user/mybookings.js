import React from 'react'
import styled from 'styled-components'
import { FiSearch } from 'react-icons/fi'
import { Link } from '@reach/router'
import media from 'styled-media-query'

import { USER_STATS } from '../../mockData'
import { Text, Title, Section, Hover, Button, Searchbox } from '../../styles/style'

const Body = styled.div`
  padding: 0.5rem 1.5rem;
`
const Data = [
  {
    id: 1,
    name: 'Teaching maths to little preschoolers at a tender age'
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
`

const center = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const StyledSearchbox = styled(Searchbox)`
width  : 35rem;
border : 1.7px solid #0072CE;
border-radius : 30px;
display : flex;
background : #fff;
padding   : 0.7rem 0.5rem;
justify-content: space-between;
input {
    padding : 0.2rem 1rem;
    width  : 33rem
    outline : 0;
    color : #0072CE;
    border : 0;
  }
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
            {Data.map(({ id, name }) => {
              return (
                <li key={id}>
                  <ContentContainer>
                    <ContentImage />

                    <Text> {name} </Text>

                    <Date>
                      <Text> 12 - 12 - 12 </Text>
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
