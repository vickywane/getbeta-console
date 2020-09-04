import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'

import ModalWrapper from '../../../components/modals/modalWrapper'
import { CourseCardsData } from '../../../mockData'
import Header from '../../../components/headers/header'
import {
  Text,
  Title,
  Button,
  StyledHover,
  Hover,
  CardGrid,
  Card,
  Searchbox
} from '../../../styles/style'
import { FiSearch, FiFilter } from 'react-icons/fi'

const Body = styled.div`
  padding: 1rem 3rem;
`

const StyledCard = styled(Card)`
  height: auto;
  width: 30rem;
`
const center = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const FilterBody = styled.div``

// const Filter = styled(StyledHover)`
//   transition: all 250ms;
//   display : flex;
//   div {
//     opacity : 1;
//     margin-left: 15rem;
//     margin-top: 7rem;
//     position: absolute;
//     width: 25rem;
//     height: 30vh;
//     background-color: #fff;
//     box-shadow: 0 3px 3px grey;
//     border-radius: 5px;
//   }
//   &: hover {
//     div {
//       opacity : 1;
//     }
//   }
// `

const CoursesList = props => {
  const [showModal, setModal] = useState(false)
  const [courses, setCourses] = useState([])
  const { fetchCourses } = props.CourseStore

  useEffect(() => {
    setCourses(fetchCourses())
  }, [])

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
        {courses.length === 0 ? (
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
                <StyledHover onClick={() => setModal(true)}>
                  <Text style={{ margin: '0 0.5rem' }}> Filter Courses </Text>
                  <FiFilter style={{ fontSize: '1.8rem' }} />
                </StyledHover>
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
              {CourseCardsData.map(({ id, name, rating, price }) => {
                return (
                  <StyledCard key={id}>
                    <img
                      style={{ height: '200px', width: '100%', objectFit: 'cover' }}
                      alt="courses ilustration detail"
                      src={require('../../../assets/images/chemistry.jpeg')}
                    />
                    <br />
                    <div>
                      <Link to={`course/${id}`}>
                        <Title align="center"> {name} </Title>
                      </Link>

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
        )}{' '}
      </Body>
    </div>
  )
}

export default CoursesList
