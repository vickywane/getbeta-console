import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { FiBarChart } from 'react-icons/fi'

import { Body, Text, Hover, Title, center } from '../../styles/style'
import Header from '../../components/headers/header'
import { UserAnalytics } from '../../mockData'

const Card = styled.div`
  height: 20vh;
  width: 25rem;
  border: 1px solid #c0c0c0;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 2px 3px grey;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-gap: 3rem 1rem;
  place-items: center;
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
                <Title style={{ fontWeight: 'bold' }}> {name} </Title>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <List>
                    <li> Annual : {Annual} </li>
                    <li> Monthly : {Monthly} </li>
                    <li> Weekly : {Weekly} </li>
                  </List>

                  <div style={{ ...center, flexDirection: 'column' }}>
                    <Hover>
                      <FiBarChart style={{ fontSize: '4rem', color: '#0072ce' }} />
                    </Hover>
                    <Title> Mom Growth </Title>
                  </div>
                </div>
              </Card>
            )
          })}

          {UserAnalytics[0].content.map(({ name, id, Free, paid, views }) => {
            return (
              <Card key={id}>
                <Title style={{ fontWeight: 'bold' }}> {name} </Title>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <List>
                    <li> Free : {Free} </li>
                    <li> Paid : {paid} </li>
                    <li> Views : {views} </li>
                  </List>

                  <div style={{ ...center, flexDirection: 'column' }}>
                    <Hover>
                      <FiBarChart style={{ fontSize: '4rem', color: '#0072ce' }} />
                    </Hover>
                    <Title> Views </Title>
                  </div>
                </div>
              </Card>
            )
          })}

          {UserAnalytics[0].courses.map(({ name, id, free, paid, enrollment }) => {
            return (
              <Card key={id}>
                <Title style={{ fontWeight: 'bold' }}> {name} </Title>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <List>
                    <li> Free : {free} </li>
                    <li> Paid : {paid} </li>
                    <li> Enrollment : {enrollment} </li>
                  </List>

                  <div style={{ ...center, flexDirection: 'column' }}>
                    <Hover>
                      <FiBarChart style={{ fontSize: '4rem', color: '#0072ce' }} />
                    </Hover>
                    <Title> Enrollment </Title>
                  </div>
                </div>
              </Card>
            )
          })}

          {UserAnalytics[0].bookings.map(({ name, id, physical, virtual }) => {
            return (
              <Card key={id}>
                <Title style={{ fontWeight: 'bold' }}> {name} </Title>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <List>
                    <li> Physical : {physical} </li>
                    <li> Virtual : {virtual} </li>
                  </List>

                  <div style={{ ...center, flexDirection: 'column' }}>
                    <Hover>
                      <FiBarChart style={{ fontSize: '4rem', color: '#0072ce' }} />
                    </Hover>
                    <Title> MoM Growth </Title>
                  </div>
                </div>
              </Card>
            )
          })}

          {UserAnalytics[0].live.map(({ name, id, free, paid }) => {
            return (
              <Card key={id}>
                <Title style={{ fontWeight: 'bold' }}> {name} </Title>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <List>
                    <li> Free : {free} </li>
                    <li> Paid : {paid} </li>
                  </List>

                  <div style={{ ...center, flexDirection: 'column' }}>
                    <Hover>
                      <FiBarChart style={{ fontSize: '4rem', color: '#0072ce' }} />
                    </Hover>
                    <Title> MoM Growth </Title>
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
