import React from 'react'
import media from 'styled-media-query'
import styled from 'styled-components'

import { Body, Text } from '../styles/style'

const Preview = styled.div`
  height: 13rem;
  width: 18rem;
  background: #f2f2f2;
  display: flex;
  border: 2px solid #0072ce;
  justify-content: center;
  background-size: cover;
  align-items: center;
  border-radius: 3px;
  text-align: center;
  ${media.lessThan('large')`
    height: 13rem;
    width: 15rem;
  `};
`

const ContentFilePreview = props => {
  const { url } = props

  return (
    <Body>
      <br />
      <Preview style={{ backgroundImage: `url(${url})` }}>
        {!url && <Text> Select a file to preview </Text>}
      </Preview>
    </Body>
  )
}

export default ContentFilePreview
