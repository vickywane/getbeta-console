import React, { useState } from "react"
import styled from "styled-components"
import { FiClock, FiEdit, FiMail, FiTrash2, FiFilter } from "react-icons/fi"
import Flex from "styled-flex-component"
import { Body, Button, Contain, Hover, Text, Title } from "../../styles/style"
import media from "styled-media-query"
import { IoIosAlarm } from "react-icons/io"
import { useQuery } from "@apollo/react-hooks"

import ActionBar from "./userActionBar"
import { Footer, Header, Loader } from "../../components/"
import { EmptyData } from "../../components/placeholders"
import { GET_USER_REMINDERS } from "../../data/queries"

const Grid = styled.div`
  display: grid;
  grid-gap: 1rem 2rem;
  grid-template-columns: 2rem auto;
`

const ReminderCard = styled.div`
  border-radius: 5px;
  width: 30rem;
  box-shadow: 0px 1px 3px 3px grey;
  display: grid;
  grid-gap: 1rem 0rem;
  grid-template-columns: 10rem auto;
  transition : all 300ms;
  ${media.lessThan("huge")`
    width: 27rem;
    grid-template-columns: 7rem auto;
  `}
  ${media.lessThan("large")`
    width: 24rem;
    grid-template-columns: 5rem auto;
  `}
  ${media.lessThan("medium")`
    grid-template-columns: 6rem auto;
  `}
`

const Head = styled(Body)`
  display : flex
  justify-content  : space-between    
`

const ReminderGrid = styled.div`
  margin: 1rem 0rem;
  display: grid;
  transition : all 400ms
  grid-gap: 4rem 1rem;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  ${media.lessThan("huge")`
    grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
  `};
  ${media.lessThan("large")`
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  `};
  ${media.lessThan("medium")`
    grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
  `};
`

const Data = [
  {
    id: 1,
    name: "Buy Sweet Coffee for Mum",
    due: "Tommorrow 11:50pm",
  },
  {
    id: 2,
    name: "Attend Concatenate Conference Tommorrow",
    due: "Tommorrow 11:50am",
  },

  {
    id: 3,
    name: "Review all Talk proposals",
    due: "Firday 1:50am",
  },

  {
    id: 4,
    name: "Review design submissions",
    due: "Firday 1:50am",
  },

  {
    id: 5,
    name: "Review all Talk proposals",
    due: "Firday 1:50am",
  },

  {
    id: 6,
    name: "Review all Talk proposals",
    due: "Firday 1:50am",
  },
  {
    id: 4,
    name: "Review design submissions",
    due: "Firday 1:50am",
  },

  {
    id: 5,
    name: "Review all Talk proposals",
    due: "Firday 1:50am",
  },

  {
    id: 6,
    name: "Review all Talk proposals",
    due: "Firday 1:50am",
  },
]

const Reminders = (): JSX.Element => {
  const [ReminderName, setReminderName] = useState("")

  const [newReminder, createNewReminder] = useState(false)

  const { data, loading, error } = useQuery(GET_USER_REMINDERS, {
    variables: { id: localStorage.getItem("user_id"), name: "" },
  })

  if (error) {
    console.log(error)
    return <Loader type={"error"} />
  }

  if (loading) {
    return <Loader type={"loading"} />
  }

  if (data) {
    const { reminders } = data.user
    return (
      <div>
        <Header
          showSearchBar={true}
          screen="reminders"
          page={"reminders"}
          searchText={"Find Reminders"}
        />
        <br />
        <br />

        <Contain>
          <Grid>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ActionBar screen="reminders" />
            </div>

            <div
              style={{
                overflow: "auto",
                height: window.innerHeight - 200,
                marginLeft: "1rem",
              }}
            >
              {!newReminder && (
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button>
                    <Flex>
                      <Hover style={{ margin: "0rem 0.7rem" }}>
                        <FiFilter style={{ fontSize: "1.6rem" }} />
                      </Hover>
                      Filter
                    </Flex>
                  </Button>

                  <Button onClick={() => createNewReminder(true)}>
                    Create New Reminder
                  </Button>
                </div>
              )}

              {newReminder && (
                <div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Title small> New Reminder </Title>

                    <Button onClick={() => createNewReminder(false)}>
                      Cancel
                    </Button>
                  </div>
                  <hr />
                  <ReminderCard key={1}>
                    <div style={{ height: "auto", background: "#0e2f5a" }}>
                      <Title style={{ color: "white" }}> 1 </Title>
                    </div>

                    <div>
                      <Body>
                        <Title small center>
                          Add Todo
                        </Title>
                        <br />
                        <div
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <Hover style={{ margin: "0rem 1rem" }}>
                            <FiEdit style={{ fontSize: "1.5rem" }} />
                          </Hover>

                          <Hover style={{ margin: "0rem 1rem" }}>
                            <FiMail style={{ fontSize: "1.5rem" }} />
                          </Hover>

                          <Hover style={{ margin: "0rem 1rem" }}>
                            <FiTrash2 style={{ fontSize: "1.5rem" }} />
                          </Hover>
                        </div>
                      </Body>
                      <br />

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        .
                        <div
                          style={{
                            justifyContent: "center",
                            display: "flex",
                            paddingTop: "5px",
                            paddingLeft: "5px",
                            margin: "1rem 0rem",
                            borderRadius: "30px 0px 0px 30px",
                            border: "1px solid grey",
                            textAlign: "center",
                            width: "15rem",
                          }}
                        >
                          <Hover style={{ margin: "0rem 0.7rem" }}>
                            <FiClock style={{ fontSize: "1.5rem" }} />
                          </Hover>

                          <Text small center>
                            Tommorow
                          </Text>
                        </div>
                      </div>
                    </div>
                  </ReminderCard>
                </div>
              )}
              <br />
              <Title small> Upcoming Reminders </Title>
              <hr />
              <ReminderGrid>
                {reminders === null ? 
                  <EmptyData 
                    message={`You dont have any reminder yet.`}
                    feature="Reminders"
                    link="Event.com"
                  />

                  : reminders.map(({ id, due, name, from }) => {
                  return (
                    <ReminderCard key={id}>
                      <div style={{ height: "auto", background: "#0e2f5a" }}>
                        <div
                          style={{
                            display: "flex",
                            color: "#fff",
                            margin: "0.5rem",
                          }}
                        >
                          <Hover style={{ margin: "0rem 0.1rem" }}>
                            <IoIosAlarm style={{ fontSize: "2rem" }} />
                          </Hover>
                          <Title> {id} </Title>
                        </div>
                      </div>

                      <div>
                        <Body>
                          <Title small center>
                            {name}
                          </Title>
                          <br />
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <Hover style={{ margin: "0rem 1rem" }}>
                              <FiEdit style={{ fontSize: "1.5rem" }} />
                            </Hover>

                            <Hover style={{ margin: "0rem 1rem" }}>
                              <FiMail style={{ fontSize: "1.5rem" }} />
                            </Hover>

                            <Hover style={{ margin: "0rem 1rem" }}>
                              <FiTrash2 style={{ fontSize: "1.5rem" }} />
                            </Hover>
                          </div>
                        </Body>
                        <br />

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          .
                          <div
                            style={{
                              justifyContent: "center",
                              display: "flex",
                              paddingTop: "5px",
                              paddingLeft: "5px",
                              margin: "1rem 0rem",
                              borderRadius: "30px 0px 0px 30px",
                              border: "1px solid grey",
                              textAlign: "center",
                              width: "15rem",
                            }}
                          >
                            <Hover style={{ margin: "0rem 0.7rem" }}>
                              <FiClock style={{ fontSize: "1.5rem" }} />
                            </Hover>

                            <Text small center>
                              {due}
                            </Text>
                          </div>
                        </div>
                      </div>
                    </ReminderCard>
                  )
                })}
              </ReminderGrid>
            </div>
          </Grid>
        </Contain>

        <Footer />
      </div>
    )
  }
}

export default Reminders
