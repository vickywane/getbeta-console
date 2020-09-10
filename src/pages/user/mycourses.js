import React from 'react'
import styled from 'styled-components'
import { FiSearch, FiPlus } from 'react-icons/fi'
import { Link } from '@reach/router'

import media from 'styled-media-query'
import { CourseCardsData } from '../../mockData'
import { Text, Hover, Title, Section, Button, center, Searchbox } from '../../styles/style'

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
   transform : translateY(-5%)
  }
  ${media.lessThan('large')`
    width: 20rem;
  `};
  ${media.lessThan('medium')`
     width: 35rem;
    height: 30vh;
  `}
`

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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-gap: 2rem 2rem;
  place-items: center;
  ${media.lessThan('large')`
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
`};
`

const MyCourses = props => {
  const { UserStore, Width } = props

  return (
    <Body>
      <Section id="#contents">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ ...center }}>
            <div style={{ display: 'flex' }}>
              <Title small style={{ color: '#0072CE' }}>
                Courses
              </Title>

              <Hover style={{ margin: '0 1rem' }}>
                <Link to="/create-course">
                  <FiPlus style={{ fontSize: '1.6rem' }} />
                </Link>
              </Hover>
            </div>
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
