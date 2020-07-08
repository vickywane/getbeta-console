import React, { useState, useEffect } from "react"
import Flex from "styled-flex-component"
import { Link } from "react-router-dom"
import {
  FiMail,
  FiClock,
  FiEdit,
  FiCheck,
  FiMoreVertical,
  FiTrash2,
  FiPlus,
} from "react-icons/fi"
import styled from "styled-components"
import { useQuery, useMutation } from "@apollo/react-hooks"
import { CSSTransition } from "react-transition-group"
import media from "styled-media-query"
import { IoIosPeople } from "react-icons/io"

import ActionBar from "../userActionBar"
import Draft from "./draft"
import { Header, Footer, Loader } from "../../../components/"
import { EmptyData } from "../../../components/placeholders"
import { GET_USER_TALKS } from "../../../data/queries"
import { DELETE_TALK } from "../../../data/mutations"
import {
  Contain,
  Body,
  Text,
  Button as Butt,
  Title,
  Hover,
} from "../../../styles/style"
import useWindowWidth from "../../../hook_style"

const List = styled.li`
  list-style: none;
  padding : 0.5rem 1rem;
  background : #fff;
  border-radius : 5px
  box-shadow: 0px 2px 3px grey;
  margin : 3rem 10rem;
  ${media.lessThan("huge")`
      margin : 2rem 2rem;
  `};
  ${media.lessThan("large")`
      margin : 2rem 2rem;
  `};
  ${media.lessThan("medium")`
    box-shadow: 0px 1px 2px grey;
    padding : 0.5rem 0.5rem;
    width : 37rem
      margin : 2rem 0rem;
  `}
`

const Button = styled(Butt)`
  border-radius: 30px;
`

const TagBody = styled.div`
  display: flex;
  overflow : auto
  li {
    text-align : center
    padding: 0.7rem 2rem;
    background: #5f6368;
    color: #fff;
    border-radius: 30px;
    list-style: none;
    margin: 0rem 1rem;
  }
  ${media.lessThan("medium")`
    margin: 0rem 0.5rem;
  `}
`

const DraftGrid = styled.div`
  display: grid;
  grid-template-columns: 6rem auto;
  ${media.lessThan("huge")`
    grid-template-columns: 5rem auto;
  `}
  ${media.lessThan("large")`
    grid-template-columns: 4rem auto;
  `}
  ${media.lessThan("medium")`
  display: flex
  flex-direction : column
  align-items : center
  `}
`

const Talks = (): JSX.Element => {
  const [ActivePage, setActivePage] = useState("drafts")
  const [draftId, setDraftId] = useState(null)
  const Hooks = useWindowWidth()

  const { loading, error, data } = useQuery(GET_USER_TALKS, {
    variables: {
      id: localStorage.getItem("user_id"),
      name: "",
    },
  })

  const [deleteTalk, {}] = useMutation(DELETE_TALK)

  useEffect(() => {
    data !== undefined && updateDraftId()
  }, [data])

  const updateDraftId = () => {
    data.user.talks !== null && setDraftId(data.user.talks[0].id)
  }

  const deletATalk = id => {
    deleteTalk({
      variables: {
        talkId: id,
      },
    })
  }

  if (error) {
    console.log(error)
    return (
      <Loader
        type={"error"}
        error={error.graphQLErrors[0].message}
        path={error.graphQLErrors[0].path[0]}
      />
    )
  }

  if (loading) {
    return <Loader type={"loading"} />
  }
  const { talks } = data.user

  return (
    <div>
      <Header
        showSearchBar={true}
        screen="Docs"
        page={"Search"}
        searchText={"Search For A Draft"}
      />

      {Hooks >= 700 && <br />}

      <CSSTransition unmountOnExit in={ActivePage === "drafts"} timeout={300}>
        <Body style={{ background: "#fbfbfb" }} bottomHover>
          <DraftGrid>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ActionBar screen={"drafts"} />
            </div>

            {talks === null ? (
              <div>
                <br />
                <br />

                <Flex justifyCenter>
                  <Link to="/editor">
                    {Hooks >= 700 ? "Create A New Draft" : "New Draft"}
                  </Link>
                </Flex>
                <EmptyData
                  message="You currently do not have any created talk or drafts"
                  feature="Talk Drafts"
                  link="https://my-ebent.com"
                />
              </div>
            ) : (
              <div>
                <Body>
                  <Flex justifyBetween>
                    <Title small>
                      Personal Drafts ( {talks === null ? null : talks.length} )
                    </Title>

                    <Link to="/editor">
                      <Button>
                        <Flex>
                          <Hover style={{ padding: "0rem 0.7rem" }}>
                            <FiPlus style={{ fontSize: "1.6rem" }} />
                          </Hover>
                          {Hooks >= 700 ? "Create A New Draft" : "New Draft"}
                        </Flex>
                      </Button>
                    </Link>
                  </Flex>
                </Body>

                <Body
                  style={{ height: window.innerHeight - 250, overflow: "auto" }}
                >
                  {talks.map(
                    ({
                      id,
                      updatedAt,
                      title,
                      reviewed,
                      createdAt,
                      summary,
                    }) => {
                      return (
                        <List key={id}>
                          <Body
                            bottomPadding
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <Flex justifyBetween>
                              {Hooks >= 1000 && <img alt={"draft image"} />}
                              <Hover
                                onClick={() => {
                                  setDraftId(id)
                                  setActivePage("draft")
                                }}
                                style={{ textDecoration: "none" }}
                              >
                                <Title
                                  style={{ color: "#0e2f5a" }}
                                  small
                                  center
                                >
                                  {title}
                                </Title>
                              </Hover>

                              {Hooks >= 1000 ? (
                                <Flex>
                                  <Hover style={{ paddingLeft: "15px" }}>
                                    {reviewed ? (
                                      <FiClock style={{ fontSize: "1.7rem" }} />
                                    ) : (
                                      <FiCheck style={{ fontSize: "1.8rem" }} />
                                    )}
                                  </Hover>

                                  <Hover
                                    onClick={() => deletATalk(id)}
                                    style={{ paddingLeft: "15px" }}
                                  >
                                    <FiTrash2 style={{ fontSize: "1.7rem" }} />
                                  </Hover>
                                </Flex>
                              ) : (
                                <Hover>
                                  <FiMoreVertical
                                    style={{ fontSize: "1.8rem" }}
                                  />
                                </Hover>
                              )}
                            </Flex>
                            <br />

                            <div style={{ color: "grey", display: "flex" }}>
                              <Hover style={{ padding: "0rem 0.7rem" }}>
                                <FiClock style={{ fontSize: "1.7rem" }} />
                              </Hover>
                              <Text small> {createdAt} </Text>
                            </div>
                            <Text center color="grey">
                              {summary}
                            </Text>

                            <TagBody>
                              <li>Testing</li>
                              <li>Q & A</li>
                              <li>Performance</li>
                              <li>Test</li>
                            </TagBody>
                            <br />

                            <div
                              style={{
                                color: "grey",
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <div style={{ display: "flex" }}>
                                <Hover style={{ padding: "0rem 0.5rem" }}>
                                  <FiEdit style={{ fontSize: "1.7rem" }} />
                                </Hover>
                                <Text small> Updated : </Text>

                                <Text style={{ padding: "0rem 1rem" }} small>
                                  {updatedAt}{" "}
                                </Text>
                              </div>

                              <div style={{ display: "flex" }}>
                                <Hover>
                                  <IoIosPeople style={{ fontSize: "1.7rem" }} />
                                </Hover>

                                <Text style={{ margin: "0rem 0.7rem" }} small>
                                  No Reviews yet
                                </Text>
                              </div>
                            </div>
                          </Body>
                        </List>
                      )
                    }
                  )}

                  <br />
                </Body>
              </div>
            )}
          </DraftGrid>
        </Body>
      </CSSTransition>

      <CSSTransition timeout={300} unmountOnExit in={ActivePage === "draft"}>
        <Draft draftId={draftId} />
      </CSSTransition>

      <Footer />
    </div>
  )
}

export default Talks
