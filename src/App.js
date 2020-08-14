import React from 'react'
import { Provider } from 'mobx-react'
import { createGlobalStyle } from 'styled-components'

import ErrorBoundary from './components/errors/errorBoundary'
import { UserStore } from './state/'
import Router from './navigation/router'

const GlobalStyle = createGlobalStyle`
   body {
     font-size : 18px;
     flex : 1;
   }
`

//wraps chakra around the app
const Wrapper = ({ children }) => {
  return <div>{children}</div>
}

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <ErrorBoundary>
        <Provider UserStore={UserStore}>
          <Wrapper>
            <Router />
          </Wrapper>
        </Provider>
      </ErrorBoundary>
    </div>
  )
}

export default App
