import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'
import { toJS } from 'mobx'
import { Link } from '@reach/router'

import UserPreviewCard from '../../components/userPreviewCard'
import Header from '../../components/headers/header'
import { Body, Text, Title, Card, Button } from '../../styles/style'
import Loading from '../../components/loading'

const StyledCard = styled.div`
  width: 35rem;
  height: auto;
  border-radius: 7px;
  padding-right: 10px;
  background: #fff;
  span {
    display: grid;
    grid-template-columns: 8rem auto;
    grid-gap: 0 1rem;
  }
`

const CardGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
  list-style: none;
  li {
    margin: 1rem 1rem;
  }
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
          padding: '1rem',
          height: window.innerHeight - 60,
          overflow: 'auto',
          background: 'rgba(233, 241, 251, 0.81)'
        }}
      >
        <br />
        <UserPreviewCard
          modalVisibility={showBookingModal}
          userDetails={userDetails}
          closeModal={val => setBookingModal(val)}
        />

        <CardGrid>
          {isLoading ? (
            <Loading />
          ) : (
            allVendors.map(({ id, fullname, price, email, rating }) => {
              return (
                <li>
                  <StyledCard>
                    <span>
                      <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img
                          alt="User"
                          style={{
                            height: '200px',
                            width: '130px',
                            cursor: 'pointer',
                            objectFit: 'cover'
                          }}
                          src={require('../../assets/images/img.jpg')}
                        />
                      </div>

                      <div>
                        <div style={{ padding: '1rem 0' }}>
                          <Link to={`/u/${fullname.trim()}`}>
                            <Title
                              style={{ fontWeight: 500, cursor: 'pointer' }}
                              color="#0072ce"
                              small
                              align="center"
                            >
                              {fullname}
                            </Title>
                          </Link>
                          <Text small align="center">
                            {' '}
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.{' '}
                          </Text>
                          <Text
                            align="center"
                            style={{ padding: 0, margin: 0 }}
                            small
                            color="#808080"
                          >
                            {' '}
                            12 Reviews{' '}
                          </Text>

                          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Text small> Slots : 5 </Text>

                            <Text small style={{ color: '#0072ce' }}>
                              {' '}
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
