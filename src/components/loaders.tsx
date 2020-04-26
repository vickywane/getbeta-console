import React from "react"

import { Header, Footer } from "./"

const Loader = (props): JSX.Element => {
  const { loading, error } = props
  console.log(loading, error)
  switch (props) {
    case props.loading === true:
      return (
        <div>
          <Header />
          <br /> <br /> <br />
          <br />,{" "}
          <h2
            style={{
              textAlign: "center",
            }}
          >
            Data is Loading{" "}
          </h2>
          <br />
          <br />
          <br />
          <br />
          <Footer />
        </div>
      )

    case props.error === true:
      return (
        <div>
          <Header />
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
          <Footer />
        </div>
      )

    default:
      return <h5> NO LOADING CASE FOUND </h5>
  }
}

export default Loader
