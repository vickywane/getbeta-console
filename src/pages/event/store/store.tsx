import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { inject, observer } from 'mobx-react'

import { Head, Section, Button, Tab, TabColumn } from '../../../styles/style'
import Products from './products'
import Orders from './orders'

const Store = props => {
  const [ActiveTab, setActiveTab] = useState('products')
  const { cartItemModal, openCartItemModal, closeCartItemModal } = props.ModalStore

  const { id } = props.data.event
  return (
    <div>
      <Head header>
        <Section> MarketPlace </Section>

        <Tab>
          <TabColumn
            onClick={() => {
              setActiveTab('products')
            }}
            active={ActiveTab === 'products'}
            small
          >
            Products
          </TabColumn>
          <TabColumn
            onClick={() => {
              setActiveTab('orders')
            }}
            small
            active={ActiveTab === 'orders'}
          >
            Orders
          </TabColumn>
        </Tab>

        {props.data.event.cart_items_category === null ? (
          <p> . </p>
        ) : (
          ActiveTab !== 'orders' && <Button onClick={() => openCartItemModal()}> Add Item</Button>
        )}
      </Head>

      <div style={{ padding: '1rem 1rem' }}>
        <CSSTransition in={ActiveTab === 'products'} timeout={300} unmountOnExit classNames={''}>
          <Products
            cartItemModal={cartItemModal}
            closeCartItemModal={closeCartItemModal}
            data={props.data}
          />
        </CSSTransition>

        <CSSTransition in={ActiveTab === 'orders'} timeout={300} unmountOnExit classNames={''}>
          <Orders />
        </CSSTransition>
      </div>
    </div>
  )
}

export default inject('ModalStore')(observer(Store))
