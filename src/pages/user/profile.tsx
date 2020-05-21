import * as React from "react"
import Flex from "styled-flex-component"
import { Image } from "react-bootstrap"
import { FiLogOut, FiImage, FiX } from "react-icons/fi"
import { IoMdClipboard } from "react-icons/io"
import { Link } from "react-router-dom"
import { CSSTransition } from "react-transition-group"

import useWindowWidth from "../../hook_style"
import {
  Detail,
  Contain,
  Text,
  Hover,
  BigTitle,
  MyCard,
} from "../../styles/style"
import ChangeProfile from "./editProfile"
import "../../App.css"

const Profile = (props): JSX.Element => {
  const { name, email } = props.User.user
  const Hooks = useWindowWidth()
  const [EditProfile, setEditProfile] = React.useState(false)

  return (
    <Contain grey bottomShadow>
      <br />
      <Flex justifyBetween>
        <Flex>
          <Hover
            onClick={() => {
              setEditProfile(!EditProfile)
            }}
          >
            <Image
              alt="profile"
              src={require("../../assets/images/developer.png")}
              style={{ maxWidth: "8em", maxHeight: "8em" }}
              roundedCircle
              rounded
              fluid
            />
          </Hover>
          <CSSTransition
            timeout={400}
            classNames={"profile"}
            in={EditProfile == true}
            unmountOnExit
          >
            <MyCard>
              <Flex justifyBetween>
                <Text bold> Edit Profile </Text>
                <Hover
                  onClick={() => {
                    setEditProfile(!EditProfile)
                  }}
                  style={{ textAlign: "right" }}
                >
                  <FiX style={{ fontSize: "1.8rem" }} />
                </Hover>
              </Flex>
              <hr />
              <ChangeProfile name={name} email={email} />
            </MyCard>
          </CSSTransition>

          <Detail style={{ padding: "0rem 1rem" }}>
            <br />
            <BigTitle bold center>
              {name}{" "}
            </BigTitle>
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
            <Hover
              style={{ color: "#401364" }}
              onClick={() => {
                props.logout()
              }}
            >
              <Flex>
                <FiLogOut style={{ fontSize: "2em" }} />

                <Text style={{ padding: "0rem 1rem" }}>Sign Out </Text>
              </Flex>
            </Hover>
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
            <Hover
              style={{ color: "#401364" }}
              onClick={() => {
                props.logout()
              }}
            >
              <FiLogOut style={{ fontSize: "2em" }} />
            </Hover>
          </Flex>
        )}
      </Flex>
      <br />
    </Contain>
  )
}

export default Profile
