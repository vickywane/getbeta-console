import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

import { Body, Title, Text, center } from '../../styles/style'
import Header from '../../components/headers/header'

const testData = []

const StyledBody = styled(Body)`
  height: calc(100vh - 60px);
  overflow: auto;
`
const Notification = styled.ul`
  padding: 1rem 1rem;
  list-style: none;
  width: 60%;
  background-color: white;
  box-shadow: 0 3px 4px #c0c0c0;
  li {
    padding: 1.5rem 1rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #c0c0c0;
  }
  ${media.lessThan('large')`
    width: 100%;
    li {
      padding: 1rem .5rem;
    }
  `};
`

const Time = styled.div`
  display: flex;
  ${media.lessThan('small')`
      display : none;
  `};
`

const Image = styled.img`
  height: 70px;
  width: 70px;
  object-fit: contain;
  border-radius: 10px;
  ${media.lessThan('medium')`
    height: 60px;
   width: 60px;
  `};
  ${media.lessThan('medium')`
  height: 40px;
  width: 40px;
  border-radius : 50%;
`};
`

const Notifications = props => {
  const {} = props

  return (
    <div style={{ height: '100%' }}>
      <Header screen={'Notifications'} goBack={true} />

      <StyledBody style={{ background: '#fbfbfb', display: 'flex', justifyContent: 'center' }}>
        <Notification style={{}}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ ...center }}>
              <Title> Notifications </Title>
            </div>
            <div style={{ ...center }}>
              <Text> Clear All </Text>
            </div>
          </div>
          <hr />
          <div style={{ height: 'calc(100vh - 100px)', overflow: 'auto' }}>
            {testData.length < 1 ? (
              <div>
                <br />
                <br />
                <Title small align="center" color="grey">
                  You currently have no new notifications{' '}
                </Title>
              </div>
            ) : (
              testData.map(({ id, title, date, from }) => {
                return (
                  <li key={id}>
                    <div style={{ ...center }}>
                      <Image src={require('../../assets/images/img.jpg')} alt="User" />
                    </div>

                    <div style={{ ...center }}>
                      <Text> {title} </Text>
                    </div>

                    <Time style={{ ...center }}>
                      <Text> 2 Hour </Text>
                    </Time>
                  </li>
                )
              })
            )}
          </div>
        </Notification>
      </StyledBody>
    </div>
  )
}

export default Notifications
