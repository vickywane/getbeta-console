import React, { useState } from 'react'
import styled from 'styled-components'
import { FiX } from 'react-icons/fi'

import { inject, observer } from 'mobx-react'
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
  const { handleClose } = props

  const [SessionName, setSessionName] = useState('')
  const [SessionEmail, setSessionEmail] = useState('')
  const [SessionAmount, setSessionAmount] = useState('')

  return (
    <Card>
      <Title style={{ padding: '1rem 0', textAlign: 'center', color: '#0072CE' }}>
        Create Live Session
      </Title>
      <hr />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div>
          <InputBody>
            <label> Full Name </label>
            <input
              value={SessionName}
              onChange={e => setSessionName(e.target.value)}
              type="text"
              placeholder="Full Name"
            />
          </InputBody>

          <InputBody>
            <label> Email Address </label>
            <input
              value={SessionEmail}
              onChange={e => setSessionEmail(e.target.value)}
              type="email"
              placeholder="Email Address"
            />
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
            <input
              value={SessionAmount}
              onChange={e => setSessionAmount(e.target.value)}
              type="number"
              placeholder=" Amount"
            />
          </InputBody>
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
              onClick={() => handleClose(false)}
              style={{ margin: '0 1rem', background: 'grey', border: '1px solid grey' }}
            >
              Cancel
            </Button>
            <Button>Create Session</Button>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default inject('UserStore')(observer(CreateSession))
