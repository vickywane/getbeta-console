import React, { useState } from 'react'
import Header from '../../components/headers/header'
import styled from 'styled-components'

import { Text, Title, Hover, Button } from '../../styles/style'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

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
  const [profilePane, setProfilePane] = useState(true)

  return (
    <div>
      {profilePane ? (
        <Body style={{ color: '#0072CE', background: 'rgba(233, 241, 251, 0.81)' }}>
          <br />
          <div style={{ display: 'flex' }}>
            <Image alt="user" src={require('../../assets/images/img.jpg')} />

            <div
              style={{
                marginLeft: '3rem',
                ...center
              }}
            >
              <div>
                <h4 style={{ fontSize: 'normal' }}> Somebody A. Somewhere</h4>
                <Text style={{ textAlign: 'center' }}> Vickywane@gmail.com </Text>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button> Edit Profile </Button>

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
