import React from "react"
import styled from "styled-components"

import { Body, Title, Text, Hover } from "../../../styles/style"

const Grid = styled.div`
  display: grid;
`

const VolunteerPreview = (props): JSX.Element => {
  return (
    <Body style={{ height: "30vh", background: "transparent" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Title small>Volunteers</Title>
      </div>
      <br />
    </Body>
  )
}

export default VolunteerPreview
