import React from 'react'
import styled from 'styled-components'
import { FiHome, FiSearch, FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { Link, navigate } from '@reach/router'

import { SmallUserImage, Title, Hover, StyledHover, center } from '../../styles/style'

const Body = styled.div`
  height: 70px;
  width: 100%;
  dsplay: flex;
  jusfity-content: center;
  align-items: center;
  padding: 0.5rem 2rem;
  box-shadow: 0 2px 3px grey;
`

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 350ms;
  border-radius: 5px;
  color: #0072ce;
  padding: 0.5rem 0.5rem;
  &: hover {
    cursor: pointer;
    color: #fff;
    background: #0072ce;
  }
`

const Header = props => {
  const { screen, goBack, backgroundColor } = props
  return (
    <Body
      style={{
        background: backgroundColor
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {goBack ? (
          <div style={{ ...center }}>
            <StyledHover style={{ padding: '0.4rem 0.4rem' }} onClick={() => navigate(-1)}>
              <FiArrowLeft style={{ fontSize: '1.8rem' }} />
            </StyledHover>
          </div>
        ) : (
          <Link to="/">
            <Icon>
              <FiHome style={{ fontSize: '1.8rem' }} />
            </Icon>
          </Link>
        )}

        {screen && (
          <div style={{ ...center }}>
            <Title color="#0072ce"> {screen} </Title>
          </div>
        )}

        <Link to="/" style={{ textDecoration: 'none' }}>
          <SmallUserImage small src={require('../../assets/images/img.jpg')} />
        </Link>
      </div>
    </Body>
  )
}

export default Header
