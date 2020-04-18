import React from "react"
import Flex from "styled-flex-component"
import styled from "styled-components"

import { FiSearch } from "react-icons/fi"
import { Panes, Header, Footer } from "../../../components/"
import {
  Grid,
  Body,
  ScheduleCard,
  Text,
  Hover,
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

const Input = styled.input`
  border: 0px;
  padding: 0.6rem;
  width: 33rem;
  outline: 0px;
`

const InputBox = styled.div`
  padding: 0.4rem 1rem;
  border: 1px solid #000;
  border-radius: 5px;
`

//Todo Make talk cover image an image background
const Schedule = () => {
  return (
    <div>
      <br />
      <div style={{ padding: "1rem 2rem", textAlign: "right" }}>
        <Flex justifyBetween>
          <Text> Talks </Text>

          <InputBox modal style={{ width: "35rem" }}>
            <Flex justifyBetween>
              <FiSearch style={{ fontSize: "1.6rem" }} />
              <Input placeholder={"Search For a talk"} />
            </Flex>
          </InputBox>
        </Flex>
      </div>
      <hr />

      <br />
      <Grid>
        {Data.map(({ id }) => {
          return (
            <ScheduleCard style={{ marginLeft: "3rem" }} talk key={id}>
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
                <Title small center>
                  {" "}
                  Building Distributed Systems{" "}
                </Title>
              </Body>
            </ScheduleCard>
          )
        })}
      </Grid>

      <br />
    </div>
  )
}

export default Schedule
