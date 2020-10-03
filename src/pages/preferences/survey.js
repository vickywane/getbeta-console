import React, { useEffect, useState } from 'react'
import Header from '../../components/headers/header'
import styled from 'styled-components'
import media from 'styled-media-query'

import { SUGGESTED_KEYWORDS } from '../../mockData'
import { Body, Title, Text, Button, InputBody, center } from '../../styles/style'
import { FiSettings, FiSearch } from 'react-icons/fi'

const Card = styled.div`
  height: auto;
  margin-top: 5rem;
  width: 70%;
  padding: 1rem 2rem;
  background: #fff;
  border-radius: 7px;
  box-shadow: 0 3px 4px grey;
  ${media.lessThan('medium')`
    width : 30rem;
  `};
  ${media.lessThan('small')`
    width : 24rem;
  `};
`

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const KeywordContainer = styled.div`
  height: 45px;
  width: auto;
  background: #5b7cd3;
  border: 1px solid #5b7cd3;
  border-radius: 3px;
  p {
    font-size: 0.9rem;
    padding-top: 1rem;
    color: #fff;
  }
  &: hover {
    background: #0072ce;
    cursor: pointer;
  }
`

const Grid = styled.div`
  display: grid;
  grid-gap: 2rem 2rem;
  place-items: centet;
  grid-template-columns: repeat(auto-fit, minmax(10rem, auto));
`

const List = styled.ul`
  list-style: none;
  padding: 0.5rem 0.5rem;
  li {
    margin: 2rem 0.3rem;
  }
`

const Survey = props => {
  return (
    <div>
      <Header />
      <Body
        style={{
          height: window.innerHeight - 80,
          padding: '1rem 1rem',
          background: 'rgba(233, 241, 251, 0.81)'
        }}
      >
        <Container>
          <Card>
            <div
              style={{
                height: '50px',
                borderBottom: '1px solid #c0c0c0',
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <div style={{ display: 'flex' }}>
                <div style={{ margin: '0 .5rem' }}>
                  <FiSettings style={{ fontSize: '1.5rem' }} />
                </div>

                <Text style={{ paddingTop: '5px' }}> User Preferences </Text>
              </div>

              <div style={{ display: 'flex' }}>
                <div style={{ margin: '0 .5rem' }}>
                  <FiSearch style={{ fontSize: '1.5rem' }} />
                </div>
              </div>
            </div>

            <List>
              <li>
                <div>
                  <Title> Personalize your content feed </Title>
                  <Text small>
                    Help us serve you better by personalizing your content feed to show items with
                    the following keywords.
                  </Text>
                  <InputBody style={{ margin: '.5rem .2rem' }}>
                    <input placeholder="Type a keyword based on your favourite feature" />
                  </InputBody>
                </div>

                <div>
                  <Text> Default Suggestions </Text>
                  <Grid>
                    {SUGGESTED_KEYWORDS.map(item => {
                      return (
                        <KeywordContainer
                          id={item}
                          style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                          }}
                        >
                          <p> {item} </p>
                        </KeywordContainer>
                      )
                    })}
                  </Grid>
                </div>
                <br />
                <div>
                  <Button> Submit Keyword </Button>
                </div>
              </li>

              <li>
                <div>
                  <Title> Privacy </Title>
                  <Text small>My privacy when using the GetBeta service</Text>
                </div>
              </li>
            </List>
          </Card>
        </Container>
      </Body>
    </div>
  )
}

export default Survey
