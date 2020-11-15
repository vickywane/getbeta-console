import React from 'react'
import { Title, Text, Body, Button } from '../../../styles/style'
import { inject, observer } from 'mobx-react'
import { Spinner } from 'react-bootstrap'

const SubscribeModal = ({ ContentStore, contentId }) => (
  <Body>
    <Title align="center"> You need to subscribe to view this content </Title>
    <br />

    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Button onClick={() => ContentStore.subscribeToContent(contentId)}>
        {ContentStore.isLoading ? 'Subscribing' : 'Subscribe'}

        {ContentStore.isLoading && (
          <div style={{ paddingLeft: '.7rem' }}>
            <Spinner size="sm" animation="border" role="status" />
          </div>
        )}
      </Button>
    </div>
  </Body>
)

export default inject('ContentStore')(observer(SubscribeModal))
