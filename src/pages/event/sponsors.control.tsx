import React, { useState } from "react"
import styled from "styled-components"
import { FiX, FiAlertCircle } from "react-icons/fi"
import media from "styled-media-query"
import { CSSTransition } from "react-transition-group"
import { useMutation } from "@apollo/react-hooks"

import Fields from "../forms/fields"
import { SPONSOR_INPUT } from "../forms/formsData"
import { ADD_EVENT_SPONSOR } from "../../data/mutations"
import { Button, Hover, Title, Text, Section, Body } from "../../styles/style"
import { EmptyData } from "../../components/placeholders"
import { Checkbox } from "../../components/"

const Sponsors = props => {
  const { eventId, sponsors } = props

  const [ActiveView, setActiveView] = useState<string>("")
  const [SponsorName, setSponsorName] = useState<string>("")
  const [SponsorEmail, setSponsorEmail] = useState<string>("")
  const [Organization, setOrganization] = useState<boolean>(false)

  const onChange = (value, label) => {
    switch (label) {
      case "Sponsor Name":
        setSponsorName(value)
        break
      case "Sponsor Email Address":
        setSponsorEmail(value)
        break
      default:
        break
    }
  }

  const [createSponsor, { loading }] = useMutation(ADD_EVENT_SPONSOR)

  const handleSponsor = () => {
    createSponsor({
      variables: {
        eventID: eventId,
        name: SponsorName,
        email: SponsorEmail,
        isOrganization: Organization,
        type: "Cash",
      },
    })
      .then(() => setActiveView(""))
      .catch(e => console.log(e))
  }

  const handleCheckBox = (value, label) => {
    switch (label) {
      case "isOrganization":
        setOrganization(!Organization)
        break
      default:
        break
    }
  }

  return (
    <Body>
      <CSSTransition in={ActiveView === "create"} timeout={300} unmountOnExit>
        <Body>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Title bold> Add Event Sponsor </Title>

            <Hover
              onClick={() => {
                setActiveView("")
              }}
              style={{ margin: "0.3rem 1rem" }}
            >
              <FiX style={{ fontSize: "1.7rem" }} />
            </Hover>
          </div>

          <div
            style={{
              opacity: SponsorName.length < 5 && "0",
              transition: "all 300ms",
              color: "grey",
              display: "flex",
              justifyContent: "center",
              margin: "0.4rem 0rem",
            }}
          >
            <Hover
              onClick={() => {
                setActiveView("")
              }}
              style={{ margin: "0.3rem 1rem" }}
            >
              <FiAlertCircle style={{ fontSize: "1.7rem" }} />
            </Hover>

            <Text center small>
              {Organization
                ? `Oasis would find an appropriate image for your sponsor using
                                              your's event sponsor's name.`
                : "Please provide an image for your event sponsor to be displayed at the About Event Section"}
            </Text>
          </div>

          {SPONSOR_INPUT.map(({ id, placeholder, label, type }) => {
            return (
              <Fields
                onChange={e => onChange(e, label)}
                id={id}
                placeholder={placeholder}
                name={label}
                type={type}
                textarea={false}
              />
            )
          })}

          <div style={{ display: "flex", margin: "0.3rem 1rem" }}>
            <Checkbox handleClick={handleCheckBox} name="isOrganization" />
            <Text style={{ padding: "0rem 0.7rem" }}>
              This Sponor is an Organization.{" "}
            </Text>
          </div>
          <Button long onClick={() => handleSponsor()}>
            Add Sponsor
          </Button>
        </Body>
      </CSSTransition>

      <CSSTransition in={ActiveView !== "create"} timeout={300} unmountOnExit>
        <div>

        <div style={{textAlign : 'right'}} >

          <Button onClick={() => setActiveView("create")}>
            Add New Sponsor
          </Button>

        </div>
          <br />
          <br />

          {sponsors === null ? (
            <EmptyData
              message={`This event has no confirmed sponsors. 
                     \n \n While Oasis does not manage any part of the funds recieved sponsors, we verify each sponsor via  an email sent on your event's behalf inorder to confirm the sponsorhip offer in line with our event guidelines.`}
              link="https://my-event.com"
              feature="Event Backers and Sponsors"
            />
          ) : (
            sponsors.map(({ name, type }) => {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <img
                    style={{ height: "70px", width: "70px" }}
                    alt={"Organization"}
                    src={require("../../assets/images/developer.png")}
                  />

                  <Text> {name} </Text>

                  <Text> {type} </Text>
                </div>
              )
            })
          )}
        </div>
      </CSSTransition>
    </Body>
  )
}

export default Sponsors
