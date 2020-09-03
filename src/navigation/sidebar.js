import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link, useLocation } from '@reach/router'
import { FiUser, FiVideo, FiBookOpen, FiGrid, FiSettings, FiChevronsLeft } from 'react-icons/fi'
import { IoIosList } from 'react-icons/io'
import useWindowWith from '../utils/hook_style'

import { Hover } from '../styles/style'

const Items = styled.ul`
  margin: 0;
  padding : 0;
  width : 100%;
  flex : 1;
  display : flex :
  list-style: none;
  a {
      color : #fff;
      text-decoration : none;
  }
`

const Item = styled.li`
  padding: 0.5rem 1.5rem;
  margin: 1.5rem 0;
  display: flex;
  transition: all 300ms;
  list-style: none;
  background : ${props => props.active && '#fff'}
  color: ${props => props.active && '#0072ce'};
  p {
    font-size: 1rem;
  }
  &: hover {
    color: #0072ce;
    cursor: pointer;
    background: #fff;
  }
`

const Body = styled.div`
  padding: 0rem 0rem;
  color: #fff;
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

const SidebarBody = styled(Body)`
  background: #0072ce;
  width: ${props => (props.isClosed ? '6rem' : '20rem')};
`

const center = {
  display: 'flex',
  justifyContent: 'center',
  alignItemss: 'center'
}

const Sidebar = props => {
  const location = useLocation()
  const Width = useWindowWith()

  const [isClosed, setClosed] = useState(false)

  const currentRoute = location.pathname.split('/')[1]

  useEffect(() => {
    if (Width <= 1200) {
      setClosed(true)
    } else if (Width >= 1300) {
      setClosed(false)
    }
  }, [Width])

  const Routes = [
    {
      id: 1,
      name: 'Profile',
      routeName: 'home',
      icon: <FiUser style={{ fontSize: !isClosed ? '1.5rem' : '1.7rem' }} />,
      to: '/home'
    },
    {
      id: 2,
      name: 'Courses',
      routeName: 'courses',

      icon: <IoIosList style={{ fontSize: !isClosed ? '1.5rem' : '1.7rem' }} />,
      to: '/courses'
    },
    {
      id: 3,
      name: 'Bookings',
      routeName: 'booking',
      icon: <FiGrid style={{ fontSize: !isClosed ? '1.5rem' : '1.7rem' }} />,
      to: '/booking'
    },
    {
      id: 4,
      name: 'Live Sessions',
      routeName: 'sessions',
      icon: <FiVideo style={{ fontSize: !isClosed ? '1.5rem' : '1.7rem' }} />,
      to: '/sessions'
    },
    {
      id: 5,
      name: 'Online Content',
      routeName: 'contents',
      icon: <FiBookOpen style={{ fontSize: !isClosed ? '1.5rem' : '1.7rem' }} />,
      to: '/contents'
    },
    {
      id: 6,
      name: 'Preferences',
      routeName: 'preference',
      icon: <FiSettings style={{ fontSize: !isClosed ? '1.5rem' : '1.7rem' }} />,
      to: '/preference'
    }
  ]

  return (
    <SidebarBody
      isClosed={isClosed}
      style={{
        height: window.innerHeight
      }}
    >
      <div
        style={{
          padding: '0.8rem 0.5rem',
          display: 'flex',
          backgroundColor: '#16204f',
          boxShadow: '0 2px 3px grey',
          justifyContent: 'space-between'
        }}
      >
        {!isClosed && (
          <div style={{ ...center }}>
            <h4 style={{ textAlign: 'center' }}>
              <a
                target="_blank"
                style={{ color: '#fff', textDecoration: 'none' }}
                href="https://getbeta.netlify.com"
              >
                Getbeta
              </a>
            </h4>
          </div>
        )}
        <Icon
          style={{ transition: 'all 350ms', transform: isClosed && 'rotate(180deg)' }}
          onClick={() => setClosed(!isClosed)}
        >
          <FiChevronsLeft style={{ fontSize: '1.8rem' }} />
        </Icon>
      </div>

      <Items>
        {Routes.map(({ routeName, id, name, icon, to }) => {
          return (
            <Link key={id} to={`${to}/`}>
              <Item active={currentRoute === routeName}>
                <div style={{ ...center }}>
                  <Hover style={{ marginRight: '0.7rem' }}>{icon}</Hover>
                </div>

                {!isClosed && (
                  <div style={{ ...center }}>
                    <p style={{ paddingTop: '2px' }}> {name} </p>{' '}
                  </div>
                )}
              </Item>
            </Link>
          )
        })}
      </Items>
    </SidebarBody>
  )
}

export default Sidebar
