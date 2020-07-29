import React, { useState } from 'react'
import styled from 'styled-components'
import { IoIosNotifications, IoIosContact, IoMdRocket } from 'react-icons/io'
import { FiX, FiList, FiCalendar, FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import CardImg from '../../../assets/ssvg/sample.svg'
import { Body, Title, Text, Section, Hover } from '../../../styles/style'
import { StatsCard, StatsCardHead } from '../../../styles/cards'

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-gap: 3rem;
`

const center = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const HoverCircle = styled(Hover)`
  width: 50px;
  height: 50px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid #401364;
  color: #401364;
  &: hover {
    border: 1px solid #fff;
    color: #fff;
    background: transparent;
  }
`

const StreamStatistics = (props): JSX.Element => {
  const { state, dispatch } = props
  const { createdBy, title, eventType } = props.data

  return (
    <Body style={{ background: '#fbfbfb', height: window.innerHeight - 170 }}>
      <Body
        style={{
          margin: '0.5rem 0.2rem',
          background: '#401364',
          color: '#fff',
          padding: '1rem' + ' 1rem',
          borderRadius: '3px',
          boxShadow: '0px 3px 3px #c0c0c0'
        }}
      >
        <br />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex' }}>
            <Hover style={{ margin: '0rem 0.5rem' }}>
              <FiCalendar style={{ fontSize: '1.8rem' }} />
            </Hover>
            <Text> 12 - 12 - 12 </Text>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Title center>
              Hello, <b> {createdBy[0].name} </b>{' '}
            </Title>
            <Text center> {title} is now streaming live! </Text>
          </div>

          <div style={{ display: 'flex' }}>
            <Text> {eventType} Metrics </Text>
            <Hover style={{ margin: '0rem 0.5rem' }}>
              <FiChevronRight style={{ fontSize: '1.8rem' }} />
            </Hover>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex' }}>
            <Hover style={{ display: 'flex', margin: '0rem 1rem' }}>
              <Hover style={{ margin: '0rem 0.5rem' }}>
                <FiList style={{ fontSize: '1.8rem' }} />
              </Hover>
              <Text> Planning Todo </Text>
            </Hover>

            <Hover style={{ display: 'flex', margin: '0rem 1rem' }}>
              <Hover style={{ margin: '0rem 0.5rem' }}>
                <IoMdRocket style={{ fontSize: '1.8rem', transform: '' }} />
              </Hover>
              <Text> Test Launch {eventType} </Text>
            </Hover>
          </div>

          <Hover
            onClick={() =>
              dispatch({
                type: 'SWITCH_ACTIVE_VIEW',
                view: 'preview'
              })
            }
            style={{ display: 'flex' }}
          >
            <Text>Stream Preview</Text>
            <Hover style={{ margin: '0rem 0.5rem' }}>
              <IoIosContact style={{ fontSize: '1.8rem' }} />
            </Hover>
          </Hover>
        </div>

        <hr style={{ background: '#fff', color: '#fff' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex' }}>
            <HoverCircle style={{ margin: '0rem 0.5rem' }}>
              <IoIosNotifications style={{ fontSize: '1.8rem' }} />
            </HoverCircle>

            <Text style={{ padding: '0.7rem 0.5rem' }} small>
              {' '}
              Some event notification here for the {eventType} organizers{' '}
            </Text>
          </div>

          <Hover>
            <FiX style={{ fontSize: '1.8rem' }} />
          </Hover>
        </div>
      </Body>

      <br />

      <CardsGrid>
        <StatsCard>
          <StatsCardHead style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div
              style={{ display: 'flex', justifyContent: 'center' }}
              onClick={() => dispatch({ type: 'SWITCH_MOBILE' })}
            >
              <div style={{ margin: '0rem 1rem' }}>
                <img
                  style={{
                    width: '60px',
                    height: '55px',
                    borderRadius: '50%',
                    border: '2px solid violet'
                  }}
                  src={CardImg}
                />
              </div>

              <div style={{ ...center }}>
                <Section style={{ color: '#401364', cursor: 'pointer' }}>
                  {' '}
                  Mobile Interface{' '}
                </Section>
              </div>
            </div>

            <Hover style={{ ...center }}>
              <FiX style={{ fontSize: '1.8rem' }} />
            </Hover>
          </StatsCardHead>
          <hr />
          <Body>
            <Text center>
              {' '}
              bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
              bla bla bla bla bla bla bla bla bla{' '}
            </Text>

            <br />
            <Text color={'grey'} small center>
              {' '}
              Learn More About <a href={'/'}> Mobile Interface </a> on Oasis.
            </Text>
          </Body>
        </StatsCard>

        <StatsCard>
          <StatsCardHead style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div
              style={{ display: 'flex', justifyContent: 'center' }}
              onClick={() => dispatch({ type: 'SWITCH_INVITATION' })}
            >
              <div style={{ margin: '0rem 1rem' }}>
                <img
                  style={{
                    width: '60px',
                    height: '55px',
                    borderRadius: '50%',
                    border: '2px solid violet'
                  }}
                  src={CardImg}
                />
              </div>

              <div style={{ ...center }}>
                <Section style={{ color: '#401364', cursor: 'pointer' }}> Invitations </Section>
              </div>
            </div>

            <Hover style={{ ...center }}>
              <FiX style={{ fontSize: '1.8rem' }} />
            </Hover>
          </StatsCardHead>
          <hr />
          <Body>
            <Text center>
              {' '}
              bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
              bla bla bla bla bla bla bla bla bla{' '}
            </Text>

            <br />
            <Text color={'grey'} small center>
              {' '}
              Learn More About <a href={'/'}> Event Marketplace </a> on Oasis.
            </Text>
          </Body>
        </StatsCard>

        <StatsCard>
          <StatsCardHead style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div
              style={{ display: 'flex', justifyContent: 'center' }}
              onClick={() => dispatch({ type: 'SWITCH_STORE' })}
            >
              <div style={{ margin: '0rem 1rem' }}>
                <img
                  style={{
                    width: '60px',
                    height: '55px',
                    borderRadius: '50%',
                    border: '2px solid violet'
                  }}
                  src={CardImg}
                />
              </div>

              <div style={{ ...center }}>
                <Section style={{ color: '#401364', cursor: 'pointer' }}>
                  {' '}
                  Event Marketplace{' '}
                </Section>
              </div>
            </div>

            <Hover style={{ ...center }}>
              <FiX style={{ fontSize: '1.8rem' }} />
            </Hover>
          </StatsCardHead>
          <hr />
          <Body>
            <Text center>
              {' '}
              bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
              bla bla bla bla bla bla bla bla bla{' '}
            </Text>

            <br />
            <Text color={'grey'} small center>
              {' '}
              Learn More About <a href={'/'}> Event Marketplace </a> on Oasis.
            </Text>
          </Body>
        </StatsCard>

        <StatsCard>
          <StatsCardHead style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ margin: '0rem 1rem' }}>
                <img
                  style={{
                    width: '60px',
                    height: '55px',
                    borderRadius: '50%',
                    border: '2px solid violet'
                  }}
                  src={CardImg}
                />
              </div>

              <Link to={'/gallery'} style={{ ...center }}>
                <Section style={{ color: '#401364', cursor: 'pointer' }}> Event Assets </Section>
              </Link>
            </div>

            <Hover style={{ ...center }}>
              <FiX style={{ fontSize: '1.8rem' }} />
            </Hover>
          </StatsCardHead>
          <hr />
          <Body>
            <Text center>
              {' '}
              bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
              bla bla bla bla bla bla bla bla bla{' '}
            </Text>

            <br />
            <Text color={'grey'} small center>
              {' '}
              Learn More About <a href={'/'}> Event Marketplace </a> on Oasis.
            </Text>
          </Body>
        </StatsCard>
      </CardsGrid>
    </Body>
  )
}

export default StreamStatistics
