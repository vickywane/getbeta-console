import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'
import { toJS } from 'mobx'
import { Link, navigate } from '@reach/router'
import media from 'styled-media-query'

import PaymentCard from '../../components/paymentCard'
import Header from '../../components/headers/header'
import { Body, Text, Title, Card, Button } from '../../styles/style'
import Loading from '../../components/loading'

const StyledCard = styled.div`
  width: 34rem;
  height: auto;
  border-radius: 7px;
  padding-right: 10px;
  background: #fff;
  span {
    display: grid;
    grid-template-columns: 8rem auto;
    grid-gap: 0 1rem;
  }
  ${media.lessThan('large')`
      width : 30rem;
  `};
  ${media.lessThan('medium')`
    width: 29rem;
    span {
      padding : 1rem 1rem;
      display: flex;
      flex-direction : column;
      align-items : center;
    }
  `};
  ${media.lessThan('small')`
    width: 20rem;
  `};
`

const CardGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(36rem, 1fr));
  list-style: none;
  li {
    margin: 1rem 1rem;
  }
  ${media.lessThan('large')`
    grid-template-columns: repeat(auto-fit, minmax(31rem, 1fr));
  `}
  ${media.lessThan('medium')`
  display : flex;
  flex-direction : column;
  align-items : center;
    li {
      margin: 1rem 0;
    }
  `};
`

const UserImage = styled.img`
  height: 200px;
  width: 140px;
  cursor: pointer;
  object-fit: cover;
  border-radius: 7px 0 0 7px;
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

const Booking = props => {
  const { getUsers, users, isLoading } = props.UserStore
  const { Width } = props
  const [showBookingModal, setBookingModal] = useState(false)
  const [userDetails, setDetails] = useState([])

  useEffect(() => {
    getUsers()
  }, [])

  const allVendors = toJS(users)

  return (
    <div>
      <Header showSearch={true} searchText="Find A Professional" />
      <Body
        style={{
          padding: '0.5rem',
          height: window.innerHeight - 60,
          overflow: 'auto',
          background: 'rgba(233, 241, 251, 0.81)'
        }}
      >
        <br />
        <PaymentCard
          modalVisibility={showBookingModal}
          userDetails={userDetails}
          closeModal={val => setBookingModal(val)}
        />

        <CardGrid>
          {isLoading ? (
            <Loading />
          ) : (
            allVendors.map(({ _id, fullname, price, email, rating }) => {
              return (
                <li key={_id}>
                  <StyledCard>
                    <span>
                      <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <UserImage alt="User" src={require('../../assets/images/img.jpg')} />
                      </div>

                      <div>
                        <div style={{ padding: '1rem 0' }}>
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
                          <Text small align="center">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.{' '}
                          </Text>

                          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Text small> Slots : 5 </Text>

                            <Text small style={{ color: '#0072ce' }}>
                              ${price} / mins{' '}
                            </Text>
                          </div>

                          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            .
                            <Button
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
                              Proceed to book
                            </Button>
                          </div>
                        </div>
                      </div>
                    </span>
                  </StyledCard>
                </li>
              )
            })
          )}
        </CardGrid>
      </Body>
    </div>
  )
}

export default observer(Booking)
