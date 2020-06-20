import React from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"
import media from "styled-media-query"

const Footer = () => {
  const FooterBody = styled.footer`
    background-color: #5919ab;
    width: 100%;
    padding-top: 0.5em;
    p {
      text-align: center;
      padding: 0.7%;
      font-size: 1em;
      color: #fff;
    }
  `

  return (
    <FooterBody>
      <p>
        Copyright © {new Date().getFullYear()}, a subsidiary of the
        <a href="https://www.fundry.netlify.com"> Fundry Program</a>
        <br />
        <a href="/"> Terms of Service </a> or
        <a href="/"> Privacy Policies </a>
      </p>
    </FooterBody>
  )
}

export default Footer
