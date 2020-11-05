import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'
import { toJS } from 'mobx'
import { Link, navigate } from '@reach/router'
import media from 'styled-media-query'
import { Badge, Box } from '@chakra-ui/core'

import ModalWrapper from '../../components/modals/modalWrapper'
import PaymentCard from '../../components/paymentCard'
import Header from '../../components/headers/header'
import {
  Hover,
  Body,
  Text,
  Title,
  Searchbox,
  StyledHover,
  Button,
  center
} from '../../styles/style'
import Loading from '../../components/loading'
import { FiTwitter, FiInstagram, FiSearch, FiFilter, FiMail } from 'react-icons/fi'

const StyledCard = styled.div`
  width: 30rem;
  height: auto;
  border-radius: 7px;
  background: #fff;
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

const CardGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    margin: 1.2rem 0.5rem;
  }
  ${media.lessThan('large')`
    grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
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
  height: auto;
  width: 90px;
  cursor: pointer;
  object-fit: cover;
  border-radius: 5px 0 0 5px;
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

const StyledFilter = styled(StyledHover)`
  ${media.lessThan('medium')`
  display : none;
`};
`

const FilterButton = styled(Button)`
  display: none;
  ${media.lessThan('small')`
      display : flex;
      height : 35px;
  `};
`

const Booking = props => {
  const { getUsers, users, isLoading } = props.UserStore
  const { Width } = props
  const [showBookingModal, setBookingModal] = useState(false)
  const [userDetails, setDetails] = useState([])

  const [showModal, setModal] = useState(false)
  const [filter, setFilter] = useState('')

  useEffect(() => {
    getUsers()
  }, [])

  const allVendors = toJS(users)

  return (
    <div>
      <Header showSearch={true} searchText="Find A Professional" />

      <ModalWrapper
        visibility={showModal}
        size="lg"
        closeModal={() => setModal(false)}
        title="Filter Booking Consultants"
      >
        <div>
          <div style={{ display: 'flex', flexDirection: 'row', margin: '1rem 0' }}>
            <div style={{ ...center }}>
              <input style={{ width: '1.2rem', height: '1.1rem' }} type="radio" />
            </div>

            <Text style={{ margin: '0 0.7rem' }}> By Content Release Date </Text>
          </div>

          <div style={{ display: 'flex', flexDirection: 'row', margin: '1rem 0' }}>
            <div style={{ ...center }}>
              <input style={{ width: '1.2rem', height: '1.1rem' }} type="radio" />
            </div>

            <Text style={{ margin: '0 0.7rem' }}> By Content Viewer's Rating </Text>
          </div>

          <div style={{ display: 'flex', flexDirection: 'row', margin: '1rem 0' }}>
            <div style={{ ...center }}>
              <input style={{ width: '1.2rem', height: '1.1rem' }} type="radio" />
            </div>

            <Text style={{ margin: '0 0.7rem' }}> By Content Rating </Text>
          </div>

          <div style={{ display: 'flex', flexDirection: 'row', margin: '1rem 0' }}>
            <div style={{ ...center }}>
              <input
                onClick={() => setFilter(localStorage.getItem('userId'))}
                style={{ width: '1.2rem', height: '1.1rem' }}
                type="radio"
              />
            </div>

            <Text style={{ margin: '0 0.7rem' }}> Show only content created by me</Text>
          </div>

          <hr />
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p style={{ opacity: '0' }}> .</p>

              <Button
                onClick={() => {
                  setModal(false)
                }}
              >
                Apply Filter
              </Button>
            </div>
          </div>
        </div>
      </ModalWrapper>

      <Body>
        <div style={{ margin: '0.5rem 0', justifyContent: 'space-between', display: 'flex' }}>
          <div style={{ display: 'flex' }}>
            <FilterButton onClick={() => setModal(true)}>
              <FiFilter style={{ fontSize: '1.1rem' }} />{' '}
            </FilterButton>
            <StyledFilter onClick={() => setModal(true)}>
              <Text style={{ margin: '0 0.5rem' }}> Filter Content </Text>
              <FiFilter style={{ fontSize: '1.1rem' }} />
            </StyledFilter>
          </div>

          <div style={{ ...center }}>
            <Searchbox>
              <div style={{ paddingTop: '5px' }}>
                <FiSearch style={{ fontSize: '1.1rem' }} />
              </div>

              <input placeholder="Seach for a content" type="text" />
            </Searchbox>
          </div>
        </div>
      </Body>

      <Body
        style={{
          padding: '0.5rem',
          height: window.innerHeight - 50,
          overflow: 'auto',
          background: 'rgba(233, 241, 251, 0.81)'
        }}
      >
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

                          <Box d="flex" alignItems="baseline">
                            <Badge rounded="full" px="5" fontSize={11} variantColor="teal">
                              5 Open Slots
                            </Badge>
                          </Box>
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

                        <Text
                          style={{ marginTop: '20px' }}
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
