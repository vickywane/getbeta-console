import React from 'react'
import Header from '../../components/headers/header'
import styled from 'styled-components'

import { Professionals } from '../../mockData'
import { CardGrid, Body, Text, Title, Card } from '../../styles/style'

const StyledCard = styled(Card)`
  padding: 0.5rem 1rem;
  height: auto;
  background: #fff;
`

const Booking = props => {
  const { Width } = props

  return (
    <div>
      <Header showSearch={true} searchText="Find A Professional" />
      <Body
        style={{
          padding: '1rem',
          height: window.innerHeight - 80,
          background: 'rgba(233, 241, 251, 0.81)'
        }}
      >
        <br />

        <CardGrid>
          {Professionals.map(({ id, name, price, description, rating }) => {
            return (
              <StyledCard>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <img
                    alt="User"
                    style={{
                      height: '110px',
                      width: '110px',
                      borderRadius: '50%',
                      cursor: 'pointer',
                      objectFit: 'contain',
                      boxShadow: '0 3px 4px grey'
                    }}
                    src={require('../../assets/images/img.jpg')}
                  />
                </div>
                <Title
                  style={{ fontWeight: 500, cursor: 'pointer' }}
                  color="#0072ce"
                  small
                  align="center"
                >
                  {name}
                </Title>
                <Text align="center"> {description} </Text>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Text> {rating} </Text>

                  <Text style={{ color: '#0072ce' }}> ${price} / mins </Text>
                </div>
              </StyledCard>
            )
          })}
        </CardGrid>
      </Body>
    </div>
  )
}

export default Booking
