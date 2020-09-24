import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { FiTrash2, FiCamera, FiKey } from 'react-icons/fi'
import { observer } from 'mobx-react'
import { useDropzone } from 'react-dropzone'

import Header from '../../components/headers/header'
import TestImage from '../../assets/images/img.jpg'
import { Text, InputBody, Hover, Button, center, Body, StyledHover } from '../../styles/style'
import useWindowWidth from '../../utils/hook_style'

const UserImage = styled.div`
  background-image: url(${props => props.image});
  object-fit: contain;
  background-position: center;
  background-size: cover;
  width: 220px;
  height: 220px;
  border-radius: 15%;
  ${media.lessThan('huge')`
  width: 250px;
  height: 250px;
  `};
  ${media.lessThan('large')`
  width: 200px;
  height: 200px;
  `};
`

const DeleteButton = styled(Button)`
  background: #f72832;
  border: 1px solid #f72832;
  transition: all 400ms;
  padding: 1rem 1rem;
  &: hover {
    background: red;
    border: 1px solid red;
  }
`

const StyledInputBody = styled(InputBody)`
  input {
    width: 50%;
    border: 0;
  }
  textarea {
    border: 0;
    width: 50%;
  }
  ${media.lessThan('huge')`
      textarea , input {
        width : 80%
      }
  `};
  ${media.lessThan('large')`
  textarea , input {
    width : 90%
  }
`};
  ${media.lessThan('medium')`
textarea , input {
  width : 100%
}
`};
`

const UpdateProfile = props => {
  const Width = useWindowWidth()
  const { deleteAccount, updateUser, userDetail, getUserDetail } = props.UserStore
  const { name, email, bio } = userDetail

  const [isUploading, setUploading] = useState(false)

  const [userName, setUserName] = useState(name)
  const [userEmail, setUserEmail] = useState(email)
  const [Bio, setBio] = useState(bio)
  const [Number, setNumber] = useState('')
  const [Occupation, setOccupation] = useState('')
  const [Education, setEduction] = useState('')
  const [userImage, setUserImage] = useState(null)

  const updateUserAccount = () => {
    updateUser(userName, userEmail, Bio, Number, Occupation, Education)
  }

  useEffect(() => {
    getUserDetail()
  }, [])

  const onDrop = useCallback(([file]) => {
    setUserImage(file)
  }, [])

  const { getRootProps, isDragActive, isDragAccept, getInputProps, isDragReject } = useDropzone({
    onDrop,
    accept: 'image/jpeg , image/jpg, image.png'
  })

  return (
    <div>
      <Header goBack={true} />

      <Body style={{ height: window.innerHeight - 75, overflow: 'auto', padding: '1rem 2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div
            {...getRootProps({
              isDragActive,
              isDragAccept,
              isDragReject
            })}
          >
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
                <UserImage image={TestImage}>
                  <input {...getInputProps()} />
                  <div style={{ ...center, height: '20rem' }}>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                      }}
                    >
                      .
                      <Hover style={{ marginBottom: '1rem', color: 'white' }}>
                        <FiCamera style={{ fontSize: '1.8rem' }} />
                      </Hover>
                    </div>
                  </div>
                </UserImage>
                <br />
              </div>
            )}
          </div>

          <div
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
          >
            .
            <div style={{ display: 'flex' }}>
              {Width > 1000 ? (
                <Button>
                  <div style={{ paddingRight: '0.5rem' }}>
                    <FiKey style={{ color: 'white', fontSize: '1.5rem' }} />
                  </div>
                  Change Password
                </Button>
              ) : (
                <StyledHover style={{ paddingRight: '0.5rem' }}>
                  <FiKey style={{ color: 'black', fontSize: '1.5rem' }} />
                </StyledHover>
              )}

              {Width > 900 ? (
                <DeleteButton style={{ margin: '0 2rem' }} onClick={() => deleteAccount()}>
                  <div style={{ paddingRight: '0.5rem' }}>
                    <FiTrash2 style={{ color: 'white', fontSize: '1.5rem' }} />
                  </div>
                  Delete Account
                </DeleteButton>
              ) : (
                <StyledHover style={{ paddingRight: '0.5rem' }}>
                  <FiTrash2 style={{ color: 'red', fontSize: '1.5rem' }} />
                </StyledHover>
              )}
            </div>
          </div>
        </div>
        <hr />

        <div>
          <div>
            <StyledInputBody>
              <label> Full Name </label>
              <input
                type="text"
                placeholder={userName}
                value={userName}
                onChange={e => {
                  setUserName(e.target.value)
                }}
              />
            </StyledInputBody>
            <StyledInputBody>
              <label> Email Address </label>
              <input
                type="text"
                placeholder={userEmail}
                value={userEmail}
                onChange={e => {
                  setUserEmail(e.target.value)
                }}
              />
            </StyledInputBody>
            <StyledInputBody>
              <label> Mobile Number </label>
              <input
                type="number"
                placeholder={Number}
                value={Number}
                onChange={e => {
                  setNumber(e.target.value)
                }}
              />
            </StyledInputBody>
            <StyledInputBody>
              <label> Highest Level of Education </label>
              <input
                type="text"
                placeholder={'Eductional Status'}
                value={Education}
                onChange={e => {
                  setEduction(e.target.value)
                }}
              />
            </StyledInputBody>
            <StyledInputBody>
              <label> Occupation </label>
              <input
                type="text"
                placeholder={Occupation}
                value={Occupation && Occupation}
                onChange={e => {
                  setOccupation(e.target.value)
                }}
              />
            </StyledInputBody>
            <StyledInputBody>
              <label> Brief Biography </label>
              <textarea
                type="text"
                placeholder={Bio || 'A short description about me'}
                onChange={e => {
                  setBio(e.target.value)
                }}
              />
            </StyledInputBody>
          </div>
        </div>

        <hr />
        <Button onClick={() => updateUserAccount()} style={{ width: '20rem' }}>
          Save Details
        </Button>
      </Body>
    </div>
  )
}

export default observer(UpdateProfile)
