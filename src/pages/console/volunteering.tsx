import React, { useState } from 'react'
import Flex from 'styled-flex-component'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { FiSearch, FiPlus } from 'react-icons/fi'

import { EventPlaceholder, EmptyData } from '../../components/placeholders/'
import { Bounce, Items, Button, Contain, Switch, SwitchBtn, Title } from '../../styles/style'

import EventCard from '../../components/cards/EventCard'

const Organizing = (props): JSX.Element => {
  const { activeSection, eventVolunteered, data } = props

  return (
    <CSSTransition
      timeout={900}
      unmountOnExit
      in={activeSection === 'volunteering'}
      classNames={'slider'}
    >
      <div>
        <Flex justifyBetween>
          <Title small> Volunteering : </Title>

          <Link to="/list" style={{ textDecoration: 'none' }}>
            <Button transparent>
              <Flex>
                <div style={{ paddingRight: '15px' }}>
                  <FiSearch style={{ fontSize: '1.55rem' }} />{' '}
                </div>
                Find Events Nearby
              </Flex>
            </Button>
          </Link>
        </Flex>
        <br />

        <Items>
          {/* I would use the Coalesc operator ( ?? ) here...   */}

          {eventVolunteered == null ? (
            <EmptyData
              message="You currently have not volunteered for any event."
              link="https://my-event.netlify.com"
              feature="Community Support"
            />
          ) : (
            eventVolunteered.map(
              ({ event, role, id, name, eventType, createdBy, duration, text, meetupGroups }) => {
                return (
                  <Bounce key={id}>
                    <EventCard
                      role={role}
                      volunteerScreen={true}
                      event={event}
                      screen="Volunteering"
                      type={event[0].eventType}
                      createdBy={createdBy}
                      meetupGroups={meetupGroups !== null && 0}
                      id={data.user.volunteering[0].event[0].author_id}
                      venue={data.user.volunteering[0].event[0].venue}
                      showAprrovalStatus={true}
                      approvalStatus={'PENDING'}
                      location={true}
                      summary={duration}
                    />
                  </Bounce>
                )
              }
            )
          )}
        </Items>
      </div>
    </CSSTransition>
  )
}

export default Organizing
