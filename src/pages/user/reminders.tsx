import React, { useState } from "react"
import styled from "styled-components"
import {
  FiClock,
  FiEdit,
  FiMail,
  FiTrash2,
  FiPlus,
  FiCalendar,
} from "react-icons/fi"
import Flex from "styled-flex-component"
import { Body, Button, Contain, Hover, Text, Title } from "../../styles/style"
import media from "styled-media-query"
import { IoIosAlarm } from "react-icons/io"
import { useQuery } from "@apollo/react-hooks"

import ActionBar from "./userActionBar"
import { Footer, Header, Loader } from "../../components/"
import { EmptyData } from "../../components/placeholders"
import { GET_USER_REMINDERS } from "../../data/queries"
import CreateReminder from "./createReminder"

const Grid = styled.div`
  display: grid;
  grid-gap: 1rem 2rem;
  background: #fbfbfb;
  grid-template-columns: ${props =>
    props.reminderPane ? "7rem auto 32rem" : "8rem auto"};
`

const ReminderCard = styled.div`
  margin: 0rem 1rem;
  li {
    border-radius: 5px;
    width: 60rem;
    height: auto;
    background: #fff;
    padding: 0.5rem 0rem;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 2px 4px grey;
    list-style: none;
    margin: 3rem 1rem;
    div {
      display: flex;
      justify-content: space-between;
    }
  }
`

const Head = styled(Body)`
  display : flex
  justify-content  : space-between    
`

const HoverCircle = styled(Hover)`
  background: #c0c0c0;
  border-radius: 50%;
  padding: 0.7rem 0.7rem;
`

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
        <Grid reminderPane={newReminder}>
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
              height: window.innerHeight - 175,
              marginLeft: "1rem",
            }}
          >
            <br />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex" }}>
                <Text>
                  Reminders ( {reminders !== null && reminders.length} ){" "}
                </Text>
                <HoverCircle onClick={() => createNewReminder(!newReminder)}>
                  <FiPlus style={{ fontSize: "1.5rem" }} />
                </HoverCircle>
              </div>

              {reminders === null ? (
                <EmptyData
                  message={`You dont have any reminder yet.`}
                  feature="Reminders"
                  link="Event.com"
                />
              ) : (
                <ReminderCard>
                  {reminders.map(({ id, due, name, from }) => {
                    return (
                      <li key={id}>
                        <div
                          style={{
                            margin: "0rem 1rem",
                          }}
                        >
                          <div>
                            <Hover style={{ margin: "0rem 0.5rem" }}>
                              <FiCalendar style={{ fontSize: "1.7rem" }} />
                            </Hover>

                            <Text small> 12 - 12 - 12 </Text>
                          </div>
                          <Text color="blue" center>
                            {from}
                          </Text>
                          <div>
                            <Hover style={{ margin: "0rem 1rem" }}>
                              <FiEdit style={{ fontSize: "1.5rem" }} />
                            </Hover>

                            <Hover style={{ margin: "0rem 1rem" }}>
                              <FiTrash2 style={{ fontSize: "1.5rem" }} />
                            </Hover>
                          </div>
                        </div>
                        <hr />
                        <br />

                        <Title small center>
                          {name}
                        </Title>

                        <div style={{ justifyContent: "space-between" }}>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <div
                              style={{
                                margin: "0rem 1rem",
                              }}
                            >
                              <Hover style={{ margin: "0rem 0.1rem" }}>
                                <IoIosAlarm style={{ fontSize: "2.5rem" }} />
                              </Hover>

                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <Text style={{ margin: "0.3rem 0rem" }} small>
                                  Snooze
                                </Text>
                              </div>
                            </div>
                          </div>

                          <div
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              display: "flex",
                              paddingTop: "10px",
                              paddingLeft: "5px",
                              margin: "0.6rem 0rem",
                              borderRadius: "30px 0px 0px 30px",
                              border: "1px solid grey",
                              textAlign: "center",
                              width: "14rem",
                            }}
                          >
                            <div style={{ display: "flex" }}>
                              <Hover style={{ margin: "0rem 0.5rem" }}>
                                <FiClock style={{ fontSize: "1.5rem" }} />
                              </Hover>

                              <Text small center>
                                {due}
                              </Text>
                            </div>
                          </div>
                        </div>
                      </li>
                    )
                  })}
                </ReminderCard>
              )}
            </div>
          </div>

          {newReminder && <CreateReminder />}
        </Grid>

        <Footer />
      </div>
    )
  }
}

export default Reminders
