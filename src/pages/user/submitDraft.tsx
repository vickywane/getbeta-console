import React, { useState, useEffect } from "react"
import Flex from "styled-flex-component"
import { CSSTransition } from "react-transition-group"
import { useQuery, useMutation } from "@apollo/react-hooks"
import { Spinner } from "react-bootstrap"
import styled from "styled-components"
import { FiCheck, FiAlertCircle } from "react-icons/fi"

import { GET_USER_TALKS } from "../../data/queries"
import { SUMBIT_TALK } from "../../data/mutations"
import Field from "../forms/fields"
import {
  Hover,
  Contain,
  Text,
  Title,
  Body,
  Button,
  BigTitle,
} from "../../styles/style"

const Container = styled.div`
  width: 60rem;
  border: 1px solid grey;
  height: auto;
  padding: 2rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 7px;
`

const SubmitDraft = props => {
  const [DraftName, setDraftName] = useState("")
  const [Loading, setLoading] = useState(false)
  const [Error, setError] = useState(false)
  const [ErrorMsg, setErrorMsg] = useState<string>("")
  const [Data, setData] = useState(null)
  const [DraftId, setDraftId] = useState(null)
  const [Submitted, setSubmitted] = useState(null)

  const { eventId } = props

  const { data, loading } = useQuery(GET_USER_TALKS, {
    variables: {
      id: localStorage.getItem("user_id"),
      name: "",
    },
  })

  const [submitEventTalk, { error }] = useMutation(SUMBIT_TALK)

  useEffect(() => {
    data === undefined ? console.log("drafts") : setData(data.user.talks)
  }, [data])

  const onChange = (value: string, label: string) => {}

  const submitDraft = id => {
    submitEventTalk({
      variables: { eventId: eventId, talkId: id, isAccepted: false },
    })
      .then(() => setSubmitted(true))
      .catch(e => {
        setError(true)
        setErrorMsg(e.graphQLErrors[0].message)
      })
  }

  return (
    <div>
      <br /> <br /> <br />
      <Flex justifyCenter>
        <Container>
          {Submitted && (
            <div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Hover style={{ padding: "0rem 1rem" }}>
                  <FiCheck style={{ fontSize: "1.8rem" }} />
                </Hover>

                <Text center small>
                  Your talk draft has been submitted. Submission status and
                  review can be viewed from your user console.
                </Text>
              </div>
              <hr />
            </div>
          )}
          {Error && (
            <div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Hover style={{ padding: "0rem 1rem" }}>
                  <FiAlertCircle style={{ fontSize: "1.8rem", color: "red" }} />
                </Hover>

                <Text center small>
                  {ErrorMsg}
                </Text>
              </div>
              <hr />
            </div>
          )}
          <Body>
            <Field
              id={1}
              onChange={(e: string) => onChange(e, "Draft Name")}
              placeholder={"Search Your Drafts "}
              name={"Draft Name"}
              type={"text"}
              disabled={Data === null}
              textarea={false}
            />

            {loading && (
              <Flex justifyCenter>
                <br />
                <Spinner variant="primary" animation="grow" role="loading" />
              </Flex>
            )}

            {Data === null ? (
              <div>
                <br />
                <Text center color="grey">
                  You have no saved drafts{" "}
                </Text>
                <Text center color="grey">
                  Drafts shown here are pulled from your personal drafts saved
                  on <b>Oasis</b>.
                </Text>{" "}
                <br />{" "}
                <Text center color="grey" small>
                  <a href="/"> Learn More </a> about the <b> Drafts </b>{" "}
                  features on Oasis
                </Text>
              </div>
            ) : (
              Data.map(({ title, id }) => {
                return (
                  <div
                    key={id}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: "1rem 1rem",
                    }}
                  >
                    <Title small key={id}>
                      {title}{" "}
                    </Title>{" "}
                    <Button
                      onClick={() => {
                        submitDraft(id)
                      }}
                    >
                      {" "}
                      Submit{" "}
                    </Button>{" "}
                  </div>
                )
              })
            )}
          </Body>
        </Container>
      </Flex>
      <br />
      <br />
      <br />
    </div>
  )
}

export default SubmitDraft
