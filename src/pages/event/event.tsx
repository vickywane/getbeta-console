import React from "react"
import Flex from "styled-flex-component"
import { Image } from "react-bootstrap"
import { FiList, FiImage } from "react-icons/fi"
import { MdPeopleOutline } from "react-icons/md"
import { GoLocation } from "react-icons/go"
import { inject, observer } from "mobx-react"
import { Link } from "react-router-dom"

import { Header, Footer } from "../../components/"
import { Hover, Bio, Contain, Bounce, Card } from "../../styles/style"
import { Checklist, People } from "../../components/modals/"
import Activity from "./Activity"

const data = [
  { id: 1, name: "design" },
  { id: 2, name: "gifts" },
  { id: 3, name: "food" },
  { id: 4, name: "attendees" },
]

const Event = (props): JSX.Element => {
  const { openChecklist, openPeople } = props.ModalStore

  return (
    <div>
      <Header options={true} name="OSCA" action="edit" />
      <Checklist />
      <People />

      <Contain>
        <Flex justifyBetween>
          <Flex column>
            <Image
              alt="profile"
              src={require("../../assets/images/developer.png")}
              style={{ maxWidth: "7em", maxHeight: "7em" }}
              fluid
              thumbnail
            />

            <Bio>
              Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
            </Bio>

            <Flex>
              <GoLocation style={{ fontSize: "1.7em" }} />
              <p style={{ paddingLeft: "7px" }}>
                Tech Zone Park , Egbeda , Lagos
              </p>
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
                  <FiImage style={{ fontSize: "2.2em" }} />
                </Hover>
              </Link>

              <br />
              <Hover
                onClick={() => {
                  openChecklist()
                }}
              >
                <FiList style={{ fontSize: "2.2em" }} />
              </Hover>
              <br />
              <Hover>
                <MdPeopleOutline
                  onClick={() => {
                    openPeople()
                  }}
                  style={{ fontSize: "2.2em" }}
                />
              </Hover>
            </div>
            <h3 style={{ fontWeight: "lighter" }}> 30days left </h3>
          </Flex>
        </Flex>
      </Contain>

      <hr />
      <Flex column>
        <h5 style={{ textAlign: "center" }}> TEAMS </h5>
        <Flex justifyAround>
          {data.map(({ id, name }) => {
            return (
              <Bounce>
                <Link to={`/team/${id}`}>
                  <Card key={id} team>
                    <h6> {name.toUpperCase()}</h6>
                  </Card>
                </Link>
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
