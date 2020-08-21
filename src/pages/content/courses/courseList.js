import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'

import { CourseCardsData } from '../../../mockData'
import Header from '../../../components/headers/header'
import { Text, Title, Button } from '../../../styles/style'
import { FiSearch } from 'react-icons/fi'

const Body = styled.div`
  padding: 1rem 3rem;
`

const CardGrid = styled.div`
  display: grid;
  grid-gap: 3rem 2rem;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
`

const Card = styled.div`
  height: 28vh;
  width: 25rem;
  box-shadow: 0 3px 4px #c0c0c0;
  border-radius: 5px;
  h4 {
    font-weight: 500;
    font-size: 1.5rem;
  }
  div {
    padding: 1rem 1rem;
  }
`

const Searchbox = styled.div`
width  : 42rem;
border : 1px solid #000;
border-radius : 2px;
padding : 0.5rem 0.5rem;
display : flex;
padding   : 0.7rem 0.5rem;
justify-content: space-between;
input {
     padding : 0.2rem 1rem;
    width  : 42rem
    outline : 0;
    border : 0;
  }
  div {
    display  : flex;
    justify-content : center;
    align-items : center;
  }
`

const CoursesList = props => {
  return (
    <div>
      <Header />

      <Body>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Searchbox>
            <div>
              <FiSearch style={{ fontSize: '1.7rem' }} />
            </div>

            <input placeholder="Search for a course" />
          </Searchbox>

          <Button style={{ margin: '0 2rem' }} background="#0072CE">
            Search
          </Button>
        </div>
        <br />
        <CardGrid>
          {CourseCardsData.map(({ id, name, tag }) => {
            return (
              <Card key={id}>
                <img alt="" />
                <br />
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

export default CoursesList
