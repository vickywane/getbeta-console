import React, { useState } from 'react'
import styled from 'styled-components'
import Flex from 'styled-flex-component'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useMutation } from '@apollo/react-hooks'
import { inject, observer } from 'mobx-react'
import { Redirect, Link } from 'react-router-dom'
import media from 'styled-media-query'
import { FiHome } from 'react-icons/fi'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'

import Existing from '../exsiting-event' // i no sabi spell ;)
import { CREATE_EVENT } from '../../../data/mutations'
import { CREATE_EVENT_INPUT } from '../formsData'
import { Header, Footer, Panes, Checkbox } from '../../../components/'
import Options from '../../imports/createEvent/eventoptions.import'
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
  Section
} from '../../../styles/style'
import Field from '../fields'

const UpGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 2rem 2rem;
  ${media.lessThan('huge')`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-gap: 2rem 1rem;
  `};
  ${media.lessThan('large')`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-gap: 2rem 1rem;
  `};
  ${media.lessThan('medium')`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 2rem 1rem;
  `};
`

const CustomCard = styled(Card)`
  width: 60rem;
  padding: 6rem;
  box-shadow: 0px 2px 4px #c0c0c0;
  text-align: center;
  margin: 8rem 0rem;
  ${media.lessThan('huge')`
    width: 45rem;
    padding: 3rem;
    margin: 5rem 0rem;
  `};
  ${media.lessThan('large')`
    width: 40rem;
    padding: 3rem;
  margin: 4rem 0rem;
  `};
  ${media.lessThan('medium')`
  width: 28rem;
  padding: 2rem;
  margin: 8rem 1rem;
  `};
`

const TypeBox = styled.div`
  padding: 0.5rem 1rem;
  border-radius : 5px
  box-shadow: ${props => (props.active ? '0px 2px 5px #2E73FA' : null)};
  border: ${props => (props.active ? '1px solid #2E73FA' : '1px solid #c0c0c0')};
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
  ${media.lessThan('large')`
  width: 28rem;
  `};
  ${media.lessThan('medium')`
  width: 30rem;
  `};
  ${media.lessThan('small')`
  width: 30rem;
  `};
`

const CInput = styled.div`
  display: flex;
  padding: 0rem;
  border: 1px solid #c0c0c0;
  border-radius: 5px;
  margin: 0rem 1.5rem;
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
  grid-gap: 1.5rem 2rem;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
`

const CreateeMeetup = (props): JSX.Element => {
  // page state
  const { Notify, closeNotify, importPane } = props.PaneStore
  const [ExistingEvent, createExistingEvent] = useState(false)
  const [Terms, agreeTerms] = useState<boolean>(false)
  const [Mail, ConfirmMail] = useState<boolean>(false)
  const [Error, setError] = useState<string>('')

  const handleCalendarChange = date => {}

  const [createEvent, { data }] = useMutation(CREATE_EVENT)

  // Collapsing all into one {k.v.p state} gives an uncontrolled form err .
  // Form data state
  const [Name, setName] = useState<string>('')
  const [Alias, setAlias] = useState<string>('')
  const [Description, setDescription] = useState<string>('')
  const [Website, setWebsite] = useState<string>('')
  const [Summary, setSummary] = useState<string>('')
  const [Venue, setVenue] = useState<string>('')
  const [Email, setEmail] = useState<string>('')
  const [EventType, setEventType] = useState<string>(props.type)
  const [Virtual, setVirtual] = useState<boolean>(false)
  const [EventDate, setEventDate] = useState<any>([])

  const [EventStartDate, setEventStartDate] = useState<any>(new Date())
  const [isSingleDate, setSingleDate] = useState<boolean>(false)
  const [EndDate, setEndDate] = useState(new Date())

  const [FBMediaLinks, addFBMediaLink] = useState<string>('')
  const [TWMediaLinks, addTWMediaLink] = useState<string>('')
  const [INSMediaLinks, addINSMediaLink] = useState<string>('')

  const SubmitData = () => {
    let MediaLinksArray = []
    MediaLinksArray.push(FBMediaLinks, TWMediaLinks, INSMediaLinks)

    createEvent({
      variables: {
        UserID: localStorage.getItem('user_id'),
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
        mediaLinks: MediaLinksArray,
        isArchived: false,
        isAcceptingTalks: false,
        isAcceptingVolunteers: false
      }
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
      case 'Event Name':
        setName(value)
        break
      case 'Event Alias':
        setAlias(value)
        break
      case 'Event Brand Page':
        setWebsite(value)
        break
      case 'Event Support Email':
        setEmail(value)
        break
      case 'Event Description':
        setDescription(value)
        break
      case 'Event Summary':
        setSummary(value)
        break
      case 'Event-Venue':
        setVenue(value)
        break
      case 'Streaming Location':
        setVenue(value)
        break
      default:
        console.log(label)
    }
  }

  const handleCheckBox = (value, label) => {
    switch (label) {
      case 'Terms':
        agreeTerms(!Terms)
        break
      case 'isVirtual':
        setVirtual(!Virtual)
        break
      case 'isSingleDate':
        setSingleDate(!isSingleDate)
        break
      default:
        break
    }
  }

  if (data) {
    setTimeout(() => {
      return <Redirect to="/console" message="Loggging in" />
    }, 20000)
  }

  const { first, second, third } = CREATE_EVENT_INPUT

  return (
    <div style={{ background: '#eeeeee' }}>
      {!ExistingEvent ? (
        <div>
          {!Mail ? (
            <div>
              {!importPane ? (
                <div>
                  <br />
                  <Panes type={'Event-Form-Import'} color="#401364" />
                </div>
              ) : null}
            </div>
          ) : null}
          <br />
          {!importPane ? (
            <div style={{ height: Mail && window.innerHeight - 177 }}>
              {!Mail ? (
                <Body>
                  <BigTitle center bold>
                    Create {Name.length < 7 ? 'Your Event' : Name}
                  </BigTitle>

                  <Text style={{ color: 'red' }}> {Error} </Text>
                  <br />

                  <Flex justifyBetween>
                    <Title small bold>
                      Details
                    </Title>

                    <Text>
                      <b
                        onClick={() => createExistingEvent(true)}
                        style={{
                          color: 'blue',
                          fontWeight: 500,
                          cursor: 'pointer'
                        }}
                      >
                        Launch
                      </b>{' '}
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
                                type={'text'}
                                textarea={textarea}
                                value={label == 'Event Name' ? Name : Alias}
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
                                type={'text'}
                                textarea={textarea}
                                value={label == 'Event Brand Page' ? Website : Email}
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
                          boxShadow: '0px 3px 4px grey',
                          padding: '0rem 1rem'
                        }}
                      >
                        <br />
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                          }}
                        >
                          <div style={{ display: 'flex', padding: '0rem 0.7rem' }}>
                            <Checkbox name="isVirtual" handleClick={handleCheckBox} />
                            <Label> Make Virtual Event </Label>
                          </div>
                        </div>
                        <Field
                          type="text"
                          name={!Virtual ? 'Event-Venue' : 'Streaming Location'}
                          id="Event-Venue"
                          onChange={e =>
                            handleChange(e, !Virtual ? 'Event-Venue' : 'Streaming Location')
                          }
                          value={Venue}
                          textarea={false}
                          placeholder={
                            !Virtual ? 'City , State , Country' : 'Office hq or Host Location'
                          }
                        />
                        <br />

                        <Flex column>
                          <Label small details>
                            Event Date
                          </Label>

                          <div style={{ display: 'flex', padding: '0rem 0.7rem' }}>
                            <Checkbox name="isSingleDate" handleClick={handleCheckBox} />
                            <Label
                              style={{
                                padding: '0rem 0.4rem',
                                margin: '0rem 0.3rem'
                              }}
                              small
                            >
                              Multiple Days
                            </Label>
                          </div>
                          <br />
                          {isSingleDate ? (
                            <div>
                              <div style={{ display: 'flex', margin: '0rem 1rem' }}>
                                <Text small color="grey">
                                  Start Date :
                                </Text>
                                <div style={{ padding: '0rem 1rem' }}>
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

                              <div style={{ display: 'flex', margin: '0rem 1rem' }}>
                                <Text small color="grey">
                                  End Date :
                                </Text>
                                <div style={{ padding: '0rem 1rem' }}>
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
                            <div style={{ display: 'flex', margin: '0rem 1rem' }}>
                              <Text small color="grey">
                                Date :
                              </Text>
                              <div style={{ padding: '0rem 1rem' }}>
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
                          boxShadow: '0px 3px 4px #c0c0c0',
                          padding: '0rem 1rem'
                        }}
                      >
                        <br />
                        <Flex column>
                          <Label small details hmtlFor="event-venue">
                            Event Type
                          </Label>
                          <Flex justifyCenter>
                            <TypeBox
                              active={EventType === 'Conference'}
                              onClick={() => setEventType('Conference')}
                            >
                              <Flex column>
                                <Section bold style={{ padding: '0rem 1rem' }}>
                                  Conference Event
                                </Section>
                                <Text small style={{ padding: '0rem 1rem' }}>
                                  Events that span a maximum of 5 days. With full conference
                                  features.
                                </Text>

                                <Text center small color="grey">
                                  <a
                                    href="/"
                                    style={{
                                      textDecoration: 'none',
                                      textAlign: 'center'
                                    }}
                                  >
                                    Learn More
                                  </a>{' '}
                                  on Oasis Conferences
                                </Text>
                              </Flex>
                            </TypeBox>
                          </Flex>
                          <br />

                          <Flex justifyCenter>
                            <TypeBox
                              active={EventType === 'Meetup'}
                              onClick={() => setEventType('Meetup')}
                            >
                              <Flex column>
                                <Section bold style={{ padding: '0rem 1rem' }}>
                                  Meetup Event
                                </Section>
                                <Text small style={{ padding: '0rem 1rem' }}>
                                  Events that are held at freqeunt intervals and can span a long
                                  time.
                                </Text>

                                <Text center small color="grey">
                                  <a
                                    href="/"
                                    style={{
                                      textDecoration: 'none',
                                      textAlign: 'center'
                                    }}
                                  >
                                    Learn More
                                  </a>
                                  on Oasis Meetups
                                </Text>
                              </Flex>
                            </TypeBox>
                          </Flex>
                        </Flex>

                        <br />

                        <Flex justifyCenter>
                          <TypeBox
                            active={EventType === 'Stream'}
                            onClick={() => setEventType('Stream')}
                          >
                            <Flex column>
                              <Section bold style={{ padding: '0rem 1rem' }}>
                                Stream Event
                              </Section>
                              <Text small style={{ padding: '0rem 1rem' }}>
                                Quick events and short lived events. Can be a personal live stream.
                              </Text>

                              <Text center small color="grey">
                                <a
                                  href="/"
                                  style={{
                                    textDecoration: 'none',
                                    textAlign: 'center'
                                  }}
                                >
                                  Learn More
                                </a>{' '}
                                on Oasis Conferences
                              </Text>
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
                      {second.map(({ id, label, limit, placeholder, textarea }) => {
                        return (
                          <div key={id}>
                            <br />
                            <Field
                              id={label}
                              limit={limit}
                              name={label}
                              type={'text'}
                              textarea={textarea}
                              value={label === 'Event Description' ? Description : Summary}
                              onChange={e => handleChange(e, label)}
                              placeholder={placeholder}
                            />
                          </div>
                        )
                      })}

                      <Label> Media Links </Label>
                      <InputGrid>
                        <CInput>
                          <Hover
                            style={{
                              padding: '0.6rem 0.5rem',
                              background: '#fbfbfb',
                              color: '#0e2f5a',
                              borderRadius: '5px 0px 0px 5px'
                            }}
                          >
                            <FiTwitter style={{ fontSize: '1.7rem' }} />{' '}
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
                              padding: '0.6rem 0.5rem',
                              background: '#fbfbfb',
                              color: '#0e2f5a',
                              borderRadius: '5px 0px 0px 5px'
                            }}
                          >
                            <FiFacebook style={{ fontSize: '1.7rem' }} />{' '}
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
                              padding: '0.6rem 0.5rem',
                              background: '#fbfbfb',
                              color: '#0e2f5a',
                              borderRadius: '5px 0px 0px 5px'
                            }}
                          >
                            <FiInstagram style={{ fontSize: '1.7rem' }} />{' '}
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
                      <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Checkbox handleClick={handleCheckBox} name="Terms" />

                        <Text style={{ padding: '0rem 1rem' }} color="grey" center>
                          I have read and i agree to Oasis's
                          <a href="/">Terms Of Use </a>.{' '}
                        </Text>
                      </div>
                      <br />
                    </Card>
                  </UpGrid>
                  <br />
                  <br />
                  <div style={{ textAlign: 'right' }}>
                    <Button
                      transparent={!Terms}
                      disabled={!Terms}
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
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  <CustomCard>
                    <Flex justifyCenter>
                      <img alt="email" style={{}} src={require('../../../assets/ssvg/Email.svg')} />
                    </Flex>

                    <br />
                    <Text>
                      An Email Confirmation link has been sent to <b> {Email} </b> to verify that an
                      active support email address is being used for <b> {Name} </b>.
                    </Text>
                    <br />
                    <br />
                    <Link to="/console">
                      <div
                        onClick={() => {
                          return <Redirect to="/console" message="rerouting in" />
                        }}
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          cursor: 'pointer'
                        }}
                      >
                        <Hover style={{ padding: '0rem 0.7rem' }}>
                          <FiHome style={{ fontSize: '1.7rem' }} />
                        </Hover>
                        <Text> Back To Console </Text>
                      </div>
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
    </div>
  )
}

export default inject('PaneStore')(observer(CreateeMeetup))
