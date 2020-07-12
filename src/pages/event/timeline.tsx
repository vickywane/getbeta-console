import React, { useState } from "react"
import styled from "styled-components"
import { FiX, FiClock, FiArchive } from "react-icons/fi"
import { AiOutlineHistory } from "react-icons/ai"

import { Hover, Head, Title, Text, Section, Button } from "../../styles/style"

const Window = styled.div`
  width: auto;
  height: ${window.innerHeight};
  background: #fbfbfb;
  border-left: 0.3px solid #c0c0c0;
`

const List = styled.li`
  list-style: none;
  padding: 0rem 0.5rem;
  display: flex;
  div {
    display: flex;
  }
`

const Circle = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid #401364;
  border-radius: 50%;
  background: #401364;
`

const Line = styled.div`
  height: 6vh;
  border-right: 3px dashed #401364;
  margin: 10px 10px;
`

const Timeline = props => {
  const [Visibility, setVisibility] = useState(true)
  const { state, dispatch } = props

  const { actions, dateCreated, eventType } = props.eventData

  return (
    <Window show={Visibility}>
      {Visibility && (
        <div>
          <Head header style={{ padding: "1.4rem 0rem 0.5rem" }}>
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
                    <div>
                      <div
                        style={{
                          flexDirection: "column",
                          margin: "0rem 0.5rem",
                        }}
                      >
                        <Circle />
                        <Line />
                      </div>
                      <Text
                        small
                        color="#0e2f5a"
                        style={{ padding: "0rem 0.5rem" }}
                      >
                        {name}{" "}
                      </Text>
                    </div>
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
            <div style={{ display: "flex" }}>
              <Hover style={{ margin: "0rem 0.7rem" }}>
                <FiArchive style={{ fontSize: "1.5rem" }} />
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
