import React, { useState } from 'react'
import Flex from 'styled-flex-component'
import { inject, observer } from 'mobx-react'
import { FiMoreVertical, FiLock, FiTrash2, FiCalendar } from 'react-icons/fi'
import { CSSTransition } from 'react-transition-group'
import styled from 'styled-components'
import { IoIosListBox } from 'react-icons/io'
import { FiArrowLeft, FiFilter } from 'react-icons/fi'
import { useMutation, useSubscription } from '@apollo/react-hooks'

import useWindowWidth from '../../hook_style'
import TeamInstruction from './people/teamInstructionModal'
import Team from './team'
import { Text, Button, Body, TabColumn, Tab, Title, Hover, Head, Section } from '../../styles/style'
import { TeamModal } from '../../components/modals/'
import { DELETE_TEAM } from '../../data/mutations'
import { TEAM_SUBSCRIPTION } from '../../data/subscriptions'
import { EmptyData } from '../../components/placeholders/'

import Volunteer from './people/volunteer.list'
import Attendees from './people/attendees.list'
import { TeamsOnboard } from './user-onboard'

const SmallIcnCircle = styled(Hover)`
  padding: 0.3rem 0.5rem;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: transparent;
  color: ${props => (props.bckg ? props.bckg : '#0e2f5a')};
  transition: all 300ms;
  &: hover {
    background: ${props => props.bckg};
    color: #fff;
  }
`

const List = styled.li`
  box-shadow: 0px 2px 3px grey;
  list-style: none;
  display: flex;
  margin: 2rem 0.4rem;
  padding: 0.7rem 1rem;
  flex-direction: column;
  border-left: 8px solid ${props => props.borderColor};
  border-radius: 7px;
  div {
    display: flex;
    flex-direction: row;
    img {
      height: 50px;
      width: 50px;
      margin: 0rem 0.8rem;
    }
  }
`

const TeamList = (props): JSX.Element => {
  const { openTeamModal, closeTeamModal } = props.ModalStore
  const { teams, id } = props.data

  const [ActiveView, setView] = useState<string>('Overview') // Overview
  const [TeamId, setTeamId] = useState<number>(null)
  const [TeamName, setTeamName] = useState<string>('Overview')
  const [TabView, setTabView] = useState<string>('Teams')
  const [Volunteers, showVolunteers] = useState<boolean>(false)
  const [Onboarded, Onboard] = useState(false)

  const Width = useWindowWidth()

  const [deleteTeam, { loading }] = useMutation(DELETE_TEAM)
  // const { data, error } = useSubscription(TEAM_SUBSCRIPTION, {
  //   onSubscriptionComplete: () => {
  //     alert("ws complete")
  //   },
  //   onSubscriptionData: res => {
  //     alert(data)
  //   },
  // })

  const handleDelete = id => {
    deleteTeam({
      variables: { teamId: id }
    })
      .then(() => {})
      .catch(e => console.log(e))
  }

  return (
    <div>
      {Width <= 1200 && <TeamInstruction settings={props.data.settings[0]} eventId={id} />}

      {Width >= 1200 && (
        <CSSTransition timeout={300} unmountOnExit in={!Onboarded}>
          <TeamsOnboard />
        </CSSTransition>
      )}

      <CSSTransition in={Onboarded} timeout={300} unmountOnExit>
        <div>
          <Head style={{ padding: '1rem 0rem 1rem' }} header>
            {ActiveView !== 'Overview' ? (
              <Flex>
                <SmallIcnCircle
                  bckg="#0e2f5a"
                  onClick={() => {
                    setView('Overview')
                    setTabView('Teams')
                  }}
                >
                  <FiArrowLeft style={{ fontSize: '1.7rem' }} />
                </SmallIcnCircle>

                <Section
                  style={{
                    margin: '0.4rem 0.5rem'
                  }}
                >
                  {TeamName}
                </Section>
              </Flex>
            ) : (
              <Section
                style={{
                  padding: '0.4rem 0.2rem'
                }}
              >
                Team Support
              </Section>
            )}

            <Tab>
              <TabColumn onClick={() => setView('Teams')} active={TabView === 'Teams'}>
                Teams ( {teams === null ? 0 : teams.length} )
              </TabColumn>

              <TabColumn
                onClick={() => {
                  showVolunteers(true)
                  setView('Volunteers')
                  setTabView('Volunteers')
                }}
                active={TabView === 'Volunteers'}
              >
                Volunteers
              </TabColumn>

              <TabColumn
                onClick={() => {
                  showVolunteers(true)
                  setView('Attendees')
                  setTabView('Attendees')
                }}
                active={TabView === 'Attendees'}
              >
                Attendees
              </TabColumn>
            </Tab>
          </Head>

          <TeamModal EventID={id} close={closeTeamModal} type={'Team'} />

          <CSSTransition timeout={300} unmountOnExit in={ActiveView === 'Overview'}>
            <Body>
              {teams === null ? (
                <div>
                  <div style={{ textAlign: 'right' }}>
                    <Button
                      onClick={() => {
                        openTeamModal()
                      }}
                    >
                      Create Team
                    </Button>
                  </div>

                  <EmptyData
                    message={
                      'There are no created teams within this event. \n \n Use the **Create Team** to get started with creating your first team.'
                    }
                    link="https://event.com"
                    feature="Collaborations"
                  />
                </div>
              ) : (
                <Body>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button
                      onClick={() => {
                        openTeamModal()
                      }}
                    >
                      <Flex>
                        Filter Result
                        <Hover style={{ margin: '0rem 0.8rem' }}>
                          <FiFilter style={{ fontSize: '1.5rem' }} />
                        </Hover>
                      </Flex>
                    </Button>

                    <Button
                      onClick={() => {
                        openTeamModal()
                      }}
                    >
                      Create Team
                    </Button>
                  </div>

                  {teams.map(({ id, name, createdAt, goal, tasks }) => {
                    return (
                      <List key={id} borderColor={'#0e2f5a'}>
                        <div style={{ justifyContent: 'space-between' }}>
                          <div style={{ flexDirection: 'column' }}>
                            <Title
                              small
                              center
                              onClick={() => {
                                setTeamId(id)
                                setTeamName(name)
                                setView('Teams')
                              }}
                              bold
                              style={{
                                fontWeight: 'normal',
                                cursor: 'pointer'
                              }}
                            >
                              {name}
                            </Title>

                            <div style={{ color: 'grey' }}>
                              <Hover style={{ padding: '0rem 0.3rem' }}>
                                <FiCalendar style={{ fontSize: '1.7rem' }} />
                              </Hover>

                              <Text small>{createdAt}</Text>
                            </div>
                          </div>

                          <div>
                            {Width >= 1000 ? (
                              <div style={{ display: 'flex' }}>
                                <SmallIcnCircle bckg={'#000'} style={{ margin: '0rem 0.2rem' }}>
                                  <FiLock style={{ fontSize: '1.6rem' }} />
                                </SmallIcnCircle>

                                <SmallIcnCircle
                                  bckg={'#DC143C'}
                                  onClick={() => handleDelete(id)}
                                  style={{ margin: '0rem 0.2rem' }}
                                >
                                  <FiTrash2 style={{ fontSize: '1.6rem' }} />
                                </SmallIcnCircle>
                              </div>
                            ) : (
                              <Hover style={{ padding: '0rem 0.3rem' }}>
                                <FiMoreVertical style={{ fontSize: '1.7rem' }} />
                              </Hover>
                            )}
                          </div>
                        </div>

                        <Text small center>
                          {goal}
                        </Text>

                        <br />
                        <div style={{ justifyContent: 'space-between' }}>
                          <div
                            style={{
                              color: 'grey'
                            }}
                          >
                            <Hover>
                              <IoIosListBox style={{ fontSize: '1.8rem' }} />
                            </Hover>
                            <Text style={{ padding: '0rem 0.6rem' }} small>
                              {tasks !== null ? tasks.length : '0'} tasks Availabele
                            </Text>
                          </div>

                          <div>
                            <img alt="members" src={require('../../assets/images/developer.png')} />

                            <img alt="members" src={require('../../assets/images/developer.png')} />

                            <img alt="members" src={require('../../assets/images/developer.png')} />
                          </div>
                        </div>
                        {loading && (
                          <Text center small color="grey">
                            {' '}
                            Deleting item{' '}
                          </Text>
                        )}
                      </List>
                    )
                  })}
                </Body>
              )}
            </Body>
          </CSSTransition>

          <CSSTransition classNames={''} in={ActiveView === 'Teams'} timeout={300} unmountOnExit>
            <Team TeamId={TeamId} />
          </CSSTransition>

          <CSSTransition in={ActiveView === 'Volunteers'} timeout={300} unmountOnExit>
            <Volunteer eventId={id} />
          </CSSTransition>

          <CSSTransition in={ActiveView === 'Attendees'} timeout={300} unmountOnExit>
            <Attendees eventId={id} />
          </CSSTransition>
        </div>
      </CSSTransition>
    </div>
  )
}
export default inject('ModalStore')(observer(TeamList))
