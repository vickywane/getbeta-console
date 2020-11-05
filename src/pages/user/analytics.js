import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { FiBarChart } from 'react-icons/fi'

import { Body, Text, Hover, Title, center } from '../../styles/style'
import Header from '../../components/headers/header'
import { UserAnalytics } from '../../mockData'

const Card = styled.div`
  height: auto;
  width: 25rem;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 2px 3px grey;
  background: #fff;
  ${media.lessThan('small')`
    width: 23rem;
  `};
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-gap: 3rem 1rem;
  place-items: center;
  ${media.lessThan('medium')`
    display : flex;
    flex-direction : column;
    align-items : center;
  `};
`

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    margin: 1rem 0.5rem;
  }
`

const Analytics = props => {
  return (
    <div>
      <Header />

      <Body style={{ background: '#fbfbfb', height: window.innerHeight - 50, overflow: 'auto' }}>
        <br />
        <Grid>
          {UserAnalytics[0].financials.map(({ name, id, Annual, Monthly, Weekly }) => {
            return (
              <Card key={id}>
                <Title small> {name} </Title>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <List>
                    <li>
                      <Text> Annual : {Annual} </Text>
                    </li>
                    <li>
                      <Text> Monthly : {Monthly} </Text>
                    </li>
                    <li>
                      <Text> Weekly : {Weekly} </Text>
                    </li>
                  </List>

                  <div style={{ ...center, flexDirection: 'column' }}>
                    <Hover>
                      <FiBarChart style={{ fontSize: '3rem', color: '#0072ce' }} />
                    </Hover>
                    <Title small> Mom Growth </Title>
                  </div>
                </div>
              </Card>
            )
          })}

          {UserAnalytics[0].content.map(({ name, id, Free, paid, views }) => {
            return (
              <Card key={id}>
                <Title small> {name} </Title>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <List>
                    <li>
                      <Text> Free : {Free} </Text>
                    </li>
                    <li>
                      <Text> Paid : {paid} </Text>
                    </li>
                    <li>
                      <Text> Views : {views} </Text>
                    </li>
                  </List>

                  <div style={{ ...center, flexDirection: 'column' }}>
                    <Hover>
                      <FiBarChart style={{ fontSize: '3rem', color: '#0072ce' }} />
                    </Hover>
                    <Title small> Views </Title>
                  </div>
                </div>
              </Card>
            )
          })}

          {UserAnalytics[0].courses.map(({ name, id, free, paid, enrollment }) => {
            return (
              <Card key={id}>
                <Title small> {name} </Title>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <List>
                    <li>
                      <Text> Free : {free} </Text>
                    </li>
                    <li>
                      <Text> Paid : {paid} </Text>
                    </li>
                    <li>
                      <Text> Enrollment : {enrollment} </Text>
                    </li>
                  </List>

                  <div style={{ ...center, flexDirection: 'column' }}>
                    <Hover>
                      <FiBarChart style={{ fontSize: '3rem', color: '#0072ce' }} />
                    </Hover>
                    <Title small> Enrollment </Title>
                  </div>
                </div>
              </Card>
            )
          })}

          {UserAnalytics[0].bookings.map(({ name, id, physical, virtual }) => {
            return (
              <Card key={id}>
                <Title small> {name} </Title>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <List>
                    <li>
                      <Text> Physical : {physical} </Text>
                    </li>
                    <li>
                      <Text> Virtual : {virtual} </Text>
                    </li>
                  </List>

                  <div style={{ ...center, flexDirection: 'column' }}>
                    <Hover>
                      <FiBarChart style={{ fontSize: '3rem', color: '#0072ce' }} />
                    </Hover>
                    <Title small> MoM Growth </Title>
                  </div>
                </div>
              </Card>
            )
          })}

          {UserAnalytics[0].live.map(({ name, id, free, paid }) => {
            return (
              <Card key={id}>
                <Title small> {name} </Title>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <List>
                    <li>
                      <Text> Free : {free} </Text>
                    </li>
                    <li>
                      <Text> Paid : {paid} </Text>
                    </li>
                  </List>

                  <div style={{ ...center, flexDirection: 'column' }}>
                    <Hover>
                      <FiBarChart style={{ fontSize: '3rem', color: '#0072ce' }} />
                    </Hover>
                    <Title small> MoM Growth </Title>
                  </div>
                </div>
              </Card>
            )
          })}
        </Grid>
      </Body>
    </div>
  )
}

export default Analytics
