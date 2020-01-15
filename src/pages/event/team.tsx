import React from "react"
import Flex from "styled-flex-component"
import { Image } from "react-bootstrap"
import { FiList } from "react-icons/fi"
import { MdPeopleOutline } from "react-icons/md"
import { GoLocation } from "react-icons/go"
import { inject, observer } from "mobx-react"

import { Header, Footer } from "../../components/"
import { Hover, Body } from "../../styles/style"
import { Checklist } from "../../components/modals/"
import Activity from "./Activity"
import { Modal } from "react-bootstrap"

const data = [
  { i: 1, name: "design" },
  { i: 2, name: "gifts" },
  { i: 3, name: "food" },
  { i: 4, name: "attendees" },
]

const Team = (props): JSX.Element => {
  return (
    <div>
      <Header name="OSCA > Team" screen="event" />
      <Checklist />

      <Body>
        <h2> Team page </h2>
      </Body>
      <Footer />
    </div>
  )
}

export default inject("ModalStore")(observer(Team))
