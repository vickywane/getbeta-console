import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link, navigate } from '@reach/router'
import { toJS } from 'mobx'
import { Planet } from 'react-kawaii'
import { Spinner } from 'react-bootstrap'
import media from 'styled-media-query'

import { observer } from 'mobx-react'
import ModalWrapper from '../../../components/modals/modalWrapper'
import Header from '../../../components/headers/header'
import {
  Text,
  Title,
  Button,
  StyledHover,
  Hover,
  CardGrid,
  Card,
  Searchbox,
  center
} from '../../../styles/style'
import { FiSearch, FiFilter } from 'react-icons/fi'

const Body = styled.div`
  padding: 1rem 3rem;
`

const StyledCard = styled(Card)`
  height: auto;
  width: 26rem;
`

const StyledFilter = styled(StyledHover)`
  ${media.lessThan('medium')`
    display : none;
  `};
`

const CoursesList = props => {
  const [showModal, setModal] = useState(false)
  const { fetchCourses, isLoading, courses, errorLoading } = props.CourseStore

  useEffect(() => {
    fetchCourses()
  }, [])

  const allCourses = toJS(courses)
  if (errorLoading) {
    return (
      <div>
        <Header />

        <Body style={{ height: window.innerHeight - 80, ...center }}>
          <div>
            <div style={{ ...center }}>
              <Planet mood="sad" size={220} />
            </div>
            <br />
            <Text align="center">
              An error occurred while loading all courses,{' '}
              <span onClick={() => fetchCourses()} style={{ color: 'blue', cursor: 'pointer' }}>
                Try Again
              </span>
              .
            </Text>
          </div>
        </Body>
      </div>
    )
  }

  return (
    <div>
      <Header
        backgroundColor="rgba(233, 241, 251, 0.81)"
        showSearch={true}
        screen="All Courses"
        searchText="Search For A Course"
      />

      <Body>
        <br />

        {isLoading ? (
          <div style={{ ...center }}>
            <br />
            <Spinner variant="primary" animation="grow" role="loading" />
          </div>
        ) : (
          <div>
            {allCourses.length === 0 ? (
              <div
                style={{
                  height: window.innerHeight - 100,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <div>
                  <Title align="center" color="grey">
                    No Course available yet. <br /> Check back later.{' '}
                  </Title>
                </div>
              </div>
            ) : (
              <div>
                <ModalWrapper
                  visibility={showModal}
                  size="lg"
                  closeModal={() => setModal(false)}
                  title="Filter Courses"
                >
                  <div>
                    <div style={{ display: 'flex', flexDirection: 'row', margin: '1rem 0' }}>
                      <div style={{ ...center }}>
                        <input style={{ width: '2rem', height: '1.3rem' }} type="radio" />
                      </div>

                      <Text style={{ margin: '0 0.7rem' }}> By Course Release Date </Text>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row', margin: '1rem 0' }}>
                      <div style={{ ...center }}>
                        <input style={{ width: '2rem', height: '1.3rem' }} type="radio" />
                      </div>

                      <Text style={{ margin: '0 0.7rem' }}> By Course Viewer's Rating </Text>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row', margin: '1rem 0' }}>
                      <div style={{ ...center }}>
                        <input style={{ width: '2rem', height: '1.3rem' }} type="radio" />
                      </div>

                      <Text style={{ margin: '0 0.7rem' }}> By Course Rating </Text>
                    </div>

                    <hr />
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p style={{ opacity: '0' }}> .</p>

                        <Button
                          onClick={() => {
                            setModal(false)
                          }}
                        >
                          Apply Filter
                        </Button>
                      </div>
                    </div>
                  </div>
                </ModalWrapper>

                <div style={{ justifyContent: 'space-between', display: 'flex' }}>
                  <div style={{ display: 'flex' }}>
                    <StyledFilter onClick={() => setModal(true)}>
                      <Text style={{ margin: '0 0.5rem' }}> Filter Courses </Text>
                      <FiFilter style={{ fontSize: '1.6rem' }} />
                    </StyledFilter>
                  </div>

                  <div style={{ ...center }}>
                    <Searchbox>
                      <div>
                        <FiSearch style={{ fontSize: '1.6rem' }} />
                      </div>

                      <input placeholder="Seach for a course" />
                    </Searchbox>
                  </div>
                </div>
                <hr />
                <br />
                <CardGrid>
                  {allCourses.map(({ id, name, rating, descrp, price }) => {
                    return (
                      <StyledCard key={id}>
                        <img
                          style={{ height: '200px', width: '100%', objectFit: 'cover' }}
                          alt="courses ilustration detail"
                          src={require('../../../assets/images/chemistry.jpeg')}
                        />
                        <br />
                        <div>
                          <Title
                            onClick={() => {
                              navigate('/course', { state: { id: id } })
                            }}
                            align="center"
                          >
                            {name}
                          </Title>
                          <Text align="center"> {descrp} </Text>
                          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Text> {rating} </Text>

                            <Text style={{ color: '#0072ce' }}> $ {price} </Text>
                          </div>
                        </div>
                      </StyledCard>
                    )
                  })}
                </CardGrid>
              </div>
            )}
          </div>
        )}
      </Body>
    </div>
  )
}

export default observer(CoursesList)
