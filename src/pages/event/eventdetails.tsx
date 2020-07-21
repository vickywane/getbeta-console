import React from 'react'
import Flex from 'styled-flex-component'
import { Image } from 'react-bootstrap'
import {
  FiCalendar,
  FiSmartphone,
  FiCast,
  FiLink2,
  FiInstagram,
  FiTwitter,
  FiEdit,
  FiFacebook
} from 'react-icons/fi'
import { IoMdRocket } from 'react-icons/io'
import { GoLocation } from 'react-icons/go'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Hover, Text, Title, MediaLink, Button, BigTitle, HoverCircle } from '../../styles/style'
import { UserContext } from '../../state/context/contextState'
import TestImg from '../../assets/images/3.jpg'

const Container = styled.div`
    background-image: url(${props => props.img});
    background-size : cover;
    width : 100%;
    height: 45vh;
    position: relative;
    span {
      color: #fff
      bottom : 0;
      padding: 0rem 2rem;
      width : 100%;
      height: 45vh;
      position: absolute;
      background: linear-gradient(to top,#1a1e43ed, transparent) ;
    }
   `

const EventDetails = (props): JSX.Element => {
  const { openChecklist, openEventLaunch } = props.ModalStore
  const {
    currentWindowSize,
    data,
    meetupGroupLength,
    next,
    eventType,
    permission,
    dispatch
  } = props
  const { name, summary, venue, website, mediaLinks, id, dateCreated, isVirtual } = data.event
  const { showEventDetails } = props.state

  return showEventDetails ? (
    <Container
      style={{
        position: 'relative',
        transition: 'all 300ms'
      }}
      img={TestImg}
      grey
    >
      <span style={{ transition: 'all 500ms' }}>
        {currentWindowSize >= 1000 && permission ? (
          <div style={{ textAlign: 'right', padding: '1rem 1rem' }}>
            <Hover onClick={() => dispatch({ type: 'SWITCH_EDIT' })}>
              <FiEdit style={{ fontSize: '2rem' }} />
            </Hover>
          </div>
        ) : null}

        <br />
        <br />
        <UserContext.Consumer>
          {user => {
            return (
              <div
                style={{
                  transition: 'all 500ms',
                  display: 'flex',
                  justifyContent: 'space-between '
                }}
              >
                <Flex column>
                  <Flex>
                    {currentWindowSize >= 700 ? (
                      <Image
                        alt="event"
                        src={require('../../assets/images/developer.png')}
                        style={{
                          width: '110px',
                          height: '110px',
                          margin: '0.5rem 0rem',
                          borderRadius: '50%'
                        }}
                        fluid
                      />
                    ) : null}
                    <div style={{ padding: '0.2rem 1rem' }}>
                      <Flex column>
                        {currentWindowSize <= 700 ? (
                          <Flex justifyCenter>
                            <Image
                              alt="profile"
                              src={require('../../assets/images/developer.png')}
                              style={{
                                width: '100px',
                                height: '100px',
                                margin: '0.5rem 0rem'
                              }}
                              fluid
                            />
                          </Flex>
                        ) : null}
                        <Flex justifyCenter>
                          <Flex>
                            <BigTitle style={{ color: '#fff' }} center bold>
                              {name}
                            </BigTitle>

                            <Hover>
                              <a style={{ textAlign: 'center' }} href={website} target="_blank">
                                <FiLink2 style={{ fontSize: '1.8rem' }} />
                              </a>
                            </Hover>
                          </Flex>
                        </Flex>

                        <Text center> {summary} </Text>

                        <MediaLink>
                          {mediaLinks !== null && mediaLinks[0] !== '' && (
                            <li>
                              <a href={`${mediaLinks[0]}`} target="_blank">
                                <HoverCircle hoverColor="red">
                                  <FiInstagram style={{ fontSize: '1.8rem' }} />
                                </HoverCircle>
                              </a>
                            </li>
                          )}

                          {mediaLinks !== null && mediaLinks[1] !== '' && (
                            <li>
                              <a href={`${mediaLinks[1]}`} target="_blank">
                                <HoverCircle hoverColor="blue">
                                  <FiTwitter style={{ fontSize: '1.8rem' }} />
                                </HoverCircle>
                              </a>
                            </li>
                          )}

                          {mediaLinks !== null && mediaLinks[2] !== '' && (
                            <li>
                              <a href={`${mediaLinks[2]}`} target="_blank">
                                <HoverCircle>
                                  <FiFacebook style={{ fontSize: '1.8rem' }} />
                                </HoverCircle>
                              </a>
                            </li>
                          )}
                        </MediaLink>

                        <br />
                        <br />
                      </Flex>
                    </div>
                  </Flex>
                  <br />
                </Flex>

                {currentWindowSize <= 700 ? (
                  <Flex column>
                    <br />
                    <br />
                    <div style={{ textAlign: 'right' }}>
                      <Link to="/mobile">
                        <Hover
                          onClick={() => {
                            openChecklist()
                          }}
                        >
                          <FiSmartphone style={{ fontSize: '2rem' }} />
                        </Hover>
                      </Link>
                      <br />
                    </div>
                  </Flex>
                ) : null}
              </div>
            )
          }}
        </UserContext.Consumer>

        <Flex justifyBetween>
          <Flex>
            {isVirtual ? (
              <FiCast style={{ fontSize: '1.6em' }} />
            ) : (
              <GoLocation style={{ fontSize: '1.6em' }} />
            )}

            <Text small style={{ paddingLeft: '7px' }}>
              {meetupGroupLength > 1 ? 'Global' : venue}
            </Text>
          </Flex>

          {eventType === 'Meetup' ? (
            meetupGroupLength > 1 ? null : (
              <Flex column>
                <Text color={'white'}> Next Event : </Text>
                <Flex>
                  <FiCalendar style={{ fontSize: '1.5em' }} />
                  <Text small style={{ paddingLeft: '7px' }}>
                    {dateCreated}
                  </Text>
                </Flex>
              </Flex>
            )
          ) : (
            <Flex column>
              <Text style={{ color: 'grey' }}> {next} </Text>
              <Flex>
                <FiCalendar style={{ fontSize: '1.5em' }} />
                <Text small style={{ paddingLeft: '7px' }}>
                  {dateCreated}
                </Text>
              </Flex>
            </Flex>
          )}
        </Flex>
      </span>
    </Container>
  ) : null
}

export default inject('ModalStore')(observer(EventDetails))
