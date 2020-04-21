import React from "react"
import Flex from "styled-flex-component"

import { Text, Title, Button } from "../../styles/style"

const Events = () => {
  return (
    <div>
      <br />
      <Flex justifyBetween>
        <Title small> 1 conference 10 Meetups </Title>
        <Button>Create Event</Button>
      </Flex>
    </div>
  )
}

export default Events
