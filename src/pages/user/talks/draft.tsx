import React, { useState } from "react"
import Flex from "styled-flex-component"
import { Link } from "react-router-dom"
import {
  FiMail,
  FiClock,
  FiCheck,
  FiCalendar,
  FiEdit,
  FiPlus,
  FiX,
  FiTrash2,
  FiArrowLeft,
} from "react-icons/fi"
import { GrAttachment } from "react-icons/gr"
import styled from "styled-components"
import { useQuery, useMutation } from "@apollo/react-hooks"
import ReactMarkdown from "react-markdown"
import { IoIosPeople } from "react-icons/io"

import Fields from "../../forms/fields"
import Review from "./review"
import { Header, Footer, Loader } from "../../../components/"
import { GET_TALK } from "../../../data/queries"
import {
  Contain,
  Input,
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

const Circle = styled.div`
  height: 40px;
  width: 40px;
  margin: 0.3rem 0.5rem;
  background-color: ${props => props.background};
  border-radius: 50%;
  box-shadow: 0px 1px 2px grey;
  display: inline-block;
`

const IdeaCard = styled.div`
    box-shadow: 0px 2px 4px grey;
    padding: 1rem 1rem;
    background: ${props => (props.CardColor ? props.CardColor : "#fff")}
    border-radius: 7px;
    margin: 0rem 1rem;
    transition : all 400ms;
    div {
      display: flex;
      justify-content: space-between;
    }
  `

const Dashes = styled.div`
  margin: 0.5rem 3rem;
  display: flex;
  justify-content: space-between;
  div {
    width: 1rem;
    height: 8vh;
    border-right: 5px dashed grey;
  }
`

const HoverCircle = styled(Hover)`
  background: #c0c0c0;
  border-radius: 50%;
  padding: 0.7rem 0.7rem;
  margin: 0px;
`

const Draft = (props): JSX.Element => {
  const [reviewPane, openReviewPane] = useState<boolean>(true)
  const [isEditing, startEditing] = useState<boolean>(false)
  const [isEditingCard, startEditingCard] = useState<boolean>(false)
  const [note, addNotes] = useState<boolean>(false)
  const { draftId } = props

  const [CardColor, setCardColor] = useState<string>(null)
  const [CardTextColor, setCardTextColor] = useState<string>(null)

  const Padded = styled(Contain)`
    tramsition : all 300ms;
    overflow : auto;
    height : ${window.innerHeight - 300}
    padding: ${props => (props.reviewOpen ? "1rem 3rem" : "1rem 15rem")};
  `

  const Grid = styled.div`
    display: grid;
    tramsition: all 300ms;
    grid-gap: ${props => props.reviewOpen && "0rem 1rem"};
    grid-template-columns: ${props => props.reviewOpen && "auto 27rem"};
  `

  const colors = [
    {
      color: "red",
    },
    {
      color: "violet",
    },
    {
      color: "green",
    },
    {
      color: "yellow",
    },
    {
      color: "blue",
    },
    {
      color: "white",
    },
  ]

  const handleInputs = (value, label) => {
    switch (label) {
      case "Draft Title":
        break
      case "Draft Body":
        break
      default:
        break
    }
  }

  const { loading, error, data } = useQuery(GET_TALK, {
    variables: {
      id: draftId, //
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
    notes,
  } = data.talk

  const colorFunc = color => {
    switch (color) {
      case "violet":
        setCardTextColor("#fff")
        break
      case "red":
        setCardTextColor("#fff")
        break
      case "blue":
        setCardTextColor("#fff")
        break
      case "yellow":
        setCardTextColor("#0e2f5a")
        break
      case "white":
        setCardTextColor("#0e2f5a")
        break
      default:
        break
    }
  }

  return (
    <div key={id}>
      <Head header style={{ padding: "1rem 0rem 0.1rem 2rem" }}>
        <Flex>
          <Link to="/drafts">
            <Hover style={{ padding: "0rem 0.7rem" }}>
              <FiArrowLeft style={{ fontSize: "1.8rem" }} />
            </Hover>
          </Link>
          <Section>Drafts</Section>
        </Flex>

        <Flex>
          <div
            onClick={() => startEditing(!isEditing)}
            style={{ display: "flex", cursor: "pointer", margin: "0rem 1rem" }}
          >
            <Link to="/drafts">
              <Hover style={{ padding: "0rem 0.7rem" }}>
                <FiEdit style={{ fontSize: "1.6rem" }} />
              </Hover>
            </Link>
            <Text>Edit</Text>
          </div>

          <div
            onClick={() => openReviewPane(!reviewPane)}
            style={{ cursor: "pointer", display: "flex", margin: "0rem 1rem" }}
          >
            <Link to="/drafts">
              <Hover style={{ padding: "0rem 0.7rem" }}>
                <IoIosPeople style={{ fontSize: "1.7rem" }} />
              </Hover>
            </Link>
            <Text>Reviews</Text>
          </div>
        </Flex>
      </Head>

      <Grid reviewOpen={reviewPane}>
        <Padded
          style={{ height: window.innerHeight - 210, overflow: "auto" }}
          reviewOpen={reviewPane}
        >
          <Flex justifyBetween>
            <Flex>
              <Hover style={{ padding: "0rem 0.5rem", color: "grey" }}>
                <FiCalendar style={{ fontSize: "1.7rem" }} />
              </Hover>

              <Text small color="grey">
                {createdAt}
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

          {!note && (
            <div>
              {isEditing ? (
                <Fields
                  name="Draft Title"
                  id={1}
                  placeholder={title}
                  textarea={false}
                  value={title}
                  type="text"
                  onChange={e => handleInputs(e, "Draft Title")}
                />
              ) : (
                <BigTitle small={reviewPane}> {title}</BigTitle>
              )}

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
            </div>
          )}

          <br />

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex" }}>
              <Title small> Notes ( {notes.length} ) </Title>

              <HoverCircle
                onClick={() => addNotes(!note)}
                style={{ margin: "0rem 0.5rem" }}
              >
                {!note ? (
                  <FiPlus style={{ fontSize: "1.6rem", color: "#fff" }} />
                ) : (
                  <FiX style={{ fontSize: "1.6rem", color: "#fff" }} />
                )}
              </HoverCircle>
            </div>

            <Button>Sort</Button>
          </div>

          {note && (
            <div>
              <br />
              <IdeaCard CardColor={CardColor}>
                <div>
                  <Fields
                    name="Title"
                    id={1}
                    placeholder={title}
                    textarea={false}
                    value={title}
                    type="text"
                    onChange={e => handleInputs(e, "Title")}
                  />

                  <div>
                    <Hover
                      onClick={() => startEditingCard(!isEditingCard)}
                      style={{ margin: "0rem 1rem" }}
                    >
                      <FiEdit style={{ fontSize: "1.6rem" }} />
                    </Hover>

                    <Hover style={{ margin: "0rem 1rem" }}>
                      <FiTrash2 style={{ fontSize: "1.6rem" }} />
                    </Hover>
                  </div>
                </div>

                <hr />
                <Fields
                  name="Key point"
                  id={1}
                  placeholder={title}
                  textarea={false}
                  value={title}
                  type="text"
                  onChange={e => handleInputs(e, "Key point")}
                />
              </IdeaCard>
              <br />
            </div>
          )}

          <hr />
          {notes !== null &&
            notes.map(({ id, title, content }) => {
              return (
                <div>
                  <IdeaCard CardColor={CardColor}>
                    <div>
                      <Title style={{ color: "#0e2f5a" }} small>
                        # {title}
                      </Title>

                      <div>
                        <Hover
                          onClick={() => startEditingCard(!isEditingCard)}
                          style={{ margin: "0rem 1rem" }}
                        >
                          <FiEdit style={{ fontSize: "1.6rem" }} />
                        </Hover>

                        <Hover style={{ margin: "0rem 1rem" }}>
                          <FiTrash2 style={{ fontSize: "1.6rem" }} />
                        </Hover>
                      </div>
                    </div>

                    <hr />
                    <Text
                      style={{
                        textIndent: "30px",
                        color: CardTextColor === null ? "#000" : CardTextColor,
                      }}
                    >
                      <ReactMarkdown source={content} />
                    </Text>
                    {isEditingCard && (
                      <div>
                        {colors.map(({ color }) => {
                          return (
                            <div>
                              <hr />

                              <Circle
                                style={{
                                  border:
                                    CardColor === color && "3px solid black",
                                }}
                                onClick={() => {
                                  setCardColor(color)
                                  colorFunc(color)
                                }}
                                background={color}
                              />
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </IdeaCard>

                  <Dashes>
                    <div />
                    <div />
                  </Dashes>
                </div>
              )
            })}

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
              No file has been attached to this talk draft. <br /> Drag 'n' drop
              files to upload
            </Text>
          </div>
        </Padded>

        {reviewPane && <Review />}
      </Grid>
    </div>
  )
}

export default Draft
