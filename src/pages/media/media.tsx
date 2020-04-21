import React from "react"
import { inject, observer } from "mobx-react"
import { FiSearch, FiImage } from "react-icons/fi"
import { GoFile } from "react-icons/go"
import { MdVideoLibrary } from "react-icons/md"
import { Dropdown } from "react-bootstrap"
import Flex from "styled-flex-component"
import styled from "styled-components"

import { Header, Footer } from "../../components/"
import Gallery from "./gallery"
import { Contain, Input, Hover, Text } from "../../styles/style"

const InputBox = styled.div`
  padding: 0.05rem 1rem;
  width: 35rem;
  border: 1px solid #fff;
  border-radius: 5px;
  height: auto;
`

const Border = styled.div`
  padding: 0.1rem 1rem;
  border: 0px;
  margin: 0.7rem 0rem;
  color: #fff;
  border-radius: 5px;
  background: #100e17;
  &: hover {
    cursor: pointer;
  }
`

const Media = (props): JSX.Element => {
  const mediaTeam = [{ id: 1 }, { id: 2 }, { id: 1 }, { id: 2 }]

  return (
    <div>
      <Header unshadowed options={true} event="|OSCA>Media " />

      <div style={{ backgroundColor: "#401364", color: "#fff" }}>
        <br />
        <br />
        <Contain>
          <Flex justifyBetween>
            <Text white> 700 Files </Text>
            <InputBox>
              <Flex>
                <Hover style={{ paddingTop: "10px" }}>
                  <FiSearch style={{ fontSize: "1.5rem" }} />
                </Hover>
                <Input
                  white
                  unmargined
                  unbordered
                  transparent
                  placeholder="Search a file"
                />
              </Flex>
            </InputBox>
          </Flex>
          <br />

          <Flex justifyBetween>
            <Text white> XXXXX files sent to xxx attendees. </Text>

            <Text white>700 Total Files </Text>
          </Flex>

          <div
            style={{
              borderTop: "1px solid grey",
            }}
          >
            <Flex>
              <Border>
                <Text white style={{ paddingTop: "15px" }} small>
                  Media Team:{" "}
                </Text>
              </Border>

              <Flex>
                {mediaTeam.map(() => {
                  return (
                    <img
                      alt="media"
                      style={{
                        height: "auto",
                        maxWidth: "4rem",
                        margin: "0.5rem 1rem",
                      }}
                      src={require("../../assets/images/developer.png")}
                    />
                  )
                })}
              </Flex>
            </Flex>
          </div>
        </Contain>
        <hr />
      </div>
      <Contain>
        <Gallery />
      </Contain>
      <Footer />
    </div>
  )
}
export default inject("MediaStore")(observer(Media))
