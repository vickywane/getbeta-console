import React, { useEffect, useState } from 'react'
import Header from '../../components/headers/header'
import moment from 'moment'

import { Body, Title, Text } from '../../styles/style'

const Survey = props => {
  useEffect(() => {
    const s = new Date()
      .getMinutes()
      .toString()
      .split('')

    // if (s[1] !== '0') {
    //   const m =  moment(new Date()).subtract('30', 'minutes')
    //   m.setMinutest()
    // }
  }, [])

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

        <Title> Moment is {moment().format('YYYY, mm:ss')} </Title>
      </Body>
    </div>
  )
}

export default Survey
