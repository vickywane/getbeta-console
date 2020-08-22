import React, { useState } from 'react'
import styled from 'styled-components'
import { Hover } from '../styles/style'
import { Link } from '@reach/router'
import { FiUser, FiVideo, FiBookOpen, FiGrid, FiSettings, FiChevronsLeft } from 'react-icons/fi'
import { IoIosList } from 'react-icons/io'

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
  margin: 1rem 0;
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
  padding: 1rem 0rem;
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
  const [ActiveRoute, setActiveRoute] = useState('Profile')
  const [isClosed, setClosed] = useState(false)

  const Routes = [
    {
      id: 1,
      name: 'Profile',
      icon: <FiUser style={{ fontSize: !isClosed ? '1.5rem' : '1.7rem' }} />,
      to: '/home'
    },
    {
      id: 2,
      name: 'Courses',
      icon: <IoIosList style={{ fontSize: !isClosed ? '1.5rem' : '1.7rem' }} />,
      to: '/courses'
    },
    {
      id: 3,
      name: 'Bookings',
      icon: <FiGrid style={{ fontSize: !isClosed ? '1.5rem' : '1.7rem' }} />,
      to: '/booking'
    },
    {
      id: 4,
      name: 'Live Sessions',
      icon: <FiVideo style={{ fontSize: !isClosed ? '1.5rem' : '1.7rem' }} />,
      to: '/sessions'
    },
    {
      id: 5,
      name: 'Online Content',
      icon: <FiBookOpen style={{ fontSize: !isClosed ? '1.5rem' : '1.7rem' }} />,
      to: '/contents'
    },
    {
      id: 6,
      name: 'Preferences',
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
      <div style={{ padding: '0 0.5rem', display: 'flex', justifyContent: 'space-between' }}>
        {!isClosed && (
          <div style={{ ...center }}>
            <h3 style={{ textAlign: 'center' }}>
              <a
                target="_blank"
                style={{ color: '#fff', textDecoration: 'none' }}
                href="https://getbeta.netlify.com"
              >
                Getbeta
              </a>
            </h3>
          </div>
        )}
        <Icon
          style={{ transition: 'all 350ms', transform: isClosed && 'rotate(180deg)' }}
          onClick={() => setClosed(!isClosed)}
        >
          <FiChevronsLeft style={{ fontSize: '1.8rem' }} />
        </Icon>
      </div>
      <hr style={{ background: '#fff' }} />
      <Items>
        {Routes.map(({ id, name, icon, to }) => {
          return (
            <Link key={id} onClick={() => setActiveRoute(name)} to={`${to}/`}>
              <Item active={ActiveRoute === name}>
                <Hover style={{ marginRight: '0.7rem' }}>{icon}</Hover>

                {!isClosed && <p> {name} </p>}
              </Item>
            </Link>
          )
        })}
      </Items>
    </SidebarBody>
  )
}

export default Sidebar
