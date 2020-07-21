import React from 'react'
import styled from 'styled-components'

import CardImg from '../../../assets/ssvg/sample.svg'
import { Body, Title, Text, Section, Hover } from '../../../styles/style'
import { StatsCard } from '../../../styles/cards'
import { IoIosNotifications } from 'react-icons/io'
import { FiX } from 'react-icons/fi'

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

const EventStatistics = (props): JSX.Element => {
  return (
    <Body style={{ background: '#fbfbfb', height: window.innerHeight - 40 }}>
      <Body
        style={{
          margin: '1rem 0.5rem',
          height: '25vh',
          background: '#401364',
          color: '#fff',
          padding: '1rem' + ' 1rem',
          borderRadius: '5px',
          boxShadow: '0px 3px 3px #c0c0c0'
        }}
      >
        <Title center> Hi, {localStorage.user_id} </Title>
        <Text center> Here is your event bla </Text>

        <br />
        <br />
        <br />
        <hr style={{ background: '#fff', color: '#fff' }} />
        <div style={{ display: 'flex' }}>
          <Hover style={{ margin: '0rem 0.5rem' }}>
            <IoIosNotifications style={{ fontSize: '1.8rem' }} />
          </Hover>

          <Text small> Some event notification here for the event organizers </Text>
        </div>
      </Body>

      <br />

      <CardsGrid>
        <StatsCard>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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

              <div style={{ ...center }}>
                <Section> Event Marketplace </Section>
              </div>
            </div>

            <Hover style={{ ...center }}>
              <FiX style={{ fontSize: '1.8rem' }} />
            </Hover>
          </div>
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
          <Title small center>
            {' '}
            Marketplace{' '}
          </Title>
          <Text>
            {' '}
            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
            bla bla bla bla bla bla bla bla{' '}
          </Text>
        </StatsCard>

        <StatsCard>
          <Title small center>
            {' '}
            Marketplace{' '}
          </Title>
          <Text>
            {' '}
            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
            bla bla bla bla bla bla bla bla{' '}
          </Text>
        </StatsCard>

        <StatsCard>
          <Title small center>
            {' '}
            Marketplace{' '}
          </Title>
          <Text>
            {' '}
            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
            bla bla bla bla bla bla bla bla{' '}
          </Text>
        </StatsCard>

        <StatsCard>
          <Title small center>
            {' '}
            Marketplace{' '}
          </Title>
          <Text>
            {' '}
            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
            bla bla bla bla bla bla bla bla{' '}
          </Text>
        </StatsCard>

        <StatsCard>
          <Title small center>
            {' '}
            Marketplace{' '}
          </Title>
          <Text>
            {' '}
            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
            bla bla bla bla bla bla bla bla{' '}
          </Text>
        </StatsCard>
      </CardsGrid>
    </Body>
  )
}

export default EventStatistics
