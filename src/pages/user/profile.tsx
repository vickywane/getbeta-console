import React from "react"
import Flex from "styled-flex-component"
import { Image } from "react-bootstrap"
import { FiLogOut, FiImage } from "react-icons/fi"
import { IoMdClipboard } from "react-icons/io"
import { Link } from "react-router-dom"
import useWindowWidth from "../../hook_style"

import { Detail, Contain, Title, Text, Hover } from "../../styles/style"

const Profile = (props): JSX.Element => {
  const { name, email } = props.User.user

  const Hooks = useWindowWidth()

  return (
    <Contain>
      <br />
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

          <Detail style={{ padding: "0rem 1rem" }}>
            <br />
            <Title bold center>
              {" "}
              {name}{" "}
            </Title>
            <Text center> {email} </Text>
          </Detail>
        </Flex>

        {Hooks >= 1000 ? (
          <Flex column>
            <Link to="/">
              <Flex>
                <Hover>
                  <FiImage style={{ fontSize: "2em" }} />
                </Hover>

                <Text style={{ color: "#401364", padding: "0rem 1rem" }}>
                  {" "}
                  Gallery{" "}
                </Text>
              </Flex>
            </Link>
            <br />
            <Link to="/talks">
              <Flex>
                <Hover>
                  <IoMdClipboard style={{ fontSize: "2em" }} />
                </Hover>

                <Text style={{ color: "#401364", padding: "0rem 1rem" }}>
                  {" "}
                  Talks{" "}
                </Text>
              </Flex>
            </Link>
            <br />
            <Link to="/login">
              <Flex>
                <Hover>
                  <FiLogOut style={{ fontSize: "2em" }} />
                </Hover>

                <Text style={{ color: "#401364", padding: "0rem 1rem" }}>
                  {" "}
                  SignOut{" "}
                </Text>
              </Flex>
            </Link>
          </Flex>
        ) : (
          <Flex column>
            <Link to="/">
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
        )}
      </Flex>
    </Contain>
  )
}

export default Profile
