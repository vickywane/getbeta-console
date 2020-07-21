import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { FiX, FiClock } from 'react-icons/fi'
import { useMutation, useQuery } from '@apollo/react-hooks'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'

import { Loader } from '../'
import Fields from '../../pages/forms/fields'
import { VOLUNTEER } from '../../data/mutations'
import { GET_EVENT } from '../../data/queries'
import { Hover, Head, Section, Body, Text, Button, Title } from '../../styles/style'

/* TODO: THIS MODAL CONTENT GETS FIRED EVEN WHEN CLOSED
          CURRENTLY EVENT ID WHICH IS USED TO FECTH EVENT DETAILS AS PARAM
          GETS PASSED AS A PROP WHEN CLICKED FROM THE PARENT COMPONENT

          WALKAROUND IS TO AVOID DESTRUCTRING ANY VALUE SINCE THEY ARE A BIT LAZY LOADED
          AND IGNORE APOLLO ERROR
*/

const Data = [
  {
    id: 1,
    name: 'Photographer'
  },
  {
    id: 2,
    name: 'Dancer'
  },
  {
    id: 3,
    name: 'Attendant'
  },
  {
    id: 4,
    name: 'M-c'
  },
  {
    id: 5,
    name: 'VideoMan'
  },
  {
    id: 4,
    name: 'M-c'
  },
  {
    id: 5,
    name: 'VideoMan'
  },
  {
    id: 4,
    name: 'M-c'
  },
  {
    id: 5,
    name: 'VideoMan'
  },
  {
    id: 4,
    name: 'M-c'
  },
  {
    id: 5,
    name: 'VideoMan'
  }
]
const Grid = styled.div`
  display: grid;
  grid-gap: 1.5rem 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
`

const Guidelines = styled.div`
  padding-left: 60px;
  li {
    list-style: none;
    margin: 0.3rem 0rem;
  }
`

const Volunteer = props => {
  const { showVolunteerModal, closeVolunteerModal, EventID } = props

  const [applied, setApplied] = useState<boolean>(false)
  const [Description, setDescription] = useState('')
  const [Role, setRole] = useState('')
  const [WordCount, setWordCount] = useState(0)
  const [createVolunteer, { error }] = useMutation(VOLUNTEER)

  const [Stage, setStage] = useState('first')

  const { data, loading } = useQuery(GET_EVENT, {
    variables: {
      id: EventID,
      name: ''
    }
  })

  const Box = styled.div`
    padding: 0.7rem 0.3rem;
    border-radius: 5px;
    transition: all 300ms;
    font-weight: 600;
    cursor: pointer;
    border: 1px solid grey;
    text-align: center;
    box-shadow: ${props.role === Role ? '0px 2px 6px #326690' : null};
    &: hover {
      border: 1px solid #326690;
      box-shadow: 0px 2px 6px #326690;
    }
  `

  const Submit = () => {
    setApplied(true)
    // createVolunteer({
    //   variables: {
    //     UserID: localStorage.getItem("user_id"),
    //     EventID: EventID,
    //     Role: Role,
    //     Duration: "2 hours",
    //     Proposal: Description,
    //   },
    // })
    //   .then(() => alert("created"))
    //   .catch(e => console.log(e))
  }

  const handleChange = (value: string, label: string) => {
    setDescription(value)
    setWordCount(WordCount + 1)
  }

  if (loading) {
    return <Loader type="loading" />
  }

  const name = showVolunteerModal ? data.event.name : null

  return (
    <Modal
      size="xl"
      style={{ marginTop: '3rem' }}
      onHide={() => closeVolunteerModal()}
      show={showVolunteerModal} //showVolunteerModal
    >
      <Head>
        <Section> Volunteer for {name}</Section>

        <Hover onClick={() => closeVolunteerModal()}>
          <FiX style={{ fontSize: '1.75em' }} />
        </Hover>
      </Head>

      <CSSTransition timeout={300} in={Stage !== 'first' && !applied} unmountOnExit>
        <div>
          <div style={{ display: 'flex', justifyContent: 'center', margin: '0.5rem 0rem' }}>
            <Text style={{ padding: '0.5rem 0rem' }}>{Stage} </Text>
          </div>
          <hr />
        </div>
      </CSSTransition>

      <CSSTransition timeout={300} in={Stage === 'first'} unmountOnExit>
        <Body style={{ background: '#fff' }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ display: 'flex' }}>
              <Hover style={{ margin: '0rem 0.7rem' }}>
                <FiClock style={{ fontSize: '1.6rem' }} />
              </Hover>
              <Text>15 Minutes </Text>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <img
              style={{ height: '150px', width: '200px' }}
              alt={'Event Volunteers'}
              src={require('../../assets/ssvg/sample.svg')}
            />
          </div>
          <Title center small>
            {' '}
            Volunteers For Concatenate Conference Africa, 2020{' '}
          </Title>
          <Text center>
            {' '}
            We are happy to see you apply to join the <b>
              {' '}
              Concatenate Conference Africa, 2020{' '}
            </b>{' '}
            as a Volunteer.{' '}
          </Text>

          <Guidelines>
            <Text> Volunteer Guidelines; </Text>
            <li>
              <Text small>Some guideline for applying volunteers to read.</Text>
            </li>
            <li>
              <Text small>Some guideline for applying volunteers to read.</Text>
            </li>
            <li>
              <Text small>Some guideline for applying volunteers to read.</Text>
            </li>
            <li>
              <Text small>Some guideline for applying volunteers to read.</Text>
            </li>
          </Guidelines>

          <div style={{ textAlign: 'right' }}>
            <Button onClick={() => setStage('Volunteer Role Details')} center>
              {' '}
              Start Volunteer Application{' '}
            </Button>
          </div>
          <br />

          <hr />
          <Text center small color={'grey'}>
            {' '}
            Learn More About <a href={'/'}> Community Support </a> on Oasis.{' '}
          </Text>
        </Body>
      </CSSTransition>

      <CSSTransition timeout={300} in={Stage === 'Volunteer Role Details'} unmountOnExit>
        <Body>
          <Text> What role would you like to volunteer for ? </Text>
          <Text color={'grey'} small center>
            {' '}
            Select all interested roles{' '}
          </Text>

          <div style={{ border: '1px solid grey', padding: '0.7rem 1rem' }}>
            <Text small> Roles : </Text>

            <Grid>
              {Data.map(({ id, name }) => {
                return (
                  <Box role={Role} key={id} onClick={() => setRole(name)}>
                    {name}
                  </Box>
                )
              })}
            </Grid>
          </div>
          <br />
          <Text>
            Selected Role: <b> {Role}</b>
          </Text>
          <hr />
          <br />
          <Text> Pick a time slot </Text>
          <hr />

          <br />
          <div style={{ textAlign: 'right' }}>
            <Button onClick={() => setStage('Personal Details')} center>
              {' '}
              Fill Open Roles{' '}
            </Button>
          </div>
        </Body>
      </CSSTransition>

      <CSSTransition timeout={300} in={Stage === 'Personal Details'} unmountOnExit>
        <Body style={{ background: '#fff' }}>
          {!applied ? (
            <div>
              <Fields
                id="Description"
                value={Description}
                placeholder="Tell us about yourself"
                name={`A clear description about yourself.`}
                type={'text'}
                textarea={true}
                onChange={(e: string) => handleChange(e, 'Description')}
              />

              <Fields
                id="work-place"
                value={Description}
                placeholder="Where do you currently work"
                name={`Work Experience`}
                type={'text'}
                textarea={false}
                onChange={(e: string) => handleChange(e, 'Description')}
              />

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Text> Is this your first time volunteering for an event ?</Text>

                <div style={{ display: 'flex' }}>
                  <div style={{ margin: '0rem 0.7rem', display: 'flex' }}>
                    <Text> Yes </Text>
                  </div>

                  <div style={{ margin: '0rem 0.7rem', display: 'flex' }}>
                    <Text> No </Text>
                  </div>
                </div>
              </div>
              <br />
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button onClick={() => setStage('Volunteer Role Details')}> Back </Button>
                <Button onClick={() => Submit()} center>
                  {' '}
                  Complete My Application{' '}
                </Button>
              </div>
            </div>
          ) : (
            <Body>
              <br />
              <div style={{ textAlign: 'center' }}>
                <img
                  style={{ height: '150px', width: '200px' }}
                  alt={'Event Volunteers'}
                  src={require('../../assets/ssvg/sample.svg')}
                />
              </div>
              <br />
              <Text small center>
                {' '}
                Your application to volunteer for the Concatenate Conference has been submitted to
                the event organizers.
              </Text>
              <Text center>
                {' '}
                Watch out for a response on your application from the organizing team.{' '}
              </Text>
              <br />

              <hr />
              <Text center small color={'grey'}>
                {' '}
                Learn More About <a href={'/'}> Community Support </a> on Oasis.{' '}
              </Text>
            </Body>
          )}
        </Body>
      </CSSTransition>
    </Modal>
  )
}
export default Volunteer
