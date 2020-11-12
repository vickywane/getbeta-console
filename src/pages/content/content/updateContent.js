import React, { useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { inject, observer } from 'mobx-react'

import {
  Body,
  Title,
  Button,
  CreateCourseInputField as InputBody,
} from '../../../styles/style'

const handleUpdate = _ => {}

const UpdateContent = props => {
  const { isLoading } = props.ContentStore
  const { data } = props

  const [updateTitle, setUpdateTitle] = useState(data.title)
  const [updateDescription, setUpdatedDescription] = useState(data.descrp)

  return (
    <Body>
      <Title> Edit Content </Title> <hr />
      <div>
        <InputBody>
          <label> Content Title </label>
          <input
            type="text"
            value={updateTitle}
            placeholder={data.title}
            onChange={e => {
              setUpdateTitle(e.target.value)
            }}
          />
        </InputBody>
        <InputBody>
          <label> Content Description </label>
          <textarea
            type="text"
            value={updateDescription}
            placeholder={data.descrp}
            onChange={e => setUpdatedDescription(e.target.value)}
          />
        </InputBody>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          style={{
            width: '90%'
          }}
          onClick={() => {
            handleUpdate()
          }}
        >
          {isLoading ? 'Saving' : 'Save'} Changes.
          {isLoading && (
            <div style={{ paddingLeft: '.7rem' }}>
              <Spinner size="sm" animation="border" role="status" />
            </div>
          )}
        </Button>
      </div>
    </Body>
  )
}

export default inject('ContentStore')(observer(UpdateContent))
