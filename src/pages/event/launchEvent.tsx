import React from 'react'
import { Modal } from 'react-bootstrap'
import { FiClock, FiX } from 'react-icons/fi'
import { inject, observer } from 'mobx-react'

import { Body, Text, Head, Hover, Button, Section, Title } from '../../styles/style'
import { IoMdStopwatch } from 'react-icons/io'

const EventLaunch = (props): JSX.Element => {
  const { showLaunch, closeEventLaunch } = props.ModalStore
  const { width, data } = props
  const { createdAt, name } = data

  return (
    <Modal
      size={'xl'}
      style={{ marginTop: '3rem' }}
      show={showLaunch}
      onHide={() => closeEventLaunch()}
    >
      <Head>
        <Section>Launch {name}</Section>

        <Hover onClick={() => closeEventLaunch()}>
          <FiX style={{ fontSize: '1.8rem' }} />
        </Hover>
      </Head>

      <Body>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex' }}>
            <Hover style={{ margin: '0rem 0.7rem' }}>
              <IoMdStopwatch style={{ fontSize: '1.8rem' }} />
            </Hover>
            <Title small>{createdAt}</Title>
          </div>

          <Text>Created at {createdAt}</Text>
        </div>

        <div>
          <br />
          <Text center> Event Statistics </Text>
          <Text center> Event Statistics </Text>

          <br />
        </div>

        <div style={{ textAlign: 'center' }}>
          <Button> Simulate Event Launch </Button>
        </div>
      </Body>
    </Modal>
  )
}

export default inject('ModalStore')(observer(EventLaunch))
