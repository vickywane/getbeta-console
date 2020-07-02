import React, { useState } from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"
import { FiLink, FiAlertCircle } from "react-icons/fi"
import media from "styled-media-query"
import Markdown from "react-markdown"

import { Body, Text, Hover, Title, Tab, TabColumn } from "../../../styles/style"

const Input = styled.input`
  width : 40rem;
  margin : 0rem 1rem;
  padding : 0.8rem 1rem;
  border: 1px solid grey;
  outline : 0px;
  border-radius : 5px
  height : auto;
`

const BigInput = styled.textarea`
  width: auto;
  height: 50vh;
  flex: 1;
  width: 40rem;
  margin: 0rem 1.5rem;
  padding: 0.5rem 1rem;
  border: 0px;
  outline: 0px;
`

const Message = styled.div`
  border: 1px solid grey;
  outline: 0px;
  width: auto;
  height: auto;
  flex: 1;
  border-radius: 5px;
  padding: 0.5rem 2rem;
  margin: 0rem 3rem;
  ${media.lessThan("huge")`
    padding: 0.5rem 3rem;
    margin: 0rem 3rem;
  `};
  ${media.lessThan("large")`
    padding: 0.5rem 2rem;
  margin: 0rem 2rem;
  `};
  ${media.lessThan("medium")`
    padding: 0.5rem 0.5rem;
    margin: 0rem 0.5rem;
  `}
`

const Grid = styled.div`
  display: grid;
  grid-gap : 1rem 1rem;
  margin : 1rem 0rem
  grid-template-columns: 70% 30%;
  ${media.lessThan("large")`
    display : flex;
    flex-direction: column;
    div {
      margin : 1rem 0rem
    }
  `}
`

const Placeholder =
  "Invitation To Join Concatenate Invitation To Join Concatenate Invitation To Join Concatenate Invitation To Join Concatenate \n Invitation To Join Concatenate Invitation To Join Concatenate Invitation To Join Concatenate Invitation To Join Concatenate Invitation To Join Concatenate Invitation To Join Concatenate Invitation To Join Concatenate Invitation To Join Concatenate Invitation To Join Concatenate Invitation To Join Concatenate Invitation To Join Concatenate Invitation To Join Concatenate Invitation To Join Concatenate Invitation To Join Concatenate Invitation To Join Concatenate Invitation To Join Concatenate Invitation To Join Concatenate Invitation To Join Concatenate Invitation To Join Concatenate Invitation To Join Concatenate   "

const Compose = props => {
  const [Email, setEmail] = useState("")
  const { eventName } = props
  const [Role, setRole] = useState("Guest")
  const [Write, setWrite] = useState(false)

  return (
    <div>
      <Grid>
        <div style={{ display: "flex" }}>
          <Text> To : </Text>{" "}
          <Input
            type="text"
            value={Email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Recipient Email Address"
          />
        </div>

        <div style={{ display: "flex" }}>
          <Text> Role : </Text>
          <select
            style={{
              borderRadius: "7px",
              width: "7rem",
              padding: "0rem 0.5rem",
              margin: "0rem 1rem",
            }}
            value={Role}
            onChange={e => setRole(e.target.value)}
          >
            <option selected value="Guest">
              Guest
            </option>

            <option value="Sponsor">Sponsor</option>

            <option value="Attendee"> Attendee</option>

            <option value="Volunteer">Volunteer</option>
          </select>
        </div>
      </Grid>

      <div style={{ display: "flex" }}>
        <input
          style={{ margin: "0.5rem 0rem" }}
          type="checkbox"
          value={"checked"}
        />

        <Text style={{ padding: "0rem 0.7rem" }} small>
          Grant Access to Oasis Console
        </Text>
      </div>

      <br />
      <div style={{display : 'flex' , justifyContent : 'center'  , color : "grey"}} >
        <Hover style={{ padding: "0rem 0.5rem" }}>
          <FiAlertCircle style={{ fontSize: "1.7rem" }} />
        </Hover>
        <Text center >
          Touch Message Body to edit message{" "}
        </Text> 
      </div>

      <Message>
        <br />
        <Text
          style={{ padding: "0rem 2rem" }}
          color={Email.length <= 0 ? "grey" : null}
        >
          {Email.length <= 0 ? "Someone@gmail.com" : Email}{" "}
        </Text>
        <br />
        <Title small center>
          Invitation To Join {eventName} as{" "}
          {Role.startsWith("A") ? `an ${Role}` : `a ${Role}`}
        </Title>

        {!Write ? (
          <div
            onClick={() => setWrite(true)}
            style={{
              color: "grey",
              textAlign: "center",
              cursor: "pointer",
              lineHeight: "2rem",
              fontSize: "1.2rem",
            }}
          >
            <Markdown source={Placeholder} />
          </div>
        ) : (
          <div>
            <BigInput placeholder="Invitation Email Content" />
          </div>
        )}
      </Message>
      <br />
    </div>
  )
}

export default Compose
