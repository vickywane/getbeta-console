import React, { useState } from 'react'
import styled from 'styled-components'

import { Link, navigate } from '@reach/router'
import UpdateProfile from './updateProfile'
import TestImage from '../../assets/images/img.jpg'
import { Text, MdTitle, Hover, Button } from '../../styles/style'
import { FiPlus, FiEdit, FiChevronsDown, FiChevronsUp, FiTrash2, FiBell } from 'react-icons/fi'

const Image = styled.img`
  height: 140px;
  width: 140px;
  margin: 1rem 0;
  border-radius: 50%;
  border: 5px solid #0072ce;
  object-fit: cover;
  &: hover {
    cursor: pointer;
  }
`

const Body = styled.div`
  padding: 0.5rem 3rem;
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
  height : 45px;
  display : flex;
  justify-content : center;
  align-items :  center;
  width : 45px;
  color : #fff;
`

const Profile = props => {
  const { UserStore } = props
  const { name, email, bio } = UserStore.userDetail
  const [profilePane, setProfilePane] = useState(true)
  const [showModal, setModal] = useState(false)

  return (
    <div>
      {profilePane ? (
        <Body style={{ color: '#0072CE', background: 'rgba(233, 241, 251, 0.81)' }}>
          {/* EDIT PROFILE  */}
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex' }}>
              <Image onClick={() => navigate('/update-profile', {})} alt="user" src={TestImage} />

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
                  navigate('/notifications', {})
                }}
              >
                <FiBell style={{ fontSize: '1.6rem' }} />
              </StyledHover>
            </div>
          </div>

          <br />
          <div>
            <Link to="/subscriptions" style={{ textDecoration: 'none' }}>
              <div style={{ display: 'flex' }}>
                <FiPlus style={{ fontSize: '1.6rem' }} />
                <Text style={{ margin: '0 0.5rem' }}> Manage Account Plan </Text>{' '}
              </div>
            </Link>
          </div>
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button onClick={() => navigate('/update-profile', {})}> Edit Profile </Button>

            <Hover onClick={() => setProfilePane(!profilePane)}>
              <FiChevronsUp style={{ fontSize: '2.2rem' }} />
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
                height: '60px',
                width: '60px',
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
                  navigate('/notifications', {})
                }}
              >
                <FiBell style={{ fontSize: '1.6rem' }} />
              </StyledHover>
            </div>

            <div style={{ ...center }}>
              <Hover onClick={() => setProfilePane(!profilePane)}>
                <FiChevronsDown style={{ fontSize: '2.5rem' }} />
              </Hover>
            </div>
          </div>
        </Body>
      )}
    </div>
  )
}

export default Profile
