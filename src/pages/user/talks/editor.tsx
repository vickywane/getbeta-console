import React, { useState } from "react"
import { useMutation } from "@apollo/react-hooks"
import { FiArrowLeft } from "react-icons/fi"
import Flex from "styled-flex-component"
import styled from "styled-components"
 
import { Link , Redirect } from "react-router-dom"
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
  Input,
  Hover,
} from "../../../styles/style"

const StyledField = styled(Input)`
  width: 30rem;
`

const TagBody = styled.div`
  display: flex;
  overflow : auto
  li {
    text-align : center
    padding: 0.7rem 2rem;
    background: #5f6368;
    color: #fff;
    border-radius: 30px;
    list-style: none;
    margin: 0rem 1rem;
  }
`

const Editor = props => {
  const [Title, setTitle] = useState("")
  const [Tags, setTags] = useState(new Array)
  const [Tag, setTag] = useState("")
  const [Content, setContent] = useState("")
  const [Summary, setSummary] = useState("")
  const [Description, setDescription] = useState("")
  const [Duration, setDuration] = useState("")
  const [TagValue, addTagValue] = useState("")

  const [createTalk, { data, loading }] = useMutation(CREATE_TALK)
  function handleChange(value: string, label: string) {
    switch (label) {
      case "Draft Title":
        setTitle(value)
      case "Draft Summary":
        setSummary(value)
      case "Draft Description":
        setDescription(value)
      case "Tags":
        addTagValue(value)
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
        duration: Duration,
        archived: false,
      },
    })
      .then(() => {
        return <Redirect to="/drafts" message="Moving to draft." />
      })
      .catch(e => console.log(e))
  }

  const addTag = () => {
    alert("pressed")
    setTags([TagValue])
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
              <TagBody>
                {Tags.map(string => {
                  return <li> {string} </li>
                })}
              </TagBody>
              <hr />
              <Fields
                id={4}
                name="Draft Tags"
                textarea={false}
                placeholder="Value tags from draft content"
                type="text"
                value={TagValue}
                onChange={e => handleChange(e, "Tags")}
              />
              <Button onClick={() => addTag()}>Add Tag</Button>
            </div>
            <br />
            <Label>
              Estimated Draft Duration
              <br />
              <div>
                <select
                  style={{ margin: "0.6rem 0.4rem", padding: "0.5rem 1rem" }}
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
              </div>
            </Label>
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
