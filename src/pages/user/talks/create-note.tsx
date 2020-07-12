import React, { useState, useEffect } from "react"
import Flex from "styled-flex-component"
import {
  FiMail,
  FiCheck,
  FiEdit,
  FiPlus,
  FiX,
  FiTrash2,
  FiArrowLeft,
} from "react-icons/fi"
import styled from "styled-components"
import { useMutation } from "@apollo/react-hooks"
import ReactMarkdown from "react-markdown"

import Fields from "../../forms/fields"
import Review from "./review"
import { CREATE_NOTE } from "../../../data/mutations"
import {
  Contain,
  Input,
  Body,
  Text,
  Head,
  Button,
  Title,
  Hover,
  BigTitle,
  Section,
} from "../../../styles/style"

const IdeaCard = styled.div`
  box-shadow: 0px 2px 4px grey;
  padding: 1rem 1rem;
  background: #fff;
  border-radius: 7px;
  margin: 0rem 7rem;
  transition: all 400ms;
`

const HoverCircle = styled(Hover)`
  background: #c0c0c0;
  border-radius: 50%;
  padding: 0.7rem 0.7rem;
  margin: 0px;
`

const WriteBar = styled.div`
  height: 40vh;
  margin-top: 3rem;
  width: 4rem;
  border-radius: 0px 15px 15px 0px;
  background: #401364;
  display: flex;
  justify-content: center;
  flex-direction: column;
  li {
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin: 2rem 0rem;
  }
`

const CreateNote = (props): JSX.Element => {
  const { talkId } = props

  const [Title, setTitle] = useState("")
  const [Content, setContent] = useState("")
  const [isSaving, setSaving] = useState(false)

  const Grid = styled.div`
    display: grid;
    tramsition: all 300ms;
    grid-gap: ${props => props.reviewOpen && "0rem 1rem"};
    grid-template-columns: ${props => props.reviewOpen && "auto 27rem"};
  `

  const handleInputs = (value, label) => {
    switch (label) {
      case "Title":
        setTitle(value)
        break
      case "Idea":
        setContent(value)
        break
      default:
        break
    }
  }

  useEffect(() => {
    if (isSaving) {
      setTimeout(() => {
        setSaving(false)
      }, 2000)
    }
  }, [isSaving])

  const [createNote, { loading }] = useMutation(CREATE_NOTE)

  const create = () => {
    createNote({
      variables: {
        talkId: talkId,
        title: Title,
        content: Content,
      },
    })
      .then(() => alert("created"))
      .catch(e => console.log(e))
  }

  return (
    <div>
      <IdeaCard>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Section> New Note </Section>

          <div
            style={{
              justifyContent: "center",
              opacity: isSaving ? 1 : 0,
              transition: "all 350ms",
              display: "flex",
            }}
          >
            <Text color="grey"> Saving Note ... </Text>
          </div>

          <Hover style={{ margin: "0rem 1rem" }}>
            <FiX onClick={() => {}} style={{ fontSize: "1.6rem" }} />
          </Hover>
        </div>
        <hr />

        <Fields
          name="Title"
          id={1}
          placeholder={"Note Title"}
          textarea={false}
          value={Title}
          type="text"
          onChange={e => {
            handleInputs(e, "Title")
            setSaving(true)
          }}
        />

        <Fields
          name="Draft Notes"
          id={1}
          placeholder={"Your Draft Notes here"}
          textarea={true}
          textEditorSize={"small"}
          value={Content}
          type="text"
          onChange={e => {
            handleInputs(e, "Idea")
            setSaving(true)
          }}
        />
      </IdeaCard>
      <br />
      <Button
        onClick={() => {
          create()
        }}
      >
        Create Note{" "}
      </Button>
      <br />
    </div>
  )
}

export default CreateNote
