import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { toJS } from 'mobx'
import { observer } from 'mobx-react'

import { Text, Title, Section, center } from '../../styles/style'
import useWindowWidth from '../../utils/hook_style'
import { Profile, Mybookings, MyContent, MyCourses } from '../user/'
import Header from '../../components/headers/header'

const Body = styled.div`
  padding: 0.5rem 0.5rem;
`

const Card = styled.div`
  height: 25vh;
  width: 22rem;
  color : #0072ce;
  border-radius: 7px;
  padding : 1rem 1rem
  box-shadow: 0 2px 3px #c0c0c0;
  transition : all 350ms;
  background: #fff;
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
  width: 15rem;
  height: 20vh;
`};
${media.lessThan('small')`
  width: 10rem;
  height: 9rem;
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
  ${media.lessThan('medium')`
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    grid-gap: 2rem 1rem;
  `};
  ${media.lessThan('small')`
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    grid-gap: 2rem 1rem;
  `};
`

const StyledBody = styled.div`
  height: calc(100vh - 55px);
  overflow: auto;
`

const Home = props => {
  const { UserStore } = props
  const Width = useWindowWidth()
  const { getUserDetail, userDetail, isLoading } = UserStore

  useEffect(() => {
    getUserDetail()
  }, [])

  const detail = toJS(userDetail)

  const { contents, courses, _id } = detail

  return (
    <div>
      <Header path="home" />

      <StyledBody style={{ background: '#fbfbfb' }}>
        <Profile UserStore={UserStore} Width={Width} />
        <br />

        <Body>
          {!isLoading && (
            <Grid>
              <Card background="#fff" style={{ ...center }}>
                <div>
                  <StyledTitle align="center">
                    {contents !== undefined && contents.length}
                  </StyledTitle>

                  <Text align="center">
                    {contents !== undefined && contents.length < 2
                      ? 'Created Package'
                      : 'Created Packages'}
                  </Text>
                </div>
              </Card>

              <Card background="#fff" style={{ ...center }}>
                <div>
                  <StyledTitle align="center">
                    {courses !== undefined && courses.length}
                  </StyledTitle>

                  <Text align="center">
                    {courses !== undefined && courses.length < 2
                      ? 'Purchased Content'
                      : 'Purchased Contents'}
                  </Text>
                </div>
              </Card>

              <Card background="#fff" style={{ ...center }}>
                <div>
                  <StyledTitle align="center"> 0 </StyledTitle>

                  <Text align="center"> My Bookings </Text>
                </div>
              </Card>
              <Card style={{ ...center, backgroundColor: 'white' }}>
                <div>
                  <StyledTitle align="center"> 0 </StyledTitle>

                  <Text align="center"> Bookings </Text>
                </div>
              </Card>
            </Grid>
          )}

          <br />
          <br />

          <Section id="courses">
            <MyContent userDetail={detail} id="courses" userId={_id} Width={Width} />
          </Section>

          <br />
          {/* <br />

        <Section id="bookings">
          <Mybookings Width={Width} />
        </Section> */}
        </Body>
      </StyledBody>
    </div>
  )
}

export default observer(Home)
