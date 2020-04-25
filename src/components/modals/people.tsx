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
  InputBox,
  ModalInput,
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
          <Section style={{ padding: "0.5rem 0.5rem" }}> Team members </Section>

          <Flex>
            {!search ? (
              <Hover
                onClick={() => beginSearch()}
                style={{ paddingRight: "10px" }}
              >
                <FiSearch style={{ fontSize: "1.5em" }} />
              </Hover>
            ) : (
              <InputBox modal>
                <ModalInput borderLess placeholder="Find Event Team member" />
              </InputBox>
            )}

            <Hover
              onClick={() => closePeople()}
              style={{ paddingLeft: "10px" }}
            >
              <FiX style={{ fontSize: "1.75em" }} />
            </Hover>
          </Flex>
        </Flex>
        <hr />
      </Head>

      <List />
      <hr />
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
            <InputBox modal>
              <Flex justifyBetween>
                <ModalInput input placeholder="Email Address" />
                <Hover style={{ paddingTop: "10px" }}>
                  <FiSend style={{ fontSize: "2em" }} />
                </Hover>
              </Flex>
            </InputBox>
          </Flex>
        )}
      </Body>
    </Modal>
  )
}

export default inject("ModalStore")(observer(People))
