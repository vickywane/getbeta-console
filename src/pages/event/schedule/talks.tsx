import React from "react"
import Flex from "styled-flex-component"

import { Panes, Header, Footer } from "../../../components/"
import {
  Grid,
  Body,
  ScheduleCard,
  Text,
  Contain,
  Title,
} from "../../../styles/style"

const Data = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 3,
  },
]

//Todo Make talk cover image an image background
const Schedule = () => {
  return (
    <div>
      <Header unshadowed />
      <Panes Data={Data} type={"Schedule"} color={"#000"} />

      <br />
      <Contain>
        <Grid>
          {Data.map(({ id }) => {
            return (
              <ScheduleCard key={id}>
                <img
                  style={{ height: "auto", maxWidth: "25rem" }}
                  src={require("../../../assets/images/3.jpg")}
                  alt={"Talk cover"}
                />
                <Body>
                  <Flex justifyBetween>
                    <Text style={{ padding: "0.5rem 0rem" }}>
                      Shedrack Akintayo
                    </Text>
                    <img
                      style={{ height: "auto", maxWidth: "4rem" }}
                      alt={"Speaker"}
                      src={require("../../../assets/images/developer.png")}
                    />
                  </Flex>
                  <Title small bold>
                    {" "}
                    Building Distributed Systems{" "}
                  </Title>
                </Body>
              </ScheduleCard>
            )
          })}
        </Grid>
      </Contain>

      <br />
      <Footer />
    </div>
  )
}

export default Schedule
