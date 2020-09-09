import React, { useState } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

import TestImage from '../../assets/images/img.jpg'
import { Text, Title, Input, InputBody, Hover, Button } from '../../styles/style'
import { FiTrash2, FiCamera } from 'react-icons/fi'

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
  ${media.lessThan('large')`
    display : flex;
    align-items : center;
    flex-direction : column;
  `};
`

const UserImage = styled.div`
  background-image: url(${props => props.image});
  object-fit: contain;
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
  ${media.lessThan('huge')`
  width: 250px;
  height: 250px;
  border-radius : 50%;
  `};
  ${media.lessThan('large')`
  width: 200px;
  height: 200px;
  border-radius : 50%;
  `};
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

const StyledInputBody = styled(InputBody)`
  ${media.lessThan('huge')`
      textarea , input {
        width : 25rem
      }
    `};
`

const UpdateProfile = props => {
  const { UserStore } = props
  const [isUploading, setUploading] = useState(false)

  return (
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
              <UserImage image={TestImage}>
                <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '10rem' }}>
                  <Hover style={{ color: 'white' }}>
                    <FiCamera style={{ fontSize: '1.8rem' }} />
                  </Hover>
                </div>
              </UserImage>
              <br />
            </div>
          )}
        </div>

        <div style={{ ...center }}>
          <div>
            <StyledInputBody>
              <label> Username </label>
              <input placeholder="Username" />
            </StyledInputBody>
            <StyledInputBody>
              <label> Email Address </label>
              <input placeholder="Username" />
            </StyledInputBody>
            <StyledInputBody>
              <label> Brief Biography </label>
              <textarea placeholder="A short description about me " />
            </StyledInputBody>
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
  )
}

export default UpdateProfile
