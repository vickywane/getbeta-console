import { Link } from "react-router-dom"
import React, { useState } from "react"
import Img from "react-image"
import styled from "styled-components"
import Flex from "styled-flex-component"
import { FiMenu, FiUser, FiEdit3 } from "react-icons/fi"
import { IoIosNotificationsOutline } from "react-icons/io"
import { inject, observer } from "mobx-react"

import { Hover } from "../../styles/style"
import { Burger, Menu } from "./"
import useWindowWidth from "../../hook_style"

// ? marks this interface value as not required by other components
// marking this interface as non-mandatory makes d values undefined --fix later
interface CustomProps {
  screen?: String
  name?: String
}

const Header = (props, { screen, name }: CustomProps): JSX.Element => {
  const hooks = useWindowWidth()

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

  const [open, setOpen] = useState(false)
  const menuId = "main-menu"

  return (
    <div>
      <div
        style={{ boxShadow: ProfilePane ? "0px 0px 0px" : "0px 5px 5px grey" }}
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
                    <div>
                      <Burger
                        type="Notification"
                        open={open}
                        setOpen={setOpen}
                        aria-controls={menuId}
                      />
                      <Menu open={open} setOpen={setOpen} id={menuId} />
                    </div>

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

                  {props.screen === "Docs" ? null : (
                    <div>
                      <Burger
                        type="Burger"
                        open={open}
                        setOpen={setOpen}
                        aria-controls={menuId}
                      />
                      <Menu open={open} setOpen={setOpen} id={menuId} />
                    </div>
                  )}
                </Flex>
              </nav>
            </Div>
          </div>
        )}
      </div>

      {props.screen === "event" ? (
        <Div style={{ background: "transparent" }}>
          <Flex justifyBetween>
            <h5
              style={{ color: "#000", paddingLeft: "10px", paddingTop: "10px" }}
            >
              {props.name}
            </h5>

            <Hover style={{ paddingRight: "15px", paddingTop: "15px" }}>
              <FiEdit3 style={{ fontSize: "1.7em" }} />
            </Hover>
          </Flex>
          <hr />
        </Div>
      ) : null}
    </div>
  )
}

export default inject("AuthStore", "ConsoleStore")(observer(Header))
