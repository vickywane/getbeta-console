import React from 'react'
import styled from 'styled-components'
import { FiSearch } from 'react-icons/fi'
import { Link } from '@reach/router'
import media from 'styled-media-query'

import { USER_STATS } from '../../mockData'
import { Text, Title, Section, Hover, Button } from '../../styles/style'

import { Profile, Mybookings, MyContent, MyCourses } from '../user/'

const Body = styled.div`
  padding: 0.5rem 0.5rem;
`

const Cards = styled.div`
  height: 20vh;
  width: 22rem;
  border-radius: 7px;
  padding : 1rem 1rem
  box-shadow: 0 2px 3px #c0c0c0;
  transition : all 350ms;
  background: ${props => props.background};
  &: hover {
    cursor : pointer;
   transform : translateY(-10%)
  }
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

const Searchbox = styled.div`
width  : 35rem;
border : 1.7px solid #0072CE;
border-radius : 30px;
padding : 0.5rem 1rem;
display : flex;
background : #fff;
padding   : 0.7rem 0.5rem;
justify-content: space-between;
input {
     padding : 0.2rem 1rem;
    width  : 33rem
    outline : 0;
    color :#0072CE;
    border : 0;
  }
  div {
    color :#0072CE;
    padding : 0 0.5rem;
    display  : flex;
    justify-content : center;
    align-items : center;
  }
`

const StyledTitle = styled(Title)`
  font-weight: 600;
  font-size: 2.2rem;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-gap: 2rem 2rem;
  place-items: center;
  ${media.lessThan('large')`
       grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  `};
`

const Home = props => {
  const { UserStore } = props

  return (
    <div style={{ height: window.innerHeight, overflowX: 'auto', background: '#fbfbfb' }}>
      <Profile UserStore={UserStore} />
      <br />
      <br />

      <Body>
        <Grid>
          {USER_STATS.map(({ id, name, total }) => {
            return (
              <Link style={{ textDecoration: 'none' }} to={`#${name.toLocaleLowerCase()}`}>
                <Cards key={id} background="#fff" style={{ ...center }}>
                  <div>
                    <StyledTitle align="center"> {total} </StyledTitle>

                    <Text align="center"> {name} </Text>
                  </div>
                </Cards>
              </Link>
            )
          })}
        </Grid>

        <Section id="#contents">
          <MyContent />
        </Section>

        <Section id="#courses">
          <MyCourses />
        </Section>

        <Section id="#bookings">
          <Mybookings />
        </Section>
      </Body>
    </div>
  )
}

export default Home
