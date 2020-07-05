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
  Section,
  Button,
  Contain,
  Tab,
  TabColumn,
} from "../../../styles/style"
import ProductItem from "./productItem"
import Products from "./products"

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

const Head = styled.div`
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  li {
    list-style: none;
  }
`

const Orders = (props):JSX.Element => {
  return (
    <div>
      <Head>
        <li>
          <Text center style={{ fontWeight: "550" }}>
            Name
          </Text>
        </li>

        <li>
          <Text center style={{ fontWeight: "550" }}>
            Item Id
          </Text>
        </li>

        <li>
          <Text center style={{ fontWeight: "550" }}>
            Purchase Date
          </Text>
        </li>

        <li>
          <Text center style={{ fontWeight: "550" }}>
            Quantity
          </Text>
        </li>
        <li>
          <Text center style={{ fontWeight: "550" }}>
            Price
          </Text>
        </li>
      </Head>

      <hr />
      <Head>
        <Text center> Somebody S. Somebody </Text>
        <Text center> #264063500 </Text>
        <Text center> 12-12-12 Fri </Text>
        <Text center> 12 </Text>
        <Text center> $125 </Text>
      </Head>
    </div>
  )
}

export default Orders
