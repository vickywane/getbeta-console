import React from 'react'
import { Link, useLocation } from '@reach/router'

import { inject, observer } from 'mobx-react'
import { IoIosList } from 'react-icons/io'
import { Item, Items } from './sidebar'
import { StyledMenu, Hover } from '../styles/mobile-sidebar-style'
import { Title, Text, Body, center } from '../styles/style'
import {
  FiUser,
  FiVideo,
  FiBookOpen,
  FiGrid,
  FiSettings,
  FiBarChart,
  FiChevronsLeft
} from 'react-icons/fi'

const Routes = [
  {
    id: 1,
    name: 'Profile',
    routeName: 'home',
    icon: <FiUser style={{ fontSize: '1.4rem' }} />,
    to: '/home'
  },
  {
    id: 2,
    name: 'Courses',
    routeName: 'courses',

    icon: <IoIosList style={{ fontSize: '1.4rem' }} />,
    to: '/courses'
  },
  {
    id: 3,
    name: 'Bookings',
    routeName: 'booking',
    icon: <FiGrid style={{ fontSize: '1.4rem' }} />,
    to: '/booking'
  },
  {
    id: 4,
    name: 'Live Sessions',
    routeName: 'sessions',
    icon: <FiVideo style={{ fontSize: '1.4rem' }} />,
    to: '/sessions'
  },
  {
    id: 2,
    name: 'Online Content',
    routeName: 'contents',
    icon: <FiBookOpen style={{ fontSize: '1.4rem' }} />,
    to: '/contents'
  },
  {
    id: 6,
    name: 'Preferences',
    routeName: 'preference',
    icon: <FiSettings style={{ fontSize: '1.4rem' }} />,
    to: '/preference'
  },
  {
    id: 7,
    name: 'Analytics',
    routeName: 'analytics',
    icon: <FiBarChart style={{ fontSize: '1.4rem' }} />,
    to: '/analytics'
  }
]

const Notifications = ({ open, ...props }) => {
  // const isHidden = open ? true : false
  const isHidden = true
  const location = useLocation()
  const currentRoute = location.pathname.split('/')[1]

  const tabIndex = isHidden ? 0 : -1

  return (
    <StyledMenu
      style={{ height: window.innerHeight - 50 }}
      open={open}
      aria-hidden={!isHidden}
      {...props}
    >
      <Body>
        <Items>
          {Routes.map(({ routeName, id, name, icon, to }) => {
            return (
              <Link key={id} to={`${to}/`}>
                <Item active={currentRoute === routeName}>
                  <div style={{ ...center, marginRight: '1rem' }}>
                    <Hover style={{ marginRight: '0.4rem' }}>{icon}</Hover>
                  </div>

                  <div style={{ ...center }}>
                    <Text
                      style={{
                        padding: 0,
                        margin: 0,
                        fontWeight: currentRoute === routeName && 600
                      }}
                    >
                      {name}
                    </Text>
                  </div>
                </Item>
              </Link>
            )
          })}
        </Items>
      </Body>
    </StyledMenu>
  )
}

export default inject('UserStore')(observer(Notifications))
