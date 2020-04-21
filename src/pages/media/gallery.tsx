import React from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"
import { FiClock } from "react-icons/fi"
import media from "styled-media-query"

import {
  CustomImage,
  Text,
  Hover,
  GalleryGrid,
  SwitchBtn,
  Switch,
} from "../../styles/style"

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

            <GalleryGrid>
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
            </GalleryGrid>
          </Section>
        )
      })}
    </div>
  )
}

export default Overview
