import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'

import { ContentCardsData } from '../../../mockData'
import Header from '../../../components/headers/header'
import { Text, Title, Button, CardGrid, Card } from '../../../styles/style'
import { FiSearch } from 'react-icons/fi'

const Body = styled.div`
  padding: 1rem 3rem;
`

const Contents = props => {
  return (
    <div>
      <Header
        backgroundColor="rgba(233, 241, 251, 0.81)"
        showSearch={true}
        searchText="Search For A Content Material"
      />

      <Body>
        <br />
        <CardGrid>
          {ContentCardsData.map(({ id, name, tag }) => {
            return (
              <Card key={id}>
                <img
                  style={{ height: '170px', width: '400px', objectFit: 'cover' }}
                  alt="courses ilustration detail"
                  src={require('../../../assets/images/college-chemistry.jpg')}
                />
                <br />
                <div>
                  <Link to={`course/${id}`}>
                    <h4> {name} </h4>
                  </Link>
                  <Text> {tag} </Text>
                </div>
              </Card>
            )
          })}
        </CardGrid>
      </Body>
    </div>
  )
}

export default Contents
