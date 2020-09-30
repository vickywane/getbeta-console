import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { FiUploadCloud, FiKey } from 'react-icons/fi'
import { observer } from 'mobx-react'
import { useDropzone } from 'react-dropzone'
import { Alert } from 'react-bootstrap'

import Header from '../../components/headers/header'
import TestImage from '../../assets/images/img.jpg'
import {
  Text,
  InputBody,
  Hover,
  Button,
  center,
  StyledHover,
  Title,
  Body
} from '../../styles/style'
import useWindowWidth from '../../utils/hook_style'

const UserImage = styled.div`
  background-image: url(${props => props.image});
  object-fit: contain;
  background-position: center;
  background-size: cover;
  width: 200px;
  outline: none;
  height: 200px;
  border-radius: 7%;
  ${media.lessThan('huge')`
  width: 180px;
  height: 180px;
  `};
  ${media.lessThan('large')`
  width: 170px;
  height: 170px;
  border-radius: 7%;
  `};
  ${media.lessThan('small')`
      width: 150px;
      height: 150px;
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
  margin: 0.4rem 0.5rem;
  input {
    color: #fff;
    width: 40rem;
    border: 0;
  }
  textarea {
    border: 0;
    width: 40rem;
    color: #fff;
  }
  ${media.lessThan('huge')`
    margin: 0.4rem 0.5rem;
      textarea , input {
        width: 40rem;
      }
  `};
  ${media.lessThan('large')`
  textarea , input {
    width: 35rem;
  }
`};
  ${media.lessThan('medium')`
textarea , input {
    width : 27rem;
}
`};
  ${media.lessThan('small')`
textarea , input {
  width : 23rem;
}
`};
`

const FormsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  grid-gap: 1rem 1rem;
  ${media.lessThan('medium')`
    display : flex
     flex-direction : column;
     align-items : center;
  `};
`

const MediaGrid = styled.div`
  display: flex;
  justify-content: space-between;
  ${media.lessThan('medium')`
    justify-content : center;
 `}
`

const StyledBody = styled(Body)`
  padding: 1rem 5rem;
  ${media.lessThan('large')`
    padding : 1rem 3rem;
  `};
  ${media.lessThan('medium')`
    padding : 1rem 1.5rem;
  `};
  ${media.lessThan('small')`
    padding : 1rem 0.5rem;
  `};
`

const BioInput = styled.textarea`
  width: 100%;
  height: 30vh;
  border: 1px solid #000;
  border-radius: 5px;
  color: #000;
`

const UpdateProfile = props => {
  const Width = useWindowWidth()
  const { deleteAccount, updateUser, userDetail, getUserDetail, isUpdated } = props.UserStore
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
    updateUser(userName, userEmail, Bio, Number, Occupation, Education, userImage)
  }

  useEffect(() => {
    getUserDetail()
  }, [])

  const onDrop = useCallback(([file]) => {
    setUserImage(file)
  }, [])

  const { getRootProps, isDragActive, isDragAccept, getInputProps, isDragReject } = useDropzone({
    onDrop,
    accept: 'image/jpeg , image/jpg, image/png'
  })

  return (
    <div>
      <Header goBack={true} />

      {isUpdated && (
        <Alert variant="success">
          <Text> Your profile details has been successfully updated! </Text>
        </Alert>
      )}

      <StyledBody style={{ height: window.innerHeight - 75, overflow: 'auto' }}>
        <div style={{}}>
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
              <MediaGrid>
                {!userImage ? (
                  <div style={{ display: 'flex' }}>
                    <UserImage image={TestImage}>
                      <input {...getInputProps()} />
                    </UserImage>

                    <div style={{ ...center }}>
                      {!userImage ? (
                        <div style={{ ...center }}>
                          <StyledHover
                            {...getRootProps({
                              isDragActive,
                              isDragAccept,
                              isDragReject
                            })}
                            style={{ display: 'flex', padding: '7px' }}
                          >
                            <input {...getInputProps()} />
                            <Hover style={{ margin: '0 0.6rem', ...center }}>
                              <FiUploadCloud style={{ fontSize: '1.5rem' }} />
                            </Hover>

                            <Text small style={{ padding: 0, margin: 0 }}>
                              Upload Content Image{' '}
                            </Text>
                          </StyledHover>
                        </div>
                      ) : (
                        <Text> {userImage.path} </Text>
                      )}
                    </div>
                  </div>
                ) : (
                  <div style={{ display: 'flex' }}>
                    <img
                      alt="default file placeholde"
                      style={{ height: '120px', width: '120px' }}
                      src={require('../../assets/images/image-icon.png')}
                    />

                    <div style={{ ...center }}>
                      <Text> {userImage.name} </Text>
                    </div>
                  </div>
                )}
                <br />
              </MediaGrid>
            )}
          </div>

          {/* <div
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
          >
            <div style={{ display: 'flex' }}>
              <Button>
                <div style={{ paddingRight: '0.5rem' }}>
                  <FiKey style={{ color: 'white', fontSize: '1.5rem' }} />
                </div>
                Change Password
              </Button>

              <DeleteButton style={{ margin: '0 2rem' }} onClick={() => deleteAccount()}>
                <div style={{ paddingRight: '0.5rem' }}>
                  <FiTrash2 style={{ color: 'white', fontSize: '1.5rem' }} />
                </div>
                Delete Account
              </DeleteButton>
            </div>
          </div> */}
        </div>
        <hr />
        <Title> Edit Account Details </Title>
        <FormsGrid>
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
        </FormsGrid>

        <hr />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button onClick={() => updateUserAccount()} style={{ width: '20rem' }}>
            Save Details
          </Button>
        </div>
      </StyledBody>
    </div>
  )
}

export default observer(UpdateProfile)
