import * as React from "react"
import Flex from "styled-flex-component"
import { Image } from "react-bootstrap"
import { Link } from "react-router-dom"
import { CSSTransition } from "react-transition-group"
import { inject, observer } from "mobx-react"
import styled from "styled-components"

import ActionBar from "./userActionBar"
import TestImg from "../../assets/images/test.png"
import useWindowWidth from "../../hook_style"
import {
  Detail,
  Contain,
  Text,
  Hover,
  BigTitle,
  Section,
  Head,
} from "../../styles/style"
import ChangeProfile from "./editProfile"
import "../../App.css"

const Profile = (props): JSX.Element => {
  const { name, email, attending, bucketName, img_uri } = props.User.user
  const { editProfile, showEditProfile, closeEditProfile } = props.ModalStore
  const { LogOut } = props.AuthStore

  const AttendNo = attending === null ? 0 : attending.length
  const Hooks = useWindowWidth()

  return (
    <Contain img={TestImg} bottomPadding bottomShadow>
      <br />
      <Flex justifyBetween>
        <Flex>
          <Hover
            onClick={() => {
              showEditProfile()
            }}
          >
            <Image
              alt="profile"
              src={
                img_uri === null
                  ? require("../../assets/images/developer.png")
                  : img_uri
              }
              style={{
                border: "3px solid #401364",
                boxShadow: "0px 2px 4px #401364",
                height: "150px",
                width: "150px",
              }}
              roundedCircle
              rounded
              fluid
            />
          </Hover>

          <ChangeProfile
            bucketName={bucketName}
            name={name}
            email={email}
            show={editProfile}
            close={closeEditProfile}
          />

          <Detail style={{ padding: "0rem 1rem" }}>
            <br />
            <BigTitle style={{ fontFamily: "calibri" }} bold center>
              {name}{" "}
            </BigTitle>
            <Text center> {email} </Text>
          </Detail>
        </Flex>

        <ActionBar logout={LogOut} screen="profile" />
      </Flex>
      <Flex>
        <div style={{ padding: "0rem 1rem" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Text> Watched Events ( 0 ) </Text>
          </Link>
        </div>

        <div style={{ padding: "0rem 1rem" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Text> Attending ( {AttendNo} ) </Text>
          </Link>
        </div>
      </Flex>
    </Contain>
  )
}

export default inject("ModalStore", "AuthStore")(observer(Profile))
