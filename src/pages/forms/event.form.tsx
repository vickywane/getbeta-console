import React, { useState } from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import * as Yup from "yup"
import { useMutation } from "@apollo/react-hooks"
import { inject, observer } from "mobx-react"

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
  Grid,
  FormBody as Body,
  FormCard as Card,
} from "../../styles/style"
import Field from "./fields"
import media from "styled-media-query"

const UpGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 2rem 1rem;
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
  width: 30rem;
  padding: 5rem;
  margin: 5rem 1rem;
  box-shadow: 0px 2px 4px grey;
  text-align: center;
`

const TypeBox = styled.div`
  padding: 0.5rem 1rem;
  border-radius : 5px
  border: 1px solid #000;
  width: 30rem;
  margin : 0rem 1rem;
 &: hover {
    cursor: pointer;
  }
  ${media.lessThan("large")`
  width: 26rem;
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
  const [StartDate, setStartDate] = useState(new Date())
  const [Mail, ConfirmMail] = useState(false)
  const [Error, setError] = useState("")

  const handleCalendarChange = date => {
    setStartDate(date)
  }

  const [createEvent, { data }] = useMutation(CREATE_EVENT)

  const [Name, setName] = useState("")
  const [Alias, setAlias] = useState("")
  const [Description, setDescription] = useState("")
  const [Website, setWebsite] = useState("")
  const [Summary, setSummary] = useState("")
  const [Venue, setVenue] = useState("")
  const [Email, setEmail] = useState("")
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
    })
      .then(() => {
        alert("created")
      })
      .catch(e => {
        setError(e.graphQLErrors[0].message)
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

  const { first, second, third } = CREATE_EVENT_INPUT

  return (
    <div style={{ background: "#eeeeee" }}>
      <Header screen="event" name="" unshadowed={true} event={Name} />
      {!Mail ? (
        <div>
          {!importPane ? (
            <Panes type={"Event-Form-Import"} color="#401364" />
          ) : null}
        </div>
      ) : null}
      <br />
      {!importPane ? (
        <div>
          {!Mail ? (
            <Body>
              <Text style={{ color: "red" }}> {Error} </Text>
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
                      padding: "0rem 0.2rem",
                    }}
                  >
                    <br />
                    <Field
                      type="text"
                      name="Event-Venue"
                      id="Event-Venue"
                      onChange={e => handleChange(e, "Event-Venue")}
                      value={Venue}
                      textarea={false}
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
                        Event Type
                      </Label>
                      <TypeBox>
                        <Flex>
                          <Radio type="radio" />

                          <Flex column>
                            <Text style={{ padding: "0rem 1rem" }}>
                              <b> Conference Event </b> <br /> Explanation of a
                              conference event.
                            </Text>
                          </Flex>
                        </Flex>
                      </TypeBox>

                      <br />
                      <br />

                      <TypeBox>
                        <Flex>
                          <Radio type="radio" />

                          <Flex column>
                            <Text style={{ padding: "0rem 1rem" }}>
                              <b> Meetup Event </b> <br /> Explanation of a
                              meetup event.
                            </Text>
                          </Flex>
                        </Flex>
                      </TypeBox>
                    </Flex>

                    <br />
                  </Card>
                </UpGrid>
              </form>
              <br />
              <br />
              <UpGrid>
                <Card>
                  {second.map(({ id, label, placeholder, textarea }) => {
                    return (
                      <div key={id}>
                        <br />

                        <Field
                          id={label}
                          name={label}
                          type={"text"}
                          textarea={textarea}
                          value={
                            label == "Event Description" ? Description : Summary
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
                  <Upload type="component" unpadded />

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
                  <Upload type="component" unpadded />

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
                    // ConfirmMail(true);
                    closeNotify()
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

export default inject("PaneStore")(observer(CreateEvent))
