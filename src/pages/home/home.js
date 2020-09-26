import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { toJS } from 'mobx'
import { observer } from 'mobx-react'

import { Text, Title, Section } from '../../styles/style'
import useWindowWidth from '../../utils/hook_style'

import { Profile, Mybookings, MyContent, MyCourses } from '../user/'

const Body = styled.div`
  padding: 0.5rem 0.5rem;
`

const Card = styled.div`
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
    height: 20vh;
  `};
  ${media.lessThan('medium')`
  border-radius: 4px;
  width: 20rem;
  height: 22vh;
`};
${media.lessThan('small')`
width: 19rem;
height: 22vh;
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
  const { getUserDetail, userDetail, userStats } = UserStore

  useEffect(() => {
    getUserDetail()
  }, [])

  const stats = toJS(userStats)
  return (
    <div style={{ height: window.innerHeight, overflowX: 'auto', background: '#fbfbfb' }}>
      <Profile UserStore={UserStore} Width={Width} />
      <br />
      <br />

      <Body>
        <Grid>
          <a style={{ textDecoration: 'none' }} href={`#courses`}>
            <Card background="#fff" style={{ ...center }}>
              <div>
                <StyledTitle align="center"> {stats.totalCourses} </StyledTitle>

                <Text align="center"> {stats.totalCourses < 2 ? 'Course' : 'Courses'} </Text>
              </div>
            </Card>
          </a>

          <a style={{ textDecoration: 'none' }} href={`#contents`}>
            <Card background="#fff" style={{ ...center }}>
              <div>
                <StyledTitle align="center"> {stats.totalContents} </StyledTitle>

                <Text align="center"> {stats.totalContents < 2 ? 'Content' : 'Contents'} </Text>
              </div>
            </Card>
          </a>

          <a style={{ textDecoration: 'none' }} href={`#bookings`}>
            <Card background="#fff" style={{ ...center }}>
              <div>
                <StyledTitle align="center"> 0 </StyledTitle>

                <Text align="center"> Bookings </Text>
              </div>
            </Card>
          </a>
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

export default observer(Home)
