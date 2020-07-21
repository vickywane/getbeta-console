import React, { useState } from 'react'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'
import { FiCheck } from 'react-icons/fi'

import { Title, Text, Body, Button } from '../../../styles/style'

const Card = styled.div`
  background: #fff;
  box-shadow: 0px 3px 3px #c0c0c0;
  padding: 1rem 1rem;
  height: 60vh;
  width: 50rem;
`

const InputBox = styled.div`
  display: flex;
  width: 35rem;
  background: #fff;
  input {
    display: flex;
    flex: 1;
    width: auto;
    color: #0e2f5a;
    font-size: 1.1rem;
    padding: 0.7rem 0.7rem;
    border: 1px solid #f84e06;
    background: transparent;
    outline: 1px solid #f84e06a;
  }
  div {
    height: auto;
    width: 4rem;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f84e06;
    cursor: pointer;
  }
`

const StoreDetails = (props): JSX.Element => {
  const [Step, setStep] = useState<string>('first')
  const [CardNo, setCardNo] = useState<number>(0)

  return (
    <Body
      style={{
        background: '#fbfbfb',
        height: window.innerHeight - 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Card>
        <div style={{ textAlign: 'right' }}>
          <Text style={{ cursor: 'pointer' }} small>
            {' '}
            Skip{' '}
          </Text>
        </div>
        <div style={{ textAlign: 'center' }}>
          <img
            style={{ maxWidth: '15%' }}
            src={require('../../../assets/ssvg/sample.svg')}
            alt={'Marketplace '}
          />
        </div>
        <Title center small>
          {' '}
          Event Marketplace
        </Title>
        <Text center>
          {' '}
          Marketplace gives you the ability to sell your event items to attendees{' '}
        </Text>

        <CSSTransition timeout={300} unmountOnExit in={Step === 'first'}>
          <div>
            <div style={{ textAlign: 'center' }}>
              <Button onClick={() => setStep('Second')}> Setup Marketplace Payment Gateway </Button>
            </div>
            <br />
            <br />
            <br />
            <br />
            <Text color="grey" small center>
              {' '}
              Your Event data would remain private until your payment gateway has been setup{' '}
            </Text>
            <Text color="grey" small center>
              {' '}
              Learn More About <a href={'https://my-event.com'}> Event MarketPlace </a> on Oasis.{' '}
            </Text>
          </div>
        </CSSTransition>

        <CSSTransition in={Step === 'Second'} timeout={300} unmountOnExit>
          <div>
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <InputBox>
                <input
                  value={CardNo}
                  onChange={e => setCardNo(parseInt(e.target.value))}
                  type={'number'}
                  placeholder={'Credit' + ' Card Number'}
                />
                <div>
                  <FiCheck style={{ fontSize: '2rem' }} />
                </div>
              </InputBox>
            </div>

            <br />
            <br />
            <br />
            <br />

            <div style={{ textAlign: 'right' }}>
              <Button transparent={CardNo < 10} disabled={CardNo < 10}>
                Proceed To Marketplace
              </Button>
            </div>
          </div>
        </CSSTransition>
      </Card>
    </Body>
  )
}

export default StoreDetails
