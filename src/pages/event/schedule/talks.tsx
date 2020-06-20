import * as React from "react"
import Flex from "styled-flex-component"
import styled from "styled-components"
import { useQuery } from "@apollo/react-hooks"
import { FiSearch, FiClock } from "react-icons/fi"
import media from "styled-media-query"

import { Loader, Panes, Header, Footer } from "../../../components/"
import { EmptyData } from "../../../components/placeholders/"
import { ProfileCard } from "../../../components/cards/"
import { Grid, Body, Text, Hover, Title } from "../../../styles/style"
import { TalkCard } from "../../../styles/cards"
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

const Talks = props => {
  const { eventId } = props
  const WindowWidth = useWindowWidth()
  const { getEventTalks } = props.talk

  const [HoveredUserDetail, showHoveredUserDetail] = React.useState(false)

  return (
    <div>
      <div
        style={{
          borderBottom: "0.7px solid grey",
          padding: "0rem 2rem",
          textAlign: "right",
        }}
      >
        <Flex justifyBetween>
          <Text> Talks </Text>
          <Text small style={{ color: "grey" }}>
            Showing {getEventTalks.length} results.
          </Text>
        </Flex>
      </div>
      <br />

      <Grid>
        {getEventTalks === null ? (
          <EmptyData
            message="This Event currently has no approved talks"
            feature="Community Support"
            link="https://event.co"
          />
        ) : (
          getEventTalks.map(({ dateSubmitted, draft }) => {
            return draft.map(({ title, summary, id, speaker }) => {
              return (
                <TalkCard style={{ marginLeft: "2rem" }} talk key={id}>
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
