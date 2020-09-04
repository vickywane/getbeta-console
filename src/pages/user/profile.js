import React, { useState } from 'react'
import styled from 'styled-components'

import TestImage from '../../assets/images/img.jpg'
import { Text, Title, Input, InputBody, Hover, Button } from '../../styles/style'
import ModalWrapper from '../../components/modals/modalWrapper'
import { FiLogOut, FiChevronsDown, FiChevronsUp, FiTrash2, FiBell } from 'react-icons/fi'

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
  alignItems: 'center',
  flexDirection: 'column'
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  grid-gap: 2rem 2rem;
`

const DeleteButton = styled(Button)`
  background: #ff6347;
  border: 1px solid #ff6347;
  transition: all 400ms;
  &: hover {
    background: red;
    border: 1px solid red;
  }
`

const StyledHover = styled(Hover)`
  background : #0072ce;
  border-radius : 5px;
  box-shadow : 0 1px 2px grey
  height : 50px;
  display : flex;
  justify-content : center;
  align-items :  center;
  width : 50px;
  color : #fff;
`

const Profile = props => {
  const { UserStore } = props

  const [profilePane, setProfilePane] = useState(true)
  const [showModal, setModal] = useState(false)
  const [isUploading, setUploading] = useState(false)

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
              <Grid>
                <div style={{ ...center }}>
                  {isUploading ? (
                    <div
                      style={{
                        borderRadius: '6px',
                        marginLeft: '3rem',
                        display: 'flex',
                        ...center,
                        height: '100%',
                        width: '100%',
                        flex: 1,
                        border: '3px dashed #0072ce',
                        background: '#fbfbfb'
                      }}
                    >
                      <Text align="center">
                        Tap to select a image <br /> Or Drag 'n' Drop image{' '}
                      </Text>
                    </div>
                  ) : (
                    <div>
                      <img
                        alt="user profile"
                        src={TestImage}
                        style={{ objectFit: 'contain', width: '300px', height: '300px' }}
                      />

                      <br />
                      <br />
                      <div
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                      >
                        <Button onClick={() => setUploading(!isUploading)}>
                          Change Profile Picture
                        </Button>
                      </div>
                    </div>
                  )}
                </div>

                <div style={{ ...center }}>
                  <div>
                    <InputBody>
                      <label> Username </label>
                      <input placeholder="Username" />
                    </InputBody>
                    <InputBody>
                      <label> Email Address </label>
                      <input placeholder="Username" />
                    </InputBody>
                    <InputBody>
                      <label> Bio </label>
                      <textarea placeholder="A short description about me " />
                    </InputBody>
                  </div>
                </div>
              </Grid>

              <hr />
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <DeleteButton onClick={() => UserStore.deleteAccount()}>
                    <div style={{ paddingRight: '0.5rem' }}>
                      <FiTrash2 style={{ color: 'white', fontSize: '1.7rem' }} />
                    </div>
                    Delete Account
                  </DeleteButton>

                  <Button>Save Details</Button>
                </div>
              </div>
            </div>
          </ModalWrapper>

          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex' }}>
              <Image alt="user" src={TestImage} />

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
              <StyledHover onClick={() => {}}>
                <FiBell style={{ fontSize: '1.8rem' }} />
              </StyledHover>
            </div>
          </div>

          <br />
          <br />
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button onClick={() => setModal(true)}> Edit Profile </Button>

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
              style={{ borderWidth: '1px', height: '60px', width: '60px', margin: '0 1rem' }}
              alt="user"
              src={require('../../assets/images/img.jpg')}
            />

            <div style={{ ...center }}>
              <h4> Victory Nwani </h4>
            </div>
          </div>

          <div style={{ display: 'flex' }}>
            <div style={{ ...center, margin: '0 1rem' }}>
              <StyledHover onClick={() => {}}>
                <FiBell style={{ fontSize: '1.8rem' }} />
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
