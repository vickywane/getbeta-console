import React from 'react'
import Header from '../../components/headers/header'

import { Body, Title, Text } from '../../styles/style'

const Survey = props => {
  return (
    <div>
      <Header />

      <Body
        style={{
          height: window.innerHeight - 50,
          height: window.innerHeight - 80,
          padding: '2rem 2rem',
          background: 'rgba(233, 241, 251, 0.81)'
        }}
      >
        <Title> Survey and user preferences </Title>
      </Body>
    </div>
  )
}

export default Survey
