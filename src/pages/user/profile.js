import React, { useState } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { FiPlus, FiChevronsDown, FiChevronsUp, FiTrash2, FiBell, FiEdit } from 'react-icons/fi'
import { Alert } from 'react-bootstrap'

import { Link, navigate } from '@reach/router'
import Header from '../../components/headers/header'
import TestImage from '../../assets/images/img.jpg'
import { Text, MdTitle, Hover, Button } from '../../styles/style'

const Image = styled.img`
  height: 130px;
  width: 130px;
  margin: 1rem 0;
  border-radius: 50%;
  border: 5px solid #0072ce;
  object-fit: cover;
  &: hover {
    cursor: pointer;
  }
  ${media.lessThan('huge')`
    height: 120px;
    width: 120px;
  `};
  ${media.lessThan('large')`
  height: 110px;
  width: 110px;
  `};
  ${media.lessThan('medium')`
  height: 110px;
  width: 110px;
  border: 0;
  border-radius: 8%;
  `};
`

const Body = styled.div`
  padding: 0.5rem 3rem;
  ${media.lessThan('medium')`
    padding: 0.5rem 1rem;
  `};
  ${media.lessThan('small')`
    padding: 0.5rem 0.5rem;
  `}
`

const center = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column'
}

const StyledHover = styled(Hover)`
  background : #0072ce;
  border-radius : 5px;
  box-shadow : 0 1px 2px grey
  height : 40px;
  display : flex;
  justify-content : center;
  align-items :  center;
  width : 40px;
  color : #fff;
  ${media.lessThan('medium')`
      width : 40px;
      height : 40px;
  `}
`

const HedaerContainer = styled.div`
  display: none;
  ${media.lessThan('medium')`
      display : flex;
    `};
`

const Profile = props => {
  const { UserStore } = props
  const { name, email, bio } = UserStore.userDetail
  const [profilePane, setProfilePane] = useState(true)
  const [showModal, setModal] = useState(false)
  const [showConfirmationAlert, setConfirmationAlert] = useState(true)

  return (
    <div>
      <HedaerContainer>
        <Header path="home" />
      </HedaerContainer>
      {showConfirmationAlert && (
        <Alert
          style={{ margin: 0, outline: '0px' }}
          variant="success"
          onClose={() => setConfirmationAlert(false)}
          dismissible
        >
          <Text align="center">
            Welcome to GetBeta!. A confirmation email has been sent to your email address.{' '}
          </Text>{' '}
        </Alert>
      )}
      {profilePane ? (
        <Body style={{ color: '#0072CE', background: 'rgba(233, 241, 251, 0.81)' }}>
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex' }}>
              <div style={{ ...center }}>
                <Image onClick={() => navigate('/update-profile', {})} alt="user" src={TestImage} />
              </div>

              <div
                style={{
                  marginLeft: '2rem',
                  ...center
                }}
              >
                <div>
                  <MdTitle align="center"> {name} </MdTitle>
                  <Text align="center" style={{ textAlign: 'center' }}>
                    {' '}
                    {email}{' '}
                  </Text>
                </div>
              </div>
            </div>

            <div>
              <StyledHover
                onClick={() => {
                  navigate('/update-profile', {})
                }}
              >
                <FiEdit style={{ fontSize: '1.4rem' }} />
              </StyledHover>
            </div>
          </div>

          <br />

          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Link to="/subscriptions" style={{ textDecoration: 'none' }}>
              <div style={{ display: 'flex' }}>
                <FiPlus style={{ fontSize: '1.4rem' }} />
                <Text style={{ margin: '0 0.3rem' }}> Manage Subscription </Text>{' '}
              </div>
            </Link>

            <Hover onClick={() => setProfilePane(!profilePane)}>
              <FiChevronsUp style={{ fontSize: '2rem' }} />
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
              onClick={() => setModal(true)}
              style={{
                cursor: 'pointer',
                borderWidth: '1px',
                height: '45px',
                width: '45px',
                margin: '0 1rem'
              }}
              alt="user"
              src={require('../../assets/images/img.jpg')}
            />

            <div style={{ ...center }}>
              <h4> {UserStore.userDetail.name} </h4>
            </div>
          </div>

          <div style={{ display: 'flex' }}>
            <div style={{ ...center, margin: '0 1rem' }}>
              <StyledHover
                onClick={() => {
                  navigate('/update-profile', {})
                }}
              >
                <FiEdit style={{ fontSize: '1.5rem' }} />
              </StyledHover>
            </div>

            <div style={{ ...center }}>
              <Hover onClick={() => setProfilePane(!profilePane)}>
                <FiChevronsDown style={{ fontSize: '2rem' }} />
              </Hover>
            </div>
          </div>
        </Body>
      )}
    </div>
  )
}

export default Profile
