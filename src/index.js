import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "mobx-react"
import { ThemeProvider } from "styled-components"

import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"

import { ConsoleStore, MediaStore, AuthStore, ModalStore } from "./state/"

// i would work on the theming later!!
const theme = {
  primaryDark: null,
  primaryLight: null,
  primaryHover: null,
}

// primaryDark: '#0D0C1D',
// primaryLight: '#EFFFFA',
// primaryHover: '#343078',

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider
      AuthStore={AuthStore}
      ConsoleStore={ConsoleStore}
      MediaStore={MediaStore}
      ModalStore={ModalStore}
    >
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
