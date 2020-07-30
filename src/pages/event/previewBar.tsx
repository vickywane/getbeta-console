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
	background: #401364;
	flex-direction: column;
	align-items: center;
	border-radius: 10px;
	position: ${props => props.absolute};
	transition: all 300ms;
	opacity: ${props => (props.visible ? '1' : '0')};
	li {
		padding : 0.5rem 0rem
		margin: 0.7rem 0rem;
		list-style: none;
		color: #fff;
	}
`

const EventPreviewBar = (props): JSX.Element => {
  const { screen, logout } = props
  const [BarVisibility, setBarVisibility] = useState(false)

  const Width = useWindowWidth()

  return (
    <div>
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
          <li>
            <Hover>
              <IoIosExpand style={{ fontSize: '1.6em' }} />
            </Hover>
          </li>

          <li style={{ borderBottom: screen === 'drafts' && '3px dashed #fff' }}>
            <Hover>
              <IoIosDesktop style={{ fontSize: '1.8em' }} />
            </Hover>
          </li>

          <li
            style={{
              borderBottom: screen === 'reminders' && '3px dashed #fff'
            }}
          >
            <Hover>
              <IoMdTabletLandscape style={{ fontSize: '1.8em' }} />
            </Hover>
          </li>

          <li>
            <Hover onClick={() => {}}>
              <IoIosPhonePortrait style={{ fontSize: '1.8em' }} />
            </Hover>
          </li>

          <li>
            <Link to={'/themes'}>
              <Hover onClick={() => {}}>
                <IoMdColorPalette style={{ fontSize: '1.8em' }} />
              </Hover>
            </Link>
          </li>
        </Body>
      )}
    </div>
  )
}

export default EventPreviewBar
