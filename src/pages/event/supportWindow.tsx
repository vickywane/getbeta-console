import * as React from 'react'
import styled from 'styled-components'
import { FcCustomerSupport } from 'react-icons/fc'
import { IoIosSend, IoIosMail } from 'react-icons/io'

import { Body, Hover, Text } from '../../styles/style'

const Message = styled.div`
    background : #fbfbfb;
    padding: 0.8rem 1rem
    border-radius : 5px
    display : flex;
    flex : 1
    width : auto; 
    p {
      color : #0e2f5a;
    }
`

const HoverCircle = styled(Hover)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #c0c0c0;
  display: flex;
  align-items: center;
  transition: all 400ms;
  justify-content: center;
  &: hover {
    cursor: pointer;
    color: #0e2f5a;
    border: 1px solid #0e2f5a;
  }
`

const InputDiv = styled.div`
  width: auto;
  display: flex;
  flex: 1;
  padding: 0.4rem 0.7rem;
  border: 1px solid #c0c0c0;
  border-radius: 5px;
  transition: all 400ms;
  justify-content: space-between;
  input {
    border: 0px;
    outline: 0px;
    width: auto;
    display: flex;
    flex: 1;
    background: transparent;
  }
  div {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 400ms;
    border: 1px solid #c0c0c0;
    border-radius: 50%;
    color: #c0c0c0;
  }
  &: hover {
    div {
      cursor: pointer;
      color: #0e2f5a;
      border: 1px solid #0e2f5a;
    }
  }
`

const Support = (props): JSX.Element => {
  const { state, data } = props
  const { Email } = data.event

  const [MessageValue, setMessageValue] = React.useState<string>('')

  return (
    <Body>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Text> Event Support </Text>

        <a href={`gmail.com/${Email}`} target="_blank" rel={'noopener'}>
          <HoverCircle>
            <IoIosMail style={{ fontSize: '1.8rem' }} />
          </HoverCircle>
        </a>
      </div>
      <hr />
      <div style={{ display: 'flex' }}>
        <HoverCircle>
          <FcCustomerSupport style={{ fontSize: '2.5rem' }} />
        </HoverCircle>

        <Message style={{ margin: '0rem 1rem' }}>
          <p> Hi There , How can i be of help ? </p>
        </Message>
      </div>

      <br />
      <InputDiv>
        <input
          value={MessageValue}
          onChange={e => {
            e.preventDefault()
            setMessageValue(e.target.value)
          }}
          placeholder={'Send a' + ' message'}
          type={'text'}
        />
        <div style={{ marginLeft: '0.5rem' }}>
          <IoIosSend style={{ color: '#0e2f5a', fontSize: '1.6rem', transform: 'rotate(45deg)' }} />
        </div>
      </InputDiv>
    </Body>
  )
}

export default Support
