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
      <Label small>
        Name
        <Input
          value={Name}
          onChange={e => {
            setName(e.target.value)
          }}
          placeholder={name}
        />
      </Label>

      <Label small>
        Email
        <Input
          value={Email}
          onChange={e => {
            setEmail(e.target.value)
          }}
          placeholder={email}
        />
      </Label>
      <br />
      <br />

      <Flex justifyCenter>
        <Button
          long
          onClick={() => {
            Update()
          }}
        >
          {" "}
          Save Details{" "}
        </Button>
      </Flex>
    </Body>
  )
}

export default EditProfile
