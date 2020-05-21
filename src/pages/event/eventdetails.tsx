import React from "react"
import Flex from "styled-flex-component"
import { Image } from "react-bootstrap"
import { FiList, FiImage, FiSmartphone, FiMail } from "react-icons/fi"
import { MdPeopleOutline } from "react-icons/md"
import { GoLocation } from "react-icons/go"
import { inject, observer } from "mobx-react"
import { Link } from "react-router-dom"

import {
  Hover,
  Contain,
  Text,
  Title,
  Button,
  BigTitle,
} from "../../styles/style"
import EventTabs from "./evemttab"

import { UserContext } from "../../state/context/contextState"

const EventDetails = (props): JSX.Element => {
  const { openChecklist, openPeople, openContactModal } = props.ModalStore

  const { currentWindowSize, data } = props
  const { name, summary, venue } = data.event

  return (
    <Contain grey bottomShadow>
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

                  <div style={{ padding: "0.2rem 1rem" }}>
                    <Flex column>
                      <BigTitle center bold>
                        {name}
                      </BigTitle>
                      <Text center> {summary} </Text>

                      {currentWindowSize >= 650 ? (
                        <Flex justifyBetween>
                          <Link to="/media">
                            <Button> Gallery </Button>
                          </Link>

                          <Button
                            transparent
                            onClick={() => {
                              openContactModal()
                            }}
                          >
                            {" "}
                            Contact Support{" "}
                          </Button>
                        </Flex>
                      ) : (
                        <Flex justifyBetween>
                          <Hover>
                            <FiImage style={{ fontSize: "1.8rem" }} />
                          </Hover>

                          <Hover
                            onClick={() => {
                              openContactModal()
                            }}
                          >
                            <FiMail style={{ fontSize: "1.8rem" }} />
                          </Hover>
                        </Flex>
                      )}
                    </Flex>
                  </div>
                </Flex>
                <br />
                <Flex>
                  <GoLocation style={{ fontSize: "1.5em" }} />
                  <Text small style={{ paddingLeft: "7px" }}>
                    {venue}
                  </Text>
                </Flex>
              </Flex>

              <Flex column>
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
                  <Link to={"/schedule"} style={{ textDecoration: "none" }}>
                    <FiList style={{ fontSize: "2rem" }} />
                  </Link>
                  <br />
                  <br />
                  <Hover>
                    <MdPeopleOutline
                      onClick={() => {
                        openPeople()
                      }}
                      style={{ fontSize: "2rem" }}
                    />
                  </Hover>
                </div>
                <h3 style={{ fontWeight: "lighter" }}> 30days left </h3>
              </Flex>
            </div>
          )
        }}
      </UserContext.Consumer>
      <EventTabs />
    </Contain>
  )
}

export default inject("ModalStore")(observer(EventDetails))
