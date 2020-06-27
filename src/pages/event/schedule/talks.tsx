import * as React from "react"
import Flex from "styled-flex-component"
import styled from "styled-components"
import { useQuery } from "@apollo/react-hooks"
import { FiSearch, FiClock, FiCopy } from "react-icons/fi"
import media from "styled-media-query"

import { Loader, Panes, Header, Footer, Tip } from "../../../components/"
import { EmptyData } from "../../../components/placeholders/"
import { ProfileCard } from "../../../components/cards/"
import { Grid, Body, Text, Hover, Title } from "../../../styles/style"
import { TalkCard, TrackCard } from "../../../styles/cards"
import useWindowWidth from "../../../hook_style"
import { TALKS, GET_EVENT_TALKS } from "../../../data/queries"
import Img from "../../../assets/images/developer.png"

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
const CustomImage = styled.img`
  height: auto;
  max-width: 27.5rem;
  transition: all 300ms;
  ${media.lessThan("huge")`
    max-width: 25rem;
  `};
  ${media.lessThan("large")`
    max-width: 20rem;
  `};
`

const TrackBody = styled.div`
    margin : 0.5rem 1rem
    display : flex
    padding : 1rem 0rem;
    border-bottom : 1px solid grey;
    li {
      margin: 0rem 1rem
      list-style : none
    }
  `

const Talks = props => {
  const { eventId } = props
  const WindowWidth = useWindowWidth()
  const { talk, tracks } = props.talk.event

  const [Tracks, showTracks] = React.useState(false)
  const [HoveredUserDetail, showHoveredUserDetail] = React.useState(false)

  const [TrackKey, setTrackKey] = React.useState<number>(null)

  // filters for only approved talks
  const filtered = talk === null ? null : talk.filter(talk => talk.isAccepted)
  console.log(filtered, "filter")

  const handleDrag = e => {
    e.preventDefault()

    console.log("dragged")
  }

  return (
    <div>
      {filtered !== null && (
        <Tip
          message="Drag talk cards and drop into tracks to sort them"
          timeout={5000}
          icon1={<FiCopy style={{ fontSize: "1.6rem" }} />}
        />
      )}

      {Tracks && tracks !== null && (
        <TrackBody
          style={{
            transition: "all 300ms",
          }}
          onDragEnter={e => console.log("onDragEnter")}
          onDragLeave={e => {
            setTrackKey(null)

            setTimeout(() => {
              showTracks(false)
            }, 5000)
          }}
        >
          {tracks.map(({ id, name }) => {
            return (
              <li
                key={id}
                onDragOver={e => {
                  setTrackKey(id)
                }}
                style={{
                  transition: "all 300ms",
                  border: TrackKey === id ? "3px dashed red" : null,
                }}
              >
                <TrackCard borderRadius="5px" color={"#7366E6"}>
                  <br />
                  <Hover>
                    <Title small center bold>
                      {name}
                    </Title>
                  </Hover>
                  <br />
                </TrackCard>
              </li>
            )
          })}
          <br />
        </TrackBody>
      )}

      <Grid>
        {filtered === null ? (
          <EmptyData
            message="This Event currently has no approved talks"
            feature="Community Support"
            link="https://event.co"
          />
        ) : (
          filtered.map(({ dateSubmitted, draft }) => {
            return draft.map(({ title, summary, id, speaker }) => {
              return (
                <TalkCard
                  draggable
                  onDragStart={e => {
                    showTracks(true)
                  }}
                  onDrag={e => handleDrag(e)}
                  onDrop={e => showTracks(false)}
                  onDragOver={e => e.preventDefault()}
                  style={{ marginLeft: "2rem" }}
                  talk
                  key={id}
                >
                  <Flex justifyBetween>
                    <Hover style={{ display: "flex" }}>
                      <FiClock style={{ fontSize: "1.5rem" }} />
                      <Text small style={{ padding: "0rem 0.7rem" }}>
                        30 minutes{" "}
                      </Text>
                    </Hover>

                    <Text small style={{ textAlign: "right" }}>
                      Frontend Track{" "}
                    </Text>
                  </Flex>

                  <Title small center>
                    {title}
                  </Title>
                  <br />
                  <br />
                  <br />
                  <br />

                  {speaker.map(({ id, name }) => {
                    return (
                      <Flex>
                        <div
                          onMouseEnter={() =>
                            showHoveredUserDetail(!HoveredUserDetail)
                          }
                          onMouseLeave={() =>
                            showHoveredUserDetail(!HoveredUserDetail)
                          }
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <img
                            style={{
                              cursor: "pointer",
                              height: "auto",
                              maxWidth: "4rem",
                            }}
                            alt={"Speaker"}
                            src={require("../../../assets/images/developer.png")}
                          />
                          <ProfileCard userId={id} show={HoveredUserDetail} />
                        </div>

                        <Text small style={{ padding: "1rem 1.5rem" }}>
                          {name}
                        </Text>
                      </Flex>
                    )
                  })}
                </TalkCard>
              )
            })
          })
        )}
      </Grid>
    </div>
  )
}

export default React.memo(Talks)
