import React from "react"
import Flex from "styled-flex-component"
import styled from "styled-components"
import { useQuery } from "@apollo/react-hooks"
import { FiDollarSign, FiMoreVertical, FiShoppingCart } from "react-icons/fi"

import { EmptyData } from "../../../components/placeholders"
import { GET_CATEGORY } from "../../../data/queries"
import { Hover, Text, Section, Button, Body } from "../../../styles/style"

const Column = styled.div``

const Item = styled.div`
  border: 0.5px solid grey;
  border-radius: 7px;
  max-width: 27rem;
`

const Grid = styled.div`
  display : grid;
  grid-gap : 1rem 1rem
 grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
`

const List = styled.li`
  list-style: none;
  margin: 1rem 0rem;
  padding: 0rem 1rem;
`

const ProductItem = props => {
  const { name, price, screen, categoryName } = props

  const { data, loading, error } = useQuery(GET_CATEGORY, {
    variables: {
      id: props.categoryId,
    },
  })

  if (error) {
    console.log(error)
    return <p> error. ... </p>
  }
  if (loading) {
    return <p> loading. ... </p>
  }

  return (
    <Grid>
      {data.category[0].items === null ? (
        <EmptyData
          link="https://my_event.netlify.com"
          feature="Event Marketplace"
          message={`You dont have any item within this category.  \n Use the **Add Item Button**  to create you first item within this category.`}
        />
      ) : (
        data.category[0].items.map(
          ({ id, name, description, quantity, price, isFree }) => {
            return (
              <List key={id}>
                <Item>
                  <Body
                    style={{
                      padding: "0.5rem 0.5rem",
                      display: "flex",
                      justifyContent: "space-between",
                      background: "#fbfbfb",
                      borderRadius: "5px 5px 5px 0px",
                    }}
                  >
                    <Text bold small center>
                      {name}
                    </Text>
                    <Hover style={{ padding: "0rem 0.3rem" }}>
                      <FiMoreVertical style={{ fontSize: "1.5rem" }} />{" "}
                    </Hover>
                  </Body>
                  <Body
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <Flex justifyCenter>
                      <img
                        alt="product"
                        style={{
                          height: "auto",
                          maxWidth: "25%",
                        }}
                        src={require("../../../assets/images/bag.png")}
                      />
                    </Flex>
                    <Text small center>
                      {description}{" "}
                    </Text>
                    <Flex justifyBetween>
                      <Flex>
                        <Hover style={{ padding: "0rem 0.3rem" }}>
                          <FiDollarSign style={{ fontSize: "1.5rem" }} />{" "}
                        </Hover>
                        <Text> {price} </Text>{" "}
                      </Flex>{" "}
                      <Flex>
                        <Hover style={{ padding: "0rem 0.3rem" }}>
                          <FiShoppingCart style={{ fontSize: "1.5rem" }} />{" "}
                        </Hover>
                        <Text> {quantity} </Text>{" "}
                      </Flex>
                    </Flex>
                    <Button>
                      {isFree ? "FREE - Redeem One " : "Purchase - 20 left"}
                    </Button>{" "}
                  </Body>
                </Item>
              </List>
            )
          }
        )
      )}
    </Grid>
  )
}

export default ProductItem
