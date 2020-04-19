import { Link } from "react-router-dom"
import React, { useState } from "react"
import Img from "react-image"
import styled from "styled-components"
import Flex from "styled-flex-component"
import { FiEdit3, FiUploadCloud, FiSettings } from "react-icons/fi"
import { inject, observer } from "mobx-react"

import { Hover, UploadBtn } from "../../styles/style"
import { Burger, Menu } from "./"
import useWindowWidth from "../../hook_style"

// ? marks this interface value as not required by other components
// marking this interface as non-mandatory makes d values undefined --fix later
//@ts-ignore
interface CustomProps {
  //@ts-ignore
  screen?: String
  //@ts-ignore
  name?: String
}

const Header = (props, { screen, name }: CustomProps): JSX.Element => {
  const hooks = useWindowWidth()

  const Div = styled.div`
      padding: 0.5em
      background : #444444
    `

  const A = styled.a`
    text-decoration: none;
    font-size: 1.7em;
    font-family: monospace;
  `

  const Image = styled(Img)`
    width: 7%;
    height: 25px;
  `

  // react hooks && event listeners
  const NameDiv = styled.div`
    margin-left: 3%;
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
                  <Flex>
                    <NameDiv>
                      <Link to="/console" style={{ textDecoration: "none" }}>
                        <A>Event</A>
                      </Link>
                    </NameDiv>
                    <A style={{ paddingLeft: "5px", color: "white" }}>
                      {" "}
                      {props.event}{" "}
                    </A>
                  </Flex>

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

                    <Link to="/settings" style={{ color: "white" }}>
                      <Hover
                        white
                        style={{ paddingLeft: "10px", paddingRight: "10px" }}
                        onClick={() => {
                          showProfilePane()
                        }}
                      >
                        <FiSettings style={{ fontSize: "1.6rem" }} />{" "}
                      </Hover>{" "}
                    </Link>
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
    </div>
  )
}

export default inject("AuthStore", "ConsoleStore")(observer(Header))
