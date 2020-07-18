import React from 'react'
import { FiCalendar, FiInstagram, FiTwitter, FiFacebook } from 'react-icons/fi'
import { IoIosRocket } from 'react-icons/io'
import { GoLocation } from 'react-icons/go'
import { inject, observer } from 'mobx-react'

import { Hover, Text, Title, HoverCircle, MediaLink } from '../../../../styles/style'

const MeetupGroupProfileDetails = (props): JSX.Element => {
  const { openMeetupEventLaunch } = props.ModalStore
  const { data } = props

  const { name, summary, createdAt } = data.getMeetupGroup
  const { showEventDetails } = props.state

  const { location } = data.getMeetupGroup

  return (
    <div style={{ transition: 'all 500ms' }}>
      {showEventDetails ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <div
            style={{
              borderRadius: '10px',
              boxShadow: '0px 3px 6px solid grey',
              background: '#0e2f5ac7',
              padding: '1.5rem 1rem',
              color: '#fff',
              width: '93%',
              margin: '1rem 1.5rem'
            }}
          >
            <br />

            <div
              style={{
                margin: '2rem 0rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <div style={{ margin: '0rem 1rem' }}>
                <Title center> {name} </Title>
                <Text small center>
                  {summary}
                </Text>
              </div>
              <img
                alt="Meetup display"
                style={{ height: '110px', width: '110px', borderRadius: '50%' }}
                src={require('../../../../assets/images/developer.png')}
              />
            </div>
            <br />

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex' }}>
                <Hover style={{ margin: '0rem 0.4rem' }}>
                  <GoLocation style={{ fontSize: '1.6rem' }} />
                </Hover>
                <Text small> {location} </Text>
              </div>

              <MediaLink>
                <li>
                  <a href={``} target="_blank">
                    <HoverCircle hoverColor="red">
                      <FiInstagram style={{ fontSize: '1.7rem' }} />
                    </HoverCircle>
                  </a>
                </li>

                <li>
                  <a href={``} target="_blank">
                    <HoverCircle hoverColor="blue">
                      <FiTwitter style={{ fontSize: '1.7rem' }} />
                    </HoverCircle>
                  </a>
                </li>

                <li>
                  <a href={``} target="_blank">
                    <HoverCircle>
                      <FiFacebook style={{ fontSize: '1.7rem' }} />
                    </HoverCircle>
                  </a>
                </li>

                <li>
                  <HoverCircle onClick={() => openMeetupEventLaunch()}>
                    <IoIosRocket style={{ fontSize: '1.7rem' }} />
                  </HoverCircle>
                </li>
              </MediaLink>

              <div style={{ display: 'flex' }}>
                <Hover style={{ margin: '0rem 0.4rem' }}>
                  <FiCalendar style={{ fontSize: '1.6rem' }} />
                </Hover>
                <Text small> {createdAt} </Text>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default inject('ModalStore')(observer(MeetupGroupProfileDetails))
