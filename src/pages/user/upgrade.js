import React, { useState } from 'react'
import styled from 'styled-components'
import { FiCheck } from 'react-icons/fi'
import { navigate } from '@reach/router'
import media from 'styled-media-query'
import { inject, observer } from 'mobx-react'
import { Stack, Select } from '@chakra-ui/core'
import * as Yup from 'yup'

import useWindowWidth from '../../utils/hook_style'

import Header from '../../components/headers/header'
import { Text, Title, center, Button, Body, MdTitle } from '../../styles/style'

const StyledBody = styled(Body)`
  height: calc(100vh - 55px);
  overflow: auto;
  background: rgba(233, 241, 251, 0.81);
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 45% 55%;
  place-items: center;
  ${media.lessThan('medium')`
      display : flex;
      flex-direction : column;
      align-items : center;
  `};
`

const Card = styled.div`
  width: 80%;
  background: #0072ce;
  border: 1px solid #0072ce;
  color: #fff;
  padding: 1rem 1rem;
  border-radius: 5px;
  margin: 1rem 0;
`

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
  ${media.lessThan('medium')`display : none`};
`

const InputBody = styled.div`
  margin: 1rem 1rem;
  label {
    .9rem;
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
  select {
    border: 1px solid #c0c0c0;
  }
  ${media.lessThan('large')`
  label {
   font-size : 1rem;
  }
  input {
    display: flex;
    flex: 1;
    width: ${props => props.width};
    height: 40px;
    border: 1px solid ${props => (props.borderColor ? props.borderColor : '#fff')};
    color: blue;
    padding: 0.5rem 1rem;
    border-radius: 3px;
    font-size: 0.9rem;
  }
  ${media.lessThan('medium')`
    margin: 1rem 1rem;
    label {
      font-size : .85rem;
    }
    input {
      font-size : .9rem;
      background: #fbfbfb;
      &:focus {
        box-shadow: 0 0 1.5px 1.5px #0072ce;
      }
    }
  `};
  ${media.lessThan('small')`
  margin: 1rem 1rem;
  label {
    font-size : .8rem;
  }
  input {
    font-size : .8rem;
  }
`};
  `};
`

const FlexInputs = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  place-items: center;
`

const SmallCard = styled.div`
  background: #fff;
  border: 0;
  border-radius: 5px;
  box-shadow: 0 2px 3px grey;
  padding: 1rem;
`

const billingSchema = Yup.object().shape({
  bankName: Yup.string(),
  cardHolderName: Yup.string(),
  accountNumber: Yup.string()
})

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
  const [bank, setBank] = useState('')
  const [accountName, setAccountName] = useState('')
  const [accountNumber, setAccountNumber] = useState('')

  const Width = useWindowWidth()
  const { subscribeToPlan } = props.UserStore

  const handleCheckout = () => {
    const isValidAccount = billingSchema.isValid({
      bankName: bank,
      cardHolderName: '',
      accountNumber: ''
    })

    isValidAccount
      .then(() => {
        subscribeToPlan(accountName, bank, accountNumber)
      })
      .catch(e => console.log(e))
  }

  return (
    <div style={{ height: '100%' }}>
      <Header goBack={true} />

      <StyledBody>
        {Width >= 1000 ? (
          <div style={{ ...center }}>
            <div>
              <br />
              <br />
              <br />
              <br />
              <Grid style={{ width: '100%' }}>
                <Card>
                  <List>
                    <div>
                      <Title align="center"> {name} </Title>

                      <ul>
                        {features.map(items => {
                          return (
                            <li>
                              <div style={{ display: 'flex' }}>
                                <div style={{ margin: '0 0.5rem' }}>
                                  <FiCheck style={{ fontSize: '1.4rem', color: 'white' }} />
                                </div>

                                <Text> {items} </Text>
                              </div>
                            </li>
                          )
                        })}
                      </ul>
                      <span>
                        <Title align="center" color="#fff">
                          {price}
                        </Title>
                        <Text color="#fff" align="center">
                          per month{' '}
                        </Text>
                      </span>
                    </div>
                  </List>
                </Card>

                <Card>
                  <Title align="center"> Transaction Details </Title>

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
                      onClick={() => handleCheckout()}
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
          </div>
        ) : (
          <StyledBody style={{ ...center }}>
            <SmallCard style={{ width: '80%' }}>
              <form onSubmit={() => handleCheckout}>
                <MdTitle small align="center">
                  {' '}
                  Subscription Checkout{' '}
                </MdTitle>
                <hr />

                <div>
                  <Title> Transaction Summary : </Title>

                  <div style={{ paddingLeft: '5px', display: 'flex' }}>
                    <Text> Plan: {name}. </Text>
                    <Text
                      small
                      style={{ color: '#0072ce', cursor: 'pointer', margin: '0 .5rem' }}
                      onClick={() => navigate(-1)}
                    >
                      Change Plan
                    </Text>
                  </div>

                  <Text style={{ paddingLeft: '5px' }}> Price: {price} </Text>
                </div>

                <hr />

                <InputBody>
                  <label>Bank Name</label>
                  <Select onChange={e => setBank(e.target.value)}>
                    <option value="Guaranty Trust Bank"> Guaranty Trust Bank </option>
                    <option value="Stanbic Bank"> Stanbic Bank </option>
                    <option value="Gtb"> First Bank Nigeria </option>
                  </Select>
                </InputBody>

                <InputBody borderColor="#c0c0c0" width="100%">
                  <label> Card Number </label>
                  <input onChange={e => {}} placeholder="Account Name" />
                </InputBody>

                <InputBody borderColor="#c0c0c0" width="100%">
                  <label> Cardholder Name </label>
                  <input placeholder="Account Name" />
                </InputBody>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <InputBody borderColor="#c0c0c0" width="11rem">
                    <label> Expiry Date </label>
                    <input placeholder="Account Name" />
                  </InputBody>

                  <InputBody borderColor="#c0c0c0" width="11rem">
                    <label> CVV </label>
                    <input placeholder="CVV NUMBER" />
                  </InputBody>
                </div>
                <div style={{ margin: '1rem 0', display: 'flex', justifyContent: 'center' }}>
                  <Button
                    onClick={e => {
                      e.preventDefault()
                      handleCheckout()
                    }}
                    style={{ width: '90%' }}
                  >
                    Confirm Payment
                  </Button>
                </div>
              </form>
            </SmallCard>
          </StyledBody>
        )}
      </StyledBody>
    </div>
  )
}

export default inject('UserStore')(observer(Upgrade))
