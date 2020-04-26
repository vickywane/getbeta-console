import { Link } from "react-router-dom"
import React, { useState } from "react"
import Flex from "styled-flex-component"
import { FiSettings, FiSearch } from "react-icons/fi"
import { inject, observer } from "mobx-react"

import {
  Hover,
  Header as Head,
  HeaderLinks,
  InputBox,
  Input,
} from "../../styles/style"
import { Burger, Menu } from "./"
import useWindowWidth from "../../hook_style"

const Header = (props): JSX.Element => {
  const hooks: number = useWindowWidth()

  const { showProfilePane }: any = props.ConsoleStore
  const [open, setOpen] = useState<boolean>(false)
  const menuId: string = "main-menu"

  if (props.page === "non-app") {
    return (
      <Head
        style={{
          boxShadow: props.unshadowed ? null : "0px 5px 5px grey",
          paddingTop: "2%",
        }}
      >
        <Flex justifyCenter>
          <HeaderLinks target={"_blank"} href="https://my-event.netlify.com">
            Oasis
          </HeaderLinks>
        </Flex>
      </Head>
    )
  }

  return (
    <div>
      <Head
        style={{
          boxShadow: props.unshadowed ? null : "0px 5px 5px grey",
          paddingTop: "1%",
        }}
      >
        {hooks >= 720 ? (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Flex>
              <Link to="/console" style={{ textDecoration: "none" }}>
                <HeaderLinks>Oasis</HeaderLinks>
              </Link>
              <HeaderLinks
                style={{
                  paddingLeft: "5px",
                  color: "white",
                  fontSize: "1.6em",
                  paddingTop: "5px",
                }}
              >
                {props.event}{" "}
              </HeaderLinks>
            </Flex>

            {props.page === "Search" ? (
              <div>
                {hooks >= 900 ? (
                  <InputBox>
                    <Flex>
                      <Hover style={{ paddingTop: "10px " }}>
                        <FiSearch
                          style={{ fontSize: "1.6rem", color: "#fff" }}
                        />
                      </Hover>

                      <Input
                        tiny
                        white
                        placeholder={props.placeholder}
                        transparent
                        unbordered
                      />
                    </Flex>
                  </InputBox>
                ) : null}
              </div>
            ) : null}

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
          </div>
        ) : (
          <Flex justifyBetween style={{ padding: "0.5em", paddingRight: "1%" }}>
            <Link to="/console">
              <HeaderLinks>Event</HeaderLinks>
            </Link>

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
        )}
      </Head>

      <br />
      <br />
    </div>
  )
}

export default inject("AuthStore", "ConsoleStore")(observer(Header))
