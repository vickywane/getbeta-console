import React, { useState, useEffect } from 'react'
import Header from '../../components/headers/header'
import styled from 'styled-components'
import { observer } from 'mobx-react'
import { toJS } from 'mobx'
import { openPopupWidget } from 'react-calendly'

import { CardGrid, Body, Text, Title, Card, Button } from '../../styles/style'

const StyledCard = styled(Card)`
  padding: 0.5rem 1rem;
  height: auto;
  background: #fff;
`

const Booking = props => {
  const { getUsers, users } = props.UserStore
  const { Width } = props

  useEffect(() => {
    getUsers()
  }, [])

  const allVendors = toJS(users)
  const calendlyApi = process.env.REACT_APP_CALENDAR_API

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

        <CardGrid>
          {allVendors.map(({ id, fullname, price, email, rating }) => {
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
                  {fullname}
                </Title>
                <Text align="center"> {email} </Text>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Text> {rating} </Text>

                  <Text style={{ color: '#0072ce' }}> ${price} / mins </Text>
                </div>

                <Button
                  onClick={() => {
                    openPopupWidget({
                      url: 'https://calendly.com/vickywane/30min',
                      pageSettings: {
                        backgroundColor: '#0072ce',
                        textColor: '#fff'
                      },
                      prefill: {
                        firstName: 'Victory',
                        email: 'Vickywane@gmail.com',
                        lastname: 'Nwani',
                        customAnswers: {
                          a1: 'a1',
                          a2: 'a2',
                          a3: 'a3',
                          a4: 'a4',
                          a5: 'a5',
                          a6: 'a6',
                          a7: 'a7',
                          a8: 'a8',
                          a9: 'a9',
                          a10: 'a10'
                        }
                      },
                      utm: {
                        utmCampaign: 'Pick a slot to book a professional on GetBeta',
                        utmContent: 'Getbeta',
                        utmMedium: 'Ad',
                        utmTerm: 'Teaching'
                      }
                      // pageSettings, utm
                    })
                  }}
                  style={{ width: '100%' }}
                >
                  {' '}
                  Book{' '}
                </Button>
              </StyledCard>
            )
          })}
        </CardGrid>
      </Body>
    </div>
  )
}

export default observer(Booking)
