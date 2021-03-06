import React from 'react'
import { LockyTransparent } from 'react-locky'

import { FiMenu, FiX } from 'react-icons/fi'
import { center } from '../styles/style'
import { StyledBurger } from '../styles/mobile-sidebar-style'

const Burger = ({ open, setOpen, ...props }) => {
  const isExpanded = open ? true : false

  return (
    <div style={{ ...center }}>
      <LockyTransparent>
        <StyledBurger
          aria-label="Toggle menu"
          aria-expanded={isExpanded}
          open={true}
          onClick={() => setOpen(!open)}
          {...props}
          style={{ outline: 0 }}
        >
          {open ? (
            <FiX style={{ fontSize: '1.6rem', color: '#0072ce' }} />
          ) : (
            <FiMenu style={{ fontSize: '1.6rem', color: '#0072ce' }} />
          )}
        </StyledBurger>
      </LockyTransparent>
    </div>
  )
}

export default Burger
