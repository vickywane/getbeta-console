import React from "react"
import { FiClock, FiSearch } from "react-icons/fi"
import styled from "styled-components"

import {
  Body,
  Hover,
  InputBox,
  Input,
  Title,
  Text,
} from "../../../styles/style"
import { TrackCard } from "../../../styles/cards"

const Card = styled(TrackCard)`
  width: 28rem img {
    height: 60px;
    width: 60px;
    cursor: pointer;
  }
`

const HoverCircle = styled(Hover)`
	width : 50px;
	height : 50px;
	border-radius : 50%;
	color : #0e2f5a;
	display : flex
	justify-content : center
	align-items : center
	background : transparent;
	transition : all 350ms;
	&: hover {
		background : #0e2f5a;
		color: #fff;
	}
`

const TrackPreview = (props): JSX.Element => {
  const { tracks } = props

  return (
    <Body style={{ background: "#fbfbfb" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Title id="tracks" small>
          Tracks
        </Title>

        <HoverCircle>
          <FiSearch style={{ fontSize: "1.7rem" }} />
        </HoverCircle>
      </div>

      <br />
      {tracks === undefined ? (
        <div>
          <br />
          <Text color="grey" center>
            {" "}
            This Event has no tracks{" "}
          </Text>
          <br />
        </div>
      ) : (
        tracks.map(({ id, duration, name, summary }) => {
          return (
            <Card
              borderRadius="0px 0px 90px 0px"
              color={"#7366E6"}
              padded
              key={id}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <img
                  alt="track"
                  style={{}}
                  src={require("../../../assets/images/developer.png")}
                />
              </div>

              <div>
                <Hover>
                  <Title small center bold>
                    {name}
                  </Title>
                </Hover>

                <Text center>{summary}</Text>
              </div>

              <div style={{ display: "flex", flexDirection: "row" }}>
                <Hover style={{ padding: "0rem 0.8rem" }}>
                  <FiClock style={{ fontSize: "1.6rem" }} />
                </Hover>
                {duration}
              </div>

              <div style={{ textAlign: "left" }}>
                <Hover style={{ padding: "0rem 0.8rem" }}>
                  <FiClock style={{ fontSize: "1.6rem" }} />
                </Hover>
                12 Talks
              </div>
            </Card>
          )
        })
      )}
    </Body>
  )
}

export default TrackPreview
