import React, { useState } from "react"
import { inject, observer } from "mobx-react"
import { FiSearch, FiUploadCloud, FiX } from "react-icons/fi"
import Flex from "styled-flex-component"
import { Link } from "react-router-dom"
import { useQuery } from "@apollo/react-hooks"

import Field from '../forms/fields'
import { Header, Footer, Loader } from "../../components/"
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
import Upload from "./upload"
import { GET_EVENT } from "../../data/queries"

const mediaTeam = [{ id: 1 }, { id: 2 }, { id: 1 }, { id: 2 }]

const Media = (props): JSX.Element => {
  const { openUploadModal } = props.MediaStore

  const Hooks: number = useWindowWidth()
  const [modal, showModal] = useState(false)

  const { data, loading, error } = useQuery(GET_EVENT, {
    variables: {
      id: props.match.params.id,
      name: "",
    },
  })

  if (loading) {
    return <Loader type="loading" />
  }

  if (error) {
    console.log(error, "error")
    return <p> error here</p>
  }

  const { name } = data.event

  const bucketName = props.match.params.name
  return (
    <div>
      <Header unshadowed options={true} event={name} />

      <Upload bucketName={bucketName} eventId={props.match.params.id} />

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
                    placeholder="Search for a file"
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

            <Hover onClick={() => openUploadModal()}>
              <Flex>
                <FiUploadCloud style={{ color: "#fff", fontSize: "2rem" }} />
                <Text style={{ padding: "0rem 0.7rem" }} white>
                  Upload
                </Text>
              </Flex>
            </Hover>
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
                        height: "70px",
                        width: "70px",
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
