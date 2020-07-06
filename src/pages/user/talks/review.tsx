import React from "react"
import {
  FiMail,
  FiClock,
  FiCheck,
  FiCalendar,
  FiEdit,
  FiEye,
  FiArrowLeft,
} from "react-icons/fi"
import styled from "styled-components"
import { IoIosPeople } from "react-icons/io"

import { Header, Footer, Loader } from "../../../components/"
import { GET_TALK } from "../../../data/queries"
import {
  Body as Bod,
  Text,
  Head,
  Button,
  Title,
  Hover,
} from "../../../styles/style"

const Body = styled(Bod)`
  background: #fbfbfb;
  padding: 0.5rem 0.8rem;
  border-left 5px solid grey; 
  li {
    list-style: none
    margin : 2rem 0.5rem
  }
`

const Review = props => {
  return (
    <Body>
      <li>
        <Text center> You Edited this draft </Text>
      </li>

      <li>
        <Text center> You Submitted this draft </Text>
      </li>
      <li>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <img
              src={require("../../../assets/images/developer.png")}
              alt="reviewer"
              style={{ height: "55px", width: "55px" }}
            />

            <Text style={{ cursor: "pointer" }}>Concatenate Conference</Text>

            <Text small>10:00 pm</Text>
          </div>
        </div>
      </li>
    </Body>
  )
}

export default Review
