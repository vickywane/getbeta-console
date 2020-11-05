import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'
import { toJS } from 'mobx'
import media from 'styled-media-query'

import ModalWrapper from '../../components/modals/modalWrapper'
import BookingCard from '../../components/bookingCard'
import PaymentCard from '../../components/paymentCard'
import Header from '../../components/headers/header'
import { Body, Text, Searchbox, StyledHover, Button, center } from '../../styles/style'
import Loading from '../../components/loading'
import { FiTwitter, FiInstagram, FiSearch, FiFilter, FiMail } from 'react-icons/fi'

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
                  <BookingCard
                    _id={_id}
                    fullname={fullname}
                    price={price}
                    email={email}
                    rating={rating}
                  />
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
