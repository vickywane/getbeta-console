import React from "react"
import { AiOutlineUserDelete } from "react-icons/ai"
import Flex from "styled-flex-component"
import { Image } from "react-bootstrap"
import { Hover } from "../../styles/style"
import styled from "styled-components"

const data = [
  {
    id: 1,
    name: "David Malan",
    team: "Design Team",
  },
  {
    id: 2,
    name: "Bolaji Ayo",
    team: "Documentation Team",
  },
  {
    id: 3,
    name: "Jordan Haya",
    team: "Gifts Team",
  },
  {
    id: 3,
    name: "Bankole Mike",
    team: "Food Team",
  },
]

const Box = styled.div`
    border  : 1px solid black
    padding : 0.5em
     box-radius : 3px
    margin-right : 10px
    height : 40px
`

const PeopleList = props => {
  return (
    <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
      {data.map(({ id, name, team }) => {
        return (
          <div key={id}>
            <Flex justifyBetween>
              <Flex>
                <Image
                  alt="profile"
                  src={require("../../assets/images/developer.png")}
                  style={{ maxWidth: "4em", maxHeight: "4em" }}
                  fluid
                  roundedCircle
                />
                <h5
                  style={{
                    paddingLeft: "15px",
                    paddingTop: "15px",
                    fontWeight: "lighter",
                  }}
                >
                  {name}{" "}
                </h5>
              </Flex>

              <Flex>
                <Box> {team} </Box>

                <Hover>
                  <AiOutlineUserDelete
                    style={{ fontSize: "2.1em", color: "red" }}
                  />
                </Hover>
              </Flex>
            </Flex>
            <br />
          </div>
        )
      })}
    </div>
  )
}

export default PeopleList
