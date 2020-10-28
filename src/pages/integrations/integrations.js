import React from 'react'
import styled from 'styled-components'
import { Title, Body, Text, center, Button, MdTitle } from '../../styles/style'
import Header from '../../components/headers/header'
import media from 'styled-media-query'

const StyledBody = styled(Body)`
  div {
    width: 50rem;
  }

  ${media.lessThan('medium')`
  div {
    width: 30rem;
  }
`};

  ${media.lessThan('small')`
        div {
            width: 100%;
        }
`}
`

const Integrations = props => {
  return (
    <div>
      <Header />
      <StyledBody bold style={{ ...center, height: window.innerHeight - 70 }}>
        <div>
          <MdTitle align="center"> 3rd Party Integrations -- Coming Soon</MdTitle>
          <Text align="center">
            The creator's hub is a , consectetur adipisicing elit. Beatae praesentium maiores
            impedit qui expedita earum obcaecati ratione nisi minus reiciendis. Fuga, quod ipsam.
            Voluptates unde, in ad facere maiores minus.
          </Text>

          <Text color="grey" align="center">
            We would notify you when this feature is fully released and active.{' '}
          </Text>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button> Notify Me When Active </Button>
          </div>
        </div>
      </StyledBody>
    </div>
  )
}

export default Integrations
