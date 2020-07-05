import React, { useState } from "react"
import { Modal } from "react-bootstrap"
import { inject, observer } from "mobx-react"
import { FiSquare, FiX } from "react-icons/fi"
import { IoIosBug } from "react-icons/io"
import Flex from "styled-flex-component"
import { CSSTransition } from "react-transition-group"
import { useMutation } from "@apollo/react-hooks"

import { CREATE_BUG_REPORT } from "../../data/mutations"
import Field from "../../pages/forms/fields"
import { Body, Button, Hover, Tab, TabColumn, Text } from "../../styles/style"

const BugModal = props => {
  const [ActiveView, setActiveView] = useState("Bug")
  const { closeCrashReporter, showCrashReporter } = props.ModalStore
  const [createBugReport, { loading }] = useMutation(CREATE_BUG_REPORT)
  const [createFeatureRequest, { error }] = useMutation(CREATE_BUG_REPORT)

  const [Bug, submitBug] = useState(false)
  const [Feedback, sendFeedback] = useState(false)

  const [IssueDescription, setIssueDescription] = useState<string>("")
  const [IssueTitle, setIssueTitle] = useState<string>("")
  const [FeatureTitle, setFeatureTitle] = useState<string>("")
  const [FeatureDescription, setFeatureDescription] = useState<string>("")


  const onChange = (value: string, label: string) => {
    switch (label) {
      case "Issue Description":
        setIssueDescription(value)
        break
      case "Issue Title":
        setIssueTitle(value)
        break
      case "Feature Title":
        setFeatureTitle(value)
        break
      case "Feature Description":
        setFeatureDescription(value)
        break
      default:
        break
    }
  }

  const SubmitBug = () => {
    // alert(localStorage.getItem("user_id"))
    // alert(props.eventId)

    createBugReport({
      variables: {
        userId: localStorage.getItem("user_id"),
        eventId: props.eventId,
        title: IssueTitle,
        status: "Pending",
        description: IssueDescription,
      },
    }).then(() => submitBug(true))
      .catch(e => console.log(e))
  }

  const SubmitFeature = () => {
    createFeatureRequest({
      variables: {
        userId: localStorage.getItem("user_id"),
        eventId: props.eventId,
        status: "Pending",
        title: FeatureTitle,
        description: FeatureDescription,
      },
    }).then(() => sendFeedback(true))
      .catch(e => console.log(e))
  }

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
              style={{ padding: "0.5rem 0rem" }}
              onClick={() => setActiveView("Bug")}
              active={ActiveView === "Bug"}
            >
              <Flex>
                <Hover style={{ marginRight: "0.5rem" }}>
                  <IoIosBug style={{ fontSize: "1.6rem" }}/>
                </Hover>
                Bug Report
              </Flex>
            </TabColumn>

            <TabColumn
              style={{ padding: "0.5rem 0rem" }}
              onClick={() => setActiveView("Reports")}
              active={ActiveView === "Reports"}
            ><Flex>
              <Hover style={{ marginRight: "0.5rem" }}>
                <FiSquare style={{ fontSize: "1.6rem" }}/>
              </Hover>
              Feature Request
            </Flex>
            </TabColumn>
          </Tab>

          <Hover onClick={() => closeCrashReporter()}>
            <FiX style={{ fontSize: "1.75em" }}/>
          </Hover>
        </div>

        <hr/>

        <CSSTransition
          in={ActiveView === "Bug"}
          unmountOnExit
          timeout={300}
          classNames={""}
        >
          <div>
            {!Bug ? (
              <div>
                <Field
                  id={2}
                  onChange={(e: string) => onChange(e, "Bug Title")}
                  placeholder={
                    "Title of this bug"
                  }
                  name={"Bug Title"}
                  type={"text"}
                  textarea={false}
                />
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
                <br/>
                <Flex justifyCenter>
                  <Button onClick={() => SubmitBug()} long>
                    Create Bug Ticket
                  </Button>
                </Flex>{" "}
              </div>
            ) : (
              <div>
                <br/>
                <Text color="grey" small center>
                  A response feedback would be sent to your email while a
                  fix is ongoing.
                </Text>
                <Text color="grey" small center>
                  You can track your issue <a href={"https://giithub.com/fundry"}
                                              rel={"no-opener"}> here </a>.
                </Text>
                <br/>
              </div>
            )}
          </div>
        </CSSTransition>

        <CSSTransition
          in={ActiveView === "Reports"}
          unmountOnExit
          timeout={300}
          classNames={""}
        >
          <div>
            {!Feedback ? (
              <div>
                <Field
                  id={1}
                  onChange={(e: string) => onChange(e, "Feature Title")}
                  placeholder={"Title of your requested feature"}
                  name={"Feature Title"}
                  type={"text"}
                  textarea={false}
                />
                <Field
                  id={1}
                  onChange={(e: string) => onChange(e, "Feature Type")}
                  placeholder={"What feature would you like added"}
                  limit={1500}
                  name={"Feature Request"}
                  type={"text"}
                  textarea={true}
                />
                <br/>
                <Flex justifyCenter>
                  <Button onClick={() => SubmitFeature()} long>
                    Request Feature
                  </Button>
                </Flex>{" "}
              </div>
            ) : (
              <div>
                <Text color="grey" small center>
                  Thank you for your feedback.
                </Text>

                <Text color="grey" small center>
                  Please <a href="httos://my-event.com"> check </a> our road map for coming
                  features.
                </Text>
              </div>
            )}
          </div>
        </CSSTransition>
      </Body>
    </Modal>
  )
}

export default inject("ModalStore")(observer(BugModal))
