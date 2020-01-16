import React from "react"

import { StyledBurger, StyledNotification } from "../../styles/navigation"

const Burger = ({ open, setOpen, ...props }) => {
  const isExpanded = open ? true : false

  return (
    <div>
      {props.type === "Burger" ? (
        <StyledBurger
          aria-label="Toggle menu"
          aria-expanded={isExpanded}
          open={open}
          onClick={() => setOpen(!open)}
          {...props}
        >
          <span />
          <span />
          <span />
        </StyledBurger>
      ) : (
        <StyledNotification
          aria-label="Toggle notification"
          aria-expanded={isExpanded}
          open={open}
          onClick={() => setOpen(!open)}
          {...props}
        >
          <span />
          <span />
          <span />
        </StyledNotification>
      )}
    </div>
  )
}

export default Burger
