import React from "react"
import { Spinner } from "react-bootstrap"

import { Header, Footer } from "./"
import { Title, Text, BigTitle } from "../styles/style"

const Loader = (props): JSX.Element => {
  const { type, error, path, inComponent } = props

  switch (type) {
    case "loading":
      return (
        <div>
          {!inComponent && <Header />}
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br /> <br /> <br /> <br />
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Spinner variant="primary" animation="grow" role="loading" />
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          {!inComponent && <Footer />}
          <br />
        </div>
      )

    case "error":
      switch (error) {
        case "pg: no rows in result set":
          switch (path) {
            case "user":
              return (
                <div>
                  <Header />
                  <br /> <br /> <br />
                  <br /> <br /> <br /> <br />
                  <br />
                  <BigTitle center>
                    Ooops!!! <br /> This user does not have an Oasis Account
                  </BigTitle>
                  <br />
                  <br />
                  <br />
                  <br />
                  <Footer />
                </div>
              )

            case "event":
              return (
                <div>
                  <Header />
                  <br /> <br /> <br />
                  <br /> <br /> <br /> <br />
                  <br />
                  <BigTitle center>
                    Ooops!!! <br /> This event has been moved elsewhere or has
                    been deleted{" "}
                  </BigTitle>
                  <br />
                  <br />
                  <br />
                  <br />
                  <Footer />
                </div>
              )
            case "meetup group":
              return (
                <div>
                  <Header />
                  <br /> <br /> <br />
                  <br /> <br /> <br /> <br />
                  <br />
                  <BigTitle center>
                    Ooops!!! <br /> This meetup group could have been archived ,
                    suspended or moved elsewhere or has been deleted{" "}
                  </BigTitle>
                  <br />
                  <br />
                  <br />
                  <br />
                  <Footer />
                </div>
              )
            default:
              break
          }

        default:
          break
      }

    default:
      return (
        <div>
          {!inComponent && <Header />}
          <br /> <br /> <br />
          <br />,{" "}
          <h2
            style={{
              textAlign: "center",
            }}
          >
            An error has occurred with your connection.
            <br /> Switching to offline mode
          </h2>
          <br />
          <br />
          <br />
          <br />
          {!inComponent && <Footer />}
        </div>
      )
  }
}

export default Loader
