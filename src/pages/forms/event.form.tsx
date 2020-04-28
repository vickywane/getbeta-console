import React, { useState } from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"
import { FiX } from "react-icons/fi"
import media from "styled-media-query"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import * as Yup from "yup"
import { useMutation } from "@apollo/react-hooks"

import { CREATE_EVENT } from "../../data/mutations"
import { Forms } from "../../data/mockData"
import Upload from "../media/upload"
import { Header, Footer } from "../../components/"
import Options from "../imports/createEvent/eventoptions.import"
import {
  FormInput as Input,
  Title,
  Button,
  Text,
  Label,
  Hover,
  Grid,
  FormCard as Card,
  Notification,
} from "../../styles/style"

const Body = styled.div`
  padding: 0rem 15rem;
  ${media.lessThan("large")`
  padding: 0rem 2rem;
`};
  ${media.lessThan("medium")`
  padding: 0rem 0.7rem;
`};
  ${media.lessThan("small")`
 padding : 0rem 0.5rem;
`};
`

const UpGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(autofit, minmax(20rem, 1fr));
  grid-gap: 1rem;
`
// repeat(auto-fit, minmax(30rem, 1fr))

const CustomCard = styled(Card)`
  width: 30rem;
  padding: 5rem;
  margin: 5rem 1rem;
  box-shadow: 0px 2px 4px grey;
  text-align: center;
`

const CreateEvent = () => {
  const [StartDate, setStartDate] = useState(new Date())
  const [Notify, SetNotify] = useState(true)
  const [Mail, ConfirmMail] = useState(false)
  const [Import, setImport] = useState(false)

  const handleCalendarChange = date => {
    setStartDate(date)
  }

  const [createEvent, { data }] = useMutation(CREATE_EVENT)
  console.log(data, "mutation data")

  const [Name, setName] = useState("aaaxaxaaxaxaxa")
  const [Alias, setAlias] = useState("aaaxaxaaxaxaxa")
  const [Description, setDescription] = useState("aaaxaxaaxaxaxa")
  const [Website, setWebsite] = useState("aaaxaxaaxaxaxa")
  const [Summary, setSummary] = useState("aaaxaxaaxaxaxa")
  const [Venue, setVenue] = useState("aaaxaxaaxaxaxa")
  const [Email, setEmail] = useState("aaaxaxaaxaxaxa")
  const [EventType, setEventType] = useState("Conference")

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
    // Todo: Validation doesnt work yet!
    try {
      Validation.isValid({
        name: Name,
      }).then(valid => {
        if (valid) {
          createEvent({
            variables: {
              name: Name,
              website: Website,
              alias: Alias,
              description: Description,
              Email: Email,
              venue: Venue,
              Date: 11,
              eventType: EventType,
              summary: Summary,
            },
          }).then(() => {
            alert("created")
          })
        }
      })
    } catch (e) {
      console.log(e)
    }
  }

  const { first, second, third } = Forms
  return (
    <div style={{ background: "#eeeeee" }}>
      <Header screen="event" name="" unshadowed={true} event={Alias} />
      {!Mail ? (
        <div>
          {!Import ? (
            <Notification color="#401364">
              <br />
              <Body>
                <Flex justifyBetween>
                  <Text center small white>
                    Import data from existing event managers.
                  </Text>

                  <Button
                    onClick={() => {
                      setImport(true)
                    }}
                  >
                    Import Data
                  </Button>
                </Flex>
              </Body>
            </Notification>
          ) : null}
        </div>
      ) : null}
      {Notify ? (
        <Notification color="#000">
          <br />
          <Body>
            <Flex justifyBetween>
              <Text center small white>
                Information saved here can be updated later.
              </Text>

              <Hover
                onClick={() => {
                  SetNotify(false)
                }}
              >
                <FiX style={{ fontSize: "1.7rem", color: "white" }} />
              </Hover>
            </Flex>
          </Body>
        </Notification>
      ) : null}
      j
      <br />
      {!Import ? (
        <div>
          {!Mail ? (
            <Body>
              <Title small bold>
                Details
              </Title>
              <hr />

              <form onSubmit={SubmitData}>
                <UpGrid>
                  <Card>
                    {first.map(({ id, label, placeholder, textarea }) => {
                      return (
                        <div key={id}>
                          <br />

                          {!textarea ? (
                            <Flex column>
                              <Label htmlFor="event-name" small>
                                {label}
                              </Label>
                              <Input
                                grey
                                id="event-name"
                                name="event-name"
                                onChange={event => {
                                  setName(event.target.value)
                                  event.preventDefault()
                                  console.log(event.target.value, "text value")
                                }}
                                value={Name}
                                placeholder={placeholder}
                              />{" "}
                            </Flex>
                          ) : (
                            <textarea placeholder={placeholder} />
                          )}
                        </div>
                      )
                    })}
                    <br />
                  </Card>
                </UpGrid>
                <br />
                <UpGrid>
                  <Card>
                    {second.map(({ id, label, placeholder, textarea }) => {
                      return (
                        <div key={id}>
                          <br />

                          {!textarea ? (
                            <Flex column>
                              <Label htmlFor="event-name" small>
                                {label}
                              </Label>
                              <Input
                                grey
                                id="event-name"
                                name="event-name"
                                onChange={event => {
                                  setName(event.target.value)
                                  event.preventDefault()
                                  console.log(event.target.value, "text value")
                                }}
                                value={Name}
                                placeholder={placeholder}
                              />{" "}
                            </Flex>
                          ) : (
                            <textarea placeholder={placeholder} />
                          )}
                        </div>
                      )
                    })}
                    <br />
                  </Card>
                </UpGrid>
                <br />
                <UpGrid>
                  <Card>
                    {third.map(({ id, label, placeholder, textarea }) => {
                      return (
                        <div key={id}>
                          <br />

                          {!textarea ? (
                            <Flex column>
                              <Label htmlFor="event-name" small>
                                {label}
                              </Label>
                              <Input
                                grey
                                id="event-name"
                                name="event-name"
                                onChange={event => {
                                  setName(event.target.value)
                                  event.preventDefault()
                                  console.log(event.target.value, "text value")
                                }}
                                value={Name}
                                placeholder={placeholder}
                              />{" "}
                            </Flex>
                          ) : (
                            <textarea placeholder={placeholder} />
                          )}
                        </div>
                      )
                    })}
                    <br />
                  </Card>
                </UpGrid>

                <br />
                <UpGrid>
                  <Card
                    style={{
                      boxShadow: "0px 3px 4px grey",
                      padding: "0rem 0.2rem",
                    }}
                  >
                    <br />
                    <Label small details hmtlFor="event-venue">
                      Event Venue
                    </Label>
                    <Input
                      id="event-venue"
                      name="event-venue"
                      onChange={event => {
                        setVenue(event.target.value)
                        event.preventDefault()
                      }}
                      value={Venue}
                      placeholder="City , State , Country"
                    />
                    <br />

                    <Flex column>
                      <Label small details>
                        Event Date{" "}
                      </Label>

                      <p
                        style={{
                          paddingLeft: "20px",
                          color: "grey",
                        }}
                      >
                        {" "}
                        Start Date :{" "}
                      </p>
                      <div style={{ textAlign: "center" }}>
                        <DatePicker
                          selected={StartDate}
                          onChange={handleCalendarChange}
                        />
                      </div>

                      <p
                        style={{
                          paddingLeft: "20px",
                          color: "grey",
                        }}
                      >
                        {" "}
                        End Date :{" "}
                      </p>
                      <div style={{ textAlign: "center" }}>
                        <DatePicker
                          selected={StartDate}
                          onChange={handleCalendarChange}
                        />
                      </div>
                    </Flex>

                    <br />
                  </Card>

                  <Card
                    style={{
                      boxShadow: "0px 3px 4px grey",
                      padding: "0rem 0.2rem",
                    }}
                  >
                    <br />
                    <Flex column>
                      <Label small details hmtlFor="event-venue">
                        Event Venue
                      </Label>
                      <Input
                        id="event-venue"
                        name="event-venue"
                        onChange={event => {
                          setVenue(event.target.value)
                          event.preventDefault()
                        }}
                        value={Venue}
                        placeholder="City , State , Country"
                      />
                    </Flex>
                    <br />

                    <Flex column>
                      <Label small details>
                        Event Date{" "}
                      </Label>

                      <p
                        style={{
                          paddingLeft: "20px",
                          color: "grey",
                        }}
                      >
                        {" "}
                        Start Date :{" "}
                      </p>
                      <div style={{ textAlign: "center" }}>
                        <DatePicker
                          selected={StartDate}
                          onChange={handleCalendarChange}
                        />
                      </div>

                      <p
                        style={{
                          paddingLeft: "20px",
                          color: "grey",
                        }}
                      >
                        {" "}
                        End Date :{" "}
                      </p>
                      <div style={{ textAlign: "center" }}>
                        <DatePicker
                          selected={StartDate}
                          onChange={handleCalendarChange}
                        />
                      </div>
                    </Flex>

                    <br />
                  </Card>
                </UpGrid>
              </form>
              <br />
              <br />

              <Card
                style={{
                  boxShadow: "0px 3px 4px grey",
                  padding: "0rem 0.2rem",
                }}
              >
                <br />
                <div style={{ padding: "0rem 1rem" }}>
                  <Flex justifyBetween>
                    <Title small bold>
                      Event Media Assets
                    </Title>
                    <Text> Skip </Text>
                  </Flex>
                </div>

                <hr />
                <Label small> Cover Image </Label>
                <Grid>
                  <Upload type="component" />

                  <div>
                    <br />
                    <Text small center>
                      Event Cover Image.
                    </Text>
                    <p
                      style={{
                        color: "grey",
                        fontSize: "1rem",
                        textAlign: "center",
                      }}
                    >
                      A 1070 X 1205 image resolution is recommended
                    </p>
                  </div>
                </Grid>
                <br />
                <br />
                <Label small> Logo </Label>
                <Grid>
                  <Upload type="component" />

                  <div>
                    <br />
                    <br />
                    <Text small center>
                      Event Logo Image.
                    </Text>
                    <p
                      style={{
                        color: "grey",
                        fontSize: "1rem",
                        textAlign: "center",
                      }}
                    >
                      A 1070 X 1205 image resolution is recommended
                    </p>
                  </div>
                </Grid>
                <br />
              </Card>
              <br />
              <br />
              <div style={{ textAlign: "right" }}>
                <Button
                  onClick={() => {
                    ConfirmMail(true)
                    SetNotify(false)
                    SubmitData()
                  }}
                >
                  Proceed To Confirm Support Mail >
                </Button>
              </div>
            </Body>
          ) : (
            <Flex justifyCenter>
              <CustomCard>
                <Text>
                  An Email Confirmation link has been sent to xxxxxxxxxxxxxxx
                </Text>
              </CustomCard>
            </Flex>
          )}
        </div>
      ) : (
        <Options />
      )}
      <Footer />
    </div>
  )
}

export default CreateEvent
