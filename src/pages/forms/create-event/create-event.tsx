import React, { useState } from 'react'
import { inject, observer } from 'mobx-react'
import styled from 'styled-components'

import { Header, Footer } from '../../../components/'
import CreateConference from './create-conference'
import CreateeMeetup from './create-meetup'
import CreateStream from './create-stream'

const Bottom = styled.div`
  position: absolute;
  position: -webkit-sticky;
  display: flex;
  flex: 1;
  bottom: 0rem;
`

const CreateEvent = (props): JSX.Element => {
  const eventType = props.match.params.type

  return (
    <div>
      <Header screen="event" name="" unshadowed={true} event={'Name'} />

      {eventType !== 'Stream' && <CreateConference type={eventType} />}
      {eventType === 'Stream' && <CreateStream type={eventType} />}

      <Bottom>
        <Footer />
      </Bottom>
    </div>
  )
}

export default inject('PaneStore')(observer(CreateEvent))
