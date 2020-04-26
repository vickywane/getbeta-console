import React from "react"

import { Header, Footer } from "./"

const Loader = (props): JSX.Element => {
  const { state } = props

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
        {" "}
        Data is Loading{" "}
      </h2>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  )
}

export default Loader
