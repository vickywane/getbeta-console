import React, { useState } from 'react'
import styled from 'styled-components'
import { navigate } from '@reach/router'
import media from 'styled-media-query'
import { Box, Badge } from '@chakra-ui/core'

import { Text, Title } from '../styles/style'

const UserImage = styled.img`
  height: auto;
  width: 90px;
  cursor: pointer;
  object-fit: cover;
  border-radius: 3px 0 0 3px;
  ${media.lessThan('large')`
  height: auto;
  width: 100px;
  `};
  ${media.lessThan('medium')`
    height: 150px;
    width: 150px;
    border-radius : 50%;
  `};
  ${media.lessThan('small')`
    height: 120px;
    width: 125px;
      border-radius : 5%;
  `};
`

const StyledCard = styled.div`
  width: 30rem;
  height: auto;
  border-radius: 7px;
  background: #fff;
  box-shadow: 0 1px 2px #c0c0c0;
  span {
    display: grid;
    grid-template-columns: 8rem auto;
    grid-gap: 0 0.5rem;
  }
  ${media.lessThan('large')`
      width : 27rem;
  `};
  ${media.lessThan('medium')`
    width: 29rem;
    span {
      padding : 1rem .6rem;
      display: flex;
      flex-direction : column;
      align-items : center;
    }
  `};
  ${media.lessThan('small')`
    width: 20rem;
  `};
`

const BookingCard = props => {
  const { fullname, _id, rating, email, price, setBookingModal, setDetails } = props

  return (
    <StyledCard>
      <span>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <UserImage alt="User" src={require('../assets/images/img.jpg')} />
        </div>

        <div style={{ padding: '.5rem 0' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '0 .7rem'
            }}
          >
            <Title
              onClick={() => {
                navigate(`/u/${fullname.trim()}`, {
                  state: { id: _id }
                })
              }}
              style={{ fontWeight: 500, cursor: 'pointer' }}
              color="#0072ce"
              small
              align="center"
            >
              {fullname}
            </Title>
          </div>

          <Text style={{ padding: '0', margin: '0' }} small align="center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.{' '}
          </Text>

          <br />

          {/* <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Text small> Slots : 5 </Text>

                  <Text small style={{ color: '#0072ce' }}>
                    ${price} / mins{' '}
                  </Text>
                </div> */}

          <div style={{ display: 'flex', marginTop: '10px', justifyContent: 'space-between' }}>
            <Box d="flex" alignItems="baseline">
              <Badge rounded="full" px="5" fontSize={11} variantColor="teal">
                5 Open Slots
              </Badge>
            </Box>

            <Text
              style={{ paddingRight: '10px' }}
              align="center"
              onClick={() => {
                setBookingModal(true)
                setDetails({
                  fullname: fullname,
                  price: price,
                  email: email,
                  rating: rating
                })
              }}
            >
              Create Booking
            </Text>
          </div>
        </div>
      </span>
    </StyledCard>
  )
}

export default BookingCard
