import React from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"
import { FiClock } from "react-icons/fi"

import { SmallItems, Title, CustomImage } from "../../styles/style"

const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]
const section = [
  { id: 1, name: "Concatenate Conf" },
  { id: 2, name: "React Conf" },
]

const Section = styled.div`
  background: #f2f5ff;
  margin: 0.7em;
  border-radius: 10px;
`

const Head = styled.div`
  color : #fff
  padding  : 0.3em
   border-radius: 10px 10px;
  background: grey;
`

const Overview = (props): JSX.Element => {
  return (
    <div>
      {section.map(({ id, name }) => {
        return (
          <Section key={id}>
            <Head>
              <Flex justifyBetween>
                <Title> {name} </Title>

                <Flex>
                  <Title small> 34 days ago </Title>
                  <FiClock style={{ fontSize: "1.3em" }} />
                </Flex>
              </Flex>
            </Head>
            <Head> </Head>
            <SmallItems images>
              {data.map(() => {
                return (
                  <CustomImage
                    small
                    roundedCircle
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
