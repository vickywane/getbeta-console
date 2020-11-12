import React from 'react'
import { Title, Text, Body, Button } from '../../../styles/style'

const SubscribeModal = props => (
  <Body>
    <Title align="center"> You need to subscribe to view this content </Title>
    <br />

    <div style={{display : "flex", justifyContent : "center"}} >
    <Button> Subscribe </Button>
    </div>
  </Body>
)

export default SubscribeModal
