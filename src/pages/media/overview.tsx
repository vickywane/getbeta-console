import React from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"
import { FiClock } from "react-icons/fi"
import media from "styled-media-query"

import { SmallItems, Title, CustomImage, Text } from "../../styles/style"

const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]
const section = [
  { id: 1, name: "Concatenate Conf" },
  { id: 2, name: "React Conf" },
]

const Section = styled.div`
  background: #f2f5ff;
  margin: 0.7em 1em;
  margin-top: 1em;
  border-radius: 10px;
  ${media.lessThan("large")`
  margin: 0.5em 1em;
  `};
`

const Head = styled.div`
  color : #fff
  padding  : 0.5em
   border-radius: 5px;
  background: grey;
`

const Overview = (props): JSX.Element => {
  return (
    <div>
      {" "}
      <br />
      {section.map(({ id, name }) => {
        return (
          <Section key={id}>
            <Head>
              <Flex justifyBetween>
                <Title small> {name} </Title>

                <Flex>
                  <Text small white>
                    34 days ago{" "}
                  </Text>
                  <FiClock style={{ fontSize: "1.3em" }} />
                </Flex>
              </Flex>
            </Head>
            <SmallItems images>
              {data.map(() => {
                return (
                  <CustomImage
                    small
                    fluid
                    src={require("../../assets/images/developer.png")}
                  />
                )
              })}
            </SmallItems>
          </Section>
        )
      })}
    </div>
  )
}

export default Overview
