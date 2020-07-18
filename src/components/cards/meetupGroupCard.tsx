import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GoLocation } from 'react-icons/go'
import { FiBookmark, FiCalendar, FiLock, FiMoreVertical, FiUser } from 'react-icons/fi'
import { IoIosPeople } from 'react-icons/io'

import styled from 'styled-components'
import { inject, observer } from 'mobx-react'

import { Card, Text, Button, Hover, Title } from '../../styles/style'
import CardImg from '../../assets/images/3.jpg'

//Todo : Create a proper ts interface here
const Contain = styled.div`
  background-image: url(${props => props.img});
  width: 25rem;
  height: auto;
`

const List = styled.li`
  display: flex;
  padding: 1rem 1rem;
  margin: 1.5rem 0rem;
  box-shadow: 0px 1px 2px grey;
`

const MeetupGroupCard = props => {
  const {
    location,
    name,
    id,
    summary,
    role,
    created,
    venue,
    volunteerScreen,
    approvalStatus,
    type,
    showAprrovalStatus,
    volunteerOption,
    event
  } = props
  // const { setEventId } = props.ModalStore
  const [optionVisibility, setOptionVisibility] = useState(false)

  return (
    <Card style={{ padding: '0px' }}>
      <Contain style={{ backgroundSize: 'cover', height: '17vh', width: '100%' }} img={CardImg}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div
            style={{
              height: '40px',
              width: '9rem',
              background: type === 'Conference' ? '#401364' : 'blue',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '0px 0px 30px 0px',
              color: '#fff'
            }}
          >
            <Hover style={{ margin: '0rem 0.5rem' }}>
              <GoLocation style={{ fontSize: '1.3rem' }} />
            </Hover>
            <Text style={{ paddingTop: '17px' }}> {location} </Text>
          </div>

          <div style={{ padding: '1rem 1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p style={{ color: 'white' }}> . </p>

              <Hover
                style={{ padding: '0rem 1rem' }}
                onClick={() => setOptionVisibility(!optionVisibility)}
              >
                <FiMoreVertical style={{ fontSize: '1.8rem', textAlign: 'right' }} />
              </Hover>
            </div>
          </div>
        </div>
      </Contain>

      <div style={{ padding: '1rem 0.7rem' }}>
        <Link to={`/meetup/${id}`}>
          <Title
            center
            small
            style={{
              color: '#0e2f5a',
              cursor: 'pointer'
            }}
            key={id}
          >
            {name}
          </Title>
        </Link>
        <img
          alt="group"
          style={{
            height: '85px',
            width: '85px',
            margin: '0.5rem 1rem'
          }}
          src={require('../../assets/images/developer.png')}
        />

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <img
              alt="group"
              style={{
                height: '50px',
                width: '50px',
                margin: '0rem 0.5rem'
              }}
              src={require('../../assets/images/developer.png')}
            />
          </div>

          <div style={{ display: 'flex' }}>
            <Text small> 2000 </Text>

            <Hover style={{ margin: '0rem 0.7rem' }}>
              <IoIosPeople style={{ fontSize: '1.5rem' }} />{' '}
            </Hover>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default inject('ModalStore')(observer(MeetupGroupCard))
