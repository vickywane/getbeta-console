import React from "react"
import Flex from "styled-flex-component"
import { Link } from "react-router-dom"
import {
  FiMail,
  FiClock,
  FiCheck,
  FiCalendar,
  FiArrowLeft,
} from "react-icons/fi"
import styled from "styled-components"
import { useQuery, useMutation } from "@apollo/react-hooks"

import { Header, Footer, Loader } from "../../../components/"
import { GET_TALK } from "../../../data/queries"
import {
  Contain,
  Body,
  Text,
  Head,
  Button,
  Title,
  Hover,
  BigTitle,
  Section,
} from "../../../styles/style"

const List = styled.li`
  list-style: none;
`

const Draft = (props): JSX.Element => {
  const { draftId } = props

  const { loading, error, data } = useQuery(GET_TALK, {
    variables: {
      id: draftId,
    },
  })

  if (error) {
    console.log(error)
    return <Loader type={"error"} />
  }

  if (loading) {
    return <Loader type={"loading"} />
  }

  const {
    title,
    id,
    summary,
    description,
    Archived,
    tags,
    createdAt,
    duration,
  } = data.talk
  return (
    <div key={id}>
      <Head header>
        <Flex>
          <Link to="/drafts">
            <Hover style={{ padding: "0rem 0.7rem" }}>
              <FiArrowLeft style={{ fontSize: "1.8rem" }} />
            </Hover>
          </Link>
          <Section>Drafts</Section>
        </Flex>
      </Head>
      <br />
      <Contain>
        <Contain>
          <BigTitle center> {title}</BigTitle>
          <Flex justifyBetween>
            <Flex>
              <Hover style={{ padding: "0rem 0.7rem", color: "grey" }}>
                <FiCalendar style={{ fontSize: "1.8rem" }} />
              </Hover>

              <Text small color="grey">
                {createdAt}{" "}
              </Text>
            </Flex>

            <Flex>
              <Hover style={{ padding: "0rem 0.7rem", color: "grey" }}>
                <FiClock style={{ fontSize: "1.8rem" }} />
              </Hover>

              <Text small color="grey">
                {duration}{" "}
              </Text>
            </Flex>
          </Flex>
          <br />
          <div
            style={{
              padding: "1rem 1rem",
              margin: "2rem 0.5rem",
              borderLeft: "5px solid  #0e2f5a ",
              background: "#fbfbfb",
            }}
          >
            <Text center> {summary}</Text> <br />
          </div>

          <br />

          <Text small> {description}</Text>
        </Contain>
      </Contain>
    </div>
  )
}

export default Draft
