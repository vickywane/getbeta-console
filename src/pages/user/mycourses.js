import React from 'react'
import styled from 'styled-components'
import { FiSearch, FiPlus } from 'react-icons/fi'
import { Link } from '@reach/router'

import { CourseCardsData } from '../../mockData'
import { Text, Hover, Title, Section, Button } from '../../styles/style'

const Body = styled.div`
  padding: 0.5rem 1.5rem;
`

const Cards = styled.div`
  height: 25vh;
  width: 27rem;
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-gap: 2rem 2rem;
  place-items: center;
`

const MyCourses = props => {
  const { UserStore } = props

  return (
    <Body>
      <br />
      <Section id="#contents">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ ...center }}>
            <div style={{ display: 'flex' }}>
              <Title small style={{ color: '#0072CE' }}>
                My Courses ( {Data.length} )
              </Title>

              <Hover style={{ margin: '0 1rem' }}>
                <Link to="/create-course">
                  <FiPlus style={{ fontSize: '1.8rem' }} />
                </Link>
              </Hover>
            </div>
          </div>

          <Searchbox>
            <div>
              <FiSearch style={{ fontSize: '1.6rem' }} />
            </div>

            <input placeholder="Search for a course" />
          </Searchbox>
        </div>
        <hr />
        <br />
        <Grid style={{ margin: '0', padding: '0', listStyle: 'none' }}>
          {CourseCardsData.map(({ id, rating, price, name }) => {
            return (
              <Cards background="white">
                <Title small align="center">
                  {' '}
                  {name}{' '}
                </Title>
              </Cards>
            )
          })}
        </Grid>
      </Section>
    </Body>
  )
}

export default MyCourses
