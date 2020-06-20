import React from "react"
import Flex from "styled-flex-component"
import { Image } from "react-bootstrap"
import {
  FiCalendar,
  FiList,
  FiImage,
  FiSmartphone,
  FiLink2,
  FiMail,
  FiInstagram,
  FiTwitter,
  FiEdit,
  FiFacebook,
} from "react-icons/fi"
import { MdPeopleOutline } from "react-icons/md"
import { GoLocation } from "react-icons/go"
import { inject, observer } from "mobx-react"
import { Link } from "react-router-dom"
import styled from "styled-components"

import {
  Hover,
  Contain,
  Text,
  Title,
  Button,
  BigTitle,
} from "../../styles/style"
import EventTabs from "./eventTab"
import { UserContext } from "../../state/context/contextState"

const HoverCircle = styled.div`
  padding: 0.5rem 0rem;
  margin: 0.2rem 0.7rem;
  border-radius: 50%;
  border: 1px solid grey;
  transition: all 350ms;
  &: hover {
    background: #fbfbfb;
  }
`

const EventDetails = (props): JSX.Element => {
  const { openChecklist, openPeople, openEditModal } = props.ModalStore
  const {
    currentWindowSize,
    data,
    meetupGroupLength,
    next,
    eventType,
    permission,
    dispatch,
  } = props
  const {
    name,
    summary,
    venue,
    website,
    id,
    bucketName,
    dateCreated,
  } = data.event
  const { showEventDetails } = props.state

  return (
    <div>
      {showEventDetails ? (
        <div>
          {permission ? (
            <div style={{ textAlign: "right", padding: "1rem 1rem" }}>
              <Hover onClick={() => dispatch({ type: "SWITCH_EDIT" })}>
                <FiEdit style={{ fontSize: "2rem" }} />
              </Hover>
            </div>
          ) : null}
          <br />
          <br />
          <UserContext.Consumer>
            {user => {
              return (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between ",
                  }}
                >
                  <Flex column>
                    <Flex>
                      {currentWindowSize >= 700 ? (
                        <Image
                          alt="profile"
                          src={require("../../assets/images/developer.png")}
                          style={{
                            width: "7em",
                            height: "11vh",
                            margin: "1rem 0rem",
                          }}
                          fluid
                        />
                      ) : null}
                      <div style={{ padding: "0.2rem 1rem" }}>
                        <Flex column>
                          {currentWindowSize <= 700 ? (
                            <Flex justifyCenter>
                              <Image
                                alt="profile"
                                src={require("../../assets/images/developer.png")}
                                style={{
                                  width: "7em",
                                  height: "11vh",
                                  margin: "1rem 0rem",
                                }}
                                fluid
                              />
                            </Flex>
                          ) : null}
                          <Flex justifyCenter>
                            <Flex>
                              <BigTitle center bold>
                                {name}
                              </BigTitle>

                              <Hover>
                                <a
                                  style={{ textAlign: "center" }}
                                  href={website}
                                  target="_blank"
                                >
                                  <FiLink2 style={{ fontSize: "1.8rem" }} />
                                </a>
                              </Hover>
                            </Flex>
                          </Flex>

                          <Text center> {summary} </Text>

                          <Flex justifyCenter>
                            <Flex>
                              <a href="/" target="_blank">
                                <HoverCircle>
                                  <Hover margined>
                                    <FiInstagram
                                      style={{ fontSize: "1.8rem" }}
                                    />
                                  </Hover>
                                </HoverCircle>
                              </a>
                              <a href="/" target="_blank">
                                <HoverCircle>
                                  <Hover margined>
                                    <FiTwitter style={{ fontSize: "1.8rem" }} />
                                  </Hover>
                                </HoverCircle>
                              </a>
                              <a href="/" target="_blank">
                                <HoverCircle>
                                  <Hover margined>
                                    <FiFacebook
                                      style={{ fontSize: "1.8rem" }}
                                    />
                                  </Hover>
                                </HoverCircle>
                              </a>
                            </Flex>
                          </Flex>

                          {currentWindowSize >= 650 ? (
                            <Flex justifyBetween>
                              <Link to={`/media/${id}/${bucketName}`}>
                                <Button> Gallery </Button>
                              </Link>
                            </Flex>
                          ) : (
                            <Flex justifyCenter>
                              <Hover>
                                <FiImage style={{ fontSize: "1.8rem" }} />
                              </Hover>
                            </Flex>
                          )}
                        </Flex>
                      </div>
                    </Flex>
                    <br />
                  </Flex>

                  {currentWindowSize <= 700 ? (
                    <Flex column>
                      <br />
                      <br />
                      <div style={{ textAlign: "right" }}>
                        <Link to="/mobile">
                          <Hover
                            onClick={() => {
                              openChecklist()
                            }}
                          >
                            <FiSmartphone style={{ fontSize: "2rem" }} />
                          </Hover>
                        </Link>
                        <br />
                      </div>
                    </Flex>
                  ) : null}
                </div>
              )
            }}
          </UserContext.Consumer>
          <br />
          <br />

          <Flex justifyBetween>
            <Flex>
              <GoLocation style={{ fontSize: "1.5em" }} />
              <Text small style={{ paddingLeft: "7px" }}>
                {meetupGroupLength > 1 ? "Global" : venue}
              </Text>
            </Flex>

            {eventType === "Meetup" ? (
              <div>
                {meetupGroupLength > 1 ? null : (
                  <Flex column>
                    <Text style={{ color: "grey" }}> Next Event : </Text>
                    <Flex>
                      <FiCalendar style={{ fontSize: "1.5em" }} />
                      <Text small style={{ paddingLeft: "7px" }}>
                        {dateCreated}
                      </Text>
                    </Flex>
                  </Flex>
                )}
              </div>
            ) : (
              <Flex column>
                <Text style={{ color: "grey" }}> {next} </Text>
                <Flex>
                  <FiCalendar style={{ fontSize: "1.5em" }} />
                  <Text small style={{ paddingLeft: "7px" }}>
                    {dateCreated}
                  </Text>
                </Flex>
              </Flex>
            )}
          </Flex>
        </div>
      ) : null}
    </div>
  )
}

export default inject("ModalStore")(observer(EventDetails))
