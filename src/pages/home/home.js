import React from 'react'
import Header from '../../components/headers/header'
import styled from 'styled-components'

import { Text, Title, Hover } from '../../styles/style'
import { FiSearch } from 'react-icons/fi'

const Image = styled.img`
  height: 150px;
  width: 150px;
  margin: 1rem 0;
  border-radius: 50%;
  border: 5px solid #0072ce;
  object-fit: cover;
`

const Body = styled.div`
  padding: 0.5rem 3rem;
`

const Cards = styled.div`
  height: 20vh;
  width: 22rem;
  border-radius: 7px;
  padding : 1rem 1rem
  box-shadow: 0 2px 3px grey;
  background: ${props => props.background};
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
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0 3px 5px grey;
`

const Home = props => {
  return (
    <div>
      <Body style={{ background: '#d6e2f0cf' }}>
        <br />
        <br />
        <div style={{ display: 'flex' }}>
          <Image alt="user" src={require('../../assets/images/img.jpg')} />

          <div
            style={{
              marginLeft: '3rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <div>
              <h4 style={{ fontSize: 'normal' }}> Somebody A. Somewher </h4>
              <Text style={{ textAlign: 'center' }}> Vickywane@gmail.com </Text>
            </div>
          </div>
        </div>
        <br />
        <br />
      </Body>
      <br />

      <Body>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Cards>
            <Text> Courses</Text>

            <Title small> 10 </Title>
          </Cards>
          <Cards>
            <Text> Bookings</Text>
            <Title small> 10 </Title>
          </Cards>

          <Cards>
            <Text> Live Sessions</Text>
            <Title small> 10 </Title>
          </Cards>
        </div>
        <br />
        <br />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Title small> Online Content </Title>

          <Hover>
            <FiSearch style={{ fontSize: '1.8rem' }} />
          </Hover>
        </div>
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
                      border: '1px solid grey'
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
