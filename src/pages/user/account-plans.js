import React from 'react'
import styled from 'styled-components'
import { Link, navigate } from '@reach/router'
import { FiCheck } from 'react-icons/fi'
import media from 'styled-media-query'

import { Text, Body, MdTitle, Title, Button, Dot } from '../../styles/style'
import Header from '../../components/headers/header'
import { SubscriptionPlans } from '../../mockData'

const Card = styled.div`
  padding: 2rem 1.5rem;
  color: #0072ce;
  border: 1px solid #0072ce;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ul {
    padding: 0.5rem 0.5rem;
    margin: 0;
    list-style: none;
    li {
      margin: 1rem 0.5rem;
    }
  }
  &:hover {
    border: 0;
    box-shadow: 0 2px 3px grey;
    cursor: pointer;
  }
`

const Grid = styled.div`
  display: grid;
  grid-gap: 2rem 2rem;
  place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  ${media.lessThan('large')`
    grid-template-columns : repeat(auto-fit, minmax(20rem, 1fr))    
`};
`

const Bar = styled.div`
  height: 5vh;
  padding: 2rem 1rem;
  background: rgba(233, 241, 251, 0.81);
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: #0072ce;
  }
`

const AccountPlans = props => {
  return (
    <div>
      <Header goBack={true} />

      <Body style={{ height: window.innerHeight - 80, overflow: 'auto' }}>
        <Bar>
          <span>
            <div style={{ display: 'flex' }}>
              <Dot background="#0072ce" />
              <Text>
                <b> Current Plan : </b> Free Starter{' '}
              </Text>
            </div>

            <div style={{ display: 'flex' }}>
              <Dot background="#0072ce" />
              <Text> Expires in : 28 days </Text>
            </div>
          </span>
        </Bar>
        <Grid>
          {SubscriptionPlans.map(({ price, id, name, features }) => {
            return (
              <Card key={id}>
                <MdTitle> {name} </MdTitle>
                <ul>
                  {features.map(item => {
                    return (
                      <li>
                        <div style={{ display: 'flex' }}>
                          <div style={{ margin: '0 0.5rem' }}>
                            <FiCheck style={{ fontSize: '1.6rem', color: 'green' }} />
                          </div>
                          <Text> {item} </Text>
                        </div>
                      </li>
                    )
                  })}
                </ul>
                <span>
                  <MdTitle style={{ color: '#0072ce' }} align="center">
                    {price}{' '}
                  </MdTitle>
                  <Text align="center"> per month </Text>
                </span>
                <Button
                  onClick={() => {
                    navigate('/upgrade', {
                      state: {
                        name: name,
                        price: price,
                        features: features
                      }
                    })
                  }}
                >
                  Upgrade Plan{' '}
                </Button>
              </Card>
            )
          })}
        </Grid>
      </Body>
    </div>
  )
}

export default AccountPlans
