import * as React from "react"
import styled from "styled-components"
import media from "styled-media-query"
import { FcCustomerSupport } from "react-icons/fc"
import { FiPhone } from "react-icons/fi"

import { Body, Text, Hover } from "../../styles/style"

const SupportWindow = styled.div`
  width: 27%;
  height: 75vh;
  background: #fff;
  color: #000;
  position: absolute;
  position: -webkit-sticky;
  bottom: 2rem;
  margin-left: 5.5rem;
  float: right;
  text-align: center;
  cursor: pointer;
  border-radius: 7px;
  box-shadow: 3px 1px 3px 0px grey;
`

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

const HoverCircle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #c0c0c0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Support = (props): JSX.Element => {
  const { state, data } = props

  const { Email } = data.event

  return (
    <Body>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Text> Event Support </Text>

        <Text> {Email} </Text>
      </div>
      <hr />
      <div style={{ display: "flex" }}>
        <HoverCircle>
          <FcCustomerSupport style={{ fontSize: "2.5rem" }} />
        </HoverCircle>

        <Message style={{ margin: "0rem 1rem" }}>
          <p> Hi There , How can i be of help ? </p>
        </Message>
      </div>

      <br />
    </Body>
  )
}

export default Support
