import React, { useEffect } from 'react'
import { Provider } from 'mobx-react'
import { createGlobalStyle } from 'styled-components'
import localforage from 'localforage'

import ErrorBoundary from './components/errors/errorBoundary'
import { VendorStore, ContentStore, CourseStore } from './state/'
import { store as UserStore } from './state/user.store'
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
  useEffect(() => {
    localforage.setItem('newUser', true)
  })

  return (
    <div>
      <GlobalStyle />
      <ErrorBoundary>
        <Provider
          VendorStore={VendorStore}
          ContentStore={ContentStore}
          CourseStore={CourseStore}
          UserStore={UserStore}
        >
          <Wrapper>
            <Router />
          </Wrapper>
        </Provider>
      </ErrorBoundary>
    </div>
  )
}

export default App
