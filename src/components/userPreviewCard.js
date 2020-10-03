import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { openPopupWidget } from 'react-calendly'
import ModalWrapper from './modals/modalWrapper'
import { Modal } from 'react-bootstrap'
import { CardGrid, Body, Text, Title, Card, Button } from '../styles/style'
import { Link } from '@reach/router'
import { FiX } from 'react-icons/fi'

const Image = styled.img`
  height: 200px;
  width: 200px;
  margin: 1rem 0;
  object-fit: contain;
  border-radius: 5px;
`

const ModalBody = styled.div`
  display: flex;
  flex-direction: row;
  ${media.lessThan('medium')``};
`

const UserPreviewCard = props => {
  const { closeModal, userDetails, modalVisibility } = props

  return (
    <Modal show={modalVisibility} size="lg" style={{ padding: 0 }} onHide={() => closeModal(false)}>
      <ModalBody>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Image alt="consultant" src={require('../assets/images/img.jpg')} />
        </div>

        <div>
          <div>
            <div>
              <FiX style={{ fontSize: '1.6rem' }} />
            </div>
          </div>
          <Link to={`/u/${userDetails.fullname}`}>
            <Title small align="center">
              {userDetails.fullname}
            </Title>
          </Link>
          <Text small align="center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint autem officia sunt optio,
            ea eaque ad, eveniet illum dolorem, beatae blanditiis? Dicta, facilis voluptas! Vel?
          </Text>
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
              Pay and Reserve Booking
            </Button>
          </div>
        </div>
      </ModalBody>
    </Modal>
  )
}

export default UserPreviewCard
