import React from "react"
import ReactMarkdown from 'react-markdown'

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


<div style={{textAlign : 'center' , fontSize : '1.2rem' , color : 'grey' }} >
      <ReactMarkdown source={message}   />
 </div>


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
