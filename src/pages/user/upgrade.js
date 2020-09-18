import React from 'react'
import styled from 'styled-components'
import { FiCheck } from 'react-icons/fi'
import { navigate } from '@reach/router'

import Header from '../../components/headers/header'
import { Text, MdTitle, Title, Button, Body } from '../../styles/style'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  place-items: center;
`

const Card = styled.div`
  width: 90%;
  background: #0072ce;
  border: 1px solid #0072ce;
  color: #fff;
  padding: 1rem 1rem;
  border-radius: 5px;
`

const center = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const List = styled.div`
  padding: 0.5rem 0.5rem;
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    li {
      margin: 1rem 0.5rem;
    }
  }
`

const InputBody = styled.div`
  margin: 2rem 1rem;
  label {
  }
  input {
    display: flex;
    flex: 1;
    width: ${props => props.width};
    height: 55px;
    border: 1px solid #fff;
    color: blue;
    padding: 0.5rem 1rem;
    border-radius: 3px;
    font-size: 0.9rem;
  }
`

const FlexInputs = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  place-items: center;
`

const Upgrade = props => {
  // Data on this page is fed by prev page
  // manually coming here without passing prev page would cause an exception
  // edge case scenario
  try {
    var { name, price, features } = props.location.state
  } catch (e) {
    alert('Select a subscription from previous page first')
    navigate(-1)
  }

  return (
    <Body>
      <Header goBack={true} />

      <div style={{ height: window.innerHeight - 70, overflow: 'auto', ...center }}>
        <Grid style={{ width: '100%' }}>
          <Card>
            <List>
              <div>
                <MdTitle align="center"> {name} </MdTitle>

                <ul>
                  {features.map(items => {
                    return (
                      <li>
                        <div style={{ display: 'flex' }}>
                          <div style={{ margin: '0 0.5rem' }}>
                            <FiCheck style={{ fontSize: '1.6rem', color: 'green' }} />
                          </div>

                          <Text> {items} </Text>
                        </div>
                      </li>
                    )
                  })}
                </ul>
                <span>
                  <MdTitle align="center" color="#fff">
                    {price}
                  </MdTitle>
                  <Text color="#fff" align="center">
                    per month{' '}
                  </Text>
                </span>
              </div>
            </List>
          </Card>

          <Card>
            <br />
            <MdTitle align="center"> Transaction Details </MdTitle>

            <form onSubmit={() => {}}>
              <InputBody width="100%">
                <label> CARD NUMBER </label>
                <input placeholder="XXXX-XXXX-XXXX-XXXX" />
              </InputBody>

              <InputBody width="100%">
                <label> CARDHOLDER NAME</label>

                <input placeholder="Cardholder Name" />
              </InputBody>

              <FlexInputs>
                <InputBody width="100%">
                  <label> EXPIRY DATE </label>
                  <input placeholder="01-01" />
                </InputBody>

                <InputBody width="100%">
                  <label> CVV </label>
                  <input placeholder="XX-XX" />
                </InputBody>
              </FlexInputs>
            </form>
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                onClick={() => {}}
                style={{
                  border: '1px solid #fff',
                  background: '#fff',
                  color: '#0072ce'
                }}
              >
                Proccess Payment
              </Button>
            </div>
            <br />
          </Card>
        </Grid>
      </div>
    </Body>
  )
}

export default Upgrade
