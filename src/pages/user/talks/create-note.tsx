import React, { useState, useEffect } from 'react'
import Flex from 'styled-flex-component'
import { FiX, FiMoreHorizontal } from 'react-icons/fi'
import styled from 'styled-components'
import { useMutation } from '@apollo/react-hooks'

import Fields from '../../forms/fields'
import { CREATE_NOTE } from '../../../data/mutations'
import { Text, Button, Title, Hover, Section } from '../../../styles/style'
import { Tip } from '../../../components/'

const IdeaCard = styled.div`
  padding: 1rem 1rem;
  border-radius: 7px;
  transition: all 400ms;
`

const CreateNote = (props): JSX.Element => {
  const { talkId } = props

  const [Title, setTitle] = useState('')
  const [Content, setContent] = useState('')
  const [isSaving, setSaving] = useState(false)
  const [Tips, showTips] = useState(false)

  const handleInputs = (value, label) => {
    switch (label) {
      case 'Title':
        setTitle(value)
        break
      case 'Idea':
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
        content: Content
      }
    })
      .then(() => showTips(true))
      .catch(e => console.log(e))
  }

  return (
    <div>
      {Tips && (
        <Tip
          message="Adding a new note"
          timeout={500}
          icon1={<FiMoreHorizontal style={{ fontSize: '2rem' }} />}
        />
      )}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0.7rem 1rem',
          borderBottom: '1px solid #c0c0c0'
        }}
      >
        <Section> New Note </Section>

        <div
          style={{
            justifyContent: 'center',
            opacity: isSaving ? 1 : 0,
            transition: 'all 350ms',
            display: 'flex'
          }}
        >
          <Text color="grey"> Saving Note ... </Text>
        </div>

        <Hover style={{ margin: '0rem 1rem' }}>
          <FiX onClick={() => {}} style={{ fontSize: '1.6rem' }} />
        </Hover>
      </div>

      <IdeaCard>
        <Fields
          name="Note Title"
          id={1}
          placeholder={'Note Title'}
          textarea={false}
          value={Title}
          type="text"
          onChange={e => {
            handleInputs(e, 'Title')
            setSaving(true)
          }}
        />

        <Fields
          name="Draft Notes"
          id={1}
          placeholder={'Your Draft Notes here'}
          textarea={true}
          textEditorSize={'small'}
          value={Content}
          type="text"
          onChange={e => {
            handleInputs(e, 'Idea')
            setSaving(true)
          }}
        />
      </IdeaCard>

      <div style={{ textAlign: 'right' }}>
        <Button
          onClick={() => {
            create()
          }}
        >
          Create Note
        </Button>
      </div>
    </div>
  )
}

export default CreateNote
