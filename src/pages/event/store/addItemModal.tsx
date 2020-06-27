import React, { useState } from "react"
import Flex from "styled-flex-component"
import styled from "styled-components"
import { FiX, FiPlus } from "react-icons/fi"
import { Modal } from "react-bootstrap"
import { useMutation } from "@apollo/react-hooks"

import { ADD_ITEM_INTO_CART } from "../../../data/mutations"
import { ADD_CART_INPUT } from "../../forms/formsData"
import Field from "../../forms/fields"
import {
  Hover,
  Title,
  Text,
  Button,
  Head,
  Section,
  Contain,
} from "../../../styles/style"

const InputBox = styled.div`
  display: flex;
  width: auto;
  padding: 0rem;
  border-radius: 15px;
  border: 1px solid grey;
`

const Input = styled.input`
  outline: 0px;
  border: 0px;
  text-align: center;
  font-size: 1.5rem;
  font-family: calibri;
  width: 5rem;
`

const AddItem = props => {
  const { visibility, closeModal, categoryId } = props

  const [Name, setName] = useState("")
  const [Free, setFree] = useState(false)
  const [Count, setCount] = useState(0)
  const [Description, setDescription] = useState("")
  const [Price, setPrice] = useState("")

  const onChange = (value, label) => {
    switch (label) {
      case "Item Name":
        setName(value)
        break
      case "Item Description":
        setDescription(value)
        break
      default:
        break
    }
  }

  const [createCartItem, { loading, error }] = useMutation(ADD_ITEM_INTO_CART)

  const handleSubmit = () => {
    createCartItem({
      variables: {
        CategoryId: categoryId,
        name: Name,
        isFree: Free,
        description: Description,
        quantity: Count,
        price: Price,
      },
    })
      .then(() => {
        closeModal()
      })
      .catch(e => console.log(e))
  }

  return (
    <Modal
      show={visibility}
      onHide={() => closeModal()}
      size="lg"
      style={{ marginTop: "5rem" }}
    >
      <Head>
        <Section> Add Cart Item </Section>

        <Hover onClick={() => closeModal()}>
          <FiX style={{ fontSize: "1.7rem" }} />{" "}
        </Hover>
      </Head>
      <br />

      <div>
        {ADD_CART_INPUT.map(({ id, placeholder, label, type }) => {
          return (
            <Field
              onChange={e => onChange(e, label)}
              id={id}
              placeholder={placeholder}
              name={label}
              type={type}
              textarea={false}
            />
          )
        })}

        <div style={{ margin: "0rem 2.5rem" }}>
          <Flex justifyBetween>
            <Flex column>
              <Text color="grey" center>
                Pick a category :
              </Text>
              <select>
                <option> SWAGS </option>
                <option> STICKERS </option>
                <option> BOOKS </option>
              </select>
            </Flex>

            <Flex column>
              <Text color="grey" center>
                Available Quantity :
              </Text>
              <InputBox>
                <Hover
                  onClick={() => setCount(Count + 1)}
                  style={{
                    padding: "0.5rem 0.3rem",
                  }}
                >
                  <FiPlus style={{ fontSize: "1.8rem" }} />
                </Hover>

                <Input
                  placeholder={Count}
                  type="number"
                  onChange={e => {
                    e.preventDefault()
                    setCount(e.target.value)
                  }}
                />

                <Hover
                  onClick={() => setCount(Count - 1)}
                  style={{
                    padding: "0.5rem 0.3rem",
                    borderRadius: "0px 15px 15px 0px",
                  }}
                >
                  -
                </Hover>
              </InputBox>
            </Flex>
          </Flex>

          <Flex column>
            <Text> Price: </Text>

            {Free ? (
              <div>
                <Button
                  onClick={() => {
                    setFree(true)
                  }}
                >
                  Make Paid
                </Button>
                <br />
                <br />
                <Text small color="grey" center>
                  Only one unit of a free item can be purchased by an attendee.
                </Text>
              </div>
            ) : (
              <Flex>
                <Button
                  onClick={() => {
                    setFree(true)
                  }}
                >
                  Make Free
                </Button>
                <input
                  value={Price}
                  type="text"
                  onChange={e => setPrice(e.target.value)}
                  placeholder="Item Price"
                />
              </Flex>
            )}
          </Flex>
        </div>
        <br />

        <div style={{ textAlign: "right" }}>
          <Button
            long
            onClick={() => {
              handleSubmit()
            }}
          >
            Add Item
          </Button>
        </div>
      </div>
      <br />
    </Modal>
  )
}

export default AddItem
