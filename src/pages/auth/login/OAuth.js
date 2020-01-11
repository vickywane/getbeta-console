// Auth logic here would be split into store later

import React, { Component } from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"
import { FiTwitter } from "react-icons/fi"
import { IoLogoGoogle } from "react-icons/io"

const Hover = styled.div({
  cursor: "pointer",
})

const API_URL =
  "https://codeburst.io/react-authentication-with-twitter-google-facebook-and-github-862d59583105"

export default class OAuth extends Component {
  state = {
    user: {},
    disabled: "",
  }

  componentDidMount() {
    const { socket } = this.props

    socket.on(user => {
      this.popup.close()
      this.setState({ user })
    })
  }

  // Routinely checks the popup to re-enable the login button
  // if the user closes the popup without authenticating.
  checkPopup() {
    const check = setInterval(() => {
      const { popup } = this
      if (!popup || popup.closed || popup.closed === undefined) {
        clearInterval(check)
        this.setState({ disabled: "" })
      }
    }, 1000)
  }

  // Launches the popup by making a request to the server and then
  // passes along the socket id so it can be used to send back user
  // data to the appropriate socket on the connected client.
  openPopup() {
    const { socket } = this.props
    const width = 600
    const height = 600
    const left = window.innerWidth / 2 - width / 2
    const top = window.innerHeight / 2 - height / 2
    const url = `${API_URL}/?socketId=${socket.id}`

    return window.open(
      url,
      "",
      `toolbar=no, location=no, directories=no, status=no, menubar=no,
        scrollbars=no, resizable=no, copyhistory=no, width=${width},
        height=${height}, top=${top}, left=${left}`
    )
  }

  // Kicks off the processes of opening the popup on the server and listening
  // to the popup. It also disables the login button so the user can not
  // attempt to login to the provider twice.
  startAuth(e) {
    if (!this.state.disabled) {
      e.preventDefault()
      this.popup = this.openPopup()
      this.checkPopup()
      this.setState({ disabled: "disabled" })
    }
  }

  closeCard() {
    this.setState({ user: {} })
  }

  render() {
    return (
      <Flex justifyAround>
        <Hover onClick={this.startAuth.bind(this)}>
          <FiTwitter style={{ fontSize: "2em" }} />{" "}
        </Hover>
        <Hover onClick={this.startAuth.bind(this)}>
          <IoLogoGoogle style={{ fontSize: "2em" }} />{" "}
        </Hover>
        <Hover onClick={this.startAuth.bind(this)}>
          <IoLogoGoogle style={{ fontSize: "2em" }} />{" "}
        </Hover>
      </Flex>
    )
  }
}
