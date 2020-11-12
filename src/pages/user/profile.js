import React, { useState } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { FiPlus, FiX, FiChevronsDown, FiChevronsUp, FiTrash2, FiBell, FiEdit } from 'react-icons/fi'
import { toJS } from 'mobx'

import { Link, navigate } from '@reach/router'
import Header from '../../components/headers/header'
import TestImage from '../../assets/images/img.jpg'
import { Text, MdTitle, Hover, Button, Alert, Title } from '../../styles/style'

export const Image = styled.img`
  height: 160px;
  width: 160px;
  margin: 1rem 0;
  border-radius: 5%;
  border: 3px solid #0072ce;
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
  border-radius: 5%;
  `};
  ${media.lessThan('small')`
    height: 135px;
    width: 135px;
    border: 0;
    border-radius: 8%;
  `};
`

export const Body = styled.div`
  padding: 0.5rem 3rem;

  color: #0072ce;
  background: rgba(233, 241, 251, 0.81);
  span {
    display: flex;
    margin: 1rem 1rem;
    align-items: center;
    justify-content: space-between;
  }
  ${media.lessThan('medium')`
    padding: 0.5rem 1rem;
  `};
  ${media.lessThan('small')`
    padding: 0.5rem 0.5rem;
    span {
      display: flex;
      margin: 1rem 1rem;
      flex-direction : column;
      align-items: center;
    }
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
  font-size : 1.4rem;
  color : #fff;
  ${media.lessThan('medium')`
      width : 40px;
      height : 40px;
  `}
  ${media.lessThan('small')`
      width : 30px;
      font-size : 1.2rem;
      height : 30px;
  `};
`

const ProfileContainer = styled.div`
  display: flex;
  ${media.lessThan('small')`
      flex-direction : column;
      align-items : center;
      jusitfy-content : center;
  `};
`

const Profile = props => {
  const userDetail = toJS(props.UserStore.userDetail)

  const { fullname, email, bio, img } = userDetail

  const [profilePane, setProfilePane] = useState(true)
  const [showConfirmationAlert, setConfirmationAlert] = useState(true)

  return (
    <div>
      <Header path="home" />
      {showConfirmationAlert && (
        <Alert variant="success">
          <div style={{ ...center }}>
            <Text style={{}} align="center">
              Welcome to GetBeta! A confirmation email has been sent to your email address.
            </Text>
          </div>
        </Alert>
      )}
      {profilePane ? (
        <Body>
          <span>
            <ProfileContainer>
              <div style={{ ...center }}>
                <Image
                  onClick={() => navigate('/update-profile', {})}
                  alt="user"
                  src={img ? img : TestImage}
                />
              </div>

              <div
                style={{
                  marginLeft: '1rem',
                  ...center
                }}
              >
                <div>
                  <MdTitle align="center"> {fullname} </MdTitle>
                  <Text align="center" style={{ textAlign: 'center' }}>
                    {' '}
                    {email}{' '}
                  </Text>
                </div>
              </div>
            </ProfileContainer>

            <div>
              <StyledHover
                onClick={() => {
                  navigate('/update-profile', {})
                }}
              >
                <FiEdit />
              </StyledHover>
            </div>
          </span>

          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div
              onClick={() =>
                navigate('/subscriptions', {
                  state: {
                    userData: userDetail
                  }
                })
              }
              style={{ display: 'flex' }}
            >
              <FiPlus style={{ fontSize: '1.4rem' }} />
              <Text style={{ margin: '0 0.2rem', cursor: 'pointer' }}>
                {' '}
                Manage Subscription{' '}
              </Text>{' '}
            </div>

            <Hover onClick={() => setProfilePane(!profilePane)}>
              <FiChevronsUp style={{ fontSize: '1.6rem' }} />
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
          <div style={{ ...center }}>
            <Title small> {fullname} </Title>
          </div>

          <div style={{ display: 'flex' }}>
            <div style={{ ...center }}>
              <Hover onClick={() => setProfilePane(!profilePane)}>
                <FiChevronsDown style={{ fontSize: '1.6em' }} />
              </Hover>
            </div>
          </div>
        </Body>
      )}
    </div>
  )
}

export default Profile
