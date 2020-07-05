import * as React from "react"
import Flex from "styled-flex-component"
import { useQuery } from "@apollo/react-hooks"

import styled from "styled-components"
import { Title, Button, Text, Hover, Body } from "../../../styles/style"
import { EmptyData } from "../../../components/placeholders"
import { GET_EVENT_ATTENDEES } from "../../../data/queries"

const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin: 1rem 0rem;
`

const Attendees = props => {
  const { eventId } = props

  const { data, loading, error } = useQuery(GET_EVENT_ATTENDEES, {
    variables: {
      id: eventId,
      name: "",
    },
  })

  if (error) {
    console.log(error)
    return <p> error</p>
  }

if (loading) {
    console.log(error)
    return <p> loading ..</p>
  }


  if (data) {
    console.log(data)
    const { attendees } = data.event

    return (
      <Body>
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
      </Body>
    )
  }
}

export default Attendees
