import React, { useState } from "react"
import styled from "styled-components"
import { FiX, FiClock } from "react-icons/fi"

import { Hover, Head, Title, Text, Section, Button } from "../../styles/style"

const Window = styled.div`
  width: auto;
  height: ${window.innerHeight};
  background: #fbfbfb;
  border-left: 0.3px solid #5f6368;
`

const List = styled.li`
  list-style: none;
  padding: 0rem 0.5rem;
  display: flex;
`

const Circle = styled.div`
  padding: 0.5rem 0.5rem;
  border-left: 2px dashed #5f6368;
`

const Timeline = props => {
  const [Visibility, setVisibility] = useState(true)

  const { actions, dateCreated, eventType } = props.eventData

  console.log(props.eventData)
  return (
    <Window show={Visibility}>
      {Visibility ? (
        <div>
          <Head header style={{ padding: "1.4rem 0.5rem" }}>
            <div style={{ display: "flex" }}>
              <Hover style={{ padding: "0rem 0.5rem" }}>
                <FiClock style={{ fontSize: "1.7rem" }} />
              </Hover>
              <Title style={{ color: "#0e2f5a" }} small>
                Timeline{" "}
              </Title>
            </div>{" "}
          </Head>
          <br />

          {actions === null ? (
            <Text center> Event created on {dateCreated} </Text>
          ) : (
            actions.map(name => {
              return (
                <List key={Math.random()}>
                  <Text
                    small
                    color="#0e2f5a"
                    style={{ padding: "0rem 0.5rem" }}
                  >
                    {name}{" "}
                  </Text>
                </List>
              )
            })
          )}
        </div>
      ) : null}

      <br />
      {eventType === "Meetup" ? null : (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button> View Previous Iterations </Button>{" "}
        </div>
      )}
    </Window>
  )
}

export default Timeline
