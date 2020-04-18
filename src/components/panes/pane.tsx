import React from "react"
import Flex from "styled-flex-component"
import { FiX, FiCalendar, FiPlus, FiSearch } from "react-icons/fi"
import { Link } from "react-router-dom"
import { inject, observer } from "mobx-react"

import {
  Button,
  Hover,
  FormBody,
  Notification,
  Text,
  FormBody as Body,
} from "../../styles/style"

const Pane = props => {
  const { color, Data, type } = props
  const { closeImport, closeNotify } = props.PaneStore

  //Todo: Improve reusablity of these panes.
  const Panes = props => {
    const { Data, type, closeImport, closeNotify } = props
    switch (type) {
      case "Schedule":
        return (
          <div style={{ padding: "0rem 1rem" }}>
            <Flex justifyBetween>
              <Text white bold>
                {" "}
                Tracks{" "}
              </Text>

              <Hover>
                <FiPlus style={{ fontSize: "2rem" }} />
              </Hover>
            </Flex>
          </div>
        )
      case "Talks":
        return (
          <Flex justifyBetween>
            <Text>.</Text>

            <Text white bold>
              {" "}
              Talks{" "}
            </Text>

            <Hover>
              <FiPlus style={{ fontSize: "2rem" }} />
            </Hover>
          </Flex>
        )

      case "Event-Form-Import":
        return (
          <FormBody>
            <Flex justifyBetween>
              <Text center small white>
                Import data from existing event managers.
              </Text>

              <Button
                onClick={() => {
                  closeImport()
                }}
              >
                Import Data
              </Button>
            </Flex>
          </FormBody>
        )
      case "Event-Form-Info":
        return (
          <Body>
            <Flex justifyBetween>
              <Text center small white>
                Information saved here can be updated later.
              </Text>

              <Hover
                onClick={() => {
                  closeNotify()
                }}
              >
                <FiX style={{ fontSize: "1.7rem", color: "white" }} />
              </Hover>
            </Flex>
          </Body>
        )
      case "Team":
        return (
          <Flex justifyBetween>
            <Text white> Use external tools to manage your tasks </Text>

            <Flex>
              <Button> Add Integration </Button>
              <Hover
                style={{ padding: "0.5rem 0rem" }}
                onClick={() => {
                  closeNotify()
                }}
              >
                <FiX style={{ fontSize: "1.7rem" }} />
              </Hover>
            </Flex>
          </Flex>
        )
      default:
        return (
          <p style={{ textAlign: "center" }}>
            {" "}
            Panes. No Pane has been matched{" "}
          </p>
        )
    }
  }

  return (
    <Notification white color={color}>
      <br />
      <Panes
        closeImport={closeImport}
        closeNotify={closeNotify}
        type={type}
        Data={Data}
      />
    </Notification>
  )
}

// @ts-ignore
export default inject("PaneStore")(observer(Pane))
