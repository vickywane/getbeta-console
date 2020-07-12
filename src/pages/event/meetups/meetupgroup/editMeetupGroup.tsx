import React, { useState } from "react"
import { Modal } from "react-bootstrap"
import { inject, observer } from "mobx-react"
import {
  FiX,
  FiSend,
  FiEdit,
  FiFacebook,
  FiTwitter,
  FiInstagram,
} from "react-icons/fi"
import Flex from "styled-flex-component"
import { useMutation } from "@apollo/react-hooks"
import { CSSTransition } from "react-transition-group"
import styled from "styled-components"

import Media from "../../media"
import SponsorsControl from "../../sponsors.control"
import {
  Hover,
  Head,
  Label,
  Section,
  Body,
  Input,
  Tab,
  TabColumn,
  Text,
  Button,
} from "../../../../styles/style"
import { UPDATE_EVENT } from "../../../../data/mutations"
import { CREATE_MEETUP_GROUP } from "../../../../pages/forms/formsData"
import Field from "../../../../pages/forms/fields"

const CInput = styled.div`
  display: flex;
  padding: 0rem;
  border: 1px solid grey;
  border-radius: 5px;
  input {
    width: 27rem;
    border: 0px;
    height: auto;
    padding: 0.5rem 1.5rem;
    outline: 0px;
  }
`

const InputGrid = styled.div`
  display: grid;
  grid-gap: 3rem 3rem;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
`

const EditEvent = (props): JSX.Element => {
  const [ActiveColumn, setActiveColumn] = useState("forms")

  const { editEventModal, closeEditModal } = props.ModalStore
  const { eventData } = props
  const {
    id,
    name,
    description,
    createdAt,
    summary,
    location,
    alias,
    mediaLinks,
  } = eventData.getMeetupGroup

  const [Name, setName] = useState<string>(name)
  const [Alias, setAlias] = useState<string>(alias)
  const [Description, setDescription] = useState<string>(description)
  const [Summary, setSummary] = useState<string>(summary)
  const [Location, setLocation] = useState<string>(location)

  const [FBMediaLinks, addFBMediaLink] = useState<string>(
    mediaLinks === null ? "" : mediaLinks[0]
  )
  const [TWMediaLinks, addTWMediaLink] = useState<string>(
    mediaLinks === null ? "" : mediaLinks[1]
  )
  const [INSMediaLinks, addINSMediaLink] = useState<string>(
    mediaLinks === null ? "" : mediaLinks[2]
  )

  const { first, second, third } = CREATE_MEETUP_GROUP
  const [updateEvent, { data }] = useMutation(UPDATE_EVENT)

  const handleChange = (value, label) => {
    switch (label) {
      case "Event Name":
        setName(value)
        break
      case "Event Alias":
        setAlias(value)
        break
      case "Event Description":
        setDescription(value)
        break
      case "Event Summary":
        setSummary(value)
        break
      case "Event-Venue":
        setLocation(value)
        break
      default:
        break
    }
  }

  const SubmitData = () => {
    let LinksArr = []

    LinksArr.push(FBMediaLinks, TWMediaLinks, INSMediaLinks)
    updateEvent({
      variables: {
        id: id,
        name: Name,
        alias: Alias,
        description: Description,
        Date: 11,
        mediaLinks: LinksArr,
        summary: Summary,
      },
    })
      .then(() => {
        alert("update")
      })
      .catch(e => {
        console.log(e)
        // setError(e.graphQLErrors[0].message)
      })
  }

  return (
    <div>
      <Head style={{ paddingTop: "1.5rem" }} header>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Hover style={{ padding: "0rem 0.7rem" }}>
            <FiEdit style={{ fontSize: "1.75em" }} />
          </Hover>

          <Section>Edit Meetup Group </Section>
        </div>

        <Tab>
          <TabColumn
            onClick={() => setActiveColumn("forms")}
            active={ActiveColumn === "forms"}
          >
            Details
          </TabColumn>

          <TabColumn
            onClick={() => setActiveColumn("media")}
            active={ActiveColumn === "media"}
          >
            Media Assets
          </TabColumn>

          <TabColumn
            onClick={() => setActiveColumn("sponsors")}
            active={ActiveColumn === "sponsors"}
          >
            Event Sponsors
          </TabColumn>
        </Tab>
      </Head>

      <CSSTransition timeout={300} unmountOnExit in={ActiveColumn === "forms"}>
        <Body>
          <Body>
            {first.map(({ id, label, placeholder, textarea }) => {
              return (
                <Field
                  key={id}
                  id={label}
                  name={label}
                  type={"text"}
                  textarea={textarea}
                  value={label == "Event Name" ? Name : Alias}
                  onChange={e => handleChange(e, label)}
                  placeholder={label == "Event Name" ? name : alias}
                />
              )
            })}

            {third.map(({ id, label, placeholder, textarea }) => {
              return (
                <Field
                  key={id}
                  id={label}
                  name={label}
                  type={"text"}
                  textarea={textarea}
                  onChange={e => handleChange(e, label)}
                  value={label == "Event Name" ? Name : Alias}
                  placeholder={label == "Event Name" ? name : alias}
                />
              )
            })}

            {second.map(({ id, label, limit, placeholder, textarea }) => {
              return (
                <Field
                  key={id}
                  id={label}
                  limit={limit}
                  name={label}
                  type={"text"}
                  textarea={textarea}
                  value={label === "Event Description" ? Description : Summary}
                  onChange={e => handleChange(e, label)}
                  placeholder={
                    label === "Event Description" ? description : summary
                  }
                />
              )
            })}

            <Body>
              <Section>Media Links</Section>
              <br />

              <InputGrid>
                <CInput>
                  <Hover
                    style={{
                      padding: "0.6rem 0.5rem",
                      background: "#fbfbfb",
                      color: "#0e2f5a",
                      borderRadius: "5px 0px 0px 5px",
                    }}
                  >
                    <FiTwitter style={{ fontSize: "1.7rem" }} />{" "}
                  </Hover>

                  <input
                    type="url"
                    value={TWMediaLinks}
                    onChange={e => addTWMediaLink(e.target.value)}
                    placeholder="Twitter profile url"
                  />
                </CInput>

                <CInput>
                  <Hover
                    style={{
                      padding: "0.6rem 0.5rem",
                      background: "#fbfbfb",
                      color: "#0e2f5a",
                      borderRadius: "5px 0px 0px 5px",
                    }}
                  >
                    <FiFacebook style={{ fontSize: "1.7rem" }} />
                  </Hover>

                  <input
                    type="url"
                    value={FBMediaLinks}
                    onChange={e => addFBMediaLink(e.target.value)}
                    placeholder="Facebook profile url"
                  />
                </CInput>

                <CInput>
                  <Hover
                    style={{
                      padding: "0.6rem 0.5rem",
                      background: "#fbfbfb",
                      color: "#0e2f5a",
                      borderRadius: "5px 0px 0px 5px",
                    }}
                  >
                    <FiInstagram style={{ fontSize: "1.7rem" }} />
                  </Hover>

                  <input
                    type="url"
                    value={INSMediaLinks}
                    onChange={e => addINSMediaLink(e.target.value)}
                    placeholder="Instagram profile url"
                  />
                </CInput>
              </InputGrid>

              <br />
            </Body>
          </Body>

          <Flex justifyCenter>
            <Button onClick={() => SubmitData()} long>
              Update Event
            </Button>
          </Flex>
        </Body>
      </CSSTransition>

      <CSSTransition timeout={300} unmountOnExit in={ActiveColumn === "media"}>
        <Media eventId={id} />
      </CSSTransition>

      <CSSTransition
        timeout={300}
        unmountOnExit
        in={ActiveColumn === "sponsors"}
      >
        <SponsorsControl
          sponsors={[{ id: 1, name: "Facebook Open Source" }]}
          eventId={id}
        />
      </CSSTransition>
      <br />
    </div>
  )
}

export default inject("ModalStore")(observer(EditEvent))
