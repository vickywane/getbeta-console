import * as React from "react"

import { Body, Text, Title } from "../styles/style"

const Details = props => {
  const { name } = props.data.createdBy[0]
  const { description } = props.data

  return (
    <Body>
      <Text> Hosted by {name} </Text>
      <Text> {description}a </Text>
    </Body>
  )
}

export default Details
