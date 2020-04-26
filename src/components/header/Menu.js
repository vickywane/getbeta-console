import React from "react"
import { StyledMenu, Hover } from "../../styles/navigation"
import { FiX } from "react-icons/fi"

const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false
  const tabIndex = isHidden ? 0 : -1

  const data = [
    { id: 1, name: "File Upload finised." },
    { id: 2, name: "File Upload finised." },
    { id: 3, name: "File Upload finised." },
    { id: 4, name: "File Upload finised." },
  ]

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <Hover white>
        <FiX style={{ fontSize: "1.7em" }} />{" "}
      </Hover>
      <div>
        {data.map(({ id, name }) => {
          return (
            <div key={id}>
              {" "}
              <p> {name} </p>{" "}
            </div>
          )
        })}
      </div>
    </StyledMenu>
  )
}

export default Menu
