import React from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"

import { Header, Footer } from "../../components/"

const Event = () => {
  return (
    <div>
      <Header name="OSCA" screen="event" />
      <p> Event page </p>
      <Footer />
    </div>
  )
}

export default Event
