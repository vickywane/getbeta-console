import React from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"
import { Card } from "react-bootstrap"

import { Header, Footer } from "../../components/"

const Body = styled.div`0.5em`

const autoGrid = (minColumnWidth = 200, gridGap = 0) => ({
  display: "grid",
  gridTemplateColumns: `repeat(auto-fill, minmax(${minColumnWidth}px, 1fr))`,
  gridGap,
})

const Cards = styled.div({
  ...autoGrid(220, 20),
  padding: "3em",
  marginLeft: "1.5em",
})

const Title = styled.h3`
text-align : center
font-weight : normal
`

const Text = styled.p`
  text-align: center;
`

const Button = styled.button`
  background:   transparent
  text-align: center;
  border-radius:    3px
  height:  40px
  border: 1px solid #0e2f5a;
  color:    #0e2f5a
  margin: 0 1em;
  padding:   0.4em 3em
  font-size:   1.05em
  &:hover {
    cursor :  pointer
    color: #0e2f5a;
    background: #fff;
  }
`

const data = [
  {
    id: 1,
    name: "React Conf",
    summary:
      "Join us at React Conf for the annual conference to learn about React",
  },
  {
    id: 2,
    name: "Concatenate Conf",
    summary:
      "Join us at React Conf for the annual conference to learn about React",
  },
  {
    id: 3,
    name: "Javascript Conf",
    summary:
      "Join us at React Conf for the annual conference to learn about React",
  },
]
const EventList = () => {
  return (
    <div>
      <Header />

      <Body>
        <Cards>
          {data.map(({ name, id, summary }) => {
            return (
              <Card>
                <Title> {name} </Title>
                <Text> {summary} </Text>

                <Flex justifyCenter>
                  <Button> Volunteer </Button>{" "}
                </Flex>
              </Card>
            )
          })}
        </Cards>
      </Body>

      <Footer />
    </div>
  )
}

export default EventList
