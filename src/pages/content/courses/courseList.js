import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'

import { CourseCardsData } from '../../../mockData'
import Header from '../../../components/headers/header'
import { Text, Title, Button, CardGrid, Card } from '../../../styles/style'
import { FiSearch } from 'react-icons/fi'

const Body = styled.div`
  padding: 1rem 3rem;
`

const StyledCard = styled(Card)`
  height: 30vh;
  width: 30rem;
`

const CoursesList = props => {
  return (
    <div>
      <Header
        backgroundColor="rgba(233, 241, 251, 0.81)"
        showSearch={true}
        searchText="Search For A Course"
      />

      <Body>
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
      </Body>
    </div>
  )
}

export default CoursesList
