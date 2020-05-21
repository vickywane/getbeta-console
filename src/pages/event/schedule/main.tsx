import * as React from "react"
import styled from "styled-components"

import useWindowWidth from "../../../hook_style"
import Schedule from "./schedule"
import Talks from "./talks"

import { Header, Footer } from "../../../components/"

const Main = () => {
  const Hooks = useWindowWidth()

  return (
    <div>
      <Schedule />
    </div>
  )
}

export default Main
