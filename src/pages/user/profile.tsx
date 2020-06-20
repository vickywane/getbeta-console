import * as React from "react"
import Flex from "styled-flex-component"
import { Image } from "react-bootstrap"
import { FiLogOut, FiImage, FiX } from "react-icons/fi"
import { IoMdClipboard } from "react-icons/io"
import { Link } from "react-router-dom"
import { CSSTransition } from "react-transition-group"
import { inject, observer } from "mobx-react"
import styled from "styled-components"

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

const List = styled.div`
  li {
  list-style: none;
    margin : 0.5rem 0.5rem;
    padding : 0.5rem 0.5rem
    justify-content : center;
    transition: all 300ms;
    display: flex;
    &: hover {
      background : #fafafa;
     border-radius : 7px;
      }
  }    
`

const ListContainer = styled.div`
    padding : 0.5rem 0.5rem
    background : #fafafa;
    border-radius : 7px ; 
    border :  2px dashed #401364;
    box-shadow: 0px 2px 4px #401364;
`

const Profile = (props): JSX.Element => {
  const { name, email, attending, bucketName, img_uri } = props.User.user
  const { editProfile, showEditProfile, closeEditProfile } = props.ModalStore
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
            <BigTitle bold center>
              {name}{" "}
            </BigTitle>
            <Text center> {email} </Text>
          </Detail>
        </Flex>

        <ListContainer>
          {Hooks >= 1000 ? (
            <List>
              <li>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Flex>
                    <Hover>
                      <FiImage style={{ fontSize: "2em" }} />
                    </Hover>

                    <Text style={{ color: "#401364", padding: "0rem 1rem" }}>
                      Gallery{" "}
                    </Text>
                  </Flex>
                </Link>
              </li>
              <li>
                <Link to="/drafts" style={{ textDecoration: "none" }}>
                  <Flex>
                    <Hover>
                      <IoMdClipboard style={{ fontSize: "2em" }} />
                    </Hover>

                    <Text style={{ color: "#401364", padding: "0rem 1rem" }}>
                      Talk Drafts{" "}
                    </Text>
                  </Flex>
                </Link>
              </li>
              <li>
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
              </li>
            </List>
          ) : (
            <Flex column>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Hover>
                  <FiImage style={{ fontSize: "2em" }} />
                </Hover>
              </Link>
              <br />
              <Link to="/drafts" style={{ textDecoration: "none" }}>
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
        </ListContainer>
      </Flex>
      <br />
      <br />
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

export default inject("ModalStore")(observer(Profile))
