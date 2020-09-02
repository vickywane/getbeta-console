import React from 'react'
import styled from 'styled-components'
import { FiSearch } from 'react-icons/fi'

import Profile from '../user/profile'
import { Text, Title, Hover, Button } from '../../styles/style'

const Body = styled.div`
  padding: 0.5rem 3rem;
`

const Cards = styled.div`
  height: 20vh;
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
`

const Data = [
  {
    id: 1,
    name: 'Teaching maths to little preschoolers at a tender age'
  }
]

const ContentContainer = styled.div`
  padding: 1rem;
  display: flex;
  background: #fff;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0 3px 5px #c0c0c0;
`

const center = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const Searchbox = styled.div`
width  : 35rem;
border : 2px solid #0072CE;
border-radius : 30px;
padding : 0.5rem 1rem;
display : flex;
background : #fff;
padding   : 0.7rem 0.5rem;
justify-content: space-between;
input {
     padding : 0.2rem 1rem;
    width  : 33rem
    outline : 0;
    color :#0072CE;
    border : 0;
  }
  div {
    color :#0072CE;
    padding : 0 0.5rem;
    display  : flex;
    justify-content : center;
    align-items : center;
  }
`

const Home = props => {
  const { UserStore } = props

  return (
    <div style={{ background: '#fbfbfb' }}>
      <Profile UserStore={UserStore} />
      <br />
      <br />

      <Body>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Cards background="#fff" style={{ ...center }}>
            <div>
              <Title align="center"> 10 </Title>

              <Text align="center"> Courses</Text>
            </div>
          </Cards>
          <Cards background="#fff" style={{ ...center }}>
            <div>
              <Title align="center"> 10 </Title>

              <Text align="center"> Courses</Text>
            </div>
          </Cards>

          <Cards background="#fff" style={{ ...center }}>
            <div>
              <Title align="center"> 10 </Title>

              <Text align="center"> Courses</Text>
            </div>
          </Cards>
        </div>
        <br />
        <br />
        <br />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ ...center }}>
            <Title small style={{ color: '#0072CE' }}>
              Online Content ( {Data.length} )
            </Title>
          </div>

          <Searchbox>
            <div>
              <FiSearch style={{ fontSize: '1.6rem' }} />
            </div>

            <input placeholder="Search for a course" />
          </Searchbox>
        </div>
        <hr />
        <br />
        <ul style={{ margin: '0', padding: '0', listStyle: 'none' }}>
          {Data.map(({ id, name }) => {
            return (
              <li key={id}>
                <ContentContainer>
                  <div
                    style={{
                      height: '45px',
                      width: '50px',
                      borderRadius: '3px',
                      border: '1px solid #c0c0c0'
                    }}
                  />

                  <Text> {name} </Text>
                  <Text> 12 - 12 - 12 </Text>
                </ContentContainer>
              </li>
            )
          })}
        </ul>
      </Body>
    </div>
  )
}

export default Home
