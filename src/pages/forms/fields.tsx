import React, { useState } from "react"
import Flex from "styled-flex-component"
import { FiBold, FiItalic, FiList, FiUploadCloud } from "react-icons/fi"
import { IoLogoMarkdown } from "react-icons/io"
import styled from "styled-components"

import {
  Input,
  BigInput,
  TextEditor,
  Label,
  Text,
  Hover,
} from "../../styles/style"

type CustomProps = {
  id: any
  showIcon?: boolean
  Icon?: any
  name: string
  onChange: any
  value?: string
  textEditorSize?: string
  disabled?: boolean
  limit?: number
  type: string
  textarea: boolean
  placeholder: string
}

const HoverSquare = styled(Hover)`
  width : 40px
  height : 40px;
  display : flex;
  justify-content : center;
  align-items : center;
  transition : all 300ms;
  &: hover {
    background: #5f6368;
    color : #fff;
    border-radius : 5px;
  }
`

const Fields = (props: CustomProps) => {
  const {
    onChange,
    name,
    disabled,
    showIcon,
    Icon,
    id,
    textEditorSize,
    value,
    textarea,
    limit,
    placeholder,
    type,
  } = props
  const [DescriptionLimit, setDescriptionLimit] = useState(limit)
  const [Limit, setLimit] = useState(limit)

  function handleInputChange(e, name) {
    e.preventDefault()
    const { value } = e.target
    const empty = ""

    switch (name) {
      case "Event Summary":
        setLimit(Limit - value.length)

      case "Event Description":
        setDescriptionLimit(limit - value.length)

      default:
        break
    }

    onChange(value, name)
  }

  return (
    <div>
      {!textarea ? (
        <Flex column>
          <Label htmlFor={name} small>
            {name}
          </Label>
          {Limit ? (
            <Text
              style={{ padding: "0rem 1rem" }}
              small
              color={Limit < 0 ? "red" : "grey"}
            >
              ({Limit} / {limit} characters left)
            </Text>
          ) : null}
          {showIcon ? (
            <div
              style={{
                display: showIcon ? "flex" : null,
                border: "1px solid grey",
                borderRadius: "5px",
              }}
            >
              <Hover
                style={{
                  background: "#fbfbfb",
                  color: "#0e2f5a",
                  padding: "0.7rem 0.7rem",
                  borderRadius: "5px 0px 0px 5px",
                }}
              >
                {Icon}
              </Hover>
              <Input
                grey
                style={{ padding: "1.7rem 0.7rem" }}
                unmargined
                unbordered
                disabled={disabled}
                id={id}
                type={type}
                onChange={e => handleInputChange(e, name)}
                value={value}
                placeholder={placeholder}
              />
            </div>
          ) : (
            <Input
              disabled={disabled}
              grey
              id={id}
              type={type}
              onChange={e => handleInputChange(e, name)}
              value={value}
              placeholder={placeholder}
            />
          )}
          <br />
        </Flex>
      ) : (
        <Flex column>
          <Label htmlFor={name} small>
            {name}
          </Label>

          <TextEditor small={textEditorSize}>
            <div
              style={{
                borderBottom: "1px solid #c0c0c0",
                borderRadius: "5px 5px 5px 5px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", padding: "0rem 0rem" }}>
                <HoverSquare
                  style={{ padding: "0rem 0rem", margin: "0rem 1rem" }}
                >
                  <FiBold style={{ fontSize: "1.6rem" }} />
                </HoverSquare>

                <HoverSquare
                  style={{ padding: "0rem 0rem", margin: "0rem 1rem" }}
                >
                  <FiItalic style={{ fontSize: "1.6rem" }} />
                </HoverSquare>

                <HoverSquare
                  style={{ padding: "0rem 0rem", margin: "0rem 1rem" }}
                >
                  <FiList style={{ fontSize: "1.6rem" }} />
                </HoverSquare>
              </div>

              {Limit && (
                <Text
                  style={{ padding: "0rem 1rem" }}
                  small
                  color={Limit < 0 ? "red" : "grey"}
                >
                  {DescriptionLimit} / {limit} characters left
                </Text>
              )}
            </div>
            <textarea
              onChange={e => handleInputChange(e, name)}
              placeholder={placeholder}
              value={value}
              id={id}
            />
            <div
              style={{
                borderTop: "1px dashed #0e2f5a",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  padding: "0rem 0rem",
                  margin: "0rem 1rem",
                }}
              >
                <Hover style={{ padding: "0rem 0rem", margin: "0rem 1rem" }}>
                  <IoLogoMarkdown style={{ fontSize: "1.8rem" }} />
                </Hover>

                <Text small>
                  Markdown Formatting Enabled. Drag "n" drop files to insert.{" "}
                </Text>
              </div>

              <HoverSquare
                style={{ padding: "0rem 0rem", margin: "0rem 1rem" }}
              >
                <FiUploadCloud style={{ fontSize: "1.8rem" }} />
              </HoverSquare>
            </div>
          </TextEditor>
        </Flex>
      )}
    </div>
  )
}

export default Fields
