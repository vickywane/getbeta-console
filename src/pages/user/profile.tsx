import React from "react"
import Flex from "styled-flex-component"
import { Image } from "react-bootstrap"
import { FiX, FiLogOut, FiEdit3, FiImage } from "react-icons/fi"
import { IoMdClipboard } from "react-icons/io"
import { Link } from "react-router-dom"

import { Detail, Contain, Title, Text, Hover } from "../../styles/style"

const Profile = (): JSX.Element => {
  return (
    <Contain>
      <br />
      <Flex justifyBetween>
        <Flex>
          <Image
            alt="profile"
            src={require("../../assets/images/developer.png")}
            style={{ maxWidth: "8em", maxHeight: "8em" }}
            roundedCircle
            rounded
            fluid
          />

          <Detail>
            <br />
            <Title center> Nwani Victory </Title>
            <Text center> Vickywane@gmail.com </Text>
          </Detail>
        </Flex>

        <Flex column>
          <Link to="/media">
            <Hover>
              <FiImage style={{ fontSize: "2em" }} />
            </Hover>
          </Link>
          <br />
          <Link to="/talks">
            <Hover>
              <IoMdClipboard style={{ fontSize: "2em" }} />
            </Hover>
          </Link>
          <br />
          <Link to="/login">
            <Hover>
              <FiLogOut style={{ fontSize: "2em" }} />
            </Hover>
          </Link>
        </Flex>
      </Flex>
    </Contain>
  )
}

export default Profile
