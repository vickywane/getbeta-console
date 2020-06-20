import * as React from "react"
import Flex from "styled-flex-component"

import styled from "styled-components"
import { Title, Button, Text, Hover } from "../../../styles/style"
import { EmptyData } from "../../../components/placeholders"

const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin: 1rem 0rem;
`

const Attendees = props => {
  const { attendees } = props.attendees

  return (
    <div>
      {attendees === null ? (
        <EmptyData
          link={"https://my-event.netlify.com"}
          feature={"Attendees Support"}
          message={"This Event currently has no attendees."}
        />
      ) : (
        <div>
          {attendees.map(({ id, user, dateJoined }) => {
            return (
              <List>
                <div>
                  <img
                    alt="User"
                    style={{ height: "70px", width: "70px" }}
                    src={require("../../../assets/images/developer.png")}
                  />
                </div>
                {user.map(({ name, email }) => {
                  return (
                    <div style={{ display: "flex" }}>
                      <Text style={{ padding: "0rem 1rem" }}> {name} </Text>
                      <Text style={{ padding: "0rem 1rem" }}> {email} </Text>
                    </div>
                  )
                })}
                <Text> {dateJoined} </Text>
              </List>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Attendees
