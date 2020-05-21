import * as React from "react"
import Flex from "styled-flex-component"
import { Link } from "react-router-dom"
import { useQuery } from "@apollo/react-hooks"

import { TRACKS } from "../../../data/queries"
import { Panes, Header, Footer, Loader } from "../../../components/"
import { Grid, ScheduleCard, Text, Contain, Title } from "../../../styles/style"

const Schedule = props => {
  const [Click, setClick] = React.useState(false)

  const { data } = props
  return (
    <Contain>
      <br />
      <br />

      {data === null ? (
        <div>
          <p> No track </p>
        </div>
      ) : (
        <Grid>
          {data.map(({ id, duration, name }) => {
            return (
              <ScheduleCard
                onClick={() => setClick(!Click)}
                style={{ borderRight: Click ? "5px solid blue" : "5px" }}
                padded
                key={id}
              >
                <Flex column>
                  <Link
                    to={`/event-talks/${id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Title small center bold>
                      {name}
                    </Title>
                  </Link>
                  <Text small center style={{ color: "grey" }}>
                    {duration}
                  </Text>
                </Flex>
              </ScheduleCard>
            )
          })}
        </Grid>
      )}
      <br />
      <br />
    </Contain>
  )
}

export default Schedule
