import * as React from "react"
import styled from "styled-components"
import { FiClock, FiSquare } from "react-icons/fi"

import { Body, Text, Title, Hover } from "../styles/style"
import Sponsors from "../pages/event/sponsors"

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`

const Box = styled.div`
  display: flex;
  width: 20rem;
  border-radius: 10px;
  flex-direction: row;
  cursor: pointer;
  text-align: center;
  padding: 0.5rem 1rem;
  font-family: calibri;
  font-size: 1.2rem;
  align-items: center;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-gap: 1rem 2rem;
`

const Details = props => {
  const { name } = props.data.createdBy[0]
  const {
    description,
    teams,
    volunteer,
    tracks,
    eventType,
    sponsors,
    meetupGroups,
  } = props.data

  const Type = eventType === "Conference"

  return (
    <div>
    <div style={{background : 'transparent'}} >
      <Sponsors sponsor={sponsors} />
      <br />
      <Grid>
        <a href="#organizer" style={{ textDecoration: "none" }}>
          <Box>
            <div style={{ padding: "0rem 1.5rem" }}>
              <FiSquare style={{ fontSize: "2.5rem" }} />
            </div>

            <Flex column>
              <Title small>20 </Title>
              <Text color="grey">{Type ? "Hours" : "Attendance Hours"}</Text>
            </Flex>
          </Box>
        </a>
        <a href="#organizer" style={{ textDecoration: "none" }}>
          <Box>
            <div style={{ padding: "0rem 1.5rem" }}>
              <FiSquare style={{ fontSize: "2.5rem" }} />
            </div>

            <Flex column>
              <Title small>
                {Type
                  ? tracks === null
                    ? "0"
                    : tracks.length
                  : meetupGroups === null
                  ? "0"
                  : meetupGroups.length} 
              </Title>

              <Text color="grey">{Type ? "Tracks" : "Meetup Groups"}</Text>
            </Flex>
          </Box>
        </a>
        <a href="#organizer" style={{ textDecoration: "none" }}>
          <Box>
            <div style={{ padding: "0rem 1.5rem" }}>
              <FiSquare style={{ fontSize: "2.5rem" }} />
            </div>

            <Flex column>
              <Title small>{volunteer === null ? "0" : volunteer.length}</Title>
              <Text color="grey">{Type ? "Volunteers" : "Facilitators"}</Text>
            </Flex>
          </Box>
        </a>

        <a href="#organizer" style={{ textDecoration: "none" }}>
          <Box>
            <div style={{ padding: "0rem 1.5rem" }}>
              <FiSquare style={{ fontSize: "2.5rem" }} />
            </div>

            <Flex column>
              <Title small> {teams === null ? "0" : teams.length} </Title>
              <Text color="grey"> {Type ? "Teams" : "Sponsors"} </Text>
            </Flex>
          </Box>
        </a>
      </Grid>
      <br />
      <Title style={{ textAlign: "right" }} small>
        Organized by <b> {name} </b>
      </Title>
      </div>

      <div>
        <Title id="sponsors" small>
          Synopsis
        </Title>
        <Text> {description} </Text>
        <br />

        <Title id="about" small>
          Synopsis
        </Title>
        <Text> {description} </Text>
        <br />
        <Title id="organizer" small>
          Synopsis
        </Title>
        <Text> {description} </Text>
      </div>
    </div>
  )
}

export default Details