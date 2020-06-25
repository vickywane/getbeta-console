import React, { Component } from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"
import { IoLogoGoogle } from "react-icons/io"

const Button = styled.button`
  border: 0px;
  padding: 0.6rem 1rem;
  background: #0e2f5a;
  display: flex;
  justify-content: center;
  width: 30rem;
  text-align: center;
  flex: 1;
  font-size: 1.1rem;
  margin-top: 5px;
  border-radius: 5px;
  &: hover {
    cursor: pointer;
  }
`

export default class OAuth extends Component {
  state = {
    user: {},
    disabled: "",
  }

  componentDidMount() {
    // const { socket } = this.props
    //
    // socket.on(user => {
    //   this.popup.close()
    //   this.setState({ user })
    // })
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
    const url = `${this.props.API_URL}/?socketId=${socket.id}`

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
    const { authState } = this.props
    return (
      <Button>
        <div
          style={{ padding: "0rem 1rem" }}
          onClick={this.startAuth.bind(this)}
        >
          <IoLogoGoogle style={{ fontSize: "1.6em" }} />
        </div>
        Google {authState === "Login" ? " Account Login" : "Create Account"}
      </Button>
    )
  }
}
