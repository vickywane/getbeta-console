import React, { useState } from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"
import { useMutation, useQuery } from "@apollo/react-hooks"
import { Redirect } from "react-router-dom"
import { CSSTransition } from "react-transition-group"
import { FiUser, FiMail, FiLock } from "react-icons/fi"

import { AuthInput } from "../formsData"
import Fields from "../fields"
import { CREATE_USER } from "../../../data/mutations"
import { Input, Button, Title, Text, Label } from "../../../styles/style"

// TODO: ADD VALIDATION LATER

const CreateAccount = (props): JSX.Element => {
  const { AuthUser, setAuthState }: any = props

  const [Name, setName] = useState("")
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [ConfirmPassword, setConfirmPassword] = useState("")
  const [Error, setError] = useState("")
  const [CreationStage, setCreationStage] = useState("1")

  const handleChange = (value, label) => {
    switch (label) {
      case "Name":
        setName(value)
        break
      case "Email Address":
        setEmail(value)
        break
      case "Password":
        setPassword(value)
        break
      case "Confirm Password":
        setConfirmPassword(value)
        break
      default:
        break
    }
  }

  const [createUser, { data, loading, error }] = useMutation(CREATE_USER, {
    ignoreResults: false,
    onCompleted: () => {},
  })

  const CreateUser = () => {
    createUser({
      variables: {
        name: Name,
        email: Email,
        password: Password,
      },
    }).catch(e => alert(JSON.stringify(e)))
  }

  if (data) {
    const details = data.createUser.user
    AuthUser(details)
    return <Redirect to="/console" message="Loggging in" />
  }

  if (loading) {
    return <h2> Logging in ... </h2>
  }

  const { CreateAccountStage1, CreateAccountStage2 } = AuthInput
  return (
    <div>
      <br />
      <CSSTransition timeout={300} unmountOnExit in={CreationStage === "1"}>
        <div>
          {CreateAccountStage1.map(({ placeholder, id, label, type }) => {
            return (
              <div>
                <Fields
                  onChange={e => handleChange(e, label)}
                  type={type}
                  showIcon
                  id={id}
                  key={id}
                  Icon={
                    label === "Name" ? (
                      <FiUser style={{ fontSize: "1.7rem" }} />
                    ) : (
                      <FiMail style={{ fontSize: "1.7rem" }} />
                    )
                  }
                  value={label === "Name" ? Name : Email}
                  name={label}
                  placeholder={placeholder}
                  textarea={false}
                />
              </div>
            )
          })}
        </div>
      </CSSTransition>

      <CSSTransition timeout={300} unmountOnExit in={CreationStage === "2"}>
        <div>
          {CreateAccountStage2.map(({ placeholder, id, label, type }) => {
            return (
              <div>
                <Fields
                  onChange={e => handleChange(e, label)}
                  type={type}
                  id={id}
                  key={id}
                  showIcon
                  Icon={
                    label === "Name" ? (
                      <FiLock style={{ fontSize: "1.7rem" }} />
                    ) : (
                      <FiLock style={{ fontSize: "1.7rem" }} />
                    )
                  }
                  value={label === "Password" ? Password : ConfirmPassword}
                  name={label}
                  placeholder={placeholder}
                  textarea={false}
                />
              </div>
            )
          })}
        </div>
      </CSSTransition>
      <p style={{ color: "red" }}> {Error} </p>

      <div style={{ textAlign: "right" }}>
        <CSSTransition unmountOnExit timeout={200} in={CreationStage === "1"}>
          <Button
            long
            transparent={
              Name.length < 5 || Email.length < 7 || !Email.includes("@")
            }
            disabled={
              Name.length < 5 || Email.length < 7 || !Email.includes("@")
            }
            onClick={() => {
              setCreationStage("2")
            }}
          >
            Proceed
          </Button>
        </CSSTransition>
      </div>
      <br />
      <Flex justifyCenter>
        <CSSTransition unmountOnExit timeout={200} in={CreationStage === "2"}>
          <Button
            long
            transparent={Password != ConfirmPassword ? true : false}
            disabled={Password != ConfirmPassword ? true : false}
            onClick={() => {
              CreateUser()
            }}
          >
            Create Account
          </Button>
        </CSSTransition>
      </Flex>
      <br />
      <Flex justifyCenter>
        <Flex>
          <Text center small style={{ padding: "0rem 1rem", color: "grey" }}>
            Own an account?
          </Text>

          <Text
            center
            small
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => {
              setAuthState("Login")
            }}
          >
            Login Instead
          </Text>
        </Flex>
      </Flex>
    </div>
  )
}

export default CreateAccount
