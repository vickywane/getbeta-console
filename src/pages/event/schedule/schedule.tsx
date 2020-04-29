import React from "react"
import Flex from "styled-flex-component"
import { FiCalendar, FiPlus } from "react-icons/fi"
import { Link } from "react-router-dom"

import { Panes, Header, Footer } from "../../../components/"
import {
  Hover,
  Grid,
  ScheduleCard,
  Text,
  Notification,
  Contain,
  Title,
} from "../../../styles/style"

const Data = [
  {
    id: 1,
    track: "Design Track",
    time: "12pm - 2pm",
  },
  {
    id: 2,
    track: "Documentation Track",
    time: "2pm - 3pm",
  },
  {
    id: 3,
    track: "Android Track",
    time: "2pm - 3pm",
  },
  {
    id: 4,
    track: "Mobile Web Track",
    time: "2pm - 3pm",
  },
]

//Todo Make talk cover image an image background

const Schedule = () => {
  return (
    <div>
      <Header unshadowed />
      <Panes Data={Data} type={"Schedule"} color={"#000"} />

      <Contain>
        <br />
        <br />

        <Grid>
          {Data.map(({ id, time, track }) => {
            return (
              <ScheduleCard padded key={id}>
                <Flex justifyAround>
                  <img
                    style={{ height: "auto", maxWidth: "5rem" }}
                    alt={"Track"}
                    src={require("../../../assets/images/developer.png")}
                  />

                  <Flex column>
                    <Link
                      style={{ textDecoration: "none" }}
                      to={"/event-talks"}
                    >
                      <Title small center bold>
                        {" "}
                        {track}{" "}
                      </Title>
                    </Link>

                    <Text small center style={{ color: "grey" }}>
                      {" "}
                      {time}{" "}
                    </Text>
                  </Flex>
                </Flex>
              </ScheduleCard>
            )
          })}
        </Grid>
        <br />
        <br />
      </Contain>

      <Footer />
    </div>
  )
}

export default Schedule
