import React from 'react'
import styled from 'styled-components'
import { FiX } from 'react-icons/fi'

import { Text, Body, Title, Button } from '../../../styles/style'

const Card = styled(Body)`
  height: 75%;
  width: 35%;
  background: #fff;
  padding: 1.5rem 1rem;
  border-radius: 5px;
  box-shadow: 0 3px 4px;
`

const InputBody = styled.div`
  margin: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  label {
  }
  input {
    font-size: 0.9rem;
    padding: 0.6rem 1rem;
    border: 1px solid #c0c0c0;
    border-radius: 1px;
    width: 29rem;
  }
`

const CreateSession = props => {
  return (
    <Card>
      <Title style={{ padding: '1rem 2rem', textAlign: 'center', color: '#0072CE' }}>
        {' '}
        Create Live Session{' '}
      </Title>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div>
          <InputBody>
            <label> Full Name </label>
            <input type="text" placeholder="Full Name" />
          </InputBody>

          <InputBody>
            <label> Email Address </label>
            <input type="email" placeholder="Email Address" />
          </InputBody>

          <InputBody>
            <label> Enter Password </label>
            <input type="password" placeholder="Enter Password" />
          </InputBody>

          <InputBody>
            <label> Confirm Password </label>
            <input type="password" placeholder=" Confirm Password" />
          </InputBody>

          <InputBody>
            <label> Amount </label>
            <input type="number" placeholder=" Amount" />
          </InputBody>
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button style={{ margin: '0 1rem', background: 'grey', border: '1px solid grey' }}>
              Cancel{' '}
            </Button>
            <Button>Create Session</Button>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default CreateSession