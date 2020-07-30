import React from 'react'
import { Body, Head, Text } from '../../../styles/style'
import { Footer, Header } from '../../../components'

import styled from 'styled-components'

const PrimaryCard = styled.div`
    height  : 45vh;
    width : 30rem;
    box-shadow : 0 2px 3px grey
    background : #401364;
    border-radius : 15px;
    color : white;
    padding : 2rem;
`

const SubCard = styled.div`
    height  : 37vh;
    width : 25rem;
    box-shadow : 0 1px 2px grey
    background : #5919ab;
    border-radius : 10px;
    color : white;
    margin : 0rem 1rem;
    transition : all 500ms;
    padding : 2rem;
    &: hover {
      cursor : pointer;
      transform : scale(1.1);
    }
`

const n = [{}, {}, {}]

const ThemesMarketplace = props => {
  return (
    <div>
      <Header />
      <Body>
        <br />
        <br />
        <Text center> Themes marketplace for events to use. </Text>
        <br />

        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <PrimaryCard>
            <Text center> Card 1 </Text>
          </PrimaryCard>

          <div
            style={{
              display: 'flex',
              overflow: 'auto',
              margin: '0rem' + ' 1rem',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {n.map(({}) => {
              return (
                <SubCard>
                  <Text> Sub Cards 2 </Text>
                </SubCard>
              )
            })}
          </div>
        </div>

        <br />
      </Body>
      <Footer />
    </div>
  )
}

export default ThemesMarketplace
