import React, { useState } from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import * as Yup from "yup"
import { useMutation } from "@apollo/react-hooks"
import { inject, observer } from "mobx-react"
import { Redirect, Link } from "react-router-dom"
import media from "styled-media-query"
import { FiHome } from "react-icons/fi"

import Existing from "./exsiting-event" // i no sabi spell ;)
import { CREATE_EVENT } from "../../data/mutations"
import { CREATE_EVENT_INPUT } from "./formsData"
import Upload from "../media/upload"
import { Header, Footer, Panes } from "../../components/"
import Options from "../imports/createEvent/eventoptions.import"
import {
  Title,
  Button,
  Label,
  Text,
  Hover,
  Grid,
  BigTitle,
  FormBody as Body,
  FormCard as Card,
} from "../../styles/style"
import Field from "./fields"

const UpGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 2rem 2rem;
  ${media.lessThan("huge")`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-gap: 2rem 1rem;
  `};
  ${media.lessThan("large")`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-gap: 2rem 1rem;
  `};
  ${media.lessThan("medium")`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 2rem 1rem;
  `};
`

const CustomCard = styled(Card)`
  width: 60rem;
  padding: 10rem;
  box-shadow: 0px 2px 4px grey;
  text-align: center;
  margin: 10rem 0rem;
  ${media.lessThan("large")`
    width: 50rem;
    padding: 5rem;
  margin: 7rem 0rem;
  `};
  ${media.lessThan("medium")`
  width: 30rem;
  padding: 5rem;
  margin: 5rem 1rem;
  `};
`

const TypeBox = styled.div`
  padding: 0.5rem 1rem;
  border-radius : 5px
  box-shadow: ${props => (props.active ? "0px 2px 5px #2E73FA" : null)};
  border: ${props => (props.active ? "1px solid #2E73FA" : "1px solid grey")};
  width: auto;
  display: flex;
  flex: 1;
  align-items: center;
  margin : 0rem 1rem;
  transition: all 300ms;
 &: hover {
    cursor: pointer;
    box-shadow: 0px 2px 5px #2E73FA;
    border: 1px solid #2E73FA;
  }
  ${media.lessThan("large")`
  width: 28rem;
  `};
  ${media.lessThan("medium")`
  width: 30rem;
  `};
  ${media.lessThan("small")`
  width: 30rem;
  `};
`

const Radio = styled.input`
  font-size: 2rem;
  padding: 1rem 0.5rem;
`

const CreateEvent = (props): JSX.Element => {
  const { Notify, closeNotify, importPane } = props.PaneStore

  const [EventStartDate, setEventStartDate] = useState(new Date())
  const [isSingleDate, setSingleDate] = useState(false)
  const [EndDate, setEndDate] = useState(new Date())

  const [Mail, ConfirmMail] = useState(false)
  const [Error, setError] = useState("")

  const handleCalendarChange = date => {}

  const [createEvent, { data }] = useMutation(CREATE_EVENT)

  // Collapsing all into one {kvp state} gives an uncontrolled form err .
  const [Name, setName] = useState("")
  const [Alias, setAlias] = useState("")
  const [Description, setDescription] = useState("")
  const [Website, setWebsite] = useState("")
  const [Summary, setSummary] = useState("")
  const [Venue, setVenue] = useState("")
  const [Email, setEmail] = useState("")
  const [EventType, setEventType] = useState("")
  const [Virtual, setVirtual] = useState(false)
  const [EventDate, setEventDate] = useState([])

  const [ExistingEvent, createExistingEvent] = useState(false)

  let Validation = Yup.object().shape({
    name: Yup.string()
      .min(8, "Not less than 3")
      .max(24, "More than 25")
      .required("must have a name "),
    description: Yup.string().min(10, "Not less than 10"),
    alias: Yup.string().min(2, "Not less than 10"),
    website: Yup.string().min(2, "Not less than 10"),
    email: Yup.string().min(2, "Not less than 10"),
    venue: Yup.string().min(2, "Not less than 10"),
  })

  const SubmitData = () => {
    createEvent({
      variables: {
        UserID: localStorage.getItem("user_id"),
        name: Name,
        website: Website,
        alias: Alias,
        description: Description,
        Email: Email,
        venue: Venue,
        eventType: EventType,
        summary: Summary,
        EventDate: EventDate,
        isVirtual: Virtual,
        isLocked: false,
        isArchived: false,
        isAcceptingTalks: false,
        isAcceptingVolunteers: false,
      },
    })
      .then(() => {
        ConfirmMail(true)
        closeNotify()
      })
      .catch(e => {
        console.log(e)
      })
  }

  const handleChange = (value, label) => {
    switch (label) {
      case "Event Name":
        setName(value)
        break
      case "Event Alias":
        setAlias(value)
        break
      case "Event Brand Page":
        setWebsite(value)
        break
      case "Event Support Email":
        setEmail(value)
        break
      case "Event Description":
        setDescription(value)
        break
      case "Event Summary":
        setSummary(value)
        break
      case "Event-Venue":
        setVenue(value)
        break
      default:
        console.log(label)
    }
  }

  if (data) {
    setTimeout(() => {
      return <Redirect to="/console" message="Loggging in" />
    }, 20000)
  }

  const { first, second, third } = CREATE_EVENT_INPUT

  console.log(EventDate)

  return (
    <div style={{ background: "#eeeeee" }}>
      <Header screen="event" name="" unshadowed={true} event={Name} />

      {!ExistingEvent ? (
        <div>
          {!Mail ? (
            <div>
              {!importPane ? (
                <div>
                  <br />
                  <Panes type={"Event-Form-Import"} color="#401364" />
                </div>
              ) : null}
            </div>
          ) : null}
          <br />
          {!importPane ? (
            <div>
              {!Mail ? (
                <Body>
                  <BigTitle center bold>
                    Create {Name.length < 7 ? "Your Event" : Name}
                  </BigTitle>

                  <Text style={{ color: "red" }}> {Error} </Text>
                  <br />

                  <Flex justifyBetween>
                    <Title small bold>
                      Details
                    </Title>

                    <Text>
                      <b
                        onClick={() => createExistingEvent(true)}
                        style={{
                          color: "blue",
                          fontWeight: 500,
                          cursor: "pointer",
                        }}
                      >
                        Launch
                      </b>{" "}
                      a new iteration of an existing event.
                    </Text>
                  </Flex>
                  <hr />
                  <form onSubmit={SubmitData}>
                    <UpGrid>
                      <Card>
                        {first.map(({ id, label, placeholder, textarea }) => {
                          return (
                            <div key={id}>
                              <br />

                              <Field
                                id={label}
                                name={label}
                                type={"text"}
                                textarea={textarea}
                                value={label == "Event Name" ? Name : Alias}
                                onChange={e => handleChange(e, label)}
                                placeholder={placeholder}
                              />
                            </div>
                          )
                        })}
                        <br />
                      </Card>
                      <Card>
                        {third.map(({ id, label, placeholder, textarea }) => {
                          return (
                            <div key={id}>
                              <br />
                              <Field
                                id={label}
                                name={label}
                                type={"text"}
                                textarea={textarea}
                                value={
                                  label == "Event Brand Page" ? Website : Email
                                }
                                onChange={e => handleChange(e, label)}
                                placeholder={placeholder}
                              />
                            </div>
                          )
                        })}
                        <br />
                      </Card>
                    </UpGrid>
                    <br /> <br />
                    <UpGrid>
                      <Card
                        style={{
                          boxShadow: "0px 3px 4px grey",
                          padding: "0rem 1rem",
                        }}
                      >
                        <br />
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          {" "}
                          .{" "}
                          <div
                            style={{ display: "flex", padding: "0rem 0.7rem" }}
                          >
                            <input
                              type="checkbox"
                              onChange={() => setVirtual(!Virtual)}
                              style={{
                                padding: "0.4rem 0.4rem",
                                margin: "0.5rem 0.3rem",
                              }}
                            />
                            <Label> Make Virtual Event </Label>
                          </div>
                        </div>
                        <Field
                          type="text"
                          name={!Virtual ? "Event-Venue" : "Streaming Location"}
                          id="Event-Venue"
                          onChange={e =>
                            handleChange(
                              e,
                              !Virtual ? "Event-Venue" : "Streaming Location"
                            )
                          }
                          value={Venue}
                          textarea={false}
                          placeholder={
                            !Virtual
                              ? "City , State , Country"
                              : "Office hq or Host Location"
                          }
                        />
                        <br />

                        <Flex column>
                          <Label small details>
                            Event Date
                          </Label>

                          <div
                            style={{ display: "flex", padding: "0rem 0.7rem" }}
                          >
                            <input
                              type="checkbox"
                              onChange={() => setSingleDate(!isSingleDate)}
                              style={{
                                padding: "0.4rem 0.4rem",
                                margin: "0.5rem 0.3rem",
                              }}
                            />
                            <Label small> Multiple Days </Label>
                          </div>
                          {EventDate.length}

                          {isSingleDate ? (
                            <div>
                              <div
                                style={{ display: "flex", margin: "0rem 1rem" }}
                              >
                                <Text small color="grey">
                                  Start Date :
                                </Text>
                                <div style={{ padding: "0rem 1rem" }}>
                                  <DatePicker
                                    selected={EventStartDate}
                                    onChange={date => {
                                      setEventStartDate(date)

                                      EventDate.push(date)
                                    }}
                                  />
                                </div>
                              </div>

                              <br />

                              <div
                                style={{ display: "flex", margin: "0rem 1rem" }}
                              >
                                <Text small color="grey">
                                  End Date :
                                </Text>
                                <div style={{ padding: "0rem 1rem" }}>
                                  <DatePicker
                                    selected={EndDate}
                                    onChange={date => {
                                      setEndDate(date)

                                      EventDate.push(date)
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div
                              style={{ display: "flex", margin: "0rem 1rem" }}
                            >
                              <Text small color="grey">
                                Date :
                              </Text>
                              <div style={{ padding: "0rem 1rem" }}>
                                <DatePicker
                                  selected={EventStartDate}
                                  onChange={date => {
                                    setEventStartDate(date)

                                    EventDate.push(date)
                                  }}
                                />
                              </div>
                            </div>
                          )}
                        </Flex>
                        <br />
                      </Card>

                      <Card
                        style={{
                          boxShadow: "0px 3px 4px grey",
                          padding: "0rem 1rem",
                        }}
                      >
                        <br />
                        <Flex column>
                          <Label small details hmtlFor="event-venue">
                            Event Type
                          </Label>
                          <Flex justifyCenter>
                            <TypeBox
                              active={EventType === "Conference"}
                              onClick={() => setEventType("Conference")}
                            >
                              <Flex column>
                                <Text bold style={{ padding: "0rem 1rem" }}>
                                  Conference Event
                                </Text>
                                <Text small style={{ padding: "0rem 1rem" }}>
                                  Events that span a maximum of 5 days. With
                                  full conference features.
                                </Text>

                                <Text center small color="grey">
                                  <a
                                    href="/"
                                    style={{
                                      textDecoration: "none",
                                      textAlign: "center",
                                    }}
                                  >
                                    Learn More
                                  </a>{" "}
                                  on Oasis Conferences
                                </Text>
                              </Flex>
                            </TypeBox>
                          </Flex>
                          <br />

                          <Flex justifyCenter>
                            <TypeBox
                              active={EventType === "Meetup"}
                              onClick={() => setEventType("Meetup")}
                            >
                              <Flex column>
                                <Text bold style={{ padding: "0rem 1rem" }}>
                                  Meetup Event
                                </Text>
                                <Text small style={{ padding: "0rem 1rem" }}>
                                  Events that are held at freqeunt intervals and
                                  can span a long time.
                                </Text>

                                <Text center small color="grey">
                                  <a
                                    href="/"
                                    style={{
                                      textDecoration: "none",
                                      textAlign: "center",
                                    }}
                                  >
                                    Learn More
                                  </a>{" "}
                                  on Oasis Meetups
                                </Text>
                              </Flex>
                            </TypeBox>
                          </Flex>
                        </Flex>

                        <br />
                      </Card>
                    </UpGrid>
                  </form>
                  <br />
                  <br />
                  <UpGrid>
                    <Card>
                      {second.map(
                        ({ id, label, limit, placeholder, textarea }) => {
                          return (
                            <div key={id}>
                              <br />
                              <Field
                                id={label}
                                limit={limit}
                                name={label}
                                type={"text"}
                                textarea={textarea}
                                value={
                                  label === "Event Description"
                                    ? Description
                                    : Summary
                                }
                                onChange={e => handleChange(e, label)}
                                placeholder={placeholder}
                              />
                            </div>
                          )
                        }
                      )}
                      <br />
                    </Card>
                  </UpGrid>
                  <br />
                  <br />
                  <div style={{ textAlign: "right" }}>
                    <Button
                      onClick={() => {
                        SubmitData()
                      }}
                    >
                      Proceed To Confirm Support Mail >
                    </Button>
                  </div>

                  <br />
                </Body>
              ) : (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <CustomCard>
                    <Text>
                      An Email Confirmation link has been sent to{" "}
                      <b> {Email} </b> to verify that an active support email
                      address is being used for <b> {Name} </b>.
                    </Text>{" "}
                    <br />{" "}
                    <Link to="/console">
                      <div
                        onClick={() => {
                          return (
                            <Redirect to="/console" message="rerouting in" />
                          )
                        }}
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          cursor: "pointer",
                        }}
                      >
                        <Hover style={{ padding: "0rem 0.7rem" }}>
                          <FiHome style={{ fontSize: "1.7rem" }} />
                        </Hover>{" "}
                        <Text> Back To Console </Text>
                      </div>{" "}
                    </Link>
                  </CustomCard>
                </div>
              )}
            </div>
          ) : (
            <Options />
          )}
        </div>
      ) : (
        <Existing />
      )}

      <Footer />
    </div>
  )
}

export default inject("PaneStore")(observer(CreateEvent))
