import React from "react"
import { inject, observer } from "mobx-react"
import { FiSearch, FiUploadCloud } from "react-icons/fi"
import Flex from "styled-flex-component"
import { Link } from "react-router-dom"

import { Header, Footer } from "../../components/"
import Gallery from "./gallery"
import {
  Contain,
  Border,
  Input,
  Hover,
  Text,
  InputBox,
} from "../../styles/style"
import useWindowWidth from "../../hook_style"

const mediaTeam = [{ id: 1 }, { id: 2 }, { id: 1 }, { id: 2 }]

const Media = (props): JSX.Element => {
  const Hooks: number = useWindowWidth()
  return (
    <div>
      <Header unshadowed options={true} event="|OSCA>Media " />

      <div style={{ backgroundColor: "#401364", color: "#fff" }}>
        <br />
        <br />
        <Contain>
          <Flex justifyBetween>
            <Text white> 700 Files </Text>

            {Hooks >= 700 ? (
              <InputBox>
                <Flex>
                  <Hover style={{ paddingTop: "5px" }}>
                    <FiSearch style={{ fontSize: "1.4rem" }} />
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
            ) : (
              <Hover style={{ paddingTop: "10px" }}>
                <FiSearch style={{ fontSize: "1.5rem" }} />
              </Hover>
            )}
          </Flex>
          <br />
          <br />

          <Flex justifyBetween>
            <Text white> XXXXX files sent to xxx attendees. </Text>

            <Link to={"/upload"} style={{ textDecoration: "none" }}>
              <Flex>
                <FiUploadCloud style={{ color: "#fff", fontSize: "2rem" }} />
                <Text style={{ padding: "0rem 0.7rem" }} white>
                  {" "}
                  Upload{" "}
                </Text>
              </Flex>
            </Link>
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
