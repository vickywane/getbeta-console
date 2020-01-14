import { Link } from "react-router-dom"
import React from "react"
import Img from "react-image"
import styled from "styled-components"
import Flex from "styled-flex-component"
import { FiMenu, FiUser, FiEdit3 } from "react-icons/fi"
import { IoIosNotificationsOutline } from "react-icons/io"
import { inject, observer } from "mobx-react"

import { Hover } from "../styles/style"
import useWindowWidth from "../hook_style"

// ? marks this interface value as not required by other components
// marking this interface as non-mandatory makes d values undefined --fix later
interface CustomProps {
  screen?: String
  name?: String
}

const Header = (props, { screen, name }: CustomProps): JSX.Element => {
  const hooks = useWindowWidth()

  console.log(props.screen, props.name)

  const Div = styled.div`
      padding: 0.5em
      background : #444444
    `

  const A = styled.a`
    color: #0e2f5a;
    text-decoration: none;
    font-size: 1.6em;
    font-family: comic sans ms;
  `

  const Image = styled(Img)`
    width: 7%;
    height: 25px;
  `

  // react hooks && event listeners
  const NameDiv = styled.div`
    margin-left: 4%;
  `

  const { showProfilePane, ProfilePane } = props.ConsoleStore

  return (
    <div>
      <div
        style={{ boxShadow: ProfilePane ? "0px 0px 0px" : "0px 7px 7px grey" }}
      >
        {hooks >= 720 ? (
          <div>
            <Div
              style={{
                paddingTop: "1%",
              }}
            >
              <nav>
                <Flex justifyBetween>
                  <NameDiv>
                    <Link to="/console">
                      <A>Event</A>
                    </Link>
                  </NameDiv>

                  <Flex>
                    <Hover white style={{ paddingRight: "10px" }}>
                      <IoIosNotificationsOutline style={{ fontSize: "2em" }} />
                    </Hover>

                    <Hover
                      white
                      style={{ paddingLeft: "10px", paddingRight: "10px" }}
                      onClick={() => {
                        showProfilePane()
                      }}
                    >
                      <FiUser style={{ fontSize: "2em" }} />{" "}
                    </Hover>
                  </Flex>
                </Flex>
              </nav>
            </Div>
          </div>
        ) : (
          <div>
            <Div style={{ padding: "0.5em", paddingRight: "1%" }}>
              <nav>
                <Flex justifyBetween>
                  <NameDiv>
                    <Flex>
                      <Image
                        src={
                          "https://res.cloudinary.com/dkfptto8m/image/upload/v1558070244/Mongodb%20hackathon%20project/thunder.png"
                        }
                        alt="Logo"
                      />
                      <Link to="/console">
                        <A>Event</A>
                      </Link>
                    </Flex>
                  </NameDiv>

                  <Hover white>
                    <FiMenu style={{ fontSize: "2em" }} />{" "}
                  </Hover>
                </Flex>
              </nav>
            </Div>
          </div>
        )}
      </div>

      {props.screen === "event" ? (
        <Div style={{ padding: "0.2em", background: "transparent" }}>
          <Flex justifyBetween>
            <h3 style={{ color: "#000", paddingLeft: "10px" }}>
              {props.name}{" "}
            </h3>

            <Hover style={{ paddingRight: "15px", paddingTop: "15px" }}>
              <FiEdit3 style={{ fontSize: "2em" }} />
            </Hover>
          </Flex>
          <hr />
        </Div>
      ) : null}
    </div>
  )
}

export default inject("AuthStore", "ConsoleStore")(observer(Header))
