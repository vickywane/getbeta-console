import React, { useState } from 'react'
import styled from 'styled-components'
import { FiCheck } from 'react-icons/fi'
import { navigate } from '@reach/router'
import media from 'styled-media-query'
import { inject, observer } from 'mobx-react'
import { Stack, Select } from '@chakra-ui/core'
import * as Yup from 'yup'
import { Spinner } from 'react-bootstrap'

import useWindowWidth from '../../utils/hook_style'

import Header from '../../components/headers/header'
import {
  Text,
  Title,
  center,
  Alert,
  Button,
  Body,
  MdTitle,
  CreateCourseInputField as InputContainer
} from '../../styles/style'

const StyledBody = styled(Body)`
  height: calc(100vh - 55px);
  overflow: auto;
  background: rgba(233, 241, 251, 0.81);
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  place-items: center;
  ${media.lessThan('medium')`
      display : flex;
      flex-direction : column;
      align-items : center;
  `};
`

const Card = styled.div`
  width: auto;
  background: #0072ce;
  border: 1px solid #0072ce;
  color: #fff;
  border-radius: 5px;
  margin: 1rem 0;
  span {
    padding: 1rem 1rem;
  }
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
    font-size: 0.85rem;
  }
  input {
    display: flex;
    flex: 1;
    width: ${props => props.width};
    height: 50px;
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
  margin: .5rem 1rem;
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
  ${media.lessThan('medium')`
    width : 100%;
    display : flex;
    flex-direction : column;
    align-items : center;
  `}
`

const SmallCard = styled.div`
  background: #fff;
  border: 0;
  border-radius: 5px;
  box-shadow: 0 2px 3px grey;
  span {
    padding: 1rem;
  }
  ${media.lessThan('medium')`
    width : 90%;
    padding-right : 30px;
  `};
  ${media.lessThan('small')`
  width : 97%;
    padding-right : 20px;
`};
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
  const [bank, setBank] = useState('Guaranty Trust Bank') //default
  const [accountName, setAccountName] = useState('')
  const [accountNumber, setAccountNumber] = useState('')
  const [cvv, setCvv] = useState('')
  const [expiry, setExpiry] = useState('')

  const Width = useWindowWidth()
  const { subscribeToPlan, isLoading, accountIsUpgraded } = props.UserStore

  const handleCheckout = () => {
    const isValidAccount = billingSchema.isValid({
      bankName: bank,
      cardHolderName: '',
      accountNumber: ''
    })

    // isValidAccount
    //   .then(() => {
    //   })
    //   .catch(e => console.log(e))

    subscribeToPlan(accountName, bank, accountNumber, name)
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
              <Grid style={{ width: '100%' }}>
                <Card>
                  <List>
                    <div>
                      <Title align="center"> {name} </Title>
                      <hr style={{ background: '#fff' }} />

                      <ul>
                        {features.map(items => {
                          return (
                            <li>
                              <div style={{ display: 'flex' }}>
                                <div style={{ margin: '0 0.5rem' }}>
                                  <FiCheck style={{ fontSize: '1.3rem', color: 'white' }} />
                                </div>

                                <Text> {items} </Text>
                              </div>
                            </li>
                          )
                        })}
                      </ul>
                      <hr style={{ background: '#fff' }} />
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

                <Card style={{ minWidth: '30rem' }}>
                  {accountIsUpgraded && (
                    <Alert style={{ ...center, borderRadius: '5px 5px 0 0' }}>
                      <Text> You account has been upgraded to a {name} account </Text>{' '}
                    </Alert>
                  )}

                  <span>
                    <Title align="center"> Confirm Payment Details </Title>
                    <hr style={{ background: '#fff' }} />
                    <form onSubmit={() => handleCheckout()}>
                      <InputBody style={{ color: 'black' }}>
                        <label style={{ color: '#fff' }}>BANK NAME</label>
                        <Select onChange={e => setBank(e.target.value)}>
                          <option value="Guaranty Trust Bank"> Guaranty Trust Bank </option>
                          <option value="Stanbic Bank"> Stanbic Bank </option>
                          <option value="First Bank Nigeria"> First Bank Nigeria </option>
                        </Select>
                      </InputBody>

                      <InputBody width="100%">
                        <label> ACCOUNT NUMBER </label>
                        <input
                          value={accountNumber}
                          onChange={e => setAccountNumber(e.target.value)}
                          placeholder="XXXX-XXXX-XXXX-XXXX"
                        />
                      </InputBody>

                      <InputBody width="100%">
                        <label> CARDHOLDER NAME</label>

                        <input
                          value={accountName}
                          onChange={e => setAccountName(e.target.value)}
                          placeholder="Cardholder Name"
                        />
                      </InputBody>

                      <FlexInputs>
                        <InputBody width="100%">
                          <label> EXPIRY DATE </label>
                          <input
                            onChange={e => setExpiry(e.target.value)}
                            value={expiry}
                            placeholder="01-01"
                          />
                        </InputBody>

                        <InputBody width="100%">
                          <label> CVV </label>
                          <input
                            onChange={e => setCvv(e.target.value)}
                            value={cvv}
                            placeholder="XX-XX"
                          />
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
                          color: '#0072ce',
                          width: '95%'
                        }}
                      >
                        {isLoading ? 'Billing Account' : 'Proccess Payment'}

                        {isLoading && (
                          <div style={{ paddingLeft: '.7rem' }}>
                            <Spinner size="sm" animation="border" role="status" />
                          </div>
                        )}
                      </Button>
                    </div>
                    <br />
                  </span>
                </Card>
              </Grid>
            </div>
          </div>
        ) : (
          <div style={{ ...center }}>
            <SmallCard>
              {accountIsUpgraded && (
                <Alert style={{ ...center, borderRadius: '5px 5px 0 0', width: '100%' }}>
                  <Text> You account has been upgraded to a {name} account </Text>{' '}
                </Alert>
              )}
              <span>
                <form onSubmit={() => handleCheckout}>
                  <MdTitle small align="center">
                    Confirm Payment Details
                  </MdTitle>
                  <hr />

                  <div>
                    <div style={{ paddingLeft: '5px', display: 'flex', justifyContent: 'center' }}>
                      <Text>
                        {price} {name}.{' '}
                      </Text>
                      <Text
                        small
                        style={{ color: '#0072ce', cursor: 'pointer', margin: '0 .5rem' }}
                        onClick={() => navigate(-1)}
                      >
                        Change Plan
                      </Text>
                    </div>
                  </div>

                  <hr />

                  <InputContainer>
                    <label>Bank Name</label>
                    <Select onChange={e => setBank(e.target.value)}>
                      <option value="Guaranty Trust Bank"> Guaranty Trust Bank </option>
                      <option value="Stanbic Bank"> Stanbic Bank </option>
                      <option value="Gtb"> First Bank Nigeria </option>
                    </Select>
                  </InputContainer>

                  <InputContainer borderColor="#c0c0c0" width="90%">
                    <label> Account Number </label>
                    <input onChange={e => {}} placeholder="Account Number" />
                  </InputContainer>

                  <InputContainer borderColor="#c0c0c0" width="90%">
                    <label> Cardholder Name </label>
                    <input placeholder="Cardholder Name" />
                  </InputContainer>

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
              </span>
            </SmallCard>
          </div>
        )}
      </StyledBody>
    </div>
  )
}

export default inject('UserStore')(observer(Upgrade))
