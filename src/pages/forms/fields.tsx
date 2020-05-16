import React from "react"
import Flex from "styled-flex-component"

import { Input, BigInput, Label } from "../../styles/style"

type CustomProps = {
  id: string
  name: string
  onChange: any
  value: string
  type: string
  textarea: boolean
  placeholder: string
}

const Fields = (props: CustomProps) => {
  const { onChange, name, id, value, textarea, placeholder, type } = props

  function handleInputChange(e, name) {
    e.preventDefault()
    const { value } = e.target

    onChange(value, name)
  }

  return (
    <div>
      {!textarea ? (
        <Flex column>
          <Label htmlFor={name} small>
            {name}
          </Label>
          <Input
            grey
            id={id}
            type={type}
            onChange={e => handleInputChange(e, name)}
            value={value}
            placeholder={placeholder}
          />
        </Flex>
      ) : (
        <BigInput
          grey
          id={id}
          onChange={e => handleInputChange(e, name)}
          value={value}
          placeholder={placeholder}
        />
      )}
    </div>
  )
}

export default Fields
