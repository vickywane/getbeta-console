import React, { useState, useCallback } from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"
import { FiCamera, FiX } from "react-icons/fi"
import Dropzone, { useDropzone } from "react-dropzone"
import { useMutation } from "@apollo/react-hooks"
import { Modal } from "react-bootstrap"

import {
  Hover,
  Head,
  Section,
  Body,
  Input,
  Tab,
  Contain,
  Title,
  TabColumn,
  Text,
  Button,
} from "../../styles/style"
import DefaultImg from "../../assets/images/test.png"
import { Tip } from "../../components/"
 
const Media = props => {
  const [Pallete, OpenPallete] = useState(false)

  const [uploading, setUploading] = useState({
    cardImg: false,
    coverImg: false,
    thumbnailImg: false,
  })
  const [Image, setImage] = useState({
    cardImg: { File: null },
    coverImg: {},
    thumbnailImg: {},
  })

  const [ImageDetails, setImageDetails] = useState({
    cardImg: {},
    coverImg: {},
    thumbnailImg: {},
  })

  const type = "THUMBNAIL"

  const onDrop = useCallback(([file]) => {
    switch (type) {
      case "THUMBNAIL":
        //@ts-ignore
        setImage({ cardImg: { File: file } })
      // setFileDetails({ fileName: file.name, fileSize: file.size })
      // setLoadedFile(true)

      default:
        console.log(file)
    }
  }, [])

  const {
    getRootProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    // accept: "*",
  })

  return (
    <div>
      <Modal
        style={{ marginTop: "2rem" }}
        show={Pallete}
        onHide={() => OpenPallete(false)}
      >
        <Body>
          <Flex justifyBetween>
            <Section> Color Picker </Section>{" "}
            <Hover onClick={() => OpenPallete(false)}>
              <FiX style={{ fontSize: "1.7rem" }} />
            </Hover>
          </Flex>
          <br />
          <Text center> Pick colors from this color picker </Text>
          <input
            placeholder="Hex Code. E.g #00000"
            type="number"
            onChange={e => console.log(e)}
          />

          <br />
        </Body>
      </Modal>

      <Contain
        img={DefaultImg}
        style={{ height: "30vh" }}
        {...getRootProps({ isDragActive, isDragAccept, isDragReject })}
      >
        <br />
        <Section style={{ padding: "0rem 0.1rem" }}>Event Cover Image</Section>

        <Tip
          message={"Drag 'n' drop images to upload"}
          icon1={<FiCamera style={{fontSize : '1.8rem'}} />}
          icon2={<FiX style={{fontSize : '1.8rem'}} />}
        />
      </Contain>
      <br />
      <br />

      <Body>
        <Flex justifyBetween>
          <Section small style={{ padding: "0rem 1rem" }}>
            Event Image Thumbnails
          </Section>

          <Button>Upload Image</Button>
        </Flex>

        <hr />
        <Body
          style={{ background: "#fbfbfb", border: "3px dashed grey" }}
          {...getRootProps({ isDragActive, isDragAccept, isDragReject })}
        >
          {isDragActive ? (
            <div>
              <br />
              <Text center color="grey">
                Release Image here to upload.
              </Text>
              <br />
            </div>
          ) : (
            <Flex>
              <img
                src={require("../../assets/images/developer.png")}
                alt={"event"}
                style={{
                  height: "auto",
                  maxWidth: "10%",
                  border: "3px solid #0e2f5a",
                  borderRadius: "50%",
                }}
              />

              <Hover style={{ padding: "0.3rem 1rem", paddingTop: "60px" }}>
                <FiCamera style={{ fontSize: "1.8rem", color: "#0e2f5a" }} />
              </Hover>
            </Flex>
          )}
        </Body>

        <br />
        <br />
        <Flex justifyBetween>
          <Section small style={{ padding: "0rem 1rem" }}>
            Display Card Images
          </Section>

          <Button>Upload Image</Button>
        </Flex>

        <hr />

        <Body
          style={{ background: "#fbfbfb", border: "3px dashed grey" }}
          {...getRootProps({ isDragActive, isDragAccept, isDragReject })}
        >
          {!uploading.cardImg ? (
            <Flex>
              <img
                src={require("../../assets/images/test.png")}
                alt={"event"}
                style={{
                  height: "auto",
                  maxWidth: "20%",
                }}
              />

              <Hover style={{ padding: "0.3rem 1rem", paddingTop: "60px" }}>
                <FiCamera style={{ fontSize: "1.8rem", color: "#0e2f5a" }} />
              </Hover>
            </Flex>
          ) : (
            <div>
              <br />
              <Text center color="grey">
                Release Image here to upload.
              </Text>
              <br />
            </div>
          )}
        </Body>

        <br />
        <br />

        <Flex justifyBetween>
          <Section small style={{ padding: "0rem 1rem" }}>
            Color Schemes
          </Section>

          <Button onClick={() => OpenPallete(true)}> Open Color Palette</Button>
        </Flex>

        <hr />
        <Body>
          <Text center>
            Color scheme and accent used for your event are generated from
            uploaded images. <br /> You can however change the images used while
            colors picked from your images would serve as a fallback while your
            saved data is being loaded.
          </Text>
        </Body>
      </Body>
    </div>
  )
}

export default Media
