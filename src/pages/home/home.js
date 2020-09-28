import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { toJS } from 'mobx'
import { observer } from 'mobx-react'
import * as scroll from 'react-scroll'
import { Link as ScrollLink, Element } from 'react-scroll'

import { Text, Title, Section, center } from '../../styles/style'
import useWindowWidth from '../../utils/hook_style'

import { Profile, Mybookings, MyContent, MyCourses } from '../user/'

const Body = styled.div`
  padding: 0.5rem 0.5rem;
`

const Card = styled.div`
  height: 25vh;
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
    height: 22vh;
  `};
  ${media.lessThan('medium')`
  border-radius: 4px;
  width: 20rem;
  height: 24vh;
`};
${media.lessThan('small')`
width: 19rem;
height: 23vh;
`};
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
  ${media.lessThan('large')`
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    grid-gap: 2rem 1rem;
  `};
`

const MyGrid = styled.div`
  display: grid;
  grid-template-colunns: 50% 50%;
  grid-gap: 1rem 1rem;
  place-items: center;
  ${media.lessThan('large')`
    display : flex;
    flex-direction : colunn;
    align-items : center;
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
  const Scroll = scroll.animateScroll
  return (
    <div style={{ height: window.innerHeight, overflowX: 'auto', background: '#fbfbfb' }}>
      <Profile UserStore={UserStore} Width={Width} />
      <br />
      <br />

      <Body>
        <Grid>
          <ScrollLink
            smooth={true}
            spy={true}
            // style={{ textDecoration: 'none' }}
            // onSetActive={(to) => alert(to)}
            to={'courses'}
            duration={500}
          >
            <Card background="#fff" style={{ ...center }}>
              <div>
                <StyledTitle align="center"> {stats.totalCourses} </StyledTitle>

                <Text align="center">
                  {' '}
                  {stats.totalCourses < 2 ? 'Created Course' : 'Created Courses'}{' '}
                </Text>
              </div>
            </Card>
          </ScrollLink>

          <ScrollLink style={{ textDecoration: 'none' }} to={`contents`}>
            <Card background="#fff" style={{ ...center }}>
              <div>
                <StyledTitle align="center"> {stats.totalContents} </StyledTitle>

                <Text align="center">
                  {' '}
                  {stats.totalContents < 2 ? 'Purchased Content' : 'Purchased Contents'}{' '}
                </Text>
              </div>
            </Card>
          </ScrollLink>

          <ScrollLink
            smooth={true}
            spy={true}
            onClick={() => Scroll.scrollToTop()}
            style={{ textDecoration: 'none' }}
            to={`bookings`}
          >
            <Card background="#fff" style={{ ...center }}>
              <div>
                <StyledTitle align="center"> 0 </StyledTitle>

                <Text align="center"> My Bookings </Text>
              </div>
            </Card>
          </ScrollLink>
        </Grid>

        <br />
        <br />

        <Element name="contents">
          <Section>
            <MyContent Width={Width} />
          </Section>
        </Element>

        <br />
        <br />

        <Element name="bookings">
          <Section>
            <Mybookings Width={Width} />
          </Section>
        </Element>
      </Body>
    </div>
  )
}

export default observer(Home)
