import React from 'react'
import { IoIosTimer } from 'react-icons/io'
import styled from 'styled-components'

import { Body, Hover, Text, Title, Button } from '../../../styles/style'

const Note = styled.div`
  height: 40vh;
  width: 40rem;
  background: #fff;
  padding: 1rem 1rem;
  box-shadow: 0px 2px 3px grey;
  border-radius: 3px;
`

const StreamPreview = (props): JSX.Element => {
  const { data, dispatch } = props
  const { title, createdAt, summary, createdBy, duration } = data

  return (
    <div>
      <Body
        style={{
          padding: '5rem 2rem',
          color: '#fff',
          height: 'auto',
          background: 'linear-gradient(to' + ' top,#1a1e43ed,' + ' transparent)',
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <div style={{ width: '50rem' }}>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div
            style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}
          >
            <div>
              <div>
                <Text
                  style={{
                    margin: '0.6rem 0.5rem',
                    width: '7rem',
                    marginLeft: '5rem',
                    color: '#fff',
                    background: '#f84e06',
                    borderRadius: '15px',
                    textAlign: 'center',
                    padding: '0.2rem 0.5rem',
                    fontSize: '1rem',
                    boxShadow: '0px 2px 4px solid #f84e06'
                  }}
                >
                  Coming Up
                </Text>
              </div>
              <Title center> {title} </Title>
              <Text center> {summary} </Text>
            </div>

            <div style={{ display: 'flex' }}>
              <Button style={{ marginLeft: '7rem' }}>Follow Stream</Button>

              <Button style={{ marginLeft: '7rem' }}>Wait For Stream</Button>
            </div>
          </div>
        </div>

        <div>
          <div style={{ display: 'column', flexDirection: 'row' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div
                style={{
                  margin: '1rem 0rem',
                  height: '140px',
                  width: '140px',
                  background: 'grey',
                  borderRadius: '50%'
                }}
              />
            </div>

            <Text center> {createdBy[0].name} </Text>
          </div>
          <Text center>
            Estimated : <span> {duration} </span>{' '}
          </Text>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Hover style={{ margin: '0rem 0.5rem' }}>
              <IoIosTimer style={{ fontSize: '1.6rem' }} />
            </Hover>

            <Text white> Starting {createdAt} </Text>
          </div>
        </div>
      </Body>

      <Body style={{ background: '#eeeeee' }}>
        <Note>
          <Title small>Stream Notes</Title>
        </Note>

        <br />
      </Body>
    </div>
  )
}

export default StreamPreview
