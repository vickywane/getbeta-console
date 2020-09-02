import React, { useState } from 'react'
import Header from '../../components/headers/header'
import styled from 'styled-components'
import { Modal } from 'react-bootstrap'

import { Text, Title, Hover, Button } from '../../styles/style'
import ModalWrapper from '../../components/modals/modalWrapper'
import { FiLogOut, FiChevronDown, FiChevronUp } from 'react-icons/fi'

const Image = styled.img`
  height: 140px;
  width: 140px;
  margin: 1rem 0;
  border-radius: 50%;
  border: 5px solid #0072ce;
  object-fit: cover;
`

const Body = styled.div`
  padding: 0.5rem 3rem;
`

const center = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const Profile = props => {
  const { UserStore } = props

  const [profilePane, setProfilePane] = useState(true)
  const [showModal, setModal] = useState(false)

  return (
    <div>
      {profilePane ? (
        <Body style={{ color: '#0072CE', background: 'rgba(233, 241, 251, 0.81)' }}>
          <ModalWrapper
            visibility={showModal}
            closeModal={() => setModal(false)}
            size="xl"
            title="Edit Profile"
          >
            <div>
              <p> Change my profile details body </p>

              <hr />
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <p style={{ opacity: '0' }}> .</p>

                  <Button>Save Details</Button>
                </div>
              </div>
            </div>
          </ModalWrapper>

          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex' }}>
              <Image alt="user" src={require('../../assets/images/img.jpg')} />

              <div
                style={{
                  marginLeft: '3rem',
                  ...center
                }}
              >
                <div>
                  <h4 style={{ fontSize: 'normal' }}> {UserStore.userDetail.name} </h4>
                  <Text style={{ textAlign: 'center' }}> {UserStore.userDetail.email} </Text>
                </div>
              </div>
            </div>

            <div>
              <Hover onClick={() => UserStore.logOut()}>
                <FiLogOut style={{ fontSize: '2rem' }} />
              </Hover>
            </div>
          </div>

          <br />
          <br />
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button onClick={() => setModal(true)}> Edit Profile </Button>

            <Hover onClick={() => setProfilePane(!profilePane)}>
              <FiChevronUp style={{ fontSize: '2.2rem' }} />
            </Hover>
          </div>
        </Body>
      ) : (
        <Body
          style={{
            padding: '1rem 1rem',
            color: '#0072CE',
            display: 'flex',
            justifyContent: 'space-between',
            background: '#d6e2f0cf'
          }}
        >
          <div style={{ display: 'flex' }}>
            <Image
              style={{ borderWidth: '1px', height: '60px', width: '60px', margin: '0 1rem' }}
              alt="user"
              src={require('../../assets/images/img.jpg')}
            />

            <div style={{ ...center }}>
              <h4> Victory Nwani </h4>
            </div>
          </div>

          <div style={{ ...center }}>
            <Hover onClick={() => setProfilePane(!profilePane)}>
              <FiChevronDown style={{ fontSize: '2.5rem' }} />
            </Hover>
          </div>
        </Body>
      )}
    </div>
  )
}

export default Profile
