import React, { useState } from "react"
import styled from "styled-components"
import { FiX, FiClock ,  FiArchive } from "react-icons/fi"
import { AiOutlineHistory } from "react-icons/ai"

import { Hover, Head, Title, Text, Section, Button } from "../../styles/style"

const Window = styled.div`
  width: auto;
  height: ${window.innerHeight};
  background: #fbfbfb;
  border-left: 0.3px solid #C0C0C0;
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
  const { state, dispatch } = props

  const {  actions, dateCreated, eventType } = props.eventData

  return (
    <Window show={Visibility}>
      {Visibility && (
        <div>
          <Head header style={{ padding: "1.4rem 0.5rem" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Hover style={{ padding: "0rem 0.5rem" }}>
                <AiOutlineHistory style={{ fontSize: "1.8rem" }} />
              </Hover>
              <Title style={{ color: "#0e2f5a" }} small>
                Timeline
              </Title>
            </div>
          </Head>
          <br />

          <div style={{ overflow: "auto", height: window.innerHeight - 270 }}>
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
        </div>
      )}

      <br />
      {eventType === "Meetup" ? null : (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            onClick={() => {
              dispatch({
                type: "OPEN_ARCHIVE",
              })
            }}
            long
          >
          <div style={{display : 'flex'}} >
          <Hover style={{margin : '0rem 0.7rem'}} >
            <FiArchive style={{fontSize : '1.5rem'}} />            
          </Hover>
            View Event Archive{" "}
            </div>
          </Button>
        </div>
      )}
    </Window>
  )
}

export default Timeline
