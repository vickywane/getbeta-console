import React from "react"
import styled from "styled-components"
import { inject, observer } from "mobx-react"

import { Header, Footer } from "../../components/"
import Overview from "./overview"

const Media = (props): JSX.Element => {
  const { items } = props.MediaStore
  const ItemsNo = items.length
  return (
    <div>
      <Header />
      <Overview />
      <Footer />
    </div>
  )
}
export default inject("MediaStore")(observer(Media))
