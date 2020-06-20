import React, { useState, useCallback } from "react"
import styled from "styled-components"
import { inject, observer } from "mobx-react"
import { FiUploadCloud, FiX } from "react-icons/fi"
import Flex from "styled-flex-component"
import Dropzone, { useDropzone } from "react-dropzone"
import { useMutation } from "@apollo/react-hooks"
import { Modal } from "react-bootstrap"

import { UPLOAD_EVENT_FILE } from "../../data/mutations"
import {} from "../../components/"
import {
  Body,
  UploadBtn,
  UploadContainer,
  getColor,
  Head,
  Section,
  Hover,
  Text,
  Button,
} from "../../styles/style"

const Upload = props => {
  const { UploadModal, closeUploadModal } = props.MediaStore
  const { type, bucketName, eventId } = props

  const [Empty, setEmpty] = useState(true)
  const [File, setFile] = useState(null)
  const [FileDetails, setFileDetails] = useState({
    fileName: "",
    fileSize: null,
  })
  const [LoadedFile, setLoadedFile] = useState(false)

  const onDrop = useCallback(([file]) => {
    setFile(file)
    setFileDetails({ fileName: file.name, fileSize: file.size })
    setLoadedFile(true)
    console.log(file)
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

  const [uploadSingleEventFile, { data, loading, error }] = useMutation(
    UPLOAD_EVENT_FILE
  )
  // BucketName: props.match.params.name,

  const handleUpload = () => {
    uploadSingleEventFile({
      variables: {
        file: File,
        EventId: eventId,
        Type: "event photos",
        BucketName: bucketName,
        UserId: localStorage.getItem("user_id"),
      },
    })
      .then(() => alert("uploaded"))
      .catch(e => console.log(e, "error"))
  }
  console.log(Empty)
  return (
    <Modal
      show={UploadModal}
      size="xl"
      style={{ marginTop: "5rem" }}
      onHide={() => {
        closeUploadModal()
      }}
    >
      <Head>
        <Section> Event Files Upload </Section>

        <Hover onClick={() => closeUploadModal()}>
          <FiX style={{ fontSize: "1.7rem" }} />
        </Hover>
      </Head>
      <br />
      <Body>
        {!LoadedFile ? (
          <UploadContainer
            upload
            {...getRootProps({ isDragActive, isDragAccept, isDragReject })}
          >
            {!isDragActive ? (
              <div>
                {Empty ? (
                  <div style={{ textAlign: "center", paddingTop: "30px" }}>
                    <Text color="grey">Your storage is currently empty.</Text>

                    <Flex justifyCenter>
                      <Text color="grey"> Use the </Text>
                      <div
                        style={{ paddingLeft: "10px", paddingRight: "10px" }}
                      >
                        <FiUploadCloud style={{ fontSize: "1.5em" }} />
                      </div>
                      <Text color="grey"> button to upload images. </Text>
                    </Flex>

                    <Text color="grey">
                      You can drag 'n' drop image to upload{" "}
                    </Text>

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
                    <Text color="grey"> Not Empty</Text>
                  </div>
                )}
              </div>
            ) : (
              <div>
                <br />
                <br />
                <Text color="grey"> Release File here to upload </Text>
                <br />
                <br />
              </div>
            )}
          </UploadContainer>
        ) : (
          <div>
            <br />
            <Text>
              {" "}
              {Empty} bbb
              {FileDetails.fileName} size : {FileDetails.fileSize}}
            </Text>

            <Flex justifyCenter>
              <Flex>
                <Button onClick={() => handleUpload()}>
                  Upload Loaded Files{" "}
                </Button>
                <Button
                  onClick={() => {
                    setLoadedFile(false)
                    setFile(null)
                  }}
                >
                  Cancel Upload
                </Button>
              </Flex>
            </Flex>
            <br />
          </div>
        )}
        <br />
      </Body>
    </Modal>
  )
}

export default inject("MediaStore")(observer(Upload))
