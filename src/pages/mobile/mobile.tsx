import React from "react"
import styled from "styled-components"

import {} from "../../components/"
import { Contain, Body, Text } from "../../styles/style"

const Grid = styled.div`
	display : grid
	grid-gap : 1rem 1rem
	grid-template-columns : 30rem auto
`

const Mobile = () => {
  return (
    <Body>
      <br />
      <br />
      <Grid>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            placeItems: "center",
          }}
        >
          <img
            alt="iphone"
            style={{ height: "600px", width: "500px" }}
            src={require("../../assets/ssvg/iphone.svg")}
          />
        </div>

        <Body style={{ textAlign: "right" }}>
          <Text> Mobile device layout for event </Text>
        </Body>
      </Grid>
    </Body>
  )
}

export default Mobile
