import React, { useEffect } from 'react'
import { Provider } from 'mobx-react'
import { createGlobalStyle } from 'styled-components'
import localforage from 'localforage'
import { ThemeProvider } from '@chakra-ui/core'
import { theme } from '@chakra-ui/core'
import { ErrorBoundary as SentryErrorBoundary } from '@sentry/react'

import ErrorBoundary from './components/errors/errorBoundary'
import { ContentStore, CourseStore } from './state/'
import { store as UserStore } from './state/user.store'
import Router from './navigation/router'

const GlobalStyle = createGlobalStyle`
   body {
     font-size : 18px;
     flex : 1;
   }
`

// Let's say you want to add custom colors
const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac'
    }
  }
}

//wraps chakra around the app
const Wrapper = ({ children }) => {
  return <ThemeProvider theme={customTheme}>{children}</ThemeProvider>
}

const App = () => {
  useEffect(() => {
    localforage.setItem('newUser', true)
  })

  return (
    <div>
      <GlobalStyle />
      <ErrorBoundary>
        <Provider ContentStore={ContentStore} CourseStore={CourseStore} UserStore={UserStore}>
          <Wrapper>
            <Router />
          </Wrapper>
        </Provider>
      </ErrorBoundary>
    </div>
  )
}

export default App
