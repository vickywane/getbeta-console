import * as React from "react"
import Flex from "styled-flex-component"
import styled from "styled-components"
import { FiSearch, FiClock, FiCalendar, FiX, FiSend } from "react-icons/fi"
import media from "styled-media-query"
import { Modal } from "react-bootstrap"
import { inject, observer } from "mobx-react"
import { useMutation } from "@apollo/react-hooks"

import { EmptyData } from "../../../components/placeholders/"
import { Loader, Panes, Header, Footer } from "../../../components/"
import {
  Grid,
  Body,
  ScheduleCard,
  Button,
  Notification,
  Label,
  Text,
  Hover,
  Head,
  Section,
  Title,
} from "../../../styles/style"
import useWindowWidth from "../../../hook_style"
import { REVIEW_TALK } from "../../../data/mutations"

const CustomImage = styled.img`
  height: auto;
  max-width: 25rem;
  transition: all 300ms;
  ${media.lessThan("huge")`
    max-width: 25rem;
  `};
  ${media.lessThan("large")`
    max-width: 20rem;
  `};
`

const ProposalContainer = styled.div`
  border: 1px solid grey;
  border-radius: 5px;
  margin: 2rem 4rem;
  transition: all 300ms;
  ${media.lessThan("huge")`
    margin: 2rem 3rem;
  `};
   ${media.lessThan("large")`
    margin: 2rem 2rem;
  `};
   ${media.lessThan("medium")`
    margin: 2rem 1rem;
  `};
`

const Message = styled.div`
  display: flex;
  margin: 0rem 1rem;
  justify-content: space-between;
  input {
    border: 1px solid grey;
    padding: 0.7rem 1rem;
    display: flex;
    font-size: 1rem;
    flex: 1;
    width: auto;
    margin: 0rem 1rem;
    height: auto;
    outline: 0px;
    border-radius: 5px;
  }
  div {
    border: 1px solid grey;
    border-radius: 50%;
    margin: 0rem 0.5rem;
    padding: 0.7rem 0.7rem;
  }
  &: hover {
    div {
      cursor: pointer;
      background: #fbfbfb;
    }
  }
`

const Proposals = props => {
  const { eventId } = props
  const { openPapersModal } = props.ModalStore
  const WindowWidth = useWindowWidth()

  const [ModalVisibility, setModalVisibility] = React.useState<boolean>(false)
  const [Proposal, OpenProposal] = React.useState<boolean>(false)
  const [Feedback, setFeedback] = React.useState<boolean>(false)
  const [Comment, setComment] = React.useState<string>("")
  const [isAccepted, setAccepted] = React.useState<boolean>(false)

  const [updateSubmittedTalk, { loading }] = useMutation(REVIEW_TALK)

  const { talk } = props.data.event

  const acceptTalk = id => {
    updateSubmittedTalk({
      variables: {
        talkId: id,
        reviewerId: localStorage.getItem("user_id"),
        comment: Comment,
        isAccepted: isAccepted,
      },
    })
      .then(() => {
        setFeedback(true)
      })
      .catch(e => console.log(e))
  }

  const addReview = id => {
    updateSubmittedTalk({
      variables: {
        talkId: id,
        reviewerId: localStorage.getItem("user_id"),
        comment: Comment,
        isAccepted: isAccepted,
      },
    })
      .then(() => setFeedback(true))
      .catch(e => console.log(e))
  }

  if (Feedback) {
    setTimeout(() => setFeedback(false), 5000)
  }

  // filters for only unapproved drafts
  const filtered = talk === null ? null : talk.filter(talk => !talk.isAccepted)
  console.log(filtered, "filter")
  

  return (
    <div>
      <Button onClick={() => openPapersModal()}>
        Configure Call For Papers
      </Button>

      <Body>
        {filtered === null ? (
          <EmptyData
            message={
            `This Event currently has no submitted proposals. \n \n  You can accept draft submissions from your Access Management Pane.`
            }
            feature="Community Support"
            link="https://event.co"
          />
        ) : (
          filtered.map(({ dateSubmitted, draft, id }) => {
            return draft.map(
              ({ name, speaker, duration, summary, description, title }) => {
                return (
                  <ProposalContainer key={id}>
                    {Feedback && (
                      <div
                        style={{
                          color: "#fff",
                          background: "#0e2f5a",
                          padding: "0.3rem 1rem",
                          display: "flex",
                          justifyContent: "center",
                          borderRadius: "5px 5px 0px 0px",
                        }}
                      >
                        {isAccepted ? (
                          <Text center color="white">
                            This talk has now been accepted and would be added
                            to your Approved Talks.
                          </Text>
                        ) : (
                          <div>
                            <Text center> Feedback has been sent to </Text>
                            {speaker.map(name => {
                              return (
                                <Text style={{ padding: "0rem 0.4rem" }}>
                                  {name.name}
                                </Text>
                              )
                            })}
                          </div>
                        )}
                      </div>
                    )}
                    <Body
                      style={{
                        padding: "0.5rem 0.5rem",
                        display: "flex",
                        justifyContent: "space-between",
                        background: "#fbfbfb",
                        borderRadius: "5px 5px 5px 0px",
                      }}
                    >
                      {speaker.map(name => {
                        return (
                          <Flex>
                            <img
                              alt="user"
                              style={{
                                height: "5.5vh",
                                width: "5rem",
                                padding: "0rem 0.7rem",
                              }}
                              src={require("../../../assets/images/developer.png")}
                            />

                            <Text style={{ padding: "0.5rem 0rem" }}>
                              {name.name}{" "}
                            </Text>
                          </Flex>
                        )
                      })}

                      <Flex>
                        <Hover style={{ padding: "0rem 0.7rem" }}>
                          <FiClock
                            style={{ fontSize: "1.5rem", color: "grey" }}
                          />
                        </Hover>
                        {duration}
                      </Flex>
                    </Body>

                    <Body>
                      <Body>
                        <Title small center>
                          {title}
                        </Title>{" "}
                        <br />
                        <Text small center color={!Proposal ? "grey" : "black"}>
                          {!Proposal ? summary : description}
                        </Text>
                        <br />
                        {Proposal && (
                          <Message>
                            <input
                              value={Comment}
                              onChange={e => setComment(e.target.value)}
                              placeholder={"Leave a comment"}
                              type={"text"}
                            />
                            <div onClick={() => addReview(id)}>
                              <FiSend
                                style={{ color: "#0e2f5a", fontSize: "1.7rem" }}
                              />
                            </div>
                          </Message>
                        )}
                      </Body>
                      <br />
                      <Flex justifyBetween>
                        <Flex>
                          <Hover style={{ padding: "0rem 0.7rem" }}>
                            <FiCalendar style={{ fontSize: "1.7rem" }} />
                          </Hover>

                          <Text small color="grey">
                            {dateSubmitted}
                          </Text>
                        </Flex>

                        {!Proposal ? (
                          <Button onClick={() => OpenProposal(true)}>
                            View Draft Proposal
                          </Button>
                        ) : (
                          <Flex>
                            <Button
                              onClick={() => {
                                setAccepted(true)
                                acceptTalk(id)
                              }}
                            >
                              Accept Draft Proposal
                            </Button>

                            <Button
                              onClick={() => {
                                setAccepted(false)
                              }}
                            >
                              Reject Draft Proposal{" "}
                            </Button>
                          </Flex>
                        )}
                      </Flex>{" "}
                    </Body>
                  </ProposalContainer>
                )
              }
            )
          })
        )}
      </Body>
    </div>
  )
}

export default inject("ModalStore")(observer(Proposals))