import * as React from 'react'
import Flex from 'styled-flex-component'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import styled from 'styled-components'
import media from 'styled-media-query'

import ActionBar from './userActionBar'
import TestImg from '../../assets/images/test.png'
import useWindowWidth from '../../hook_style'
import { Detail, Contain, Text, Hover, BigTitle } from '../../styles/style'
import ChangeProfile from './editProfile'
import '../../App.css'
import { FiChevronUp } from 'react-icons/all'

const Image = styled.img`
  border: 3px solid #401364;
  box-shadow: 0px 2px 4px #401364;
  height: 150px;
  border-radius: 50%;
  width: 150px;
  object-fit: center;
  ${media.lessThan('huge')`
      height: 140px;
      width: 14s0px;
    `};
  ${media.lessThan('large')`
      height: 130px;
      width: 130px;
    `};
  ${media.lessThan('medium')`
      height: 110px;
      width: 110px;
    `};
`

const Container = styled(Contain)`
  height: ${props => (props.width >= 700 ? 'auto' : '42vh')};
`

const Profile = (props): JSX.Element => {
  const { name, email, attending, bucketName, img_uri } = props.User.user
  const { editProfile, showEditProfile, closeEditProfile } = props.ModalStore
  const { LogOut } = props.AuthStore
  const { showProfilePane, toggleProfilePane } = props.ConsoleStore
  const AttendNo = attending === null ? 0 : attending.length
  const Hooks = useWindowWidth()

  return (
    <Container width={Hooks} img={TestImg} bottomPadding bottomShadow>
      {showProfilePane ? (
        <div>
          <br />
          <Flex justifyBetween>
            <Flex>
              <Hover
                onClick={() => {
                  showEditProfile()
                }}
              >
                <Image
                  alt="profile"
                  src={img_uri === null ? require('../../assets/images/avatar.png') : img_uri}
                />
              </Hover>

              <ChangeProfile
                bucketName={bucketName}
                name={name}
                email={email}
                show={editProfile}
                close={closeEditProfile}
              />

              <Detail style={{ padding: '0rem 1rem' }}>
                <br />
                <BigTitle bold center>
                  {name}
                </BigTitle>
                <Text center> {email} </Text>
              </Detail>
            </Flex>

            <ActionBar logout={LogOut} screen="profile" />
          </Flex>

          <Flex justifyBetween>
            <Flex>
              <div style={{ padding: '0rem 1rem' }}>
                <Link to="/" style={{ textDecoration: 'none' }}>
                  <Text> Watched Events ( 0 ) </Text>
                </Link>
              </div>

              <div style={{ padding: '0rem 1rem' }}>
                <Link to="/" style={{ textDecoration: 'none' }}>
                  <Text> Attending ( {AttendNo} ) </Text>
                </Link>
              </div>
            </Flex>

            <Hover onClick={() => toggleProfilePane()}>
              <FiChevronUp style={{ fontSize: '3rem' }} />
            </Hover>
          </Flex>
        </div>
      ) : (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex' }}>
            <BigTitle bold small>
              {' '}
              {name}{' '}
            </BigTitle>
          </div>

          <Hover style={{ transform: 'rotate(180deg)' }} onClick={() => toggleProfilePane()}>
            <FiChevronUp style={{ fontSize: '3rem' }} />
          </Hover>
        </div>
      )}
    </Container>
  )
}

export default inject('ConsoleStore', 'ModalStore', 'AuthStore')(observer(Profile))
