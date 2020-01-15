import React from "react"
import { Modal } from "react-bootstrap"
import { inject, observer } from "mobx-react"
import { FiX, FiSend, FiSearch, FiXCircle } from "react-icons/fi"
import Flex from "styled-flex-component"

import {
  Hover,
  Head,
  Section,
  Body,
  Button,
  Input,
  Box,
} from "../../styles/style"
import List from "./peopleList"

const People = props => {
  const {
    showPeople,
    closePeople,
    search,
    beginSearch,
    invite,
    beginInvite,
  } = props.ModalStore

  return (
    <Modal
      size="lg"
      style={{ marginTop: "5%" }}
      onHide={() => closePeople()}
      show={showPeople}
    >
      <Head>
        <Flex justifyBetween>
          <Section> People </Section>

          <Flex>
            {!search ? (
              <Hover
                onClick={() => beginSearch()}
                style={{ paddingRight: "10px" }}
              >
                <FiSearch style={{ fontSize: "1.5em" }} />
              </Hover>
            ) : (
              <Box>
                <Flex>
                  <input />

                  <Hover onClick={() => closePeople()}>
                    <FiXCircle style={{ fontSize: "1.3em" }} />
                  </Hover>
                </Flex>{" "}
              </Box>
            )}

            <Hover onClick={() => closePeople()}>
              <FiX style={{ fontSize: "1.75em" }} />
            </Hover>
          </Flex>
        </Flex>
        <hr />
      </Head>

      <List />

      <Body>
        {!invite ? (
          <Flex justifyCenter>
            <Button
              onClick={() => {
                beginInvite()
              }}
              long
            >
              Invite
            </Button>
          </Flex>
        ) : (
          <Flex justifyCenter>
            <Flex>
              <Input placeholder="Email Address" />
              <Hover style={{ paddingTop: "10px" }}>
                <FiSend style={{ fontSize: "2em" }} />
              </Hover>
            </Flex>
          </Flex>
        )}
      </Body>
    </Modal>
  )
}

export default inject("ModalStore")(observer(People))
