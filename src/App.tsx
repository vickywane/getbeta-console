import React from 'react'
import { ChakraProvider, CSSReset } from '@chakra-ui/core'
import theme from '@chakra-ui/theme'

import Router from './navigation/router'

//wraps chakra around the app
const Wrapper = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      {children}
    </ChakraProvider>
  )
}

const App = ({}) => {
  return (
    <Wrapper>
      <Router />
    </Wrapper>
  )
}

export default App
