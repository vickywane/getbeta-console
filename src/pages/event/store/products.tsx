import React, { useState, useEffect } from "react"
import Flex from "styled-flex-component"
import styled from "styled-components"
import { FiPlus, FiX } from "react-icons/fi"
import { Modal } from "react-bootstrap"
import { useMutation } from "@apollo/react-hooks"

import {
  Hover,
  Title,
  Text,
  Section,
  Label,
  Button,
  Head,
  Contain,
} from "../../../styles/style"
import ProductItem from "./productItem"
import { CREATE_CART_CATEGORY } from "../../../data/mutations"
import AddItemModal from "./addItemModal"

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

const Block = styled.div`
  padding : 0.6rem 0.7rem
  cursor: pointer;
  margin : 0rem 1rem
  border: ${props => (props.actve ? " 2px solid blue" : " 2px solid grey")};
  text-align : center
  font-family: calibri
  border-radius : 5px;
  width : 8rem;
`

const Input = styled.input`
  width: 27rem;
  border: 1px solid blue;
  border-radius: 5px;
  padding: 0.6rem 1rem;
`

const Products = props => {
  const [Name, setName] = useState("")
  const [categoryId, setcategoryId] = useState(null)
  const [categoryName, setCategoryName] = useState("")
  const [createCategory, { data, loading, error }] = useMutation(
    CREATE_CART_CATEGORY
  )

  const [Category, setCategory] = useState(false)
  const { id, cart_items_category } = props.data.event
  const { cartItemModal, closeCartItemModal } = props

  useEffect(() => {
    setcategoryId(
      cart_items_category === null ? null : cart_items_category[0].id
    )
  }, ["t"])
  console.log(cart_items_category, "pro")
  return (
    <div>
      <AddItemModal
        visibility={cartItemModal}
        categoryId={categoryId}
        closeModal={closeCartItemModal}
      />
      <Modal
        onHide={() => setCategory(!Category)}
        style={{ margin: "2rem 0rem" }}
        show={Category}
      >
        <Head>
          <Section> New Category </Section>

          <Hover onClick={() => setCategory(!Category)}>
            <FiX style={{ fontSize: "1.7rem" }} />
          </Hover>
        </Head>
        <br />
        <Flex justifyCenter>
          <Label small>
            Category Name
            <div>
              <br />
              <Input
                type="text"
                onChange={e => {
                  setName(e.target.value)
                }}
                placeholder="Category Name"
              />
            </div>
          </Label>
        </Flex>

        <br />

        <Button
          onClick={() => {
            createCategory({
              variables: {
                Name: Name,
                EventId: id,
              },
            })
              .then(() => alert("created"))
              .catch(e => console.log(e))
          }}
        >
          Create Category{" "}
        </Button>
        <br />
      </Modal>

      {cart_items_category === null ? (
        <div>
          <br />
          <br />
          <br />
          <Text color="grey" center>
            You Have No Categories yet. <br /> Create one below to get started.
          </Text>
          <Hover
            style={{ textAlign: "center" }}
            onClick={() => setCategory(!Category)}
          >
            <FiPlus style={{ fontSize: "2rem" }} />
          </Hover>
          <br /> <br />{" "}
          <Text color="grey" center>
            <a
              style={{ textDecoration: "none" }}
              href="https://my_event.netlify.com"
              target="_blank"
            >
              Learn More{" "}
            </a>
            about the <b> Invitations </b> feature on Oasis{" "}
          </Text>
          <br />
          <br />
        </div>
      ) : (
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex" }}>
              {cart_items_category.map(({ id, name }) => {
                return (
                  <Block
                    actve={categoryName === name}
                    onClick={() => {
                      setcategoryId(id)
                      setCategoryName(name)
                    }}
                    key={id}
                  >
                    {name}
                  </Block>
                )
              })}
            </div>

            <Hover onClick={() => setCategory(!Category)}>
              <FiPlus style={{ fontSize: "2rem" }} />
            </Hover>
          </div>
          <hr />

          <ProductItem
            categoryName={categoryName}
            categoryId={categoryId}
            screen={"store"}
          />
        </div>
      )}
    </div>
  )
}

export default Products
