import React, { useState } from "react"
import Flex from "styled-flex-component"

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
  disabled?: boolean
  limit?: number
  type: string
  textarea: boolean
  placeholder: string
}

const Fields = (props: CustomProps) => {
  const {
    onChange,
    name,
    disabled,
    showIcon,
    Icon,
    id,
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
          {Limit && (
            <Text
              style={{ padding: "0rem 1rem" }}
              small
              color={Limit < 0 ? "red" : "grey"}
            >
              ({DescriptionLimit} / {limit} characters left)
            </Text>
          )}

          <TextEditor>
            <textarea
              onChange={e => handleInputChange(e, name)}
              placeholder={placeholder}
              value={value}
              id={id}
            />
            <div>
              Markdown Formatting Enabled. Drag "n" drop files to insert.{" "}
            </div>
          </TextEditor>
        </Flex>
      )}
    </div>
  )
}

export default Fields
