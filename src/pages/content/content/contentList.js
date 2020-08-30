import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'

import { ContentCardsData } from '../../../mockData'
import Header from '../../../components/headers/header'
import { Text, Title, Searchbox, StyledHover, Button, CardGrid, Card } from '../../../styles/style'
import { FiSearch, FiFilter } from 'react-icons/fi'

const Body = styled.div`
  padding: 1rem 3rem;
`

const center = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

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

        <div style={{ justifyContent: 'space-between', display: 'flex' }}>
          <div style={{ display: 'flex' }}>
            <Link to="/create">
              <Button>Create Content</Button>
            </Link>

            <StyledHover onClick={() => {}}>
              <FiFilter style={{ fontSize: '2rem' }} />
            </StyledHover>
          </div>

          <div style={{ ...center }}>
            <Searchbox>
              <div>
                <FiSearch style={{ fontSize: '1.6rem' }} />
              </div>

              <input placeholder="Seach for a content" />
            </Searchbox>
          </div>
        </div>

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
