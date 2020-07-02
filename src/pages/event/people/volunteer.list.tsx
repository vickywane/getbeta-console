import * as React from "react"
import Flex from "styled-flex-component"
import styled from "styled-components"
import { FiCheck, FiX } from "react-icons/fi"
import { useQuery, useMutation } from "@apollo/react-hooks"

import { Body, Text, Title, Hover } from "../../../styles/style"
import { GET_VOLUNTEERS } from "../../../data/queries"
import { EmptyData } from "../../../components/placeholders"

const List = styled.li`
  list-style: none;
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
`

const Background = styled.div`
  cursor: pointer;
  margin: 0rem 0.8rem;
  padding: 0.4rem 1.5rem;
  transition: all 200ms;
  display: flex;
  justify-content: center;
  border-radius: 10rem;
  width: auto;
  height: 45px;
  background: ${props => props.background};
`

const Head = styled.div`
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  p {
    text-align: center;
    font-size: 1.4rem;
  }
`

const Volunteers = props => {
  const { eventId } = props
  const { data, loading, error } = useQuery(GET_VOLUNTEERS, {
    variables: {
      eventId: eventId,
    },
  })

  if (error) {
    console.log(error)
    return <p> an error </p>
  }

  if (loading) {
    return <p>loading </p>
  }

  if (data) {
    const { volunteers } = data
    return (
      <Body>
        {volunteers === null ? (
          <EmptyData
            link={"https://my-event.netlify.com"}
            feature={"Volunteers Support"}
            message={"This Event currently has no Volunteers."}
          />
        ) : (
          <div>
            <Head>
              <Text style={{ fontWeight: "550" }}>Name</Text>

              <Text style={{ fontWeight: "550" }}>Role</Text>

              <Text style={{ fontWeight: "550" }}>Status</Text>

              <Text style={{ fontWeight: "550" }}>Applied</Text>

              <Text style={{ fontWeight: "550" }}>Action</Text>
            </Head>
            <hr />
            {volunteers === null ? (
              <EmptyData
                message="This event currently has no volunteers"
                link="event.com"
                feature="Collaboration"
              />
            ) : (
              volunteers.map(
                ({
                  id,
                  name,
                  role,
                  user,
                  approvalStatus,
                  duration,
                  dateApplied,
                }) => {
                  return (
                    <List key={id}>
                      {user.map(({ name }) => {
                        return <Text center> {name} </Text>
                      })}

                      <Text center> {role} </Text>

                      <Background
                        background={
                          approvalStatus === "Approved" ? "#94F471" : "#DC143C"
                        }
                      >
                        <Text center color="white">
                          {approvalStatus}{" "}
                        </Text>
                      </Background>

                      <Text center> {dateApplied} </Text>

                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <Hover margined borderedRound background="#94F471">
                          <FiCheck style={{ fontSize: "2rem" }} />
                        </Hover>

                        <Hover margined borderedRound background="#DC143C">
                          <FiX style={{ fontSize: "2rem" }} />
                        </Hover>
                      </div>
                    </List>
                  )
                }
              )
            )}
          </div>
        )}
      </Body>
    )
  }
}

export default Volunteers
