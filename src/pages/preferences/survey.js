import React, { useEffect, useState } from 'react'
import Header from '../../components/headers/header'
import styled from 'styled-components'
import media from 'styled-media-query'
import { Switch } from '@chakra-ui/core'
import * as Lodash from 'lodash'

import { SUGGESTED_KEYWORDS } from '../../mockData'
import { Body, Title, Text, Button, InputBody, center, PageHead, Hover } from '../../styles/style'
import { FiSettings, FiSearch } from 'react-icons/fi'

const KeywordContainer = styled.div`
  height: 45px;
  width: auto;
  background: #5b7cd3;
  border: 1px solid #5b7cd3;
  border-radius: 2px;
  p {
    font-size: 0.9rem;
    padding-top: 1rem;
    color: #fff;
  }
  &: hover {
    background: #0072ce;
    cursor: pointer;
  }
  ${media.lessThan('medium')`
  height: 40px;

  p {
    font-size: 0.75rem;
    color: #fff;
  }
  `};
  ${media.lessThan('small')`
  height: 35px;
  p {
    font-size: 0.75rem;
    color: #fff;
  }
  `};
`

const Grid = styled.div`
  display: grid;
  grid-gap: 2rem 2rem;
  grid-template-columns: repeat(auto-fit, minmax(10rem, auto));
  ${media.lessThan('small')`
    grid-template-columns: repeat(auto-fit, minmax(6rem, auto));
    grid-gap: .5rem 1rem;
  `};
`

const List = styled.ul`
  list-style: none;
  padding: 0.5rem 0.5rem;
  li {
    margin: 1rem 0.3rem;
  }
`

const StyledBody = styled(Body)`
  height: calc(100vh - 120px);
`

const Preferences = props => {
  const [tags, setTags] = useState([
    'Physics',
    'Adult Education',
    'PreSchool',
    'Civic Education',
    'Mass Communication'
  ])
  const [newTag, setNewTag] = useState('')

  return (
    <div>
      <Header />
      <StyledBody>
        <List>
          <li>
            <div>
              <Title> Personalize your content feed </Title>
              <hr />
              <InputBody style={{ margin: '.5rem .2rem' }}>
                <input
                  type="text"
                  onChange={e => setNewTag(e.target.value)}
                  placeholder="Add a new content keyword"
                />

                <button
                  onClick={() => {
                    setTags(newTag)
                  }}
                  style={{ fontSize: '.9rem' }}
                >
                  Save
                </button>
              </InputBody>
            </div>

            <div style={{ paddingTop: '10px' }}>
              <Text small>
                Personalize your content feed to show items with the following tags.
              </Text>
              <Grid>
                {!Lodash.isEmpty(tags) &&
                  tags.map(item => {
                    return (
                      <KeywordContainer id={item} style={{ ...center }}>
                        <p style={{ ...center }}> {item} </p>
                      </KeywordContainer>
                    )
                  })}
              </Grid>
            </div>
            <br />
          </li>
          <br />
          <li>
            <div>
              <Title> Privacy </Title>
              <hr />
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Text> Open for bookings and consultations</Text>

                <div>
                  <Switch color="teal" size="lg" />
                </div>
              </div>
            </div>
          </li>
        </List>
      </StyledBody>
    </div>
  )
}

export default Preferences
