import React, { useState } from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"
import { FiLink, FiExternalLink } from "react-icons/fi"
import { CSSTransition } from "react-transition-group"

import { EmptyData } from "../../../components/placeholders/"
import {
  Body,
  Text,
  Hover,
  Title,
  Head,
  Section,
  Tab,
  TabColumn,
} from "../../../styles/style"

import Compose from "./compose"

const Overview = props => {
  const [ActiveColumn, setActiveColumn] = useState("overview")
  const { name, id } = props.data.event

  return (
    <div>
      <Head header>
        <Section style={{ padding: "0.5rem 0rem" }} small>
          Invitations{" "}
        </Section>

        <Tab>
          <TabColumn
            onClick={() => setActiveColumn("overview")}
            active={ActiveColumn === "overview"}
          >
            Overview
          </TabColumn>

          <TabColumn
            onClick={() => setActiveColumn("compose")}
            active={ActiveColumn === "compose"}
          >
            Compose
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
            <div
              style={{
                display: "flex",
                verticalAlign: "center",
                justifyContent: "center",
              }}
            >
              <div>
                <Flex justifyCenter>
                  <div
                    style={{
                      display: "flex",
                      border: "2px solid #0e2f5a",
                      borderRadius: "5px",
                    }}
                  >
                    <div
                      style={{ background: "#fbfbfb", padding: "0rem 2rem" }}
                    >
                      <Text small style={{ paddingTop: "7px" }}>
                        {" "}
                        <code>http://localhost:3000/Conference/933564100</code>
                      </Text>
                    </div>

                    <div
                      style={{
                        cursor: "pointer",
                        padding: "0.5rem 1rem",
                        background: "#0e2f5a",
                        color: "#fff",
                      }}
                    >
                      <FiExternalLink style={{ fontSize: "1.8rem" }} />
                    </div>
                  </div>
                </Flex>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Title small center>
                  You have not sent any invitation out yet.{" "}
                </Title>
                <br />
                <Text center> Don't know get started? </Text>
                <Text center>
                  <b
                    style={{
                      textDecoration: "underline",
                      fontWeight: 550,
                      padding: "0rem 0.7rem",
                      cursor: "pointer",
                      color: "blue",
                    }}
                    onClick={() => setActiveColumn("compose")}
                  >
                    Compose
                  </b>
                  an invitation with Pre-made invitation templates{" "}
                </Text>

                <Text color="grey" center>
                  <a
                    style={{ textDecoration: "none" }}
                    href="https://my_event.netlify.com"
                    target="_blank"
                  >
                    Learn More{" "}
                  </a>
                  about the <b> Invitations </b> feature on Oasis{" "}
                </Text>
              </div>
            </div>
          </CSSTransition>

          <CSSTransition
            in={ActiveColumn === "compose"}
            unmountOnExit
            timeout={300}
          >
            <Compose eventName={name} />
          </CSSTransition>
        </Body>
      </Body>
    </div>
  )
}

export default Overview
