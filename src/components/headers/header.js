import React from 'react'
import styled from 'styled-components'
import { FiHome } from 'react-icons/fi'

const Body = styled.div`
  height: 70px;
  width: 100%;
  dsplay: flex;
  jusfity-content: center;
  align-items: center;
  padding: 0.5rem 2rem;
  border-bottom: 1px solid #c0c0c0;
`

const Image = styled.img`
  height: 45px;
  width: 45px;
  border-radius: 50%;
  border: 2px solid #0072ce;
  object-fit: cover;
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
  return (
    <Body>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Icon>
          <FiHome style={{ fontSize: '1.8rem' }} />
        </Icon>
        <Image src={require('../../assets/images/img.jpg')} />
      </div>
    </Body>
  )
}

export default Header
