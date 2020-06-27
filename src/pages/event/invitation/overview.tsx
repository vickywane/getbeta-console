import React, { useState } from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"
import { FiLink, FiCopy, FiPlus, FiX } from "react-icons/fi"
import { CSSTransition } from "react-transition-group"

import { EmptyData } from "../../../components/placeholders/"
import {
  Body,
  Text,
  Hover,
  Title,
  Head,
  Section,
  Button,
  Tab,
  TabColumn,
} from "../../../styles/style"
import useWindowWidth from "../../../hook_style"

import Compose from "./compose"

const CustomButton = styled(Button)`
  height : 50px;
  border-radius : 50px;
  outline  : 0px;
`

const Overview = props => {
  const [ActiveColumn, setActiveColumn] = useState("overview")
  const { name, id } = props.data.event

  const Width = useWindowWidth()

  return (
    <div>
      <Head header>
        <Section style={{ padding: "0.5rem 0rem" }} small>
          Invitations
        </Section>

        {Width >= 1050 ? (
          <div
            style={{
              margin: "0.2rem 0rem",
              display: "flex",
              border: "2px solid #0e2f5a",
              borderRadius: "5px",
            }}
          >
            <div
              style={{
                borderRadius: "5px 5px 0px 0px",
                background: "#fbfbfb",
                padding: "0rem 2rem",
              }}
            >
              <Text small style={{ paddingTop: "2px" }}>
                <code> {window.location.href} </code>
              </Text>
            </div>

            <div
              style={{
                cursor: "pointer",
                padding: "0.3rem 0.8rem",
                background: "#0e2f5a",
                color: "#fff",
              }}
            >
              <FiCopy style={{ fontSize: "1.6rem" }} />
            </div>
          </div>
        ) : (
          <Button> Share Event Link </Button>
        )}

        <Tab>
          <TabColumn
            onClick={() => setActiveColumn("overview")}
            active={ActiveColumn === "overview"}
          >
            Overview
          </TabColumn>

          <TabColumn
            onClick={() => setActiveColumn("draft")}
            active={ActiveColumn === "draft"}
          >
            Draft
          </TabColumn>
        </Tab>
      </Head>

      <Body>
        <Body>
          <CSSTransition
            in={ActiveColumn === "draft"}
            unmountOnExit
            timeout={300}
          >
            <EmptyData
              message={"This Event currently has no saved invitation drafts"}
              feature={"Invitation"}
              link={"https://my-event.netlify.com"}
            />
          </CSSTransition>

          <CSSTransition
            in={ActiveColumn === "overview"}
            unmountOnExit
            timeout={300}
          >
            <div>
              <div style={{ textAlign: "right" }}>
                <CustomButton onClick={() => setActiveColumn("compose")}>
                  <Flex>
                    <Hover style={{ padding: "0rem 0.5rem" }}>
                      <FiPlus style={{ fontSize: "1.7rem" }} />
                    </Hover>
                    Compose Invitation
                  </Flex>
                </CustomButton>
              </div>

              <EmptyData
                message={
                  "No Invitation has been sent yet within this event. \n \n You can compose invitations quickly by using **Pre-made invitation templates**. "
                }
                feature={"Invitation"}
                link={"https://my-event.netlify.com"}
              />
            </div>
          </CSSTransition>

          <CSSTransition
            in={ActiveColumn === "compose"}
            unmountOnExit
            timeout={300}
          >
            <div>
              <div style={{ textAlign: "right" }}>
                <CustomButton onClick={() => setActiveColumn("overview")}>
                  <Flex>
                    <Hover style={{ padding: "0rem 0.5rem" }}>
                      <FiX style={{ fontSize: "1.7rem" }} />
                    </Hover>
                    Cancel Composition
                  </Flex>
                </CustomButton>
              </div>
              <br />
              <Compose eventName={name} />
            </div>
          </CSSTransition>
        </Body>
      </Body>
    </div>
  )
}

export default Overview
