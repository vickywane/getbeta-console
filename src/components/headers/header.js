import React from 'react'
import styled from 'styled-components'

const Body = styled.div`
  height: 70px;
  width: 100%;
  dsplay: flex;
  jusfity-content: center;
  align-items: center;
  padding: 0.5rem 2rem;
  border-bottom: 1px solid grey;
`

const Image = styled.img`
  height: 45px;
  width: 45px;
  border-radius: 50%;
  border: 2px solid #0072ce;
  object-fit: cover;
`

const Header = props => {
  return (
    <Body>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h4> Profile</h4>
        <Image src={require('../../assets/images/img.jpg')} />
      </div>
    </Body>
  )
}

export default Header
