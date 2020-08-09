import React from 'react'
import styled from 'styled-components'

import { Text } from '../styles/style'

const Footer = () => {
  const FooterBody = styled.footer`
    background-color: #5919ab;
    width:  100%;
    height : 55px ;
    display : flex;
    flex : 1;
    justify-content : center
    align-items : center
    padding : 0 2rem;
    color: #fff
  `

  return (
    <FooterBody>
      <div style={{ width: window.innerWidth - 70 }}>
        <Text center>
          <b> Getbeta </b> - Crafted from <a herf="github.com/fundry"> Fundry </a>, Copyright ©{' '}
          {new Date().getFullYear()}
        </Text>
      </div>
    </FooterBody>
  )
}

export default Footer
