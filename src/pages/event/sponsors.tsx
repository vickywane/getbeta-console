import React, { useState } from "react"
import styled from "styled-components"
import {} from "react-icons/io"
import media from "styled-media-query"

import { Hover, Title, Text, Section } from "../../styles/style"

const Grid = styled.div`
  display: flex;
  offset: auto;
  margin: 1.5rem 0rem;
  li {
    list-style: none;
    margin: 0.3rem 1.5rem;
  }
`

const Sponsors = props => {
  const { sponsor } = props
  return (
    <div>
      {sponsor !== null && (
        <Grid>
          {sponsor.map(({ name, id }) => {
            return (
              <li key={id}>
                <Text center> {name} </Text>
              </li>
            )
          })}
        </Grid>
      )}
    </div>
  )
}

export default Sponsors
