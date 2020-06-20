import React, { useState, useEffect } from "react"
import Flex from "styled-flex-component"
import { Link } from "react-router-dom"
import {
  FiMail,
  FiClock,
  FiCheck,
  FiMoreVertical,
  FiTrash2,
} from "react-icons/fi"
import styled from "styled-components"
import { useQuery, useMutation } from "@apollo/react-hooks"
import { CSSTransition } from "react-transition-group"

import Draft from "./draft"
import { Header, Footer, Loader } from "../../../components/"
import { EmptyData } from "../../../components/placeholders"
import { GET_USER_TALKS } from "../../../data/queries"
import { DELETE_TALK } from "../../../data/mutations"
import {
  Contain,
  Body,
  Text,
  Button,
  Title,
  Hover,
} from "../../../styles/style"
import useWindowWidth from "../../../hook_style"

const List = styled.li`
  list-style: none;
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
    data === undefined ? console.log("entered talks") : updateDraftId()
  }, [data])

  const updateDraftId = () => {
    data.user.talks === null
      ? console.log("updating")
      : setDraftId(data.user.talks[0].id)
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
      <br />

      <Body>
        <CSSTransition unmountOnExit in={ActivePage === "drafts"} timeout={300}>
          <List bottomHover>
            {talks === null ? (
              <div>
                <Flex justifyCenter>
                  <Link to="/editor">
                    <Button long> Create A New Talk Draft </Button>
                  </Link>
                </Flex>
                <br />
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
                    <Title small> Talks </Title>

                    <Link to="/editor">
                      <Button> Create A New Talk Draft </Button>
                    </Link>
                  </Flex>
                </Body>

                <br />
                {talks.map(({ id, title, reviewed }) => {
                  return (
                    <li key={id}>
                      <Contain bottomPadding>
                        <Flex justifyBetween>
                          <img alt={"draft image"} />

                          <Hover
                            onClick={() => {
                              setDraftId(id)
                              setActivePage("draft")
                            }}
                            style={{ textDecoration: "none" }}
                          >
                            <Title small> {title}</Title>
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
                              <div
                                style={{
                                  borderRight: "1px solid grey",
                                  padding: "0rem 0.5rem",
                                }}
                              />

                              <Hover
                                onClick={() => deletATalk(id)}
                                style={{ paddingLeft: "15px" }}
                              >
                                <FiTrash2 style={{ fontSize: "1.7rem" }} />
                              </Hover>
                            </Flex>
                          ) : (
                            <Hover>
                              {" "}
                              <FiMoreVertical
                                style={{ fontSize: "1.8rem" }}
                              />{" "}
                            </Hover>
                          )}
                        </Flex>
                      </Contain>
                    </li>
                  )
                })}
              </div>
            )}
          </List>
        </CSSTransition>

        <CSSTransition timeout={300} unmountOnExit in={ActivePage === "draft"}>
          <Draft draftId={draftId} />
        </CSSTransition>
      </Body>

      <Footer />
    </div>
  )
}

export default Talks
