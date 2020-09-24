import React from 'react'
import {} from 'mobx-react'

import Header from '../../../components/headers/header'
import { Body, Title, MdTitle, Text } from '../../../styles/style'

const AllSessions = () => {
  return (
    <div>
      <Header goBack={true} />

      <Body>
        <MdTitle> All List of Sessions </MdTitle>
      </Body>
    </div>
  )
}

export default AllSessions
