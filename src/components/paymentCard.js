import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { openPopupWidget } from 'react-calendly'
import ModalWrapper from './modals/modalWrapper'
import { Modal } from 'react-bootstrap'
import { CardGrid, Body, Text, Title, Card, Button } from '../styles/style'
import { Link } from '@reach/router'
import { FiClock, FiX } from 'react-icons/fi'

const Image = styled.img`
  height: 150px;
  width: 150px;
  margin: 1rem 0;
  object-fit: contain;
  border-radius: 5px;
`

const TransactionBody = styled.div`
  background: rgba(233, 241, 251, 0.81);
  padding: 1rem 1rem;
`

const UserPreviewCard = props => {
  const { closeModal, userDetails, modalVisibility } = props

  return (
    <ModalWrapper
      visibility={modalVisibility}
      size="lg"
      title="Booking Transaction"
      style={{ padding: 0 }}
      closeModal={() => closeModal(false)}
    >
      <div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Image alt="consultant" src={require('../assets/images/img.jpg')} />
        </div>

        <div>
          <Link to={`/u/${userDetails.fullname}`}>
            <Title small align="center">
              {userDetails.fullname}
            </Title>
          </Link>
          <Text align="center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id dolores.
          </Text>
          <TransactionBody>
            <Title small> Booking Summary </Title>
            <hr />
            <br />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex' }}>
                <div style={{ margin: '0 .5rem' }}>
                  <FiClock style={{ fontSize: '1.5rem' }} />
                </div>

                <Text> 50 minutes </Text>
              </div>

              <Text> $ 50 </Text>
            </div>

            <br />
          </TransactionBody>

          <br />

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              onClick={() =>
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
                })
              }
            >
              Confirm Booking Transaction
            </Button>
          </div>
        </div>
      </div>
    </ModalWrapper>
  )
}

export default UserPreviewCard
