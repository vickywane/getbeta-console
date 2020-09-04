import React, { useEffect, useState } from 'react'
import Header from '../../components/headers/header'
import styled from 'styled-components'

import { SUGGESTED_KEYWORDS } from '../../mockData'
import { Body, Title, Text, Button, InputBody } from '../../styles/style'

const Card = styled.div`
  height: 80%;
  margin-top: 5rem;
  width: 40%;
  padding: 1rem 2rem;
  background: #fff;
  border-radius: 7px;
  box-shadow: 0 3px 4px grey;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const center = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center'
}

const KeywordContainer = styled.div`
  height: 50px;
  width: auto;
  background : #0072ce;
  border: 2px solid #0072ce;
  border-radius: 5px;
  p {
    padding-top : 1rem;
  color : #fff;
  }
  &: hover {
    $:hover {
      #0072ce
    }
    cursor : pointer;
  }
`

const Grid = styled.div`
  display: grid;
  grid-gap: 2rem 2rem;
  place-items: centet;
  grid-template-columns: repeat(auto-fit, minmax(10rem, auto));
`

const Survey = props => {
  return (
    <div>
      <Header />
      <Body
        style={{
          ...center,
          height: window.innerHeight - 80,
          padding: '2rem 2rem',
          background: 'rgba(233, 241, 251, 0.81)'
        }}
      >
        <br />
        <Container
          style={{
            width: '100%'
          }}
        >
          <Card>
            <Title style={{ padding: '0.5rem 0' }} align="center">
              {' '}
              Help Us Serve You Better{' '}
            </Title>
            <hr />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <InputBody>
                <input placeholder="Type a keyword based on your favourite feature" />
              </InputBody>
            </div>
            <div style={{ ...center }}>
              <Button> Submit Keyword </Button>
            </div>
          </Card>

          <Card>
            <Title style={{ padding: '0.5rem 2rem' }}> Suggested </Title>
            <hr />
            <br />
            <Grid>
              {SUGGESTED_KEYWORDS.map(item => {
                return (
                  <KeywordContainer
                    id={item}
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                  >
                    <Text> {item} </Text>
                  </KeywordContainer>
                )
              })}
            </Grid>
          </Card>
        </Container>
      </Body>
    </div>
  )
}

export default Survey
