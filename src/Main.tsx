import React from "react"
import { Provider } from "mobx-react"
import { ThemeProvider } from "styled-components"
import { ApolloProvider } from "@apollo/react-hooks"

import Client from "./data/config"
import App from "./App"

import {
  ConsoleStore,
  PaneStore,
  MediaStore,
  AuthStore,
  ModalStore,
} from "./state/"

// i would work on the theming later!!
const theme = {
  primaryDark: null,
  primaryLight: null,
  primaryHover: null,
}

const Main = () => {
  return (
    <ApolloProvider client={Client}>
      <Provider
        AuthStore={AuthStore}
        ConsoleStore={ConsoleStore}
        MediaStore={MediaStore}
        ModalStore={ModalStore}
        PaneStore={PaneStore}
      >
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </ApolloProvider>
  )
}

export default Main
