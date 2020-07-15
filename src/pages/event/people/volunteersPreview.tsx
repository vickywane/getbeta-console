import React from "react"
import styled from "styled-components"

import { Body, Title, Text, Hover } from "../../../styles/style"

const Grid = styled.div`
  display: grid;
  grid-gap: 1rem 0.7rem;
  grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr));
`

const Sprite = styled.img`
	height : 70px
	width : 70px
	border-radius : 50%;
	border  : 2px solid #401364;
	box-shadow : 0px 3px 3px solid grey;
  cursor : pointer
`

const imgs = [
  {
    id: 1,
  },

  {
    id: 1,
  },

  {
    id: 1,
  },

  {
    id: 1,
  },

  {
    id: 1,
  },

  {
    id: 1,
  },

  {
    id: 1,
  },

  {
    id: 1,
  },

  {
    id: 1,
  },

  {
    id: 1,
  },

  {
    id: 1,
  },

  {
    id: 1,
  },

  {
    id: 1,
  },

  {
    id: 1,
  },

  {
    id: 1,
  },

  {
    id: 1,
  },

  {
    id: 1,
  },

  {
    id: 1,
  },

  {
    id: 1,
  },

  {
    id: 1,
  },

  {
    id: 1,
  },
]

const VolunteerPreview = (props): JSX.Element => {
  return (
    <Body style={{ padding: "1rem 1rem", background: "transparent" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Title small>Volunteers</Title>
        <Text small> {imgs.length} Volunteers </Text>
      </div>
      <hr />
      <Grid>
        {imgs.map(() => {
          return (
            <Sprite
              alt="Volunteer"
              src={require("../../../assets/images/developer.png")}
            />
          )
        })}
      </Grid>
      <br />
    </Body>
  )
}

export default VolunteerPreview
