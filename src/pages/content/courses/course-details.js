import React, { useState } from 'react'
import styled from 'styled-components'

import { FiChevronRight } from 'react-icons/fi'
import { Title, Text, Hover } from '../../../styles/style'
import { CourseData, TabData } from '../../../mockData'

const Tabs = styled.div`
  height: 7vh;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0 3px 5px grey;
  padding: 0 2rem;
  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin: 0;
    list-style: none;
    li {
      cursor: pointer;
    }
  }
`

const StyledTitle = styled(Title)`
  color: ${props => props.active && '#0072ce'};
`

const Outline = styled.div`
  padding: 1rem 1rem;
  background: #fff;
  box-shadow: 0 3px 5px grey;
  border-radius: 5px;
  ul {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    li {
      margin: 1rem 0;
      display: flex;
      justify-content: space-between;
      list-style: rounded;
    }
  }
`

const CourseDetails = () => {
  const [ActiveView, setActiveView] = useState('Topics')

  return (
    <div>
      <Tabs>
        <ul>
          {TabData.map(({ id, name }) => {
            return (
              <li id={id} onClick={() => setActiveView(name)}>
                <StyledTitle active={ActiveView === name}> {name} </StyledTitle>
              </li>
            )
          })}
        </ul>
      </Tabs>
      <br />
      <Outline>
        <Title style={{ paddingLeft: '1rem' }}> Course Outline </Title>
        <ul>
          {CourseData.map(({ id, title, duration, explanation }) => {
            return (
              <li key={id}>
                <div style={{ display: 'flex' }}>
                  <Hover style={{ marginRight: '1rem' }}>
                    <FiChevronRight style={{ fontSize: '1.7rem' }} />
                  </Hover>

                  <Title small style={{ cursor: 'pointer' }}>
                    {' '}
                    {title}{' '}
                  </Title>
                </div>

                <Text color="grey"> {duration} </Text>
              </li>
            )
          })}
        </ul>
      </Outline>
    </div>
  )
}

export default CourseDetails
