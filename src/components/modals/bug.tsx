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
      style={{ marginTop: "5%" }}
      onHide={() => closeCrashReporter()}
      show={showCrashReporter}
    >
      <div style={{ display: "grid", gridTemplateColumns: "5rem auto" }}>
        <div
          style={{
            padding: "1rem 1rem",
            height: "auto",
            width: "auto",
            color: "#fff",
            background: "#0e2f5a",
          }}
        >
          <IoIosBug style={{ fontSize: "1.8rem" }} />
        </div>

        <div>
          <Head>
            <Section> Report Bug</Section>

            <Hover onClick={() => closeCrashReporter()}>
              <FiX style={{ fontSize: "1.75em" }} />
            </Hover>
          </Head>

          <Body>
            <Text center>
              We have created this form so you can send any encountered issues
              to us. <br /> We will use this report to investigate and fix this
              issue.
            </Text>
            <br />
            <Text color="grey" small center>
              A response feedback would be sent to your email while a fix is
              ongoing.
            </Text>

            <Flex>
              <Label small style={{ padding: "0rem 0.5rem" }}>
                {" "}
                Issue Category
              </Label>
              <select>
                <option> Edit Event Feature </option>
                <option> Access Management Feature </option>
                <option> Invitation Feature</option>
                <option> Mobile Feature </option>
                <option> Teams Feature</option>
                <option> Shop Feature </option>
              </select>
            </Flex>
            <br />
            <Field
              id={1}
              onChange={(e: string) => onChange(e, "Issue Description")}
              placeholder={
                "Your Description of what went wrong, when it went wrong and how it went wrong"
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

          <br />
        </div>
      </div>
    </Modal>
  )
}

export default inject("ModalStore")(observer(BugModal))
