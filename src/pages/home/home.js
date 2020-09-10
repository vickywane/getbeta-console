import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

import { USER_STATS } from '../../mockData'
import { Text, Title, Section } from '../../styles/style'
import useWindowWidth from '../../utils/hook_style'

import { Profile, Mybookings, MyContent, MyCourses } from '../user/'

const Body = styled.div`
  padding: 0.5rem 0.5rem;
`

const Cards = styled.div`
  height: 23vh;
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
  ${media.lessThan('large')`
   width: 17rem;
    height: 18vh;
  `};

`

const center = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

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
  ${media.lessThan('large')`
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    grid-gap: 2rem 1rem;
  `};
`

const Home = props => {
  const { UserStore } = props
  const Width = useWindowWidth()

  return (
    <div style={{ height: window.innerHeight, overflowX: 'auto', background: '#fbfbfb' }}>
      <Profile UserStore={UserStore} Width={Width} />
      <br />
      <br />

      <Body>
        <Grid>
          {USER_STATS.map(({ id, name, total }) => {
            return (
              <a style={{ textDecoration: 'none' }} href={`#${name.toLowerCase()}`}>
                <Cards key={id} background="#fff" style={{ ...center }}>
                  <div>
                    <StyledTitle align="center"> {total} </StyledTitle>

                    <Text align="center"> {name} </Text>
                  </div>
                </Cards>
              </a>
            )
          })}
        </Grid>

        <Section id="contents">
          <MyContent Width={Width} />
        </Section>

        <Section id="courses">
          <MyCourses Width={Width} />
        </Section>

        <Section id="bookings">
          <Mybookings Width={Width} />
        </Section>
      </Body>
    </div>
  )
}

export default Home
