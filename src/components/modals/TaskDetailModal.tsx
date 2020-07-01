import React, { useState } from "react"
import { Modal } from "react-bootstrap"
import { inject, observer } from "mobx-react"
import { FiX, FiSend, FiClock, FiPlus, FiCalendar } from "react-icons/fi"
import { GrAttachment } from "react-icons/gr"
import Flex from "styled-flex-component"
import { useMutation, useQuery } from "@apollo/react-hooks"
import { IoIosPeople, IoIosAlarm } from "react-icons/io"
import styled from "styled-components"

import { Loader } from "../"
import useWindowWidth from "../../hook_style"
import {} from "../../data/mutations"
import { GET_TASK } from "../../data/queries"
import { TeamInput } from "../../pages/forms/formsData"
import Field from "../../pages/forms/fields"
import {
  Hover,
  Title,
  Head,
  Section,
  Body,
  MessageInputBody,
  Text,
  Label,
  BigInput,
  Button,
} from "../../styles/style"

const Assignnees = styled.div`
  border-top : 1px solid grey
  display : flex
  justify-content  : space-between
  li {
    margin : 0.8rem 1rem
    list-style : none
    cursor : pointer
    img {
      height: 55px;
      width: 55px;
    }
  }
`

const Data = [
  {
    id: 1,
  },
  {
    id: 1,
  },
  {
    id: 1,
  },
]

const TaskDetail = props => {
  const [Description, setDescription] = useState<string>("")
  const [Category, setCategory] = useState<string>("")
  const [Comment, setComment] = useState<string>("")
  const [HideComment, setCommentVisibility] = useState<boolean>(false)

  const { showTaskDetail, openTaskDetail, closeTaskDetail } = props.ModalStore
  const { close, show, taskId } = props

  const Width = useWindowWidth()

  const onChange = (value: string, label: string) => {
    switch (label) {
      case "Issue Description":
        setDescription(value)
        break
      default:
        break
    }
  }

  const Submit = () => {}

  const CommentsData = [
    {
      id: 1,
    },
    {
      id: 2,
    },
  ]

  const { data, loading, error } = useQuery(GET_TASK, {
    variables: {
      id: taskId,
    },
  })
 

  if (data) {
    const { id, name } = data.task

    return (
      <Modal
        size="xl"
        style={{ marginTop: "3rem" }}
        onHide={() => closeTaskDetail()}
        show={showTaskDetail}
      >
        <div style={{ display: "grid", gridTemplateColumns: "4rem auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "1rem 0rem",
              height: "auto",
              width: "auto",
              color: "#fff",
              background: "#0e2f5a",
            }}
          >
            <IoIosPeople style={{ fontSize: "1.7rem" }} />
          </div>

          <div>
            <Head>
              <Section>
                {Width >= 1000
                  ? `${name}`
                  : `Ticket ${taskId}`}
              </Section>

              <Hover onClick={() => closeTaskDetail()}>
                <FiX style={{ fontSize: "1.75em" }} />
              </Hover>
            </Head>
            {loading && <Text center> Loading ...</Text>}
            {error && <Text center> An Error has Occurred </Text>}

            <Body>
              {!HideComment && (
                <Flex justifyBetween>
                  <Flex column>
                    <img
                      alt="creator"
                      style={{
                        margin: "0.6rem 2rem",
                        height: "55px",
                        width: "55px",
                      }}
                      src={require("../../assets/images/developer.png")}
                    />
                    <div
                      style={{
                        color: "grey",
                        display: "flex",
                      }}
                    >
                      <Hover>
                        <FiCalendar style={{ fontSize: "1.5rem" }} />{" "}
                      </Hover>

                      <Text style={{ padding: "0rem 0.5rem" }} small>
                        12 - 12 -12{" "}
                      </Text>
                    </div>
                  </Flex>

                  <Flex column>
                    <div style={{ display: "flex", color: "red" }}>
                      <div style={{ display: "flex" }}>
                        <Hover style={{ padding: "0rem 0.5rem" }}>
                          <IoIosAlarm style={{ fontSize: "1.5rem" }} />
                        </Hover>
                        <Text center small>
                          Deadline:
                        </Text>
                      </div>
                      <Text
                        style={{ padding: "0rem 0.7rem" }}
                        center
                        small
                        color="#000"
                      >
                        5 Days
                      </Text>
                    </div>

                    <Text center>
                      {" "}
                      Priority : <b> High </b>
                    </Text>
                  </Flex>
                </Flex>
              )}

              <br />

              <Section small> Description </Section>
              <hr />
              <Text style={{ paddingLeft: "1rem" }} small>
                Some Task description here Some Task description here Some Task
                description here Some Task description here
              </Text>
              <br />

              {!HideComment && (
                <div>
                  <Flex>
                    <Hover
                      style={{
                        margin: "0rem 0.5rem",
                      }}
                    >
                      <GrAttachment
                        style={{ color: "grey", fontSize: "1.5rem" }}
                      />
                    </Hover>
                    <Section small> Attachments </Section>
                  </Flex>
                  <hr />
                  <Text color="grey" style={{ paddingLeft: "1rem" }} small>
                    No Attachments added to this task
                  </Text>

                  <br />
                </div>
              )}

              <Text
                center={!HideComment}
                small
                color="#0e2f5a"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setCommentVisibility(!HideComment)
                }}
              >
                {!HideComment ? "Show " : "Hide "} Comment ({" "}
                {CommentsData.length} )
              </Text>

              {HideComment && (
                <div>
                  <Label> Comments ( {CommentsData.length} ) </Label>
                  <hr />

                  <div style={{ display: "flex", margin: "1rem 0.4rem" }}>
                    <div>
                      <img
                        alt="creator"
                        style={{
                          margin: "0.6rem 1rem",
                          height: "55px",
                          width: "55px",
                        }}
                        src={require("../../assets/images/developer.png")}
                      />
                    </div>

                    <Text
                      style={{
                        padding: "1.5rem 0.7em",
                        margin: "1rem 0.2rem",
                        border: "1px solid grey",
                        borderRadius: "10px",
                      }}
                      small
                    >
                      Some Task description here Some Task description here Some
                      Task description here Some Task description here
                    </Text>
                  </div>
                  <br />

                  <MessageInputBody>
                    <input
                      value={Comment}
                      onChange={e => setComment(e.target.value)}
                      placeholder={"Leave a comment"}
                      type={"text"}
                    />
                    <div onClick={() => {}}>
                      <FiSend
                        style={{ color: "#0e2f5a", fontSize: "1.7rem" }}
                      />
                    </div>
                  </MessageInputBody>
                  <br />
                </div>
              )}
            </Body>

            <Assignnees>
              <div style={{ display: "flex" }}>
                {Data === null ? (
                  <div>
                    <Text small color="grey">
                      No Assignees yet. Assign someone or yourself{" "}
                    </Text>
                  </div>
                ) : (
                  Data.map(({ id }) => {
                    return (
                      <li key={id}>
                        <img
                          alt="creator"
                          style={{}}
                          src={require("../../assets/images/developer.png")}
                        />
                      </li>
                    )
                  })
                )}
              </div>
              <Hover
                style={{
                  display: "flex",
                  margin: "0rem 1rem",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FiPlus style={{ color: "#0e2f5a", fontSize: "2rem" }} />
              </Hover>
            </Assignnees>
          </div>
        </div>
      </Modal>
    )
  }
}

export default inject("ModalStore", "PaneStore")(observer(TaskDetail))
