import React from "react"
import styled from "styled-components"

import { Title, Text, Button } from "../../styles/style"

const Body = styled.div`
	background : #fbfbfb ;	
	width : 100%
	display : flex;
	justify-content : center;
	align-items : center;	
`

const Card = styled.div`
	width : 30rem;
	height : 50vh;
	padding : 0.7rem 1rem
	background : #fff;
	border-radius : 15px;
	box-shadow : 0px 7px 12px solid grey;
`

const BigBtn = styled(Button)`
  width: 22rem;
  background: #dc143c;
  border: 1px solid #dc143c;
  &: hover {
    color: #dc143c;
  }
`

const IsArchived = (props): JSX.Element => {
  const { name, date } = props

  return (
    <Body style={{ height: window.innerHeight }}>
      <Card>
        <div style={{ textAlign: "center" }}>
          <img
            alt={"sad face"}
            src={require("../../assets/ssvg/sample.svg")}
            style={{ maxWidth: "50%" }}
          />
        </div>

        <br />
        <Title style={{ color: "#401364" }} center>
          {" "}
          {name}{" "}
        </Title>
        <Text center>
          {" "}
          This event has been archived since {date} by it's organizing team.{" "}
        </Text>
        <br />
        <Text small color="grey">
          Are we wrong?{" "}
        </Text>

        <hr />
        <div style={{ textAlign: "center" }}>
          <BigBtn> Report This As An Error </BigBtn>
        </div>
        <br />
      </Card>
    </Body>
  )
}

export default IsArchived
