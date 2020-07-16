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
  let winpa = `scrollbars=yes,resizable=yes,status=yes,location=yes,toolbar=yes,menubar=yes,
width=500px,height=500px,left=-1000,top=-1000`

  return (
    <div>
      <Header />
      <br />
      <div>
        <p>some niffty text </p>
      </div>

      <button
        onClick={() => {
          alert("hi")
          window.open("a", winpa)
        }}
      >
        Open Window
      </button>

      <div style={{ height: "40vh" }}>
        <p>some niffty text below </p>
      </div>

      <Footer />
    </div>
  )
}

export default Stream
