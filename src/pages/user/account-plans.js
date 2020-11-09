import React from 'react'
import styled from 'styled-components'
import { Link, navigate } from '@reach/router'
import { FiCheck } from 'react-icons/fi'
import media from 'styled-media-query'

import { observer, inject } from 'mobx-react'
import { Text, Body, MdTitle, Hover, Button, Dot } from '../../styles/style'
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
  width: 70%;
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
  ${media.lessThan('huge')`
  width: 70%;
`};
  ${media.lessThan('large')`
  padding: 1rem 1rem;
  ul {
    padding: .2rem .3rem;
    li {
      margin: .2rem 0.2rem;
    }
  }
  width: 100%;
`};
  ${media.lessThan('medium')`
  padding: 1rem 1rem;
  ul {
    padding: .2rem .3rem;
    li {
      margin: .2rem 0.2rem;
    }
  }
      width: 65%;
  `};
  ${media.lessThan('small')`
  width: 75%;
  ul {
    padding: .2rem .3rem;
    li {
      margin: .2rem 0.2rem;
    }
  }
`};
`

const Grid = styled.div`
  display: grid;
  grid-gap: 2rem 2rem;
  place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  ${media.lessThan('large')`
    grid-gap: 2rem 1rem;
    grid-template-columns : repeat(auto-fit, minmax(21rem, 1fr))    
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
  ${media.lessThan('medium')`
       display : flex;
       justify-content : center;
       align-items : center;
       padding: 1.5rem .5rem;
  `};
`

const AccountPlans = props => {
  const { role } = props.location.state.userData

  return (
    <div>
      <Header goBack={true} />

      <div>
        <Bar>
          <span>
            <div style={{ display: 'flex' }}>
              <Dot background="#0072ce" />
              <Text>
                <b> Current Plan : </b> {role}
              </Text>
            </div>

            <div style={{ display: 'flex' }}>
              <Dot background="#0072ce" />
              <Text> Expires in : 28 days </Text>
            </div>
          </span>
        </Bar>
        <Body style={{ height: window.innerHeight - 90, overflow: 'auto' }}>
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
                            <Hover style={{ margin: '0 0.5rem' }}>
                              <FiCheck style={{ color: 'green' }} />
                            </Hover>
                            <Text style={{ paddingTop: '7px' }}> {item} </Text>
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
                    disabled={name.toLocaleLowerCase() === role}
                    style={{
                      background: name.toLocaleLowerCase() === role && 'grey',
                      border: name.toLocaleLowerCase() === role && '0'
                    }}
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
                    {name.toLocaleLowerCase() === role
                      ? 'Current Subscription Plan'
                      : 'Upgrade Plan'}
                  </Button>
                </Card>
              )
            })}
          </Grid>
        </Body>
      </div>
    </div>
  )
}

export default AccountPlans
