import React, { useState } from 'react'
import { inject, observer } from 'mobx-react'
import { useQuery } from '@apollo/react-hooks'
import styled from 'styled-components'
import { FiClock } from 'react-icons/fi'
import { IoIosAlarm } from 'react-icons/io'

import { EmptyData } from '../../components/placeholders'
import { CreateTaskModal, TaskDetailModal } from '../../components/modals/'
import { Text, Title, Contain, Button, List, Hover, Body } from '../../styles/style'
import { TEAM } from '../../data/queries'
import TeamDetails from './people/team.details'

const StyledList = styled(List)`
  padding: 1rem 1rem;
  li {
    border-left: 4px solid violet;
    margin: 2rem 0.5rem;
    flex-direction: column;
    box-shadow: 1px 2px 3px grey;
    padding: 0.7rem 1rem;
    div {
      display: flex;
      flex-direction: row;
    }
  }
`

const TagBody = styled.div`
  display: flex;
  overflow : auto
  li {
    border : 0px
    border-radius : 0px
    box-shadow : 0px 0px 0px grey;
    text-align : center
    padding: 0.2rem 1rem;
    color: #000;
    list-style: none;
    margin: 0rem 2rem;
  }
`

const RoundBtn = styled(Button)`
  border-radius: 30px;
  border: 0px;
  background: ${props => props.background};
`

const Team = (props): JSX.Element => {
  const {
    createTaskModal,
    closeCreateTaskModal,
    openCreateTaskModal,

    openTaskDetail
  } = props.ModalStore

  const { Notify } = props.PaneStore
  const { TeamId } = props

  const [TaskId, setTaskId] = useState<number>(null)

  const { data, loading, error } = useQuery(TEAM, {
    variables: { id: TeamId, name: '' }
  })

  if (error) {
    console.log(error)
    return <p> eror from team</p>
  }

  if (loading) {
    return <Text center> Loading .... </Text>
  }
  const { goal, name, createdBy, members, tasks, id, createdAt } = data.team
  const createdByName = createdBy[0].name

  const TicketBtn = props => {
    const { status } = props

    switch (status) {
      case 'IDLE':
        return <RoundBtn background="violet">Claim Ticket</RoundBtn>
        break

      case 'IN-PROGRESS':
        return <RoundBtn background="blue"> In Progress </RoundBtn>
        break

      case 'COMPLETED':
        return (
          <RoundBtn background="green" disabled={true}>
            Finished
          </RoundBtn>
        )
        break
      default:
        return (
          <RoundBtn background="green" disabled={true}>
            Finished
          </RoundBtn>
        )
    }
  }

  return (
    <div>
      <CreateTaskModal teamId={id} show={createTaskModal} close={closeCreateTaskModal} />
      <TaskDetailModal taskId={TaskId} />

      <TeamDetails
        name={name}
        createdAt={createdAt}
        goal={goal}
        members={members}
        createdByName={createdByName}
        openCreateTaskModal={openCreateTaskModal}
      />

      <Body>
        <StyledList>
          {tasks === null ? (
            <EmptyData
              message={`You currently do not have any task.  \n Tasks are a great way
                to manage what is being done by your event team.
              `}
              link={'.com'}
              feature="Event Support"
            />
          ) : (
            tasks.map(({ id, name, createdAt, category, status, createdBy }) => {
              return (
                <li key={id}>
                  <div style={{ justifyContent: 'space-between' }}>
                    <Title
                      small
                      onClick={() => {
                        setTaskId(id)
                        openTaskDetail()
                      }}
                      style={{ color: '#0e2f5a', cursor: 'pointer' }}
                    >
                      # {name}
                    </Title>

                    <TicketBtn status={status} />
                  </div>

                  <br />
                  <div style={{ justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex' }}>
                      <Hover style={{ padding: '0rem 0.5rem' }}>
                        <FiClock style={{ fontSize: '1.5rem' }} />
                      </Hover>
                      <Text center small>
                        Monday, 12, 2020
                      </Text>
                    </div>

                    <TagBody>
                      <li>{category}</li>
                    </TagBody>

                    <div style={{ display: 'flex', color: 'red' }}>
                      <div style={{ display: 'flex' }}>
                        <Hover style={{ padding: '0rem 0.5rem' }}>
                          <IoIosAlarm style={{ fontSize: '1.5rem' }} />
                        </Hover>
                        <Text center small>
                          Deadline:{' '}
                        </Text>
                      </div>
                      <Text style={{ padding: '0rem 0.7rem' }} center small color="#000">
                        5 Days{' '}
                      </Text>
                    </div>
                  </div>
                </li>
              )
            })
          )}
        </StyledList>
      </Body>
    </div>
  )
}

export default inject('ModalStore', 'PaneStore')(observer(Team))
