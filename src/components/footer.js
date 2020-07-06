import React from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"
import media from "styled-media-query"

import { Text } from "../styles/style"

const Footer = () => {
  const FooterBody = styled.footer`
    background-color: #5919ab;
    width: 100%;
    height : 55px 
    display : flex;
    justify-content : center
    align-items : center
    padding : 0rem 2rem;
    color: #fff
  `

  return (
    <FooterBody>
      <Text>
        <b> Oasis </b> - Crafted from <a herf="github.com/fundry"> Fundry </a>,
        Copyright © {new Date().getFullYear()}
      </Text>
    </FooterBody>
  )
}

export default Footer
