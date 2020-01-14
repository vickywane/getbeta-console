import React from "react"
import Flex from "styled-flex-component"
import { Image } from "react-bootstrap"
import { FiList } from "react-icons/fi"
import { MdPeopleOutline } from "react-icons/md"
import { GoLocation } from "react-icons/go"
import { inject, observer } from "mobx-react"

import { Header, Footer } from "../../components/"
import { Hover, Bio, Contain, Bounce, Card } from "../../styles/style"
import { Checklist } from "../../components/modals/"
import Activity from "./Activity"

const data = [
  { i: 1, name: "design" },
  { i: 2, name: "gifts" },
  { i: 3, name: "food" },
  { i: 4, name: "attendees" },
]

const Event = (props): JSX.Element => {
  const { openChecklist } = props.ModalStore
  return (
    <div>
      <Header name="OSCA" screen="event" />
      <Checklist />
      <Contain>
        <Flex justifyBetween>
          <Flex column>
            <Image
              alt="profile"
              src={require("../../assets/images/developer.png")}
              style={{ maxWidth: "5em", maxHeight: "5em" }}
              fluid
              thumbnail
            />

            <Bio>
              Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
            </Bio>

            <Flex>
              <GoLocation style={{ fontSize: "1.7em" }} />
              <p style={{ paddingLeft: "7px" }}>
                Tech Zone Park , Egbeda , Lagos{" "}
              </p>
            </Flex>
          </Flex>

          <Flex column>
            <div style={{ textAlign: "right" }}>
              <br />
              <Hover
                onClick={() => {
                  openChecklist()
                }}
              >
                <FiList style={{ fontSize: "2.2em" }} />{" "}
              </Hover>
              <br />
              <Hover>
                <MdPeopleOutline style={{ fontSize: "2.2em" }} />{" "}
              </Hover>
            </div>
            <h1 style={{ fontWeight: "lighter" }}> 30days left </h1>
          </Flex>
        </Flex>
      </Contain>

      <hr />
      <Flex column>
        <h4 style={{ textAlign: "center" }}> TEAMS </h4>
        <Flex justifyAround>
          {data.map(({ i, name }) => {
            return (
              <Bounce>
                <Card key={i} team />
                <h5> {name.toUpperCase()}</h5>
              </Bounce>
            )
          })}
        </Flex>
      </Flex>

      <hr />

      <Activity />
      <Footer />
    </div>
  )
}

export default inject("ModalStore")(observer(Event))
