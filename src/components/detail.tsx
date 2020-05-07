import * as React from "react"

import { Body, Text, Title } from "../styles/style"

const Details = props => {
  const { name } = props.data

  return (
    <Body>
      <Text> Hosted by {name} </Text>
    </Body>
  )
}

export default Details
