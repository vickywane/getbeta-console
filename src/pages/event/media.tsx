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

const TipBody = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  background: #fbfbfb;
  width: 33rem;
  transition: all 400ms;
  color: #0e2f5a;
  border-radius: 10px;
  box-shadow: 0px 1px 3px grey;
`

const Media = props => {
  const [Tip, showTip] = useState(true)

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
        {Tip ? (
          <Flex justifyCenter>
            <TipBody>
              <Text style={{ padding: "0rem 1rem" }}>
                Drag 'n' drop images or select image{" "}
              </Text>

              <Flex>
                <Hover style={{ padding: "0.3rem 1rem" }}>
                  <FiCamera style={{ fontSize: "1.7rem" }} />
                </Hover>

                <Hover style={{ padding: "0.3rem 0.1rem" }}>
                  <FiX
                    onClick={() => showTip(false)}
                    style={{ fontSize: "1.6rem" }}
                  />
                </Hover>
              </Flex>
            </TipBody>
          </Flex>
        ) : null}
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
