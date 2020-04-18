import * as React from "react"
import styled from "styled-components"

import useWindowWidth from "../../../hook_style"
import Schedule from "./schedule"
import Talks from "./talks"

import { Header, Footer } from "../../../components/"

const Grid = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
`

const Main = () => {
  const Hooks = useWindowWidth()

  return (
    <div>
      <Header unshadowed />
      {Hooks >= 1200 ? (
        <Grid>
          <Schedule />
          <div style={{ height: "90vh", offset: "hidden" }}>
            <Talks />
          </div>
        </Grid>
      ) : (
        <Schedule />
      )}

      <Footer />
    </div>
  )
}

export default Main
