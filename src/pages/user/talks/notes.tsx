import React from 'react'
import { Text, Body, Hover, Section } from '../../../styles/style'
import { FiX, FiChevronRight, FiChevronLeft } from 'react-icons/fi'

const Notes = (props): JSX.Element => {
  const { userId } = props
  const center = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0.7rem 1rem',
          borderBottom: '1px solid #c0c0c0'
        }}
      >
        <Section> New Note </Section>

        <Hover style={{ margin: '0rem 0.3rem' }}>
          <FiX onClick={() => {}} style={{ fontSize: '1.6rem' }} />
        </Hover>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '3rem auto 3rem' }}>
        <div style={{ ...center }}>
          <Hover>
            <FiChevronLeft style={{ fontSize: '1.8rem' }} />
          </Hover>
        </div>
        <div>
          <Text center> User notes </Text>
        </div>
        <div style={{ ...center }}>
          <Hover>
            <FiChevronRight style={{ fontSize: '1.8rem' }} />
          </Hover>
        </div>
      </div>
    </div>
  )
}

export default Notes
