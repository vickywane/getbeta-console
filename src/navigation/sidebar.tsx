import React, { useState } from 'react'
import styled from 'styled-components'
import { Hover } from '../styles/style'
import { Link } from '@reach/router'
import { FiUser } from 'react-icons/fi'

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

const Sidebar = props => {
  const [ActiveRoute, setActiveRoute] = useState('Profile')

  const Routes = [
    {
      id: 1,
      name: 'Profile',
      icon: <FiUser style={{ fontSize: '1.7rem' }} />,
      to: 'home/'
    },
    {
      id: 2,
      name: 'Courses',
      icon: <FiUser style={{ fontSize: '1.7rem' }} />,
      to: 'courses/'
    },
    {
      id: 3,
      name: 'Bookings',
      icon: <FiUser style={{ fontSize: '1.7rem' }} />,
      to: 'booking/'
    },
    {
      id: 4,
      name: 'Live Sessions',
      icon: <FiUser style={{ fontSize: '1.7rem' }} />,
      to: 'sessions/'
    },
    {
      id: 5,
      name: 'Online Content',
      icon: <FiUser style={{ fontSize: '1.7rem' }} />,
      to: 'coursess/'
    },
    {
      id: 6,
      name: 'Preferences',
      icon: <FiUser style={{ fontSize: '1.7rem' }} />,
      to: 'preference/'
    }
  ]

  return (
    <Body>
      <h3 style={{ textAlign: 'center' }}> Getbeta </h3>
      <br />
      <Items>
        {Routes.map(({ id, name, icon, to }) => {
          return (
            <Link key={id} onClick={() => setActiveRoute(name)} to={`${to}/`}>
              <Item active={ActiveRoute === name}>
                <Hover style={{ marginRight: '0.7rem' }}>{icon}</Hover>

                <p> {name} </p>
              </Item>
            </Link>
          )
        })}
      </Items>
    </Body>
  )
}

export default Sidebar
