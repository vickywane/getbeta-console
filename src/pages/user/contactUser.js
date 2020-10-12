import React, { useState, useEffect } from 'react'
import { observer } from 'mobx-react'
import { FiTwitter, FiInstagram, FiMail } from 'react-icons/fi'
import styled from 'styled-components'
import { toJS } from 'mobx'
import moment from 'moment'

import Contents from '../user/mycontents'
import Loading from '../../components/loading'
import { center, Hover, Button, Text, Title } from '../../styles/style'
import { Image, Body } from './profile'
import Header from '../../components/headers/header'

const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justify};
`

const ContactUser = props => {
  const { id } = props.location.state
  const { getUser, isLoading, user } = props.UserStore

  useEffect(() => {
    getUser(id)
  }, [])

  const userData = toJS(user)
  const { fullname, email, createdAt } = userData
  return (
    <div>
      <Header goBack={true} />

      <div style={{ height: window.innerHeight - 50 }}>
        {isLoading ? (
          <Loading />
        ) : (
          <div>
            <Body>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Image alt="user" src={require('../../assets/images/img.jpg')} />
              </div>

              <div>
                <Title align="center"> {fullname} </Title>
                <Text align="center"> {email} </Text>
                <Text align="center"> Joined : {moment(createdAt).format('DD, MMMM, YYYY')} </Text>
              </div>

              <Flex direction="row" justify="center">
                <Hover style={{ margin: '0 1rem' }}>
                  <FiTwitter style={{ fontSize: '1.5rem' }} />{' '}
                </Hover>

                <Hover style={{ margin: '0 1rem' }}>
                  <FiInstagram style={{ fontSize: '1.5rem' }} />{' '}
                </Hover>

                <Hover style={{ margin: '0 1rem' }}>
                  <FiMail style={{ fontSize: '1.5rem' }} />{' '}
                </Hover>
              </Flex>
              <br />

              <div style={{ ...center }}>
                <Button style={{ width: '20rem' }}>Book Now</Button>
              </div>
              <br />
            </Body>

            <Body style={{ backgroundColor: 'white', width: '100%', background: '#fff' }}>
              <br />
              <Contents showAllPublicContent userId={id} />
            </Body>
          </div>
        )}
      </div>
    </div>
  )
}

export default observer(ContactUser)