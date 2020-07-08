import * as React from "react"
import { useMutation } from "@apollo/react-hooks"
import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "react-router-dom"
import { IoMdPaper } from "react-icons/io"
import { FiAlertCircle, FiX, FiMail } from "react-icons/fi"
import { inject, observer } from "mobx-react"

import { Loader } from "../../components/"
import { Text, Button, Hover } from "../../styles/style"
import useWindowWidth from "../../hook_style"
import { ATTEND_EVENT, UPDATE_EVENT } from "../../data/mutations"

const Notice = styled.div`
  padding: 1rem 1rem 1rem 2rem;
  text-align: center;
  background: #f3f3f3;
  flex: 1;
  display: flex;
  transition: all 300ms;
  justify-content: ${props => (props.center ? "center" : "space-between")};
  width: auto;
  box-shadow: 0px 1px 3px grey;
  img {
    height: auto;
    width: 3rem;
  }
  ${media.lessThan("huge")`
  padding: 1rem 0.4rem;
`};
  ${media.lessThan("large")`
  align-items: center;
  padding: 1rem 0.5rem;
`};
  ${media.lessThan("medium")`
  align-items: center;
  padding: 1rem 0.5rem;
`};
`

// Todo: Use CSSTransition to make state changes smoothe.. Later!!!!

const AttendPane = (props): JSX.Element => {
  const Hooks = useWindowWidth()
  const {
    id,
    name,
    alias,
    dateCreated,
    eventType,
    confirmedEmail,
    isAcceptingTalks,
  } = props.event

  const { permission } = props

  const { openPapersModal } = props.ModalStore
  const [showNotice, setNotice] = React.useState(true)
  const [Accepted, setAccepted] = React.useState(true)
  const [Mail, setMail] = React.useState(confirmedEmail) // just a mock

  const [attendEvent, { loading }] = useMutation(ATTEND_EVENT)

  if (loading) {
    return <Loader type="loading" />
  }

  const attend = () => {
    attendEvent({
      variables: {
        UserId: localStorage.getItem("user_id"),
        EventId: id,
      },
    })
      .then(() => {
        setNotice(false)
        setAccepted(false)
      })
      .catch(e => console.log(e))
  }

  if (!Accepted) {
    setTimeout(() => {
      setAccepted(true)
    }, 2500)
  }

  const word = eventType === "Conference" ? "attend" : "join"

  switch (permission) {
    case true:
      switch (Mail) {
        case true:
          switch (isAcceptingTalks) {
            case true:
              return (
                <div style={{ transition: "all 300ms" }}>
                  {showNotice && (
                    <Notice style={{ color: "#0e2f5a" }}>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <Text center>
                          Drafts proposals for talks are currently being
                          submitted for this event.
                        </Text>
                      </div>

                      <Hover
                        onClick={() => setNotice(false)}
                        style={{ padding: "0rem 0.7rem" }}
                      >
                        <FiX style={{ fontSize: "1.8rem" }} />
                      </Hover>
                    </Notice>
                  )}
                </div>
              )

            case false:
              return (
                <div style={{ transition: "all 300ms" }}>
                  {showNotice ? (
                    <Notice style={{ color: "#0e2f5a" }}>
                      <div style={{ display: "flex" }}>
                        <Hover style={{ padding: "0.5rem 0.3rem" }}>
                          <FiAlertCircle style={{ fontSize: "1.8rem" }} />
                        </Hover>
                        <Text style={{ margin: "0.5rem 0.3rem" }}>
                          Call For Speakers for this event is currently closed.
                        </Text>
                      </div>

                      <div style={{ display: "flex" }}>
                        <Button onClick={() => openPapersModal()}>
                          Configure Talks
                        </Button>

                        <Hover
                          onClick={() => setNotice(false)}
                          style={{ padding: "0rem 0.7rem" }}
                        >
                          <FiX style={{ fontSize: "1.8rem" }} />
                        </Hover>
                      </div>
                    </Notice>
                  ) : null}
                </div>
              )

            default:
              break
          }

        case false:
          return (
            <div style={{ transition: "all 300ms" }}>
              {showNotice ? (
                <Notice center style={{ color: "#0e2f5a" }}>
                  <div style={{ display: "flex" }}>
                    <Hover style={{ padding: "0.5rem 0.3rem" }}>
                      <FiAlertCircle
                        style={{ color: "red", fontSize: "1.8rem" }}
                      />
                    </Hover>
                    <Text style={{ margin: "0.5rem 0.3rem" }}>
                      Support Email Address for this event hasn't been verified
                    </Text>
                  </div>

                  <Text
                    onClick={() => setMail(!Mail)}
                    style={{
                      cursor: "pointer ",
                      margin: "0.5rem 1rem",
                      textDecoration: "underline",
                    }}
                  >
                    Resend Mail
                  </Text>
                </Notice>
              ) : null}
            </div>
          )

        default:
          break
      }

    case false:
      switch (isAcceptingTalks) {
        case true:
          return (
            <div style={{ transition: "all 300ms" }}>
              {showNotice ? (
                <div>
                  {Hooks >= 1200 ? (
                    <Notice style={{ color: "#0e2f5a" }}>
                      <div style={{ display: "flex" }}>
                        <img
                          alt={"waving-hand"}
                          src={require("../../assets/images/waving.png")}
                        />
                        <Text style={{ margin: "0.5rem 1rem" }}>
                          Hi, would you like to attend the {"  "}
                          <b style={{ fontWeight: 600 }}>
                            {Hooks >= 1200 ? ` ${alias}` : ` ${name}  `}
                          </b>
                          {` ${eventType}`}?
                        </Text>
                      </div>

                      <div style={{ display: "flex" }}>
                        <Button onClick={() => attend()}>
                          Yes, I'm attending
                        </Button>

                        <Button onClick={() => setNotice(false)}>
                          Not Sure, Watch Event
                        </Button>
                      </div>
                    </Notice>
                  ) : (
                    <Notice
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <img
                          alt={"waving-hand"}
                          src={require("../../assets/images/waving.png")}
                        />

                        <div style={{ padding: "0rem 1rem" }}>
                          <Text>
                            Hi, would you like to {word} the
                            <b style={{ fontWeight: 500 }}>{` ${name} `}</b>
                            {` ${eventType} `} ?
                          </Text>

                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <div style={{ display: "flex" }}>
                              <Button onClick={() => attend()}>
                                Yes, I'm attending
                              </Button>

                              <Button onClick={() => setNotice(false)}>
                                Not Sure, Watch Event
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Notice>
                  )}
                </div>
              ) : (
                <Notice>
                  <div style={{ display: "flex" }}>
                    <Hover style={{ padding: "0rem 0.7rem" }}>
                      <IoMdPaper
                        style={{ color: "#0e2f5a", fontSize: "2rem" }}
                      />
                    </Hover>
                    <Text color="#0e2f5a">
                      {name} is currently accepting talk proposals. Submit here!
                    </Text>
                  </div>

                  <Link to={`/submit-talk/${id}`}>
                    <Button> Submit Proposal </Button>
                  </Link>
                </Notice>
              )}

              {!Accepted ? (
                <Notice>
                  <Text center>
                    We look forward to seeing you on {dateCreated} for the{" "}
                    {name}.
                  </Text>
                </Notice>
              ) : null}
            </div>
          )

        case false:
          return (
            <div style={{ transition: "all 300ms" }}>
              {showNotice ? (
                <div>
                  {Hooks >= 1200 ? (
                    <Notice style={{ color: "#0e2f5a" }}>
                      <div style={{ display: "flex" }}>
                        <img
                          alt={"waving-hand"}
                          src={require("../../assets/images/waving.png")}
                        />
                        <Text style={{ margin: "0.5rem 1rem" }}>
                          Hi, would you like to attend the {"  "}
                          <b style={{ fontWeight: 600 }}>
                            {Hooks >= 1200 ? ` ${alias}` : ` ${name}  `}
                          </b>
                          {` ${eventType}`}?
                        </Text>
                      </div>

                      <div style={{ display: "flex" }}>
                        <Button onClick={() => attend()}>
                          Yes, I'm attending
                        </Button>

                        <Button onClick={() => setNotice(false)}>
                          Not Sure, Watch Event
                        </Button>
                      </div>
                    </Notice>
                  ) : (
                    <Notice
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <img
                          alt={"waving-hand"}
                          src={require("../../assets/images/waving.png")}
                        />

                        <div style={{ padding: "0rem 1rem" }}>
                          <Text>
                            Hi, would you like to {word} the
                            <b style={{ fontWeight: 500 }}>{` ${name} `}</b>
                            {` ${eventType} `} ?
                          </Text>

                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <div style={{ display: "flex" }}>
                              <Button onClick={() => attend()}>
                                Yes, I'm attending
                              </Button>

                              <Button onClick={() => setNotice(false)}>
                                Not Sure, Watch Event
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Notice>
                  )}
                </div>
              ) : null}

              {!Accepted ? (
                <Notice>
                  <Text center>
                    We look forward to seeing you on {dateCreated} for the{" "}
                    {name}.
                  </Text>
                </Notice>
              ) : null}
            </div>
          )

        default:
          break
      }

    default:
      break
  }
}

export default inject("ModalStore")(observer(AttendPane))
