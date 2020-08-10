import React from 'react'
import styled from 'styled-components'

const Body = styled.div`
  height: 70px;
  width: 100%;
  dsplay: flex;
  jusfity-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid grey;
`

const Header = props => {
  return (
    <Body>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h4> Profile</h4>
        <h4> Profile</h4>
      </div>
    </Body>
  )
}

export default Header
