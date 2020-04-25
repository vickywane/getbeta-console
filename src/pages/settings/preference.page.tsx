import React from "react"

import { Header, Footer } from "../../components/"
import { Contain } from "../../styles/style"
import Preference from "./preference"

const PreferencePage = () => {
  return (
    <div>
      <Header />
      <br />
      <br />

      <Contain>
        <Preference />
      </Contain>

      <Footer />
    </div>
  )
}

export default PreferencePage
