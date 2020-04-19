import React from "react"
import Flex from "styled-flex-component"
import { Image, Tab, Tabs } from "react-bootstrap"
import { FiList, FiImage } from "react-icons/fi"
import { MdPeopleOutline } from "react-icons/md"
import { GoLocation } from "react-icons/go"
import { inject, observer } from "mobx-react"
import { Link } from "react-router-dom"

import { Header, Footer } from "../../components/"
import { Hover, Contain, Text } from "../../styles/style"
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
      <Contain>
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
              <Text
                style={{ padding: "0.5rem 1rem", width: "20rem" }}
                small
                center
              >
                Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
              </Text>
            </Flex>
            <br />
            <Flex>
              <GoLocation style={{ fontSize: "1.7em" }} />
              <Text small style={{ paddingLeft: "7px" }}>
                Tech Zone Park , Egbeda , Lagos
              </Text>
            </Flex>
          </Flex>

          <Flex column>
            <div style={{ textAlign: "right" }}>
              <Link to="/media">
                <Hover
                  onClick={() => {
                    openChecklist()
                  }}
                >
                  <FiImage style={{ fontSize: "2rem" }} />
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
      </Contain>
      <hr />
      <Tabs defaultActiveKey="activity" id="uncontrolled-tab-example">
        <Tab eventKey="activity" title="Home">
          <Activity />
        </Tab>
        <Tab eventKey="team" title="Teams">
          <Team />
        </Tab>
        <Tab eventKey="Assets" title="Assets">
          <p> </p>
        </Tab>
      </Tabs>
      <br />
      <Footer />
    </div>
  )
}

export default inject("ModalStore")(observer(Event))
