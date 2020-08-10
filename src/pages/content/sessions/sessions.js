import React from 'react'
import styled from 'styled-components'

import Header from '../../../components/headers/header'
import { Text, Title } from '../../../styles/style'
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
  box-shadow: 0 3px 4px grey;
  border-radius: 5px;
  h4 {
    font-weight: 500;
    font-size: 1.5rem;
  }
  div {
    padding: 1rem 1rem;
  }
`

const CardsData = [
  {
    id: 1,
    name: 'Computer Science For Teenagers',
    tag: 'Article'
  },
  {
    id: 1,
    name: 'Computer Science For Teenagers',
    tag: 'Tutorial'
  },
  {
    id: 1,
    name: 'Computer Science For Teenagers',
    tag: 'Crash Course'
  },
  {
    id: 1,
    name: 'Computer Science For Teenagers',
    tag: 'Article'
  }
]

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

const Sessions = props => {
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
        </div>
        <br />
        <CardGrid>
          {CardsData.map(({ id, name, tag }) => {
            return (
              <Card key={id}>
                <img alt="" />
                <br />
                <br />
                <div>
                  <h4> {name} </h4>
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

export default Sessions
