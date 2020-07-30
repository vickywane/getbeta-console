import React from 'react'
import { Body, Hover, Text, Title, Button } from '../../styles/style'
import { IoIosMail, IoMdNotifications } from 'react-icons/io'
import { FiX } from 'react-icons/fi'
import styled from 'styled-components'

const CustomButton = styled(Button)`
  display: flex;
  margin-top: 5px;
`

const Bar = styled.div`
  background: #fbfbfb;
  display: flex;
  justify-content: center;
  align-items: ${props => !props.auth && 'center'};
  border-right: 1px solid #c0c0c0;
`

const NotificationsBox = styled.div`
  height : 52vh
  display : flex;
  flex-direction : column;
  flex : 1
  border : 1px solid   #c0c0c0;
  width : auto
  margin : 1.5rem 0rem;
  padding : 0.6rem 0.4rem;
  border-radius : 5px
`

const Cards = styled.ul`
  margin : 0;
  padding : 0.5rem 0.5rem;
  list-style : none;
  li {
    height : 56px;
    display : flex
    flex-direction : row;
    justify-content : center;
    align-items : center;
    padding : 0.5rem 0.5rem;
    flex : 1;
    width : auto;
    margin : 1rem 0.5rem;
    background : #fff;
    border-radius : 2px
    border: 1px solid #ff;
    box-shadow : 0px 1px 2px grey;
  }
`

const n = [
  {
    id: 1,
    msg: 'You Meetup event has been created'
  },
  {
    id: 1,
    msg: 'You Meetup event has been created'
  },
  {
    id: 1,
    msg: 'You Meetup event has been created'
  },
  {
    id: 1,
    msg: 'You Meetup event has been created'
  },
  {
    id: 1,
    msg: 'You Meetup event has been created'
  },
  {
    id: 1,
    msg: 'You Meetup event has been created'
  }
]

const ProfileSidebar = (props): JSX.Element => {
  const { name, email, id, events } = props.data
  const { auth } = props

  const userId = localStorage.getItem('user_id')
  const isUser = userId === id

  return (
    <Bar auth={auth}>
      <Body>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '1.5rem 0rem' }}>
          <img
            alt={'user'}
            src={require('../../assets/images/avatar.png')}
            style={{
              borderRadius: '50%',
              height: '120px',
              width: '120px',
              border: '1px solid #401364'
            }}
          />
        </div>
        <Title center small>
          {name}
        </Title>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Text style={{ margin: '0rem 1.5rem' }}>
            {' '}
            {events === null ? 0 : events.length} Organized Events{' '}
          </Text>
          <Text style={{ margin: '0rem 1.5rem' }}> 0 Attended Events </Text>
        </div>

        <NotificationsBox style={{ overflow: 'auto' }}>
          <div style={{ display: 'flex', borderBottom: '1px solid #c0c0c0' }}>
            <Hover style={{ margin: '0rem 0.5rem' }}>
              <IoMdNotifications style={{ fontSize: '1.4rem' }} />
            </Hover>
            <Text> Notifications {n.length} </Text>
          </div>

          <Cards>
            {n.map(({ id, msg }) => {
              return (
                <li key={id}>
                  {msg}

                  <Hover style={{ margin: '0rem 0.7rem' }}>
                    <FiX style={{ fontSize: '1.5rem' }} />
                  </Hover>
                </li>
              )
            })}
          </Cards>
        </NotificationsBox>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <CustomButton>
            <div style={{ display: 'flex', margin: '0rem 1rem' }}>
              <IoIosMail style={{ fontSize: '1.7rem' }} />{' '}
            </div>
            Send an Event Invitation
          </CustomButton>
        </div>
      </Body>
    </Bar>
  )
}

export default ProfileSidebar
