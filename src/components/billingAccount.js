import React, { useState } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { inject, observer } from 'mobx-react'
import { Stack, Select } from '@chakra-ui/core'
import * as Yup from 'yup'
import { Spinner } from 'react-bootstrap'

import useWindowWidth from '../utils/hook_style'
import {
  Text,
  Title,
  center,
  Alert,
  Button,
  Body,
  MdTitle,
  CreateCourseInputField as InputContainer
} from '../styles/style'

const Card = styled.div`
  width: auto;
  margin: 1rem 0;
  span {
    padding: 1rem 1rem;
  }
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
    border: 1px solid #c0c0c0;
    color: black;
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
  ${media.lessThan('medium')`
    width : 95%;
  `};
  ${media.lessThan('small')`
  width : 97%;
`};
`

const billingSchema = Yup.object().shape({
  bankName: Yup.string(),
  cardHolderName: Yup.string(),
  accountNumber: Yup.string()
})

const AlertComponent = ({ show, error }) =>
  show && (
    <Alert style={{ ...center, borderRadius: '5px 5px 0 0', background: error && 'red' }}>
      <Text> Your billing account has been added. </Text>
    </Alert>
  )

const BillingAccountModal = props => {
  const [bank, setBank] = useState('Guaranty Trust Bank') //default
  const [accountName, setAccountName] = useState('')
  const [accountNumber, setAccountNumber] = useState('')
  const [cvv, setCvv] = useState('')
  const [expiry, setExpiry] = useState('')

  const Width = useWindowWidth()
  const {
    subscribeToPlan,
    accountIsUpgraded,
    isLoading,
    errorCreatingBillingAccount,
    createBillingAccount,
    accountIsBillingAccountModald
  } = props.UserStore

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

    createBillingAccount(accountName, bank, accountNumber)
  }

  return (
    <div>
      {Width >= 1000 ? (
        <div style={{ ...center }}>
          <div>
            <AlertComponent show={accountIsUpgraded} error={errorCreatingBillingAccount} />
            <Text align="center">
              Billing accounts are only setup once and are used to purchase items on GetBeta{' '}
            </Text>
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
                  <input onChange={e => setCvv(e.target.value)} value={cvv} placeholder="XX-XX" />
                </InputBody>
              </FlexInputs>
            </form>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                onClick={() => handleCheckout()}
                style={{
                  width: '95%'
                }}
              >
                {isLoading ? 'Adding Details' : 'Add Details'}

                {isLoading && (
                  <div style={{ paddingLeft: '.7rem' }}>
                    <Spinner size="sm" animation="border" role="status" />
                  </div>
                )}
              </Button>
            </div>
            <br />
          </div>
        </div>
      ) : (
        <div style={{ ...center }}>
          <SmallCard>
            <AlertComponent show={accountIsUpgraded} error={errorCreatingBillingAccount} />
            <span>
              <form onSubmit={() => handleCheckout()}>
                <InputContainer>
                  <label>Bank Name</label>
                  <Select onChange={e => setBank(e.target.value)}>
                    <option value="Guaranty Trust Bank"> Guaranty Trust Bank </option>
                    <option value="Stanbic Bank"> Stanbic Bank </option>
                    <option value="Gtb"> First Bank Nigeria </option>
                  </Select>
                </InputContainer>

                <InputContainer borderColor="#c0c0c0" width="100%">
                  <label> Account Number </label>
                  <input onChange={e => {}} placeholder="Account Number" />
                </InputContainer>

                <InputContainer borderColor="#c0c0c0" width="100%">
                  <label> Cardholder Name </label>
                  <input placeholder="Cardholder Name" />
                </InputContainer>

                <div style={{ margin: '1rem 0', display: 'flex', justifyContent: 'center' }}>
                  <Button
                    onClick={e => {
                      e.preventDefault()
                      handleCheckout()
                    }}
                    style={{ width: '100%' }}
                  >
                    Add Details
                  </Button>
                </div>
              </form>
            </span>
          </SmallCard>
        </div>
      )}
    </div>
  )
}

export default inject('UserStore')(observer(BillingAccountModal))
