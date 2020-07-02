import React from "react"
import styled from "styled-components"

import {} from "../../components/"
import { Contain, Body, Text, Title, Button } from "../../styles/style"

const Grid = styled.div`
  display : grid
  grid-gap : 1rem 1rem
  grid-template-columns : 27rem auto
`

const List = styled.div`
  width: 26rem;
   h4 {
    font-weight: 600;
    font-size: 1.6rem;
  }
  li {
    list-style: none;
    padding: 0.5rem 1rem;
    margin: 1.5rem 0.5rem;
    border: 2px solid violet;
    border-radius: 5px;
    h5 {
      cursor: pointer;
      font-weight: 500;
      font-size: 1.3rem;
    }
  }
`

const Mobile = () => {
  return (
    <Body>
      <br />
      <Grid>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            placeItems: "center",
          }}
        >
          <img
            alt="iphone"
            style={{ height: "600px", width: "500px" }}
            src={require("../../assets/ssvg/iphone.svg")}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Body>
            <List>
              <h4> Mobile Interface </h4>
              <hr />

              <li>
                <h5> Event Schedules </h5>
                <Text small> Send invitations to attendees and peple </Text>
              </li>

              <li>
                <h5> Event Reminders </h5>
                <Text small> Send email invitations to some people </Text>
              </li>

              <li>
                <h5>Realtime Talk Slides</h5>
                <Text small> Send email invitations to some people </Text>
              </li>

              <li>
                <h5>In-Event Attendee Engagement</h5>
                <Text small> Send email invitations to some people </Text>
              </li>
            </List>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button long>Get Started</Button>
            </div>
          </Body>
        </div>
      </Grid>
    </Body>
  )
}

export default Mobile
