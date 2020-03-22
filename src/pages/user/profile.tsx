import React from "react"
import Flex from "styled-flex-component"
import { Image } from "react-bootstrap"
import { FiX, FiLogOut, FiEdit3, FiImage } from "react-icons/fi"
import { IoMdClipboard } from "react-icons/io"
import { Link } from "react-router-dom"

import {
  Body,
  Detail,
  Card,
  Bounce,
  Name,
  Section,
  Contain,
  Title,
  Text,
  Hover,
} from "../../styles/style"

const Profile = (): JSX.Element => {
  return (
    <Contain>
      <Flex justifyBetween>
        <Flex>
          <Image
            alt="profile"
            src={require("../../assets/images/developer.png")}
            style={{ maxWidth: "10em", maxHeight: "10em" }}
            roundedCircle
            rounded
            fluid
          />

          <Detail>
            <Title center> Nwani Victory </Title>
            <Text center>
              Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
              bla bla bla{" "}
            </Text>
            <Hover style={{ textAlign: "center" }}>
              <FiEdit3 style={{ fontSize: "2em" }} />{" "}
            </Hover>
          </Detail>
        </Flex>

        <Flex column>
          <br />
          <Link to="/media">
            <Hover>
              <FiImage style={{ fontSize: "2.2em" }} />{" "}
            </Hover>
          </Link>
          <br />
          <Link to="/talks">
            <Hover>
              {" "}
              <IoMdClipboard style={{ fontSize: "2.2em" }} />{" "}
            </Hover>
          </Link>
          <br />
          <Link to="/login">
            <Hover>
              <FiLogOut style={{ fontSize: "2.2em" }} />{" "}
            </Hover>
          </Link>
        </Flex>
      </Flex>
    </Contain>
  )
}

export default Profile
