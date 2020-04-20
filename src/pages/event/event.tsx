import React from "react"
import Flex from "styled-flex-component"
import { Image, Tab, Tabs } from "react-bootstrap"
import { FiList, FiImage, FiSmartphone } from "react-icons/fi"
import { MdPeopleOutline } from "react-icons/md"
import { GoLocation } from "react-icons/go"
import { inject, observer } from "mobx-react"
import { Link } from "react-router-dom"

import { Header, Footer } from "../../components/"
import { Hover, Contain, Text, Title, Button } from "../../styles/style"
import { Checklist, People } from "../../components/modals/"

import Activity from "./Activity"
import Team from "./team"

const Event = (props): JSX.Element => {
  const { openChecklist, openPeople } = props.ModalStore

  return (
    <div>
      <Header event="|OSCA" />
      <br />
      <Checklist />
      <People />
      <Contain img="../../assets/images/test.png">
        <br />
        <br />
        <br />
        <Flex justifyBetween>
          <Flex column>
            <Flex>
              <Image
                alt="profile"
                src={require("../../assets/images/developer.png")}
                style={{ maxWidth: "7em", maxHeight: "7em" }}
                fluid
                thumbnail
              />

              <div style={{ padding: "0.2rem 1rem" }}>
                <Flex column>
                  <Title small center bold>
                    Open Source Community Africa.
                  </Title>
                  <Flex justifyBetween>
                    <Text small> 1 Conference </Text>
                    <Text small> 10 Meetup </Text>
                  </Flex>
                  <Flex justifyBetween>
                    <Link to="/media">
                      <Button> Gallery </Button>
                    </Link>
                    <Button transparent> Contact Support </Button>
                  </Flex>
                </Flex>
              </div>
            </Flex>
            <br />
            <Flex>
              <GoLocation style={{ fontSize: "1.5em" }} />
              <Text small style={{ paddingLeft: "7px" }}>
                Tech Zone Park , Egbeda , Lagos
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
              <Hover
                onClick={() => {
                  openChecklist()
                }}
              >
                <FiList style={{ fontSize: "2rem" }} />
              </Hover>
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
        </Flex>
        <hr />
        <Tabs defaultActiveKey="team" id="uncontrolled-tab-example">
          <Tab eventKey="activity" title="Activity">
            <Activity />
          </Tab>
          <Tab eventKey="team" title="Teams">
            <Team />
          </Tab>
          <Tab eventKey="Assets" title="Assets">
            <p> </p>
          </Tab>
        </Tabs>
      </Contain>

      <br />
      <Footer />
    </div>
  )
}

export default inject("ModalStore")(observer(Event))
