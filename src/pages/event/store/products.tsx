import React, { useState, useEffect } from "react"
import Flex from "styled-flex-component"
import styled from "styled-components"
import { FiPlus, FiX } from "react-icons/fi"
import { Modal } from "react-bootstrap"
import { useMutation } from "@apollo/react-hooks"
import { CSSTransition } from "react-transition-group"

import Fields from "../../forms/fields"
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
import { EmptyData } from "../../../components/placeholders/"
import ProductItem from "./productItem"
import { CREATE_CART_CATEGORY } from "../../../data/mutations"
import AddItemModal from "./addItemModal"

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
  const [Name, setName] = useState<string>("")

  const [ActiveView, setActiveView] = useState<string>("")

  const { cartItemModal, closeCartItemModal } = props

  const [categoryId, setcategoryId] = useState<number>(null)
  const [categoryName, setCategoryName] = useState<string>("")
  const [createCategory, { data, loading, error }] = useMutation(
    CREATE_CART_CATEGORY
  )

  const [Category, setCategory] = useState(false)
  const { id, cart_items_category } = props.data.event

  useEffect(() => {
    setcategoryId(
      cart_items_category === null ? null : cart_items_category[0].id
    )
  }, ["t"])

  const onChange = (value, label) => {
    switch (label) {
      case "Category Name":
        setName(value)
        break
      default:
        break
    }
  }

  return (
    <div>
      <AddItemModal
        visibility={cartItemModal}
        closeModal={closeCartItemModal}
        categoryId={categoryId}
      />

      <CSSTransition
        in={ActiveView === "create"}
        timeout={300}
        classNames={""}
        unmountOnExit
      >
        <div>
          <Fields
            onChange={e => onChange(e, "Category Name")}
            id={1}
            placeholder={"Cart category name e.g Swags "}
            name={"Category Name"}
            type={"text"}
            textarea={false}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Button
              style={{ margin: "0rem 1rem" }}
              onClick={() => {
                createCategory({
                  variables: {
                    Name: Name,
                    EventId: id,
                  },
                })
                  .then(() => setActiveView(""))
                  .catch(e => console.log(e))
              }}
            >
              Create Category
            </Button>

            <Button onClick={() => setActiveView("")}>Cancel</Button>
          </div>
        </div>
      </CSSTransition>

      <CSSTransition
        in={ActiveView !== "create"}
        timeout={300}
        classNames={""}
        unmountOnExit
      >
        {cart_items_category === null ? (
          <div>
            <Hover
              style={{ textAlign: "center" }}
              onClick={() => setActiveView("create")}
            >
              <FiPlus style={{ fontSize: "2rem" }} />
            </Hover>
            <EmptyData
              message={`This event has no item within its cart. \n\n Cart items are placed within categories. \n\n Use the **Plus** button to create a new cart category and then add items to the category.`}
              link="http://event.com"
              feature="E-commerce"
            />
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

              <Hover onClick={() => setActiveView("create")}>
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
      </CSSTransition>
    </div>
  )
}

export default Products
