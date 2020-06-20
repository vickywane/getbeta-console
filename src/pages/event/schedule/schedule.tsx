import React, { useState } from "react"
import Flex from "styled-flex-component"
import { Link } from "react-router-dom"
import { useQuery } from "@apollo/react-hooks"
import { inject, observer } from "mobx-react"
import { CSSTransition } from "react-transition-group"
import { FiClock, FiMoreVertical } from "react-icons/fi"

import Proposals from "./proposals"
import Talks from "./talks"
import { GET_EVENT_TALK } from "../../../data/queries"
import { Panes, Header, Footer, Loader } from "../../../components/"
import { EmptyData } from "../../../components/placeholders"

import {
  Grid,
  Text,
  Body,
  Contain,
  Head,
  Hover,
  Section,
  Title,
  Tab,
  TabColumn,
  Button,
} from "../../../styles/style"

import { TrackCard } from "../../../styles/cards"

const Schedule = props => {
  const { openCreateTrack } = props.ModalStore
  const { id, tracks, createdBy } = props.data.event
  const { screen } = props

  const [ActiveView, setActiveView] = useState("Overview")
  const [TalkApproval, setTalkApproval] = useState(false)

  const { data, loading, error } = useQuery(GET_EVENT_TALK, {
    variables: {
      eventId: id,
      approved: TalkApproval,
      limit: 10,
    },
  })

  const handleSwitch = id => {
    setActiveView("talks")
  }

  if (error) {
    return <p> error from query {JSON.stringify(error)} </p>
  }

  if (data) {
    const { draft, id } = data.getEventTalks

    const userId = localStorage.getItem("user_id")
    const creator = createdBy === null ? 1 : createdBy[0].id
    const permission = creator == userId

    return (
      <div>
        {screen === "event" ? null : (
          <div>
            {tracks === null ? null : (
              <div>
                <Head header>
                  <Section style={{ margin: "0.7em 0.5rem" }}>
                    {ActiveView}
                  </Section>

                  <Tab>
                    <TabColumn
                      active={ActiveView === "Overview"}
                      onClick={() => setActiveView("Overview")}
                    >
                      Tracks
                    </TabColumn>

                    <TabColumn
                      active={ActiveView === "Talks"}
                      onClick={() => {
                        setTalkApproval(true)
                        setActiveView("Talks")
                      }}
                    >
                      Approved Talks
                    </TabColumn>

                    <TabColumn
                      active={ActiveView === "Proposals"}
                      onClick={() => {
                        setTalkApproval(false)
                        setActiveView("Proposals")
                      }}
                    >
                      Talk Proposals
                    </TabColumn>
                  </Tab>
                </Head>

                {ActiveView === "Overview" ? (
                  <Body>
                    <Flex justifyBetween>
                      <p> Search box here </p>

                      <Button
                        onClick={() => {
                          openCreateTrack()
                        }}
                      >
                        Create Track
                      </Button>
                    </Flex>
                  </Body>
                ) : null}
              </div>
            )}
          </div>
        )}

        {tracks === null ? (
          <Body>
            <br />
            <br />
            <br />
            <br />

            {screen === "event" ? (
              <Text color="grey" center>
                {" "}
                This Event has no tracks yet{" "}
              </Text>
            ) : (
              <div>
                <Flex justifyCenter>
                  <Button
                    onClick={() => {
                      openCreateTrack()
                    }}
                  >
                    Create Track
                  </Button>
                </Flex>
                <EmptyData
                  feature="Event Schedule"
                  message="This event schedule has no created tracks."
                  link="https://event.con"
                />
              </div>
            )}
          </Body>
        ) : (
          <Body>
            <CSSTransition
              unmountOnExit
              in={ActiveView === "Overview"}
              timeout={300}
              classNames={""}
            >
              <Grid>
                {tracks.map(({ id, duration, name, summary }) => {
                  return (
                    <TrackCard color={"#7366E6"} padded key={id}>
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

                        <Hover style={{ padding: "0rem 1.2rem" }}>
                          <FiMoreVertical style={{ fontSize: "2rem" }} />
                        </Hover>
                      </div>

                      <div>
                        <Hover onClick={() => handleSwitch(id)}>
                          <Title small center bold>
                            {name}
                          </Title>
                        </Hover>

                        <Text center>{summary}</Text>
                      </div>

                      <Flex>
                        <Hover style={{ padding: "0rem 0.8rem" }}>
                          <FiClock style={{ fontSize: "1.7rem" }} />
                        </Hover>
                        {duration}
                      </Flex>

                      <div style={{ textAlign: "left" }}>
                        <Hover style={{ padding: "0rem 0.8rem" }}>
                          <FiClock style={{ fontSize: "1.7rem" }} />
                        </Hover>
                        12 Talks
                      </div>
                    </TrackCard>
                  )
                })}
              </Grid>
            </CSSTransition>

            <CSSTransition
              unmountOnExit
              in={ActiveView === "Talks"}
              timeout={300}
              classNames={""}
            >
              <Talks talk={data} eventId={id} />
            </CSSTransition>

            <CSSTransition
              unmountOnExit
              in={ActiveView === "Proposals"}
              timeout={300}
              classNames={""}
            >
              <Proposals data={data} eventId={id} />
            </CSSTransition>
          </Body>
        )}
      </div>
    )
  }
}

export default inject("ModalStore")(observer(Schedule))
