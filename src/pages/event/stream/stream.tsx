import React, { useState, useRef } from "react"
import styled from "styled-components"

import { Header, Footer, Portal } from "../../../components/"
import Image from "../../../assets/images/2.jpg"

const Container = styled.div`
    background-image: url(${props => props.img});
    background-size : cover;
    width : 100%;
    height: 88.5vh;
    position: relative;
    div {
      color: #fff
      bottom : 0;
      font-size : 2rem
      padding: 1rem 1rem;
      width : 100%;
      height: 88.5vh;
      position: absolute;
      background: linear-gradient(to top,#1a1e43ed, transparent) ;
      text-align :center
    }
   `

const Stream = props => {
  return (
    <div>
      <Header />
      <br />
      <Container img={Image}>
        <div>
          <p>some niffty text </p>
        </div>
      </Container>

      <div style={{ height: "40vh" }}>
        <p>some niffty text below </p>
      </div>

      <Footer />
    </div>
  )
}

export default Stream
