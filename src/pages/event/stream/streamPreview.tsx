import React from 'react'
import { Body, Hover, Text, Title, Button } from '../../../styles/style'

import { IoIosTimer } from 'react-icons/io'

const StreamPreview = (props): JSX.Element => {
  const { data, dispatch } = props
  const { title, createdAt, summary, createdBy } = data

  return (
    <div>
      <Body
        style={{
          color: '#fff',
          height: '40vh',
          background: 'linear-gradient(to' + ' top,#1a1e43ed,' + ' transparent)'
        }}
      >
        <br />
        <br />
        <br />
        <br />
        <div style={{ display: 'flex' }}>
          <Hover style={{ margin: '0rem 0.5rem' }}>
            <IoIosTimer style={{ fontSize: '1.6rem' }} />
          </Hover>
          <Text white> {createdBy[0].name} </Text>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <Button>Follow Stream</Button>
          </div>
          <div>
            <Title> {title} </Title>
            <Text>Starting in {createdAt}</Text>
          </div>

          <div style={{ display: 'column', flexDirection: 'row' }}>
            <div
              style={{
                margin: '1rem 0rem',
                height: '140px',
                width: '140px',
                background: 'grey',
                borderRadius: '50%'
              }}
            />
            <Text> {createdBy[0].name} </Text>
          </div>
        </div>
      </Body>

      <Body style={{ background: '#fbfbfb' }}>
        <Text center>{summary}</Text>

        <Title> Stream Notes </Title>

        <br />
        <br />
        <br />
        <br />
      </Body>
    </div>
  )
}

export default StreamPreview
