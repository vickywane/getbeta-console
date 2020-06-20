import React, { useState } from "react"
import Flex from "styled-flex-component"
import { CSSTransition } from "react-transition-group"
import { useQuery } from "@apollo/react-hooks"
import styled from "styled-components"
import media from "styled-media-query"
import { FiAlertCircle, FiX } from "react-icons/fi"
import { Modal } from "react-bootstrap"

import SubmitDraft from "../user/submitDraft"
import { Header, Footer, Loader } from "../../components/"
import { GET_EVENT_TALKS } from "../../data/queries"
import {
  Hover,
  Contain,
  Text,
  Title,
  Section,
  Head,
  Body,
  Button,
  BigTitle,
} from "../../styles/style"

const HeadText = styled.h1`
  font-size: 10rem;
  font-family: calibri;
  text-align: center;
  font-weight: 600;
  ${media.lessThan("huge")`
    font-size  : 8rem;
    font-weight : 600;
  `};
  ${media.lessThan("large")`
   font-size  : 6rem;
    font-weight : 600;
  `};
  ${media.lessThan("medium")`
   font-size  : 4rem;
    font-weight : 600;
  `};
`

const SubmitTalk = props => {
  const [ActiveView, setActiveView] = useState<string>("overview")
  const [Visibility, setVisibility] = useState<boolean>(false)

  const eventId = props.match.params.id

  const { data, loading, error } = useQuery(GET_EVENT_TALKS, {
    variables: {
      id: eventId,
      name: "",
    },
  })

  if (error) {
    console.log(error)

    return <Loader type="loading" />
  }

  if (loading) {
    return <Loader type="loading" />
  }

  if (data) {
    const { name, createdAt, isAcceptingTalks, speakerConduct } = data.event
    console.log(data.event)
    return (
      <div>
        <Header /> <br />
        <Modal
          style={{ marginTop: "3rem" }}
          size="xl"
          show={Visibility}
          onHide={() => setVisibility(false)}
        >
          <div>
            <Head>
              <Section>Code of Conduct</Section>

              <Hover onHide={() => setVisibility(false)}>
                <FiX style={{ fontSize: "1.8rem" }} />
              </Hover>
            </Head>

            <Body>
              <Text center> {speakerConduct} </Text>
            </Body>
            <br />
          </div>
        </Modal>
        <CSSTransition
          in={ActiveView === "overview"}
          timeout={200}
          unmountOnExit
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Body>
              <br />
              <br />
              <br />
              <br />
              <br />
              <BigTitle center> {name} </BigTitle>
              <HeadText center>
                Call For <u> Speakers.</u>
              </HeadText>

              {isAcceptingTalks ? (
                <Title center small>
                  Talk drafts would be accepted and reviewed until {createdAt}
                </Title>
              ) : (
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Hover style={{ padding: "0rem 0.7rem" }}>
                    <FiAlertCircle style={{ fontSize: "1.7rem" }} />{" "}
                  </Hover>
                  <Title center small>
                    All drafts submissions are now closed.
                  </Title>
                </div>
              )}
              {isAcceptingTalks && (
                <div>
                  <Text center>
                    Please read our speaker's{" "}
                    <a href="#" onClick={() => setVisibility(true)}>
                      Code Of Conduct{" "}
                    </a>{" "}
                    .
                  </Text>
                  <br />
                  <Flex justifyCenter>
                    <Button long onClick={() => setActiveView("application")}>
                      Submit Draft
                    </Button>
                  </Flex>
                  <br />
                  <Text center small color="grey">
                    Applicants are advised to go through the list of approved
                    talks before submitting a talk draft.
                  </Text>
                </div>
              )}
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </Body>
          </div>
        </CSSTransition>
        <CSSTransition
          in={ActiveView === "application"}
          timeout={200}
          unmountOnExit
        >
          <SubmitDraft eventId={eventId} />
        </CSSTransition>
        <br />
        <Footer />
      </div>
    )
  }
}

export default SubmitTalk
