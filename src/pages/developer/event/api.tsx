import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import styled from 'styled-components'
import { FiX, FiKey } from 'react-icons/fi'
import { IoIosCode } from 'react-icons/io'

import { Head, Body, Hover, Text, Title, Section, Button } from '../../../styles/style'
import { EmptyData } from '../../../components/placeholders/'
import Services from './services'

const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justify};
`

const StyledButton = styled(Button)`
  width: 13rem;
`

const Api = (props): JSX.Element => {
  const [ModalVisibility, setModalVisibility] = useState(false)

  return (
    <div>
      <Modal
        show={ModalVisibility}
        onHide={() => setModalVisibility(false)}
        size="xl"
        style={{ marginTop: '5rem' }}
      >
        <Head>
          <Section> External Services </Section>

          <Hover onClick={() => setModalVisibility(false)}>
            <FiX style={{ fontSize: '1.7rem' }} />{' '}
          </Hover>
        </Head>
        <Services />
      </Modal>

      <Head header>
        <Flex direction="row">
          <Hover style={{ margin: '0.2rem 0.6rem' }}>
            {' '}
            <IoIosCode style={{ fontSize: '1.8rem' }} />{' '}
          </Hover>
          <Section> Developer Settings </Section>
        </Flex>
      </Head>

      <Body>
        <Flex direction="row">
          <Hover style={{ margin: '0rem 0.6rem' }}>
            <FiKey style={{ fontSize: '1.6rem' }} />
          </Hover>
          <Title small> Event API Key </Title>
        </Flex>
        <hr />

        <Flex direction={'row'} justify="space-between">
          <Text small style={{ margin: '0rem 0.8rem' }}>
            {' '}
            Generate Api token to consume event data{' '}
          </Text>

          <StyledButton onClick={() => setModalVisibility(true)}>Generate Key</StyledButton>
        </Flex>

        <br />
        <br />
        <Flex style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Title small> External app integrations</Title>

          <StyledButton onClick={() => setModalVisibility(true)}>
            {' '}
            Add External Service
          </StyledButton>
        </Flex>
        <hr />

        <EmptyData
          message={`This Event has no connected external service. \n\n Use the **Add Service** button to get started in connecting your first event service `}
          feature="Api integrations"
          link="https://event.com"
        />
      </Body>
    </div>
  )
}

export default Api
