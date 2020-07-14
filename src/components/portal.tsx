import * as React from "react"
import { createPortal } from "react-dom"

const Portal = ({ children }) => {
  const m = document.getElementById("portal")
  const el = document.createElement("div")

  React.useEffect(() => {
    m.appendChild(el)

    // return  m.removeChild(el)
  }, [el, m])

  return createPortal(children, el)
}

export default Portal
