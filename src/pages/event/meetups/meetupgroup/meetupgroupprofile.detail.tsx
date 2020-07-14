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
} from "../../../../styles/style"
import EventTabs from "../../eventTab"
import { UserContext } from "../../../../state/context/contextState"

const HoverCircle = styled(Hover)`
  padding: 0.8rem 0.8rem;
  margin: 0rem 0.7rem;
  border-radius: 50%;
  transition: all 350ms;
  border: 1px solid #fff;
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
      color: ${props => props.hoverColor};
    }
  }
`

const MeetupGroupDetails = (props): JSX.Element => {
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
    createdAt,
    isVirtual,
  } = data.getMeetupGroup
  const { showEventDetails } = props.state

  const { location } = data.getMeetupGroup

  return (
    <div style={{ transition: "all 500ms" }}>
      {showEventDetails ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              borderRadius: "10px",
              boxShadow: "0px 3px 6px solid grey",
              background: "#0e2f5ac7",
              padding: "1.5rem 1rem",
              color: "#fff",
              width: "93%",
              margin: "1rem 1.5rem",
            }}
          >
            <div
              style={{
                margin: "2rem 0rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div style={{ margin: "0rem 1rem" }}>
                <Title center> {name} </Title>
                <Text small center>
                  {" "}
                  {summary}{" "}
                </Text>
              </div>
              <img
                alt="Meetup display"
                style={{ height: "120px", width: "120px", borderRadius: "50%" }}
                src={require("../../../../assets/images/developer.png")}
              />
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ display: "flex" }}>
                <Hover style={{ margin: "0rem 0.4rem" }}>
                  <GoLocation style={{ fontSize: "1.7rem" }} />
                </Hover>
                <Text small> {location} </Text>
              </div>

              <MediaLink>
                <li>
                  <a href={``} target="_blank">
                    <HoverCircle hoverColor="red">
                      <FiInstagram style={{ fontSize: "1.7rem" }} />
                    </HoverCircle>
                  </a>
                </li>

                <li>
                  <a href={``} target="_blank">
                    <HoverCircle hoverColor="blue">
                      <FiTwitter style={{ fontSize: "1.7rem" }} />
                    </HoverCircle>
                  </a>
                </li>

                <li>
                  <a href={``} target="_blank">
                    <HoverCircle>
                      <FiFacebook style={{ fontSize: "1.7rem" }} />
                    </HoverCircle>
                  </a>
                </li>
              </MediaLink>

              <div style={{ display: "flex" }}>
                <Hover style={{ margin: "0rem 0.4rem" }}>
                  <FiCalendar style={{ fontSize: "1.7rem" }} />
                </Hover>
                <Text small> {createdAt} </Text>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default inject("ModalStore")(observer(MeetupGroupDetails))
