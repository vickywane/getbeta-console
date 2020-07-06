import React from "react"
import Flex from "styled-flex-component"
import { Image } from "react-bootstrap"
import {
  FiCalendar,
  FiList,
  FiImage,
  FiSmartphone,
  FiCast,
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

const HoverCircle = styled(Hover)`
  padding: 1.2rem 1.5rem;
  margin: 0.2rem 0.7rem;
  border-radius: 50%;
  transition: all 350ms;
  border: 1px solid grey;
  &: hover {
    background: #fbfbfb;
  }
`

  const MediaLink = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    li {
      margin: 0rem 0.5rem;
      list-style: none;
      a {
        text-align: center;
      }
      &: hover {
      color : ${props => props.hoverColor}
      }
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
    mediaLinks,
    id,
    bucketName,
    dateCreated,
    isVirtual,
  } = data.event
  const { showEventDetails } = props.state


  return (
    <div style={{ transition: "all 500ms" }}>
      {showEventDetails ? (
        <div style={{ transition: "all 500ms" }}>
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
                    transition: "all 500ms",
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

                          <MediaLink>
                            {mediaLinks !== null && mediaLinks[0] !== "" && (
                              <li  >
                                <a href={`${mediaLinks[0]}`} target="_blank">
                                  <HoverCircle hoverColor="red"  >
                                    <FiInstagram
                                      style={{ fontSize: "1.8rem" }}
                                    />
                                  </HoverCircle>
                                </a>
                              </li>
                            )}

                            {mediaLinks !== null && mediaLinks[1] !== "" && (
                              <li >
                                <a href={`${mediaLinks[1]}`} target="_blank">
                                  <HoverCircle hoverColor="blue" >
                                    <FiTwitter style={{ fontSize: "1.8rem" }} />
                                  </HoverCircle>
                                </a>
                              </li>
                            )}

                            {mediaLinks !== null && mediaLinks[2] !== "" && (
                              <li>
                                <a href={`${mediaLinks[2]}`} target="_blank">
                                  <HoverCircle>
                                    <FiFacebook
                                      style={{ fontSize: "1.8rem" }}
                                    />
                                  </HoverCircle>
                                </a>
                              </li>
                            )}
                          </MediaLink>

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
              {isVirtual ? (
                <FiCast style={{ fontSize: "1.6em" }} />
              ) : (
                <GoLocation style={{ fontSize: "1.6em" }} />
              )}

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