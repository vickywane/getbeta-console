import React from "react"
import ReactDOM from "react-dom"

import "./index.css"
import Main from "./Main"
import * as serviceWorker from "./serviceWorker"

// i would work on the theming later!!
// const theme = {
//   primaryDark: null,
//   primaryLight: null,
//   primaryHover: null,
// }

// primaryDark: '#0D0C1D',
// primaryLight: '#EFFFFA',
// primaryHover: '#343078',

ReactDOM.render(<Main />, document.getElementById("root"))

console.log(process.env.REACT_APP_GRAPHQL_ENDPOINT)

export default Main

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
