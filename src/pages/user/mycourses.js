import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FiSearch, FiPlus } from 'react-icons/fi'
import { Link, navigate } from '@reach/router'
import { inject, observer } from 'mobx-react'
import { toJS } from 'mobx'
import { Planet } from 'react-kawaii'

import media from 'styled-media-query'
import { Text, Hover, Title, Section, Button, center, StyledSearchbox } from '../../styles/style'
import Chemistry from '../../assets/images/chemistry.jpeg'

const Body = styled.div`
  padding: 0.5rem 1.5rem;
  background: #fff;
  border-radius: 5px;
  ${media.lessThan('medium')`
  padding: 0.5rem 1rem;
`};
  ${media.lessThan('small')`
  padding: 0.5rem 0.5rem;
`};
`

const Cards = styled.div`
  height: 25vh;
  width: 27rem;
  border-radius: 7px;
  box-shadow: 0 2px 3px #c0c0c0;
  transition: all 350ms;
  background: ${props => props.background};
  &: hover {
    cursor: pointer;
    transform: translateY(-5%);
  }
  ${media.lessThan('large')`
    width: 20rem;
  `};
  ${media.lessThan('medium')`
     width: 35rem;
    height: 30vh;
  `}
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

const Image = styled.div`
  background-image : url(${props => props.url})
  height : 120px;
  width : 120px;
`

const MyCourses = props => {
  const { UserStore, Width } = props
  const { getMyCourses, courses } = props.CourseStore

  useEffect(() => {
    getMyCourses()
  }, [])

  const course = toJS(courses)
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
          {course.length === 0 ? (
            <div style={{ ...center }}>
              <div>
                <div style={{ ...center }}>
                  <Planet color="#0072ce" size={180} mood="sad" />
                </div>
                <br />
                <Text align="center"> You dont have any created course. </Text>
                <Link to="/create-course">
                  {' '}
                  <Text align="center"> Create New Course </Text>{' '}
                </Link>
              </div>
            </div>
          ) : (
            course.length > 0 &&
            course.map(({ _id, type, descrp, price, name }) => {
              return (
                <Cards background="white" key={_id}>
                  <Image img={Chemistry}>
                    <div
                      style={{
                        ...center,
                        height: '5vh',
                        width: '10rem',
                        background: '#0072ce',
                        color: 'white'
                      }}
                    >
                      <Title small align="center">
                        {price}{' '}
                      </Title>
                    </div>
                  </Image>
                  <br />

                  <Title
                    onClick={() => {
                      navigate('/edit-course', {
                        state: {
                          courseId: _id
                        }
                      })
                    }}
                    small
                    style={{ color: '#0072ce' }}
                    align="center"
                  >
                    {name}{' '}
                  </Title>

                  <Title small align="center">
                    {descrp}{' '}
                  </Title>

                  <div>
                    <Title small align="center">
                      {type}{' '}
                    </Title>
                  </div>
                </Cards>
              )
            })
          )}
        </Grid>
      </Section>
    </Body>
  )
}

export default inject('CourseStore')(observer(MyCourses))
