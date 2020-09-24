import React from 'react'
import styled from 'styled-components'

import { Body, Title, Text, center } from '../../styles/style'
import Header from '../../components/headers/header'

const testData = [
  {
    id: 1,
    title: 'Some crazy test notification',
    date: new Date(),
    from: 'Anonymouse User'
  },
  {
    id: 2,
    title: 'Some second crazy test notification',
    date: new Date(),
    from: 'Anonymouse User'
  },
  {
    id: 3,
    title: 'Some third crazy test notification',
    date: new Date(),
    from: 'Anonymouse User'
  },
  {
    id: 1,
    title: 'Some crazy test notification',
    date: new Date(),
    from: 'Anonymouse User'
  },
  {
    id: 2,
    title: 'Some second crazy test notification',
    date: new Date(),
    from: 'Anonymouse User'
  },
  {
    id: 3,
    title: 'Some third crazy test notification',
    date: new Date(),
    from: 'Anonymouse User'
  },
  {
    id: 1,
    title: 'Some crazy test notification',
    date: new Date(),
    from: 'Anonymouse User'
  },
  {
    id: 2,
    title: 'Some second crazy test notification',
    date: new Date(),
    from: 'Anonymouse User'
  },
  {
    id: 3,
    title: 'Some third crazy test notification',
    date: new Date(),
    from: 'Anonymouse User'
  }
]

const Notification = styled.ul`
  padding: 1rem 1rem;
  list-style: none;
  width: 50%;
  background-color: white;
  box-shadow: 0 3px 4px #c0c0c0;
  li {
    padding: 1.5rem 1rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #c0c0c0;
  }
`

const Image = styled.img`
  height: 80px;
  width: 80px;
  object-fit: contain;
  border-radius: 15px;
`

const Notifications = props => {
  const {} = props

  return (
    <div>
      <Header goBack={true} />

      <Body style={{ background: '#fbfbfb', display: 'flex', justifyContent: 'center' }}>
        <Notification style={{}}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ ...center }}>
              <Title style={{ fontWeight: 'bold' }}> Notifications </Title>
            </div>
            <div style={{ ...center }}>
              <Text> Clear All </Text>
            </div>
          </div>
          <hr />
          <div style={{ height: window.innerHeight - 80, overflow: 'auto' }}>
            {testData.map(({ id, title, date, from }) => {
              return (
                <li key={id}>
                  <div style={{ ...center }}>
                    <Image src={require('../../assets/images/img.jpg')} alt="User" />
                  </div>

                  <div style={{ ...center }}>
                    <Text> {title} </Text>
                  </div>

                  <div style={{ ...center }}>
                    <Text> 5 days </Text>
                  </div>
                </li>
              )
            })}
          </div>
        </Notification>
      </Body>
    </div>
  )
}

export default Notifications
