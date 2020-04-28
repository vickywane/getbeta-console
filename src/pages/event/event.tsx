import React from "react"
import Flex from "styled-flex-component"
import { Image, Tab, Tabs } from "react-bootstrap"
import { FiList, FiImage, FiSmartphone, FiMail } from "react-icons/fi"
import { MdPeopleOutline } from "react-icons/md"
import { GoLocation } from "react-icons/go"
import { inject, observer } from "mobx-react"
import { Link } from "react-router-dom"

import { Header, Footer } from "../../components/"
import { Hover, Contain, Text, Title, Button } from "../../styles/style"
import { Checklist, People, Contact } from "../../components/modals/"
import useWindowWidth from "../../hook_style"

import Activity from "./Activity"
import TeamList from "./teamList"
import Events from "./events"

const Event = (props): JSX.Element => {
  const { openChecklist, openPeople, openContactModal } = props.ModalStore
  const Hooks = useWindowWidth()

  return (
    <div>
      <Header event="|OSCA" />
      <br />
      <Checklist />
      <People />
      <Contact />
      <Contain img="../../assets/images/test.png">
        <br />
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
                  <Text center> OscaAfrica@gmail.com </Text>
                  <Flex justifyBetween>
                    <Text small> 1 Conference </Text>
                    <Text small> 10 Meetup </Text>
                  </Flex>

                  {Hooks >= 650 ? (
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
        <Tabs defaultActiveKey="activity" id="uncontrolled-tab-example">
          <Tab eventKey="activity" title="Activity">
            <Activity />
          </Tab>
          <Tab eventKey="team" title="Teams">
            <TeamList />
          </Tab>
          <Tab eventKey="Events" title="Events">
            <Events />
          </Tab>
        </Tabs>
      </Contain>

      <br />
      <Footer />
    </div>
  )
}

export default inject("ModalStore")(observer(Event))
