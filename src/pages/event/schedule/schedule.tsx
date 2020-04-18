import * as React from "react"
import Flex from "styled-flex-component"
import { Link } from "react-router-dom"
import { useQuery } from "@apollo/react-hooks"

import { TRACKS } from "../../../data/queries"
import { Panes, Header, Footer, Loader } from "../../../components/"
import { Grid, ScheduleCard, Text, Contain, Title } from "../../../styles/style"

const Data = [
  {
    id: 1,
    name: "Design Track",
    time: "12pm - 2pm",
  },
  {
    id: 2,
    name: "Documentation Track",
    time: "2pm - 3pm",
  },
  {
    id: 3,
    name: "Android Track",
    time: "2pm - 3pm",
  },
  {
    id: 4,
    name: "Mobile Web Track",
    time: "2pm - 3pm",
  },
]

//Todo Make talk cover image an image background

const Schedule = () => {
  const [Click, setClick] = React.useState(false)

  const { data, loading, error } = useQuery(TRACKS)

  if (error) {
    return <Loader type={"loading"} />
  }

  if (loading) {
    return <Loader type={"error"} />
  }

  const { tracks } = data
  return (
    <div>
      <Contain
        style={{
          backgroundColor: "aliceblue",
          height: window.innerHeight - 50,
          boxShadow: "5px 4px 4px grey",
        }}
      >
        <br />
        <br />

        <Grid>
          {Data.map(({ id, time, name }) => {
            return (
              <ScheduleCard
                onClick={() => setClick(!Click)}
                style={{ borderRight: Click ? "5px solid blue" : "5px" }}
                padded
                key={id}
              >
                <Flex column>
                  <Title small center bold>
                    {name}
                  </Title>
                  <Text small center style={{ color: "grey" }}>
                    {time}{" "}
                  </Text>
                </Flex>
              </ScheduleCard>
            )
          })}
        </Grid>
        <br />
        <br />
      </Contain>
    </div>
  )
}

export default Schedule
