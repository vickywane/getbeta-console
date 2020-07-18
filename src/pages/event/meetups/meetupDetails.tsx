import React, { useEffect } from 'react'
import Flex from 'styled-flex-component'
import { Image } from 'react-bootstrap'
import { FiSmartphone, FiLink2, FiInstagram, FiTwitter, FiEdit, FiFacebook } from 'react-icons/fi'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { IoIosArrowDropright } from 'react-icons/io'

import {
  Hover,
  Contain,
  Text,
  Body,
  Title,
  Button,
  BigTitle,
  MediaLink
} from '../../../styles/style'
import { UserContext } from '../../../state/context/contextState'
import WelcomeMeetupGroups from './welcomeMeetupGroups'
import useWindowWidth from '../../../hook_style'

const HoverCircle = styled(Hover)`
  padding: 1.2rem 1.5rem;
  margin: 0.2rem 0.7rem;
  border-radius: 50%;
  transition: all 350ms;
  border: 1px solid grey;
  &: hover {
    background: #fbfbfb;
  }
`

const MeetupDetails = (props): JSX.Element => {
  const Hooks = useWindowWidth()

  const {
    openChecklist,
    WelcomeMeetupGroupsModal,
    closeWelcomeMeetupGroupsModal
  } = props.ModalStore
  const { currentWindowSize, data, permission, dispatch } = props
  const { name, summary, website, meetupGroups, id, mediaLinks, settings } = data.event
  const { showEventDetails } = props.state

  const [ScrollCount, addScrollCount] = React.useState<number>(null)
  const [currentItem, setCurrentItem] = React.useState<number>(null)

  const addCount = () => {
    addScrollCount(ScrollCount => ScrollCount + 1)
  }

  useEffect(() => {
    window.addEventListener('wheel', () => {
      addCount()
    })

    setInterval(() => {
      setCurrentItem(currentItem => (currentItem > meetupGroups.length - 1 ? 0 : currentItem + 1))
    }, 3500)

    return window.removeEventListener('wheel', () => {
      addCount()
    })
  }, [])

  const ImageDiv = styled.div`
    border-right: 1px solid grey;
    transition: all 400ms;
    width: 25rem;
    display: flex;
    flex-direction: column;
    filter: grayscale(80%) blur(0.7px);
    align-items: center;
    padding-top: 3rem;
    div {
      opacity: 0;
      transition: all 400ms;
    }
    &: hover {
      width: 25rem;
      filter: grayscale(0%) blur(0px);
      div {
        opacity: 1;
      }
    }
  `

  return (
    <div>
      <WelcomeMeetupGroups
        eventId={id}
        data={settings[0]}
        show={WelcomeMeetupGroupsModal}
        close={closeWelcomeMeetupGroupsModal}
      />

      {showEventDetails ? (
        <div
          style={{
            overflow: 'auto',
            height: '43vh',
            display: 'flex'
          }}
        >
          {meetupGroups === null
            ? null
            : meetupGroups.map(({ id, summary, alias, location }) => {
                return (
                  <ImageDiv currentItem={currentItem}>
                    <Link style={{ textDecoration: 'none' }} to={`/meetup/${id}`}>
                      <Title pointer small>
                        {alias}
                      </Title>
                      {currentItem}
                    </Link>

                    <div>
                      <Text small center>
                        {summary}
                      </Text>
                    </div>
                  </ImageDiv>
                )
              })}

          {meetupGroups === null ? null : (
            <Hover
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0.5rem 1.5rem',
                textAlign: 'right'
              }}
            >
              {meetupGroups.length > 4 ? (
                <IoIosArrowDropright style={{ fontSize: '3rem' }} />
              ) : null}
            </Hover>
          )}

          {ScrollCount < 2 && (
            <Body style={{ position: 'absolute', marginTop: '11rem' }}>
              <div>
                {Hooks <= 800 && (
                  <div>
                    {permission && (
                      <div style={{ textAlign: 'right', padding: '1rem 1rem' }}>
                        <Hover onClick={() => dispatch({ type: 'SWITCH_EDIT' })}>
                          <FiEdit style={{ fontSize: '2rem' }} />
                        </Hover>
                      </div>
                    )}
                  </div>
                )}

                <UserContext.Consumer>
                  {user => {
                    return (
                      <div
                        style={{
                          display: 'flex',
                          overflow: 'auto',
                          justifyContent: 'space-between '
                        }}
                      >
                        <Flex column>
                          <Flex>
                            {currentWindowSize >= 700 ? (
                              <Image
                                alt="profile"
                                src={require('../../../assets/images/developer.png')}
                                style={{
                                  width: '7em',
                                  height: '11vh',
                                  margin: '0rem 0rem'
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
                                      src={require('../../../assets/images/developer.png')}
                                      style={{
                                        width: '7em',
                                        height: '11vh',
                                        margin: '1rem 0rem'
                                      }}
                                      fluid
                                    />
                                  </Flex>
                                ) : null}
                                <Flex justifyCenter>
                                  <Flex>
                                    <BigTitle center bold>
                                      {name}
                                    </BigTitle>

                                    <Hover>
                                      <a
                                        style={{ textAlign: 'center' }}
                                        href={website}
                                        target="_blank"
                                      >
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
                              </Flex>
                            </div>
                          </Flex>
                        </Flex>

                        {currentWindowSize <= 700 ? (
                          <Flex column>
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
              </div>
            </Body>
          )}
        </div>
      ) : null}
    </div>
  )
}

export default inject('ModalStore')(observer(MeetupDetails))
