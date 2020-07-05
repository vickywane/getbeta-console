import React, { useState } from "react"
import Flex from "styled-flex-component"
import styled from "styled-components"
import { CSSTransition } from "react-transition-group"
import { inject, observer } from "mobx-react"
import { FiPlus } from "react-icons/fi"

import {
  Hover,
  Title,
  Text,
  Head,
  Section,
  Button,
  Contain,
  Tab,
  TabColumn,
} from "../../../styles/style"
import ProductItem from "./productItem"
import Products from "./products"
import Orders from "./orders"

const List = styled.li`
  list-style: none;
  margin: 1rem 0rem;
  padding: 0rem 1rem;
`

const Table = styled.table`
  width : 100%
  border : 1px solid grey;
  padding : 0.5rem;
  tr {
    text-align: center;
    border: 1px solid grey;
    th {
      font-size: 1.2rem;
      font-family : calibri;
      font-weight : 500;
    }
  }
`

const Grid = styled.div`
  display : grid;
  grid-gap : 1rem 1rem
    grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
`

const Heads = styled.li`
  list-style: none;
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
`

const Store = props => {
  const [ActiveTab, setActiveTab] = useState("products")
  const {
    cartItemModal,
    openCartItemModal,
    closeCartItemModal,
  } = props.ModalStore

  const { id } = props.data.event
  return (
    <div>
      <Head header>
        <Section> Store </Section>

        <Tab>
          <TabColumn
            onClick={() => {
              setActiveTab("products")
            }}
            active={ActiveTab === "products"}
            small
          >
            Products
          </TabColumn>
          <TabColumn
            onClick={() => {
              setActiveTab("orders")
            }}
            small
            active={ActiveTab === "orders"}
          >
            Orders
          </TabColumn>
        </Tab>

        {props.data.event.cart_items_category === null ? (
          <p> . </p>
        ) : (
          ActiveTab !== "orders" && (
            <Button onClick={() => openCartItemModal()}> Add Item</Button>
          )
        )}
      </Head>

      <div style={{ padding: "2rem" }}>
        <CSSTransition
          in={ActiveTab === "products"}
          timeout={300}
          unmountOnExit
          classNames={""}
        >
          <Products
            cartItemModal={cartItemModal}
            closeCartItemModal={closeCartItemModal}
            data={props.data}
          />
        </CSSTransition>

        <CSSTransition
          in={ActiveTab === "orders"}
          timeout={300}
          unmountOnExit
          classNames={""}
        >
          <Orders />
        </CSSTransition>
      </div>
    </div>
  )
}

export default inject("ModalStore")(observer(Store))
