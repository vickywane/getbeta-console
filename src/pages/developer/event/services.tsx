import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

import styled from 'styled-components'
import { FiX, FiKey } from 'react-icons/fi'
import { IoIosCode } from 'react-icons/io'

import { Head, Body, Hover, Text, Title, Section, Button } from '../../../styles/style'
import { EmptyData } from '../../../components/placeholders/'

const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justify};
`

const StyledButton = styled(Button)`
  width: 13rem;
`

const Api = (props): JSX.Element => {
  return (
    <Body>
      <br />

      <Flex direction="column">
        <Flex justify="space-between" direction="row">
          <Title small> Cloudinary Storage </Title>

          <Button onClick={() => alert(true)}> Connect Service</Button>
        </Flex>
        <Text style={{ padding: '0.5rem 1rem' }} small>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam quia ipsa sint debitis
          molestiae libero dicta Aperiam quia ipsa sint debitis molestiae libero dicta sit facere ab
          dolore.
        </Text>
      </Flex>
      <br />

      <Flex direction="column">
        <Flex justify="space-between" direction="row">
          <Title small> The OpenCollective </Title>

          <Button onClick={() => alert(true)}> Connect Service</Button>
        </Flex>
        <Text style={{ padding: '0.5rem 1rem' }} small>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam quia ipsa sint debitis
          molestiae libero dicta Aperiam quia ipsa sint debitis molestiae libero dicta sit facere ab
          dolore.
        </Text>
      </Flex>

      <br />

      <Flex direction="column">
        <Flex justify="space-between" direction="row">
          <Title small> Eventbrite </Title>

          <Button onClick={() => alert(true)}> Connect Service</Button>
        </Flex>

        <Text style={{ padding: '0.5rem 1rem' }} small>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam quia ipsa sint debitis
          molestiae libero dicta Aperiam quia ipsa sint debitis molestiae libero dicta sit facere ab
          dolore.
        </Text>
      </Flex>

      <br />

      <Flex direction="column">
        <Flex justify="space-between" direction="row">
          <Title small> Slack Technologies </Title>

          <Button onClick={() => alert(true)}> Connect Service</Button>
        </Flex>
        <Text style={{ padding: '0.5rem 1rem' }} small>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam quia ipsa sint debitis
          molestiae libero dicta Aperiam quia ipsa sint debitis molestiae libero dicta sit facere ab
          dolore.
        </Text>
      </Flex>

      <br />

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Text small> Trello Management </Text>

        <Button onClick={() => alert(true)}> Connect Service</Button>
      </div>
      <br />
    </Body>
  )
}

export default Api
