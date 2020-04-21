import React from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"
import { FiClock, FiSearch, FiImage } from "react-icons/fi"
import media from "styled-media-query"

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
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 0.3rem;
  grid-auto-rows: auto;

  img {
    width: 30rem;
  }
`

const Images = [
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
    id: 4,
  },
  {
    id: 5,
  },
]

const Switch = styled.div`
  padding: 0rem 0rem;
  border: 2.5px solid #401364;
  width: 35rem;
  background: transparent;
  border-radius: 6px;
  ${media.lessThan("medium")`
     width: 23rem;
    border-radius: 4px;
`};
  ${media.lessThan("small")`
   width: 19rem;
    border-radius: 3px;
`};
`

const SwitchBtn = styled.button`
  padding: 0.5rem 4.35rem;
  border: 0px;
  background: transparent;
  color: #401364;
  outline: none;
  font-weight: bold;
  &: hover {
    background: #401364;
    color: #fff;
  }
  ${media.lessThan("medium")`
      padding: 0.5rem 2.25rem;
`};
  ${media.lessThan("small")`
       padding: 0.5rem 1.6rem;
`};
`

const Overview = (props): JSX.Element => {
  return (
    <div>
      <br />

      <Flex justifyCenter>
        <Switch>
          <Flex>
            <Flex>
              <SwitchBtn> Images </SwitchBtn>
              <div style={{ borderRight: "4px solid  #401364" }} />
            </Flex>

            <Flex>
              <SwitchBtn> Videos </SwitchBtn>
              <div style={{ borderRight: "4px solid  #401364" }} />
            </Flex>

            <SwitchBtn> Slides </SwitchBtn>
          </Flex>
        </Switch>
      </Flex>

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
              {Images.map(({ id }) => {
                return (
                  <div>
                    <br />
                    <CustomImage
                      small
                      fluid
                      src={require(`../../assets/images/${id}.jpg`)}
                    />
                  </div>
                )
              })}
            </Grid>
          </Section>
        )
      })}
    </div>
  )
}

export default Overview
