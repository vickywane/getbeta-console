import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FiLogOut, FiImage, FiX, FiUser } from 'react-icons/fi'
import {
  IoIosPaper,
  IoIosAlarm,
  IoIosLaptop,
  IoIosDesktop,
  IoIosExpand,
  IoIosPhonePortrait,
  IoIosTabletPortrait,
  IoMdTabletLandscape,
  IoMdColorPalette
} from 'react-icons/io'

import useWindowWidth from '../../hook_style'
import { Hover, Body as Bod } from '../../styles/style'

const Body = styled(Bod)`
	padding: 0.5em 1rem;
	display: flex;
  bottom: 0;
  width  : 20rem
    border-radius : 10px 10px 0 0;
    height  : 5vh;
	background: #401364;
	flex-direction: row;
	align-items: center;
	position: ${props => props.absolute};
	transition: all 300ms;
	opacity: ${props => (props.visible ? '1' : '0')};
`

const List = styled.li`
     padding : 0.5rem 0rem
		margin: 0.7rem 1rem;
		list-style: none;
		color:  ${props => (props.active ? 'red' : '#fff')};
		&: hover {
		color:  red;
		}
`

const EventPreviewBar = (props): JSX.Element => {
  const { screen, logout } = props
  const [BarVisibility, setBarVisibility] = useState(false)

  const Width = useWindowWidth()

  return (
    <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center' }}>
      {Width >= 700 && (
        <Body
          onMouseEnter={() => setBarVisibility(true)}
          onMouseLeave={() => {
            setTimeout(() => {
              setBarVisibility(!BarVisibility)
            }, 1000)
          }}
          visible={Width >= 1000 ? true : BarVisibility}
          position={Width >= 1000 ? null : 'absolute'}
        >
          <List>
            <Hover>
              <IoIosExpand style={{ fontSize: '1.6em' }} />
            </Hover>
          </List>

          <List active>
            <Hover>
              <IoIosDesktop style={{ fontSize: '1.8em' }} />
            </Hover>
          </List>

          <List
            style={{
              borderBottom: screen === 'reminders' && '3px dashed #fff'
            }}
          >
            <Hover>
              <IoMdTabletLandscape style={{ fontSize: '1.8em' }} />
            </Hover>
          </List>

          <List>
            <Hover onClick={() => {}}>
              <IoIosPhonePortrait style={{ fontSize: '1.8em' }} />
            </Hover>
          </List>

          <List>
            <Link to={'/themes'} style={{ color: '#fff' }}>
              <Hover onClick={() => {}}>
                <IoMdColorPalette style={{ fontSize: '1.8em' }} />
              </Hover>
            </Link>
          </List>
        </Body>
      )}
    </div>
  )
}

export default EventPreviewBar
