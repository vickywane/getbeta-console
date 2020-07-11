import * as React from "react"
import styled from "styled-components"
import { FiClock, FiSquare } from "react-icons/fi"

import { Body, Text, Title, Hover } from "../../../../styles/style"
import Sponsors from "../../../event/sponsors"

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
  font-size: 1.2rem;
  align-items: center;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-gap: 1rem 2rem;
`

const MeetupDetails = props => {
  const { name, data } = props

  const sponsors = [
    {
      name: "Facbook Open Source",
    },
  ]

  const { description } = data.getMeetupGroup

  return (
    <div>
      <div style={{ background: "transparent" }}>
        <div style={{ background: " #c0c0c0" }}>
          <Sponsors sponsor={sponsors} screen="meetupgroup" />
        </div>
        <br />
        <Grid>
          <a href="#organizer" style={{ textDecoration: "none" }}>
            <Box>
              <div style={{ padding: "0rem 1.5rem" }}>
                <FiSquare style={{ fontSize: "2.5rem" }} />
              </div>

              <Flex column>
                <Title small>20 </Title>
                <Text color="grey">Meetup Session</Text>
              </Flex>
            </Box>
          </a>

          <a href="#organizer" style={{ textDecoration: "none" }}>
            <Box>
              <div style={{ padding: "0rem 1.5rem" }}>
                <FiSquare style={{ fontSize: "2.5rem" }} />
              </div>

              <Flex column>
                <Title small>00</Title>

                <Text color="grey">Meetup Groups</Text>
              </Flex>
            </Box>
          </a>

          <a href="#organizer" style={{ textDecoration: "none" }}>
            <Box>
              <div style={{ padding: "0rem 1.5rem" }}>
                <FiSquare style={{ fontSize: "2.5rem" }} />
              </div>

              <Flex column>
                <Title small>00</Title>

                <Text color="grey">Meetup Gallery</Text>
              </Flex>
            </Box>
          </a>

          <a href="#organizer" style={{ textDecoration: "none" }}>
            <Box>
              <div style={{ padding: "0rem 1.5rem" }}>
                <FiSquare style={{ fontSize: "2.5rem" }} />
              </div>

              <Flex column>
                <Title small>00</Title>

                <Text color="grey">Meetup Archive</Text>
              </Flex>
            </Box>
          </a>
        </Grid>
      </div>

      <div style={{ padding: "1rem 2rem" }}>
        <Title id="sponsors" small>
          Synopsis
        </Title>
        <Text style={{ textIndent: "60px" }}> {description} </Text>
        <br />
      </div>
    </div>
  )
}

export default MeetupDetails
