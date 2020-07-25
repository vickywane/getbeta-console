import React from 'react'
import media from 'styled-media-query'
import styled from 'styled-components'

import { Body, FormCard as Card, Text } from '../../../styles/style'

const CustomCard = styled(Card)`
  width: 60rem;
  padding: 6rem;
  box-shadow: 0px 2px 4px #c0c0c0;
  text-align: center;
  margin: 8rem 0rem;
  ${media.lessThan('huge')`
    width: 45rem;
    padding: 3rem;
    margin: 5rem 0rem;
  `};
  ${media.lessThan('large')`
    width: 40rem;
    padding: 3rem;
  margin: 4rem 0rem;
  `};
  ${media.lessThan('medium')`
  width: 28rem;
  padding: 2rem;
  margin: 8rem 1rem;
  `};
`

const ConfirmCreation = (props): JSX.Element => {
  const {} = props

  return (
    <Body>
      <Text> Confirmed </Text>
    </Body>
  )
}

export default ConfirmCreation
