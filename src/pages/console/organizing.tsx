import React, { useState } from 'react'
import Flex from 'styled-flex-component'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { FiX } from 'react-icons/fi'
import styled from 'styled-components'
import { Modal } from 'react-bootstrap'
import { FiSearch, FiPlus } from 'react-icons/fi'

import { EventPlaceholder } from '../../components/placeholders/'
import { Bounce, Items, Button, Contain, Text, Title, Section, Hover } from '../../styles/style'

import EventCard from '../../components/cards/EventCard'
import CreateEventModal from '../forms/create-event-modal'
import { StreamCard } from '../../components/cards'

const Hov = styled(Hover)`
  width: 40px;
  height: 40px;
  transition: all 400ms;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  align-items: center;
  &: hover {
    background: #22263d;
    color: #fff;
  }
`

const Organizing = (props): JSX.Element => {
  const { activeSection, events, width } = props
  const [Visibility, setVisibility] = useState<boolean>(false)
  const [currentItems, setCurrentItems] = useState<string>('Streams')

  return (
    <div>
      <Modal
        show={Visibility}
        style={{ marginTop: '2rem' }}
        onHide={() => {
          setVisibility(false)
        }}
        size="xl"
      >
        <div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '0.5rem 2rem'
            }}
          >
            <Section style={{ marginTop: '10px', color: '#22263d' }}>Launch New Event</Section>

            <Hov onClick={() => setVisibility(false)}>
              <FiX style={{ fontSize: '1.8rem' }} />
            </Hov>
          </div>
          <hr />
          <CreateEventModal />
        </div>
      </Modal>

      <CSSTransition
        timeout={400}
        classNames={'slider'}
        unmountOnExit
        in={activeSection === 'organizing'}
        onEnter={() => {}}
      >
        <div>
          <Flex justifyBetween>
            {width >= 1000 ? (
              <Button onClick={() => setVisibility(true)}>
                <Flex>
                  <div style={{ paddingRight: '15px' }}>
                    <FiPlus style={{ fontSize: '1.55rem' }} />{' '}
                  </div>{' '}
                  Create Event{' '}
                </Flex>
              </Button>
            ) : (
              <Link to="/create/all">
                <Button>
                  <Flex>
                    <div style={{ paddingRight: '15px' }}>
                      <FiPlus style={{ fontSize: '1.55rem' }} />{' '}
                    </div>{' '}
                    Create Event{' '}
                  </Flex>
                </Button>
              </Link>
            )}

            <select onChange={e => setCurrentItems(e.target.value)} value={currentItems}>
              <option> Conferences </option>
              <option> Streams </option>
            </select>
          </Flex>

          <br />

          {currentItems === 'Conferences' && (
            <Items>
              {/* I would use the Coalesc operator ( ?? ) here...   */}
              {events == null ? (
                <EventPlaceholder />
              ) : (
                events.map(
                  ({
                    id,
                    dateCreated,
                    eventType,
                    name,
                    summary,
                    isVirtual,
                    createdBy,
                    venue,
                    meetupGroups
                  }) => {
                    return (
                      <Bounce>
                        <EventCard
                          id={id}
                          screen="organizing"
                          name={name}
                          type={eventType}
                          createdBy={createdBy}
                          created={dateCreated}
                          isVirtual={isVirtual}
                          meetupGroups={meetupGroups === null ? 0 : meetupGroups.length}
                          venue={venue}
                          location={true}
                          summary={summary}
                        />
                      </Bounce>
                    )
                  }
                )
              )}
            </Items>
          )}

          {currentItems === 'Streams' && <StreamCard />}
        </div>
      </CSSTransition>
      <br />
      <br />
    </div>
  )
}

export default Organizing
