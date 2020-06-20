import React from "react"

import { Text } from "../../styles/style"

interface CustomProps {
  message: string
  feature: string
  link: string
}

const EmptyData = (props: CustomProps) => {
  const { message, feature, link } = props

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Text center color="grey">
        {message}{" "}
      </Text>

      <Text center color="grey">
        <a href={link}> Learn More </a> about {feature} on <b> Oasis </b>
      </Text>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}

export default EmptyData
