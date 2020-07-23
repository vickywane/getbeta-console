import React from 'react'
import { Text, Body, Hover, Section } from '../../../styles/style'
import { FiX, FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { useQuery } from '@apollo/react-hooks'
import { GET_USER_NOTES } from '../../../data/queries'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'

const NoteWindow = styled.div`
    position : absolute;
    height : 73vh
    width : 42rem;
    top : 5rem;
      border-radius : 5px;
      margin-left : 12rem;
      margin-top : 2rem;
     background: linear-gradient(to bottom, rgba(235,236,240,1) 0%,rgba(255,255,255,1) 60%);
    box-shadow : 0px 5px 9px grey;
  `

const Notes = (props): JSX.Element => {
  const { talkId, showNotes, closeNotes } = props
  const center = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  const { data, loading, error } = useQuery(GET_USER_NOTES, {
    variables: {
      id: talkId
    }
  })

  if (error) {
    return <p> error happened </p>
  }

  if (loading) {
    return <p> loading note </p>
  }

  if (data) {
    const { notes } = data.talk

    return (
      <CSSTransition timeout={300} unmountOnExit in={showNotes}>
        <div>
          {notes.map(({ title }) => {
            return (
              <NoteWindow>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '0.7rem 1rem',
                    borderBottom: '1px solid #c0c0c0'
                  }}
                >
                  <Section> Draft Notes ( {notes.length} ) </Section>

                  <Hover onClick={() => closeNotes()} style={{ margin: '0rem 0.3rem' }}>
                    <FiX onClick={() => {}} style={{ fontSize: '1.8rem' }} />
                  </Hover>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '3rem auto 3rem' }}>
                  <div style={{ ...center }}>
                    <Hover>
                      <FiChevronLeft style={{ fontSize: '2.5rem' }} />
                    </Hover>
                  </div>
                  <div>{title}</div>
                  <div style={{ ...center }}>
                    <Hover>
                      <FiChevronRight style={{ fontSize: '2.5rem' }} />
                    </Hover>
                  </div>
                </div>
              </NoteWindow>
            )
          })}
        </div>
      </CSSTransition>
    )
  }
}

export default Notes
