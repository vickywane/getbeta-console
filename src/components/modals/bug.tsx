import React, { useState } from "react"
import { Modal } from "react-bootstrap"
import { inject, observer } from "mobx-react"
import { FiX, FiSend } from "react-icons/fi"
import Flex from "styled-flex-component"
import { useMutation } from "@apollo/react-hooks"
import { IoIosBug } from "react-icons/io"
import { CSSTransition } from "react-transition-group"

import { CREATE_TEAM } from "../../data/mutations"
import { TeamInput } from "../../pages/forms/formsData"
import Field from "../../pages/forms/fields"
import {
  Hover,
  Title,
  Head,
  Section,
  Body,
  Tab,
  TabColumn,
  Text,
  Label,
  BigInput,
  Button,
} from "../../styles/style"

const BugModal = props => {
  const [ActiveView, setActiveView] = useState("Bug")

  const [Bug, submitBug] = useState(false)
  const [Feedback, sendFeedback] = useState(false)

  const [Description, setDescription] = useState("")
  const [Category, setCategory] = useState("")

  const { EventID } = props

  const onChange = (value: string, label: string) => {
    switch (label) {
      case "Issue Description":
        setDescription(value)
        break
      default:
        break
    }
  }

  const SubmitBug = () => {
    submitBug(true)
  }

  const SubmitFeature = () => {
    sendFeedback(true)
  }

  const { closeCrashReporter, showCrashReporter } = props.ModalStore
  return (
    <Modal
      size="xl"
      style={{ marginTop: "3rem" }}
      onHide={() => closeCrashReporter()}
      show={showCrashReporter}
    >
      <Body>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Tab>
            <TabColumn
              onClick={() => setActiveView("Bug")}
              active={ActiveView === "Bug"}
            >
              Bug Report
            </TabColumn>

            <TabColumn
              onClick={() => setActiveView("Reports")}
              active={ActiveView === "Reports"}
            >
              Feature Request
            </TabColumn>
          </Tab>

          <Hover onClick={() => closeCrashReporter()}>
            <FiX style={{ fontSize: "1.75em" }} />
          </Hover>
        </div>

        <hr />

        <Body>
          <CSSTransition
            in={ActiveView === "Bug"}
            unmountOnExit
            timeout={300}
            classNames={""}
          >
            <Body>
              {!Bug ? (
                <div>
                  {" "}
                  <Text center>
                    Please use this form to send encountered errors to us. Will
                    use it to investigate and fix the bug.
                  </Text>
                  <Field
                    id={1}
                    onChange={(e: string) => onChange(e, "Issue Description")}
                    placeholder={
                      "A description of what went wrong. This would go a long way in helping us fix this issue."
                    }
                    limit={1500}
                    name={"Issue Description"}
                    type={"text"}
                    textarea={true}
                  />
                  <br />
                  <Flex justifyCenter>
                    <Button onClick={() => SubmitBug()} long>
                      Create Bug Ticket
                    </Button>
                  </Flex>{" "}
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <Text color="grey" small center>
                      A response feedback would be sent to your email while a
                      fix is ongoing.
                    </Text>
                  </div>
                </div>
              )}
            </Body>
          </CSSTransition>

          <CSSTransition
            in={ActiveView === "Reports"}
            unmountOnExit
            timeout={300}
            classNames={""}
          >
            <Body>
              {!Feedback ? (
                <div>
                  <Field
                    id={1}
                    onChange={(e: string) => onChange(e, "Feature Type")}
                    placeholder={"What feature would you like added"}
                    limit={1500}
                    name={"Feature Request"}
                    type={"text"}
                    textarea={true}
                  />
                  <br />
                  <Flex justifyCenter>
                    <Button onClick={() => SubmitFeature()} long>
                      Request Feature
                    </Button>
                  </Flex>{" "}
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <Text color="grey" small center>
                      Thank you for your feedback
                    </Text>
                  </div>
                </div>
              )}
            </Body>
          </CSSTransition>
          <br />
        </Body>
      </Body>
    </Modal>
  )
}

export default inject("ModalStore")(observer(BugModal))
