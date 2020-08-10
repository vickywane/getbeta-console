import React from 'react'

import Router from './navigation/router'

//wraps chakra around the app
const Wrapper = ({ children }) => {
  return <div>{children}</div>
}

const App = () => {
  return (
    <Wrapper>
      <Router />
    </Wrapper>
  )
}

export default App
