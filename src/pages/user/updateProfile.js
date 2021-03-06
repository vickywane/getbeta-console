import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { FiUploadCloud, FiX } from 'react-icons/fi'
import { observer } from 'mobx-react'
import { useDropzone } from 'react-dropzone'
import { toJS } from 'mobx'
import { CSSTransition } from 'react-transition-group'
import { Link } from '@reach/router'
import { Spinner } from 'react-bootstrap'

import Header from '../../components/headers/header'
import TestImage from '../../assets/images/img.jpg'
import {
  Text,
  Hover,
  Button,
  center,
  StyledHover,
  CreateCourseInputField as StyledInputBody,
  Body,
  Alert
} from '../../styles/style'
import useWindowWidth from '../../utils/hook_style'

const UserImage = styled.div`
  background-image: url(${props => props.image});
  object-fit: contain;
  background-position: center;
  background-size: cover;
  width: 185px;
  outline: none;
  height: 185px;
  border-radius: 7%;
  ${media.lessThan('huge')`
  width: 170px;
  height: 170px;
  `};
  ${media.lessThan('large')`
  width: 150px;
  height: 150px;
  border-radius: 3%;
  `};
  ${media.lessThan('small')`
      width: 125px;
      height: 125px;
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
  height: calc(100vh - 120px);
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

const UpdateProfile = props => {
  const Width = useWindowWidth()
  const {
    deleteAccount,
    updateUser,
    isLoading,
    userDetail,
    getUserDetail,
    isUpdated
  } = props.UserStore

  const userData = toJS(userDetail)
  const [currentView, setCurrentView] = useState('update-profile')
  const { fullname, email, bio } = userData

  const [isUploading, setUploading] = useState(false)

  const [completedProfile, setCompleteProfile] = useState(false)

  const [userName, setUserName] = useState(fullname)
  const [userEmail, setUserEmail] = useState(email)
  const [Bio, setBio] = useState(bio)
  const [Number, setNumber] = useState(userData.cell_no)
  const [Occupation, setOccupation] = useState(userData.occupation)
  const [Education, setEduction] = useState(userData.hle)
  const [userImage, setUserImage] = useState(null)

  const updateUserAccount = () => {
    updateUser(userName, userEmail, Bio, Number, Occupation, Education, userImage)
  }

  useEffect(() => {
    getUserDetail()
  }, [])

  useEffect(() => {
    if (!isLoading) {
      setUserName(fullname)
      setUserEmail(email)
    }
  }, [isLoading])

  const onDrop = useCallback(([file]) => {
    setUserImage(file)
  }, [])

  const { getRootProps, isDragActive, isDragAccept, getInputProps, isDragReject } = useDropzone({
    onDrop,
    accept: 'image/jpeg , image/jpg, image/png'
  })

  return (
    <div style={{ height: '100%' }}>
      <Header goBack={true} />

      {isUpdated && (
        <Alert variant="success">
          <div style={{ ...center }}>
            <Text align="center">Your profile details has been updated.</Text>
          </div>
        </Alert>
      )}

      <div>
        {!userData.hasAnswered && (
          <Alert variant="success">
            <div style={{ ...center }}>
              <Text align="center">Few questions more to confirm your account.</Text>
            </div>

            <Link
              to="/user-survey"
              style={{
                ...center,
                margin: '0 .5rem'
              }}
            >
              <Text> Verify Now </Text>
            </Link>
          </Alert>
        )}
        <StyledBody>
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
                      <UserImage image={!userData.img ? TestImage : userData.img}>
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
          </div>
          <hr />
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
                type="tel"
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
              {isLoading ? 'Saving ' : 'Save'} Details
              {isLoading && (
                <div style={{ paddingLeft: '.7rem' }}>
                  <Spinner size="sm" animation="border" role="status" />
                </div>
              )}
            </Button>
          </div>
        </StyledBody>
      </div>
    </div>
  )
}

export default observer(UpdateProfile)
