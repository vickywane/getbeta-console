import React, { useState, useRef } from "react"
import styled from "styled-components"

import { Header, Footer, Portal } from "../../../components/"

const Stream = props => {
  const [Video, setVideo] = useState(false)

  const VideoRef = useRef()

  const handleStream = async () => {
    setVideo(true)
    try {
      const name = await navigator.mediaDevices.getUserMedia({
        video: { width: window.innerWidth, height: window.innerHeight },
      })
      //@ts-ignore
      VideoRef.current.srcObject = name

      //@ts-ignore
      VideoRef.current.srcObject.play()
      //@ts-ignore
      VideoRef.current.srcObject.load()
    } catch (e) {
      console.log(e)
    }
  }

  const stopVideo = () => {
    //@ts-ignore
    console.log(VideoRef.current.srcObject)
    //@ts-ignore
  }
  const name = ",,"
  return (
    <div>
      <Header />
      <div style={{ display: "grid", gridTemplateColumns: "13rem 90%" }}>
        <p> bar </p>

        <div>
          <br />
          <br />
          <button onClick={() => handleStream()}> Begin Stream </button>
          <button onClick={() => stopVideo()}> Close Stream </button>
          <br />
          <video
            controls={true}
            style={{ border: "1px solid grey", borderRadius: "7px" }}
            ref={VideoRef}
          />
          <br />{" "}
        </div>
      </div>
      <br />
      <br />

      <Portal>
        <div
          onMouseEnter={() => {}}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div style={{ width: "30rem", height: "40vh", background: "red" }} />
        </div>
      </Portal>
      <Footer />
    </div>
  )
}

export default Stream
