import React, { useState } from "react"
import { Modal } from "react-bootstrap"
import { inject, observer } from "mobx-react"
import { FiX, FiSend } from "react-icons/fi"
import Flex from "styled-flex-component"
import { useMutation } from "@apollo/react-hooks"
import { IoIosBug } from "react-icons/io"

import { CREATE_TEAM } from "../../data/mutations"
import { TeamInput } from "../../pages/forms/formsData"
import Field from "../../pages/forms/fields"
import {
  Hover,
  Title,
  Head,
  Section,
  Body,
  Text,
  Label,
  BigInput,
  Button,
} from "../../styles/style"

const BugModal = props => {
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

  const Submit = () => {}

  const { closeCrashReporter, showCrashReporter } = props.ModalStore
  return (
    <Modal
      size="xl"
      style={{ marginTop: "3rem" }}
      onHide={() => closeCrashReporter()}
      show={showCrashReporter}
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
          <IoIosBug style={{ fontSize: "1.7rem" }} />
        </div>

        <div>
          <Head>
            <Section> Report Bug</Section>

            <Hover onClick={() => closeCrashReporter()}>
              <FiX style={{ fontSize: "1.75em" }} />
            </Hover>
          </Head>

          <Body>
            <Title center>Ooops, A Bug?</Title>
            <Text center>
              Please use this form to send encountered errors to us. Will use it
              to investigate and fix the bug.
            </Text>

            <Flex>
              <Label small style={{ padding: "0rem 0.5rem" }}>
                Issue Category
                <div style={{ margin: "1rem 0.7rem" }}>
                  <select>
                    <option> Edit Event Feature </option>
                    <option> Access Management Feature </option>
                    <option> Invitation Feature</option>
                    <option> Mobile Feature </option>
                    <option> Teams Feature</option>
                    <option> Shop Feature </option>
                  </select>
                </div>
              </Label>
            </Flex>
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
          </Body>
          <br />
          <Flex justifyCenter>
            <Button
              onClick={() => {
                Submit()
              }}
              long
            >
              Create Bug Ticket
            </Button>
          </Flex>
          <Text color="grey" small center>
            A response feedback would be sent to your email while a fix is
            ongoing.
          </Text>
          <br />
        </div>
      </div>
    </Modal>
  )
}

export default inject("ModalStore")(observer(BugModal))
