import React from 'react'
import styled from 'styled-components'
import { FiHome } from 'react-icons/fi'

import { SmallUserImage, Title } from '../../styles/style'

const Body = styled.div`
  height: 70px;
  width: 100%;
  dsplay: flex;
  jusfity-content: center;
  align-items: center;
  padding: 0.5rem 2rem;
  border-bottom: 1px solid #c0c0c0;
`

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 350ms;
  border-radius: 5px;
  padding: 0.5rem 0.5rem;
  &: hover {
    cursor: pointer;
    color: #fff;
    background: #0072ce;
  }
`

const Header = props => {
  const { screen } = props
  return (
    <Body>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Icon>
          <FiHome style={{ fontSize: '1.8rem' }} />
        </Icon>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Title color="#0072ce"> {screen} </Title>
        </div>

        <SmallUserImage small src={require('../../assets/images/img.jpg')} />
      </div>
    </Body>
  )
}

export default Header
