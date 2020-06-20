import React, { useState, useEffect } from "react"
import Flex from "styled-flex-component"
import styled from "styled-components"
import { useQuery } from "@apollo/react-hooks"

import { Hover, Title, Text, Section, Button } from "../../../styles/style"
import { GET_ALL_EVENT_CART_ITEMS } from "../../../data/queries"
import ProductItem from "./productItem"

const Item = [
  {
    id: 1,
    name: "Blue Collaborative Sweat Shirt",
    price: "$80",
  },
  {
    id: 2,
    name: "White Collaborative Sweat Shirt",
    price: "FREE",
  },
  {
    id: 3,
    name: "Blue Google Cloud Sweat Shirt",
    price: "£30",
  },

  {
    id: 4,
    name: "White Google Cloud Platform Sweat Shirt",
    price: "$25.00",
  },
]

const List = styled.li`
  list-style: none;
  margin: 1rem 0rem;
  padding: 0rem 1rem;
`
const Block = styled.div`
	padding : 0.6rem 0.7rem
	cursor: pointer;
	margin : 0rem 1rem
	border: 1px solid grey;
	text-align : center
	font-family: calibri
	border-radius : 5px;
	width : 8rem;
`

const Shop = props => {
  const { cart_items_category } = props.data.event
  const [categoryId, setcategoryId] = useState(null)

  const { data, loading, error } = useQuery(GET_ALL_EVENT_CART_ITEMS, {
    variables: {
      // categoryId: categoryId,
      Limit: 3,
    },
  })

  useEffect(() => {
    setcategoryId(
      cart_items_category === null ? null : cart_items_category[0].id
    )
  }, ["t"])

  if (error) {
    console.log(error)
    return <p> error. ... {categoryId} </p>
  }
  if (loading) {
    return <p> loading. ... </p>
  }
  console.log(data, "shop")
  return (
    <div>
      <br />
      <div>
        <Text style={{ color: "grey", padding: "0rem 1rem" }}>
          Showing: {Item.length} of {Item.length} items{" "}
        </Text>
      </div>

      {cart_items_category === null ? (
        <div>
          <Text center>This Event has no cart items yet</Text>
        </div>
      ) : (
        <div>
          <div style={{ display: "flex" }}>
            {cart_items_category.map(({ id, name }) => {
              return (
                <Block
                  onClick={() => {
                    setcategoryId(id)
                  }}
                  key={id}
                >
                  {name}
                </Block>
              )
            })}
          </div>
          <hr />

          <ProductItem categoryId={categoryId} screen={"store"} />
        </div>
      )}
    </div>
  )
}

export default Shop
