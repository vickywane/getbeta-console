import React, { useState, useEffect } from "react"
import { CSSTransition } from "react-transition-group"
import { useQuery } from "@apollo/react-hooks"
import { Spinner } from "react-bootstrap"
import { FiUser, FiMail } from "react-icons/fi"
import Flex from "styled-flex-component"
import { Link } from "react-router-dom"
import styled from "styled-components"

import { Body, Text, Title, Hover, Button } from "../../styles/style"
import { Profile } from "../../styles/cards"
import { GET_USER } from "../../data/queries"

interface properties {
  show: boolean
  userId: number
}

const ProfileCard = (props: properties) => {
  const { show, userId } = props

  const { data, loading, error } = useQuery(GET_USER, {
    variables: {
      id: userId,
      name: "",
    },
  })

  const Data = [{ id: 1 }, { id: 2 }, { id: 3 }]

  const Grid = styled.div`
		display: grid;
		justify-content : center
		grid-gap: 1rem 2rem;
		grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));
	`

  if (loading) {
    return <Spinner variant="primary" animation="grow" role="loading" />
  }

  if (data) {
    const { name, email } = data.user
    return (
      <CSSTransition in={show} timeout={300} unmountOnExit classNames="">
        <Profile>
          <img
            style={{
              height: "100px",
              width: "100px",
            }}
            alt="user"
            src={require("../../assets/images/developer.png")}
          />
          <Link to="/console">
            <Title small> {name} </Title>
          </Link>
          <Flex>
            <Hover style={{ padding: "0rem 0.7rem" }}>
              <FiMail style={{ fontSize: "1.7rem" }} />
            </Hover>

            <Text center>{email}</Text>
          </Flex>

          <Grid>
            {Data.map(({ id }) => {
              return (
                <div key={id}>
                  <img
                    alt="events"
                    src={require("../../assets/images/developer.png")}
                  />
                </div>
              )
            })}
          </Grid>
        </Profile>
      </CSSTransition>
    )
  }
}

export default ProfileCard
