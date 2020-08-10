import React from 'react'
import { StyledMenu, Hover } from '../styles/navigation'
import { Title, Text, Body } from '../styles/style'
import { FiX } from 'react-icons/fi'

const Notifications = ({ open, ...props }) => {
  const isHidden = open ? true : false
  const tabIndex = isHidden ? 0 : -1

  const data = [
    { id: 1, name: 'File Upload finised.' },
    { id: 2, name: 'File Upload finised.' },
    { id: 3, name: 'File Upload finised.' },
    { id: 4, name: 'File Upload finised.' }
  ]

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <div
        style={{
          padding: '0.5rem 0rem',
          borderBottom: '1px solid white',
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Title small> Notifications </Title>

        <Hover white style={{ textAlign: 'right' }}>
          <FiX style={{ fontSize: '1.7em' }} />
        </Hover>
      </div>

      <br />

      <div>
        {data.map(({ id, name }) => {
          return (
            <Body key={id}>
              <Text small> {name} </Text>
            </Body>
          )
        })}
      </div>
    </StyledMenu>
  )
}

export default Notifications
