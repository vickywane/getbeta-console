import React from 'react'
import { Link, useLocation } from '@reach/router'

import { inject, observer } from 'mobx-react'
import { Item, Items } from './sidebar'
import { StyledMenu } from '../styles/mobile-sidebar-style'
import { Hover, Title, Text, Body, center } from '../styles/style'
import {
  FiUser,
  FiVideo,
  FiLogOut,
  FiBookOpen,
  FiGrid,
  FiSettings,
  FiBarChart
} from 'react-icons/fi'

const Routes = [
  {
    id: 1,
    name: 'Profile',
    routeName: 'home',
    icon: (
      <Hover>
        <FiUser />
      </Hover>
    ),
    to: '/home'
  },
  {
    id: 2,
    name: 'Packages',
    routeName: 'contents',
    icon: (
      <Hover>
        <FiBookOpen />
      </Hover>
    ),
    to: '/contents'
  },
  {
    id: 3,
    name: 'Bookings',
    routeName: 'booking',
    icon: (
      <Hover>
        <FiGrid />
      </Hover>
    ),
    to: '/booking'
  },
  {
    id: 4,
    name: 'Live Sessions',
    routeName: 'sessions',
    icon: (
      <Hover>
        <FiVideo />
      </Hover>
    ),
    to: '/sessions'
  },

  {
    id: 6,
    name: 'Preferences',
    routeName: 'preference',
    icon: (
      <Hover>
        <FiSettings />
      </Hover>
    ),
    to: '/preference'
  },
  {
    id: 7,
    name: 'Analytics',
    routeName: 'analytics',
    icon: (
      <Hover>
        <FiBarChart />
      </Hover>
    ),
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
                  <div style={{ ...center, marginRight: '.5rem' }}>
                    <Hover style={{ marginRight: '0.4rem' }}>{icon}</Hover>
                  </div>

                  <div style={{ ...center }}>
                    <Text
                      style={{
                        padding: 0,
                        margin: 0,
                        fontWeight: currentRoute === routeName && 500
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
          onClick={() => props.UserStore.setAuthState(false)}
          style={{
            width: '16rem',
            position: 'absolute',
            bottom: 5,
            marginBottom: 0,
            textAlign: 'center'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Hover>
              <FiLogOut style={{ fontSize: '1.3rem' }} />
            </Hover>

            <div style={{ ...center }}>
              <Text style={{ fontWeight: 'bold', padding: '0rem 0.5rem', margin: 0 }}>
                Log Out{' '}
              </Text>
            </div>
          </div>
        </Item>
      </Body>
    </StyledMenu>
  )
}

export default inject('UserStore')(observer(Notifications))
