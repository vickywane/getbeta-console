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
  FiLogOut,
  FiBookOpen,
  FiGrid,
  FiX,
  FiSettings,
  FiMenu,
  FiBarChart,
  FiChevronsLeft
} from 'react-icons/fi'

const Routes = [
  {
    id: 1,
    name: 'Profile',
    routeName: 'home',
    icon: <FiUser style={{ fontSize: '1.2rem' }} />,
    to: '/home'
  },
  {
    id: 2,
    name: 'Courses',
    routeName: 'courses',

    icon: <IoIosList style={{ fontSize: '1.2rem' }} />,
    to: '/courses'
  },
  {
    id: 3,
    name: 'Bookings',
    routeName: 'booking',
    icon: <FiGrid style={{ fontSize: '1.2rem' }} />,
    to: '/booking'
  },
  {
    id: 4,
    name: 'Live Sessions',
    routeName: 'sessions',
    icon: <FiVideo style={{ fontSize: '1.2rem' }} />,
    to: '/sessions'
  },
  {
    id: 2,
    name: 'Online Content',
    routeName: 'contents',
    icon: <FiBookOpen style={{ fontSize: '1.2rem' }} />,
    to: '/contents'
  },
  {
    id: 6,
    name: 'Preferences',
    routeName: 'preference',
    icon: <FiSettings style={{ fontSize: '1.2rem' }} />,
    to: '/preference'
  },
  {
    id: 7,
    name: 'Analytics',
    routeName: 'analytics',
    icon: <FiBarChart style={{ fontSize: '1.2rem' }} />,
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
                    <Hover style={{ marginRight: '0.2rem' }}>{icon}</Hover>
                  </div>

                  <div style={{ ...center }}>
                    <Text
                      style={{
                        paddingTop: '10px',
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

        <Item
          onClick={() => props.UserStore.logOut()}
          active
          style={{
            width: '100%',
            position: 'absolute',
            bottom: 0,
            textAlign: 'center'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Hover>
              <FiLogOut style={{ fontSize: '1.8rem' }} />
            </Hover>
            <div style={{ ...center }}>
              <Text style={{ fontWeight: 'bold', padding: '0rem 1rem' }}> Log Out </Text>
            </div>
          </div>
        </Item>
      </Body>
    </StyledMenu>
  )
}

export default inject('UserStore')(observer(Notifications))
