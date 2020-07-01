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
  display: flex;
  justify-content: space-between;
  margin: 1rem 0rem;
  width: 100%;
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
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
`

const Volunteers = props => {
  // const { data, loading, error } = useQuery(GET_VOLUNTEERS)

  const { volunteer } = props

  return (
    <div>
      {volunteer === null ? (
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

          { volunteer !== undefined && volunteer.map(
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
                      approvalStatus === "Approved" ? "#94F471" : "#DE4538"
                    }
                  >
                    <Text center white>
                      {" "}
                      {approvalStatus}{" "}
                    </Text>
                  </Background>

                  <Text center> {dateApplied} </Text>

                  <Flex>
                    <Hover margined borderedRound background="#94F471">
                      <FiCheck style={{ fontSize: "2rem" }} />
                    </Hover>

                    <Hover margined borderedRound background="#DE4538">
                      <FiX style={{ fontSize: "2rem" }} />
                    </Hover>
                  </Flex>
                </List>
              )
            }
          )}
        </div>
      )}
    </div>
  )
}

export default Volunteers
