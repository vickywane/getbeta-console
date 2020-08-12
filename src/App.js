import React from 'react'
import { Provider } from 'mobx-react'

import ErrorBoundary from './components/errors/errorBoundary'
import { UserStore } from './state/'
import Router from './navigation/router'

//wraps chakra around the app
const Wrapper = ({ children }) => {
  return <div>{children}</div>
}

const App = () => {
  return (
    <ErrorBoundary>
      <Provider UserStore={UserStore}>
        <Wrapper>
          <Router />
        </Wrapper>
      </Provider>
    </ErrorBoundary>
  )
}

export default App
