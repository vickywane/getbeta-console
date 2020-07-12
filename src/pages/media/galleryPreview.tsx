import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

import { Body, Text, Title } from "../../styles/style"

const GalleryPreview = (props): JSX.Element => {
  const { background } = props

  return (
    <Body style={{ background: background }}>
      <div
        style={{
          padding: "0.5rem 1rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Title small>Gallery Preview</Title>

        <Link to={`/media/`}>
          <Text> Visit Gallery </Text>
        </Link>
      </div>

      <br />
      <br />
      <Text small center>
        {" "}
        Media Gallery Preview
      </Text>
      <br />
      <br />
      <Text small style={{ textAlign: "right" }}>
        {" "}
        Add Images{" "}
      </Text>
    </Body>
  )
}

export default GalleryPreview
