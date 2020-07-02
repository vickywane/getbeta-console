import React from "react"
import Flex from "styled-flex-component"
import { Link } from "react-router-dom"
import {
  FiMail,
  FiClock,
  FiCheck,
  FiCalendar,
  FiEdit,
  FiArrowLeft,
} from "react-icons/fi"
import { GrAttachment } from "react-icons/gr"
import styled from "styled-components"
import { useQuery, useMutation } from "@apollo/react-hooks"
import ReactMarkdown from "react-markdown"
 
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

const Padded = styled(Contain)`
  padding: 1rem 15rem;
`

const Draft = (props): JSX.Element => {
  const { draftId } = props

  const { loading, error, data } = useQuery(GET_TALK, {
    variables: {
      id: draftId  //78949600, // 
    },
  })

  if (error) {
    console.log(error)
    return <Loader type={"error"} />
  }

  if (loading) {
    return <Loader type={"loading"} />
  }

  // window.onscroll = () => {
  //   alert('scrolled')
  // }

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
      <Head header style={{ padding: "1.5rem 2rem" }}>
        <Flex>
          <Link to="/drafts">
            <Hover style={{ padding: "0rem 0.7rem" }}>
              <FiArrowLeft style={{ fontSize: "1.8rem" }} />
            </Hover>
          </Link>
          <Section>Drafts</Section>
        </Flex>

        <Flex>
          <div style={{ display: "flex", margin: "0rem 1rem" }}>
            <Link to="/drafts">
              <Hover style={{ padding: "0rem 0.7rem" }}>
                <FiEdit style={{ fontSize: "1.7rem" }} />
              </Hover>
            </Link>
            <Section>Edit</Section>
          </div>

          <div style={{ display: "flex", margin: "0rem 1rem" }}>
            <Link to="/drafts">
              <Hover style={{ padding: "0rem 0.7rem" }}>
                <FiEdit style={{ fontSize: "1.7rem" }} />
              </Hover>
            </Link>
            <Section>Reviews</Section>
          </div>
        </Flex>
      </Head>

      <Padded>
        <Flex justifyBetween>
          <Flex>
            <Hover style={{ padding: "0rem 0.5rem", color: "grey" }}>
              <FiCalendar style={{ fontSize: "1.7rem" }} />
            </Hover>

            <Text small color="grey">
              {createdAt}{" "}
            </Text>
          </Flex>

          <Flex>
            <Hover style={{ padding: "0rem 0.6rem", color: "grey" }}>
              <FiClock style={{ fontSize: "1.7rem" }} />
            </Hover>

            <Text small color="grey">
              {duration}{" "}
            </Text>
          </Flex>
        </Flex>

        <br />
        <BigTitle> {title}</BigTitle>
        <div
          style={{
            padding: "1rem 1rem",
            margin: "2rem 0.5rem",
            borderLeft: "5px solid  #0e2f5a ",
            background: "#fbfbfb",
          }}
        >
          <Text>
            <ReactMarkdown source={summary} />
          </Text>
        </div>

        <Text>
          <ReactMarkdown source={description} />{" "}
        </Text>
        <br />

        <div
          style={{
            padding: "1rem 1rem",
            margin: "2rem 0.5rem",
            background: "#fbfbfb",
          }}
        >
          <Flex>
            <Hover style={{ padding: "0rem 0.6rem", color: "grey" }}>
              <GrAttachment style={{ fontSize: "1.6rem" }} />
            </Hover>

            <Section>Attachments ( 0 Kb )</Section>
          </Flex>

          <Text small center color="grey">
            {" "}
            No file has been attached to this talk draft.{" "}
          </Text>
        </div>
      </Padded>
    </div>
  )
}

export default Draft
