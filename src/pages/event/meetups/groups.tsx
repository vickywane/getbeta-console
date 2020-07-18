import React, { useState } from 'react'
import styled from 'styled-components'
import Flex from 'styled-flex-component'
import { CSSTransition } from 'react-transition-group'

import { EmptyData } from '../../../components/placeholders'
import MeetupGroupCard from '../../../components/cards/meetupGroupCard'
import CreateGroup from './createGroup'
import { Text, Title, Button, Items } from '../../../styles/style'

const List = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
`

const Groups = props => {
  const { id, meetupGroups } = props.data
  const [ActiveView, setActiveView] = useState<string>('list')

  return (
    <div style={{ margin: '1rem 1rem' }}>
      <br />

      {ActiveView !== 'create' && (
        <Flex justifyBetween>
          <Text color="grey" style={{ textAlign: 'right' }}>
            Showing {meetupGroups === null ? '0' : meetupGroups.length} items{' '}
          </Text>

          <Button
            onClick={() => {
              setActiveView('create')
            }}
          >
            Launch New Meetup Group
          </Button>
        </Flex>
      )}

      <br />

      <CSSTransition in={ActiveView === 'list'} timeout={300} unmountOnExit>
        <div>
          {meetupGroups === null ? (
            <EmptyData
              message={`This event currently has no launched **Meetup Group**. \n \n Meetup Groups are a way to manage groups of your event across multiple regions`}
              link="https://event.com"
              feature="Meetup Groups"
            />
          ) : (
            <Items>
              {meetupGroups.map(({ name, id, createdAt, location, summary }) => {
                return (
                  <MeetupGroupCard
                    name={name}
                    id={id}
                    createdAt={createdAt}
                    summary={summary}
                    location={location}
                  />
                )
              })}
            </Items>
          )}
        </div>
      </CSSTransition>

      <CSSTransition in={ActiveView === 'create'} timeout={300} unmountOnExit>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Title small>Create Meetup Group</Title>

            <Button
              onClick={() => {
                setActiveView('list')
              }}
            >
              Cancel
            </Button>
          </div>
          <br />
          <CreateGroup eventId={id} />
        </div>
      </CSSTransition>
    </div>
  )
}

export default Groups
