import React, { useState } from 'react'
import { Body, PageHead, Title } from '../../styles/style'
import { Textarea, Text } from '@chakra-ui/core'

function CompleteProfileDetails(props) {
  const [name, setName] = useState('')
  return (
    <div>
      <div>
        <Text mb="9px"> You name </Text>
        <Textarea value={name} onChange={e => setName(e.target.name)} type="text" />
      </div>
    </div>
  )
}

export default CompleteProfileDetails
