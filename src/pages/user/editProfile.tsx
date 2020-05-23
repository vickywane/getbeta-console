import * as React from "react"
import Flex from "styled-flex-component"
import { useMutation } from "@apollo/react-hooks"

import { UPDATE_USER } from "../../data/mutations"
import {
  Body,
  Hover,
  Text,
  Button,
  Title,
  Input,
  Label,
} from "../../styles/style"

import {} from "../forms/formsData"
import Fields from "../forms/fields"

const EditProfile = props => {
  const { name, email } = props
  const [updateUser, { loading }] = useMutation(UPDATE_USER)
  const [Error, setError] = React.useState("")
  const [Name, setName] = React.useState("")
  const [Email, setEmail] = React.useState("")

  const Update = () => {
    updateUser({
      variables: {
        id: localStorage.getItem("user_id"),
        name: Name,
        password: "test111",
        role: "photoman",
        email: Email,
      },
    }).catch(e => {
      alert(JSON.stringify(e))
      // setError(e.graphQLErrors[0].message);
    })
  }

  if (loading) {
    return <p> loading </p>
  }

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

  return (
    <Body>
      <Flex justifyBetween>
        <img
          src={require("../../assets/images/developer.png")}
          style={{
            width: "8rem",
            height: "12vh",
          }}
          alt="user"
        />
        <div>
          <br />
          <br />
          <br />
          <Button>Change Picture</Button>
        </div>
      </Flex>
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
        <Button
          long
          onClick={() => {
            Update()
          }}
        >
          Update Profile
        </Button>
      </Flex>
    </Body>
  )
}

export default EditProfile
