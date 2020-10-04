import React, { useState } from 'react'
import styled from 'styled-components'
import { FiHome, FiBell, FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { Link, navigate } from '@reach/router'
import useWindowWidth from '../../utils/hook_style'
import MobileSidebar from '../../navigation/mobile-sidebar'
import Notification from '../../navigation/mobile-sidebar-contents'
import media from 'styled-media-query'

import { SmallUserImage, Title, Text, Hover, StyledHover, center } from '../../styles/style'

const Body = styled.div`
  height: 55px;
  width: 100%;
  dsplay: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 2rem;
  box-shadow: 0 2px 3px grey;
  ${media.lessThan('medium')`
    padding: 0.5rem 1rem;
    height: 60px;
  `};
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

const MenuIconBody = styled.div`
  display: none;
  ${media.lessThan('medium')`
    display : flex;
  `};
`

const LargeIconSidebar = styled.div`
  display: flex;
  ${media.lessThan('medium')`
  display : none;
`};
`

const ScreenName = styled.div`
  ${media.lessThan('medium')`
    display : none;
  `}
`

const Header = props => {
  const Width = useWindowWidth()
  const { screen, goBack, backgroundColor, path } = props
  const [openMobileSidebar, setMobileSidebar] = useState(false)

  return (
    <Body
      style={{
        background: backgroundColor
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <LargeIconSidebar>
          {goBack ? (
            <div style={{ ...center }}>
              <StyledHover style={{ padding: '0.4rem 0.4rem' }} onClick={() => navigate(-1)}>
                <FiArrowLeft style={{ fontSize: '1.6rem' }} />
              </StyledHover>
            </div>
          ) : (
            <Link to="/">
              <Icon>
                <FiHome style={{ fontSize: '1.6rem' }} />
              </Icon>
            </Link>
          )}
        </LargeIconSidebar>

        <MenuIconBody>
          <MobileSidebar
            type="Burger"
            open={openMobileSidebar}
            setOpen={setMobileSidebar}
            aria-controls={'main-menu'}
          />
          <Notification open={openMobileSidebar} setOpen={setMobileSidebar} id={'main-menu'} />
        </MenuIconBody>

        <ScreenName>
          {screen && (
            <div style={{ ...center }}>
              <Text color="#0072ce" style={{ marginTop: '10px' }}>
                {' '}
                {screen}{' '}
              </Text>
            </div>
          )}
        </ScreenName>

        <Link to="/" style={{ textDecoration: 'none' }}>
          {path === 'home' ? (
            <div style={{ paddingTop: '5px' }}>
              <Link to="/notifications">
                <FiBell style={{ fontSize: '1.4rem' }} />
              </Link>
            </div>
          ) : (
            <SmallUserImage small src={require('../../assets/images/img.jpg')} />
          )}
        </Link>
      </div>
    </Body>
  )
}

export default Header
