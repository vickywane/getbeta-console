import React from "react"
import { FiX } from "react-icons/fi"
import styled from "styled-components"
import { Link } from "react-router-dom"
import media from "styled-media-query"

import { Hover, Text, Title } from "../../styles/style"

const Box = styled.div`
  width: 25rem;
  height: 28vh;
  background: ${props => props.background};
  border: 3px dashed #22263d;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 300ms;
  &: hover {
    box-shadow: 0px 2px 4px solid grey;
  }
  ${media.lessThan("huge")`

	`};
  ${media.lessThan("large")`
		width : 19rem;
		height : 25vh;
	`};
  ${media.lessThan("medium")`

	`};
`

const Items = [
  {
    id: 1,
    type: "conference",
    name: "Conference Event",
    explaination: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    type: "meetup",
    name: "Meetup Event",
    explaination:
      "Incidunt cupiditate eligendi quisquam quam impedit, reiciendis ex eveniet ad dicta atque perferendis.",
  },
  {
    id: 3,
    type: "podcast",
    name: "PodCast Event",
    explaination:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cupiditate eligendi.",
  },
  {
    id: 4,
    type: "meetup",
    name: "Meetup Group",
    explaination:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cupiditate eligendi.",
  },
]

const Grid = styled.div`
  display: grid;
  grid-gap: 3rem 3rem;
  grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));
  ${media.lessThan("huge")`
		grid-template-columns : repeat(auto-fit, minmax(23rem, 1fr));
	`};
  ${media.lessThan("large")`
		grid-template-columns : repeat(auto-fit, minmax(19rem, 1fr));
	`};
  ${media.lessThan("medium")`
		grid-template-columns : repeat(auto-fit, minmax(23rem, 1fr));
	`};
`

const CreateEventModal = (props): JSX.Element => {
  return (
    <div style={{ padding: "0rem 2rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Text color="blue" style={{ cursor: "pointer" }}>
          Use existing template
        </Text>

        <Text color="blue" style={{ cursor: "pointer" }}>
          Launch New Iteration of An Existing Event
        </Text>
      </div>
      <br />

      <Grid>
        {Items.map(({ id, type, name, explaination }) => {
          return (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Box background={"#22263d"} key={id}>
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img alt="event illustration" />
                  </div>
                  <Link to={`create/${type}`}>
                    <Title center color="white" small>
                      {" "}
                      {name}{" "}
                    </Title>
                  </Link>
                  <Text center color="white" small>
                    {" "}
                    {explaination}{" "}
                  </Text>
                </div>
              </Box>
            </div>
          )
        })}
      </Grid>
      <br />
      <br />
    </div>
  )
}

export default CreateEventModal
