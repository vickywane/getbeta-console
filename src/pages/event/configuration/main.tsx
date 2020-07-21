import React, { useState } from 'react'
import styled from 'styled-components'
import { IoIosSearch } from 'react-icons/io'
import { CSSTransition } from 'react-transition-group'

import { Actions, Privacy, Billing, Notification } from './'
import { UPDATE_EVENT_SETTINGS } from '../../../data/mutations'
import {
  Hover,
  Title,
  Text,
  Section,
  Head,
  Body as Bod,
  Button,
  TabColumn,
  Tab
} from '../../../styles/style'

const Body = styled(Bod)`
  padding: 0.5rem 1.5rem;
`

const SettingsBox = styled.div`
  display: flex;
  width: 35rem;
  border-radius: 5px;
  background: #fff;
  border: 1px solid #0e2f5a;
  input {
    display: flex;
    flex: 1;
    width: auto;
    color: #0e2f5a;
    font-size: 1.1rem;
    padding: 0.7rem 0.7rem;
    background: transparent;
    outline: 0px;
    border-radius: 30px;
    border: 0px;
  }
  div {
    height: auto;
    width: 4rem;
    border-radius: 5px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #0e2f5a;
    cursor: pointer;
  }
`

const Main: any = props => {
  const { data } = props
  const [ActiveColumn, setActiveColumn] = useState<String>('Event Actions')

  return (
    <div>
      <Head header>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Section> Event Configuration </Section>
        </div>

        <SettingsBox>
          <input placeholder={'Find a setting'} />
          <div>
            <IoIosSearch style={{ fontSize: '1.8rem' }} />
          </div>
        </SettingsBox>
      </Head>

      <Body style={{ height: '25vh', background: '#fbfbfb' }}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Button> Delete Event </Button>
        <div style={{ height: '60px', width: '100%' }}>
          <Tab>
            <TabColumn
              onClick={() => {
                setActiveColumn('Event Actions')
              }}
              active={ActiveColumn === 'Event Actions'}
              small
            >
              Event Actions
            </TabColumn>
            <TabColumn
              onClick={() => {
                setActiveColumn('Notifications')
              }}
              small
              active={ActiveColumn === 'Notifications'}
            >
              Notifications
            </TabColumn>
            <TabColumn
              onClick={() => {
                setActiveColumn('Billings')
              }}
              small
              active={ActiveColumn === 'Billings'}
            >
              Billings
            </TabColumn>
            <TabColumn
              onClick={() => {
                setActiveColumn('Privacy')
              }}
              small
              active={ActiveColumn === 'Privacy'}
            >
              Privacy
            </TabColumn>
            <TabColumn
              onClick={() => {
                setActiveColumn('Marketplace')
              }}
              small
              active={ActiveColumn === 'Marketplace'}
            >
              Marketplace
            </TabColumn>
            <TabColumn
              onClick={() => {
                setActiveColumn('Authorization')
              }}
              small
              active={ActiveColumn === 'Authorization'}
            >
              Authorization
            </TabColumn>
            <TabColumn
              onClick={() => {
                setActiveColumn('Authorization')
              }}
              small
              active={ActiveColumn === 'Authorization'}
            >
              Media
            </TabColumn>
          </Tab>
        </div>
      </Body>

      <br />
      <Body>
        <CSSTransition in={ActiveColumn === 'Event Actions'} timeout={300} unmountOnExit>
          <Actions data={data} />
        </CSSTransition>
      </Body>

      <Body>
        <CSSTransition in={ActiveColumn === 'Notifications'} timeout={300} unmountOnExit>
          <Notification data={data} />
        </CSSTransition>
      </Body>

      <Body>
        <CSSTransition in={ActiveColumn === 'Privacy'} timeout={300} unmountOnExit>
          <Privacy data={data} />
        </CSSTransition>
      </Body>

      <Body>
        <CSSTransition in={ActiveColumn === 'Billings'} timeout={300} unmountOnExit>
          <Billing data={data} />
        </CSSTransition>
      </Body>
    </div>
  )
}

export default Main
