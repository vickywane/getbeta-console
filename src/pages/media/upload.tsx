import React, { useState } from "react"
import styled from "styled-components"
import { inject, observer } from "mobx-react"
import { FiUploadCloud } from "react-icons/fi"
import Flex from "styled-flex-component"
import { useDropzone } from "react-dropzone"

import { Header, Footer } from "../../components/"
import { Body, UploadBtn, UploadContainer, getColor } from "../../styles/style"

const Upload = (props): JSX.Element => {
  const { Empty } = props.MediaStore

  const [upload, uploading] = useState<Boolean>(false)

  const {
    getRootProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: "image/*",
  })

  return (
    <div>
      <Header />

      <Body>
        <UploadContainer
          {...getRootProps({ isDragActive, isDragAccept, isDragReject })}
        >
          {!isDragActive ? (
            <div>
              {Empty ? (
                <div style={{ textAlign: "center", paddingTop: "30px" }}>
                  <p>Your storage is currently empty.</p>

                  <Flex justifyCenter>
                    <p> Use the </p>
                    <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                      <FiUploadCloud style={{ fontSize: "1.5em" }} />
                    </div>
                    <p> button to upload files into your storage . </p>
                  </Flex>

                  <p> You can drag 'n' drop files to upload </p>

                  <Flex justifyCenter>
                    <UploadBtn
                      style={{
                        boxShadow: "0px 2px 5px grey",
                        textAlign: "center",
                      }}
                      onClick={() => {}}
                    >
                      <FiUploadCloud style={{ fontSize: "1.5em" }} />
                    </UploadBtn>
                  </Flex>
                </div>
              ) : (
                <div>
                  <p> Not Empty</p>
                </div>
              )}
            </div>
          ) : (
            <div>
              <br />
              <br />
              <p> dragging file here </p>
              <br />
              <br />
            </div>
          )}
        </UploadContainer>
      </Body>

      <Footer />
    </div>
  )
}

export default inject("MediaStore")(observer(Upload))
