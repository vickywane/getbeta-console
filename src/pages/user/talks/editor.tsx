import React, { useState } from "react"
import { useMutation } from "@apollo/react-hooks"
import { FiArrowLeft } from "react-icons/fi"
import Flex from "styled-flex-component"
import styled from "styled-components"

import { Link } from "react-router-dom"
import Fields from "../../forms/fields"
import { CREATE_TALK_DRAFT } from "../../forms/formsData"
import { Header, Footer, Loader } from "../../../components/"
import { CREATE_TALK } from "../../../data/mutations"
import {
  Contain,
  Body,
  Text,
  Button,
  Label,
  Title,
  BigTitle,
  BigInput,
  Hover,
} from "../../../styles/style"

const Editor = props => {
  const [Title, setTitle] = useState("")
  const [Tags, setTags] = useState({ tag: ["Backend", "DevOps"] })
  const [Tag, setTag] = useState("")
  const [Content, setContent] = useState("")
  const [Summary, setSummary] = useState("")
  const [Description, setDescription] = useState("")
  const [Duration, setDuration] = useState("")

  const [createTalk, { data, loading }] = useMutation(CREATE_TALK)
  //TODO Use legends for the tag box
  function handleChange(value: string, label: string) {
    switch (label) {
      case "Draft Title":
        setTitle(value)
      case "Draft Summary":
        setSummary(value)
      case "Draft Description":
        setDescription(value)
      default:
        break
    }
  }

  const handleSubmit = () => {
    createTalk({
      variables: {
        userId: localStorage.getItem("user_id"),
        title: Title,
        summary: Summary,
        description: Description,
        duration: Duration, // change to Duration type string
        archived: false,
      },
    })
      .then(() => {
        alert("created")
      })
      .catch(e => console.log(e))
  }

  return (
    <div>
      <Header />
      <br />
      <br />
      <Contain>
        <Contain>
          <Flex>
            <Link to="/drafts">
              <Hover style={{ padding: "0.5rem 1rem" }}>
                <FiArrowLeft style={{ fontSize: "2rem" }} />{" "}
              </Hover>
            </Link>
            <BigTitle bold> Create Draft </BigTitle>{" "}
          </Flex>

          <br />
          <Text style={{ padding: "0rem 1.5rem" }}>
            Drafts can be used as talk proposals when applying to speak during
            events.
          </Text>
          <Body>
            {CREATE_TALK_DRAFT.map(
              ({ id, placeholder, label, type, textarea }) => {
                return (
                  <Fields
                    id={id}
                    name={label}
                    placeholder={placeholder}
                    type={type}
                    textarea={textarea}
                    onChange={(e, name) => handleChange(e, name)}
                  />
                )
              }
            )}

            <br />
            <div>
              <Label small> Tags </Label> <hr />
              <div style={{ display: "flex" }}>
                {Tags.tag.map(string => {
                  return (
                    <Text style={{ padding: "0rem 0.7rem" }}> {string} </Text>
                  )
                })}
              </div>
              <input
                placeholder="add tag name"
                type="text"
                value={Tag}
                onChange={e => setTag(e.target.value)}
              />
              <Button
                onClick={() => {
                  console.log(Tag)
                  // setTags.tag.push(Tag)
                  setTags({ tag: [Tag] })
                }}
              >
                Add Tag
              </Button>
            </div>

            <select
              style={{ padding: "0.7rem 1rem" }}
              onChange={e => {
                setDuration(e.target.value)
              }}
            >
              <option value="10 mins">10 mins</option>
              <option value="20 mins">20 mins</option>
              <option value="30 mins">30 mins</option>
              <option value="40 mins">40 mins</option>
              <option value="50 mins">50 mins</option>
              <option value="60 mins">60 mins</option>
            </select>

            {Duration}
          </Body>

          <Flex justifyCenter>
            <Button onClick={() => handleSubmit()}> Create Draft </Button>
          </Flex>
        </Contain>
      </Contain>

      <br />
      <br />
      <br />

      <Footer />
    </div>
  )
}

export default Editor
