import * as React from "react"
import Flex from "styled-flex-component"
import { useMutation } from "@apollo/react-hooks"
import { useDropzone } from "react-dropzone"
import { CSSTransition } from "react-transition-group"
import { FiX } from "react-icons/fi"

import { UPDATE_USER, UPLOAD_USER_FILE } from "../../data/mutations"
import {
  Body,
  Hover,
  Text,
  Button,
  Title,
  Input,
  Head,
  Section,
  MyCard,
  Label,
} from "../../styles/style"

import Fields from "../forms/fields"

const EditProfile = props => {
  const { name, email, bucketName, show, close } = props
  const [Error, setError] = React.useState("")
  const [Name, setName] = React.useState("")
  const [Email, setEmail] = React.useState("")
  const [File, setFile] = React.useState(null)
  const [FileDetails, setFileDetails] = React.useState({
    fileName: "",
    fileSize: null,
  })

  const [uploadSingleUserFile, { data }] = useMutation(UPLOAD_USER_FILE)
  const [updateUser, { loading }] = useMutation(UPDATE_USER)

  React.useEffect(() => {
    data === undefined
      ? console.log("entered component")
      : updateUser({
          variables: {
            id: localStorage.getItem("user_id"),
            name: Name.length < 7 ? name : Name,
            email: Email.length < 7 ? email : Email,
            ImgUrl: data.uploadSingleUserFile.file_uri,
          },
        })
          .catch(e => console.log(e))
          .then(() => close())
  }, [data])

  const handleUpdate = () => {
    File === null ? updateDetails() : handleImageUpload()
  }

  const updateDetails = () => {
    updateUser({
      variables: {
        id: localStorage.getItem("user_id"),
        name: Name,
        email: Email.length < 7 ? email : Email,
      },
    })
      .catch(e => {
        alert(JSON.stringify(e))
      })
      .then(() => {
        console.log("updated details")
      })
  }

  const onDrop = React.useCallback(([file]) => {
    setFile(file)
    setFileDetails({
      fileName: file.name,
      fileSize: file.size,
    })
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

  const handleChange = (value, label) => {
    switch (label) {
      case "Name":
        setName(value)
        break
      case "Email":
        setEmail(value)
        break
      default:
        break
    }
  }

  if (loading) {
    return <p> loading </p>
  }

  const handleImageUpload = () => {
    uploadSingleUserFile({
      variables: {
        UserId: localStorage.getItem("user_id"),
        file: File,
        Type: "user-profile-photo",
        BucketName: bucketName,
      },
    })
      .catch(e => console.log(e, "upload err"))
      .then(() => {})
  }
  // console.log(data.uploadSingleUserFile)

  return (
    <CSSTransition timeout={400} classNames={"profile"} in={show} unmountOnExit>
      <MyCard>
        <Head>
          <Section> Edit Profile </Section>
          <Hover
            onClick={() => {
              close()
            }}
            style={{ textAlign: "right" }}
          >
            <FiX style={{ fontSize: "1.8rem" }} />
          </Hover>
        </Head>
        <Body>
          <Text center color="grey">
            {" "}
            Drag n drop new image to update image{" "}
          </Text>
          <Flex justifyBetween>
            <div
              {...getRootProps({ isDragActive, isDragAccept, isDragReject })}
            >
              {!isDragActive ? (
                <div>
                  <img
                    src={require("../../assets/images/developer.png")}
                    style={{
                      width: "8rem",
                      height: "12vh",
                    }}
                    alt="user"
                  />
                </div>
              ) : (
                <div
                  style={{
                    padding: "5rem 2rem",
                    border: "2px dashed grey",
                    height: "5vh",
                  }}
                >
                  <Text color="grey" center>
                    Drop Image here to upload
                  </Text>
                </div>
              )}
            </div>
            <div>
              <br />
              <br />
              <br />
              <Button
                disabled={File === null}
                onClick={() => {
                  handleImageUpload()
                }}
              >
                Change Picture
              </Button>
            </div>
          </Flex>
          {FileDetails.fileName}

          <br />
          <Fields
            textarea={false}
            value={Name}
            id={1}
            type="text"
            name={"Name"}
            onChange={e => {
              handleChange(e, "Name")
            }}
            placeholder={name}
          />

          <Fields
            value={Email}
            textarea={false}
            name="Email"
            id={2}
            type="text"
            onChange={e => {
              handleChange(e, "Email")
            }}
            placeholder={email}
          />
          <br />

          <Flex justifyCenter>
            <Button long onClick={() => handleUpdate()}>
              Update Profile
            </Button>
          </Flex>
        </Body>
      </MyCard>
    </CSSTransition>
  )
}

export default EditProfile
