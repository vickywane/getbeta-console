import React from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"
import { FiClock, FiSearch, FiImage } from "react-icons/fi"
import { GoFile } from "react-icons/go"
import { MdVideoLibrary } from "react-icons/md"
import media from "styled-media-query"
import { Dropdown } from "react-bootstrap"

import { CustomImage, Text, Hover, Input } from "../../styles/style"

const section = [
  { id: 1, time: "10 days ago" },
  { id: 2, time: "20 days ago" },
]

const Section = styled.div`
  background: transparent;
  margin: 0.7em 1em;
  margin-top: 1em;
  border-radius: 10px;
  ${media.lessThan("large")`
  margin: 0.5em 1em;
  `};
`

const Head = styled.div`
  color : #000
  padding  : 0.2em 1rem; 
  border-bottom : 1px solid grey;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 2fr);
  grid-gap: 0.3rem;
  grid-auto-rows: auto;
`

const Overview = (props): JSX.Element => {
  return (
    <div>
      <br />

      <br />
      {section.map(({ id, time }) => {
        return (
          <Section key={id}>
            <Head>
              <Flex justifyBetween>
                .
                <Flex>
                  <Text style={{ color: "#000" }} small white>
                    34 days ago{" "}
                  </Text>
                  <Hover style={{ textAlign: "right", padding: "0rem 1rem" }}>
                    <FiClock style={{ fontSize: "1.6em" }} />
                  </Hover>
                </Flex>
              </Flex>
            </Head>

            <Grid>
              <CustomImage
                small
                fluid
                src={require("../../assets/images/1.jpg")}
              />

              <CustomImage
                small
                fluid
                src={require("../../assets/images/2.jpg")}
              />

              <CustomImage
                small
                fluid
                src={require("../../assets/images/3.jpg")}
              />

              <CustomImage
                small
                fluid
                src={require("../../assets/images/4.jpg")}
              />
            </Grid>
          </Section>
        )
      })}
    </div>
  )
}

export default Overview
