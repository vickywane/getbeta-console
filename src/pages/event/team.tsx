import React from "react"
import Flex from "styled-flex-component"
import { inject, observer } from "mobx-react"
import { GiChecklist } from "react-icons/gi"
import { useQuery } from "@apollo/react-hooks"

import { Panes, Loader } from "../../components/"
import { TaskModal } from "../../components/modals/"
import { Text, Title, Contain, Button, List, Hover } from "../../styles/style"
import { TEAM } from "../../data/queries"

const Team = (props): JSX.Element => {
  const {
    createTaskModal,
    closeCreateTaskModal,
    openCreateTaskModal,
  } = props.ModalStore
  const { Notify } = props.PaneStore
  const { TeamId } = props

  const { data, loading, error } = useQuery(TEAM, {
    variables: { id: TeamId, name: "" },
  })

  if (error) {
    return <p> Error happened </p>
  }

  if (loading) {
    return <Text center >  Loading .... </Text>
  }
  const { goal, name, createdBy, members, tasks, id } = data.team
  const createdByName = createdBy[0].name

  return (
    <div>
      <TaskModal
        teamId={id}
        show={createTaskModal}
        close={closeCreateTaskModal}
      />

      <br />
      <Contain>
        <Flex justifyBetween>
          <Flex column>
            <br />

            <Text center style={{ cursor: "pointer" }}>
              {members.length} Team mates
            </Text>

            <Text center style={{ color: "grey" }}>
              Created: 12-12-12
            </Text>
          </Flex>

          <Flex column>
            <Flex column>
              <Title small center bold>
                Integrations{" "}
              </Title>

              <Flex>
                <Text color="grey" center > Add Integrations </Text>
              </Flex>
            </Flex>

            <br />
            <Text center> {createdByName} </Text>
          </Flex>
        </Flex>

        <Text center> {goal} </Text>

        <hr />

        <br />
        <Flex justifyBetween>
          <Flex justifyCenter>
            <Flex>
              <GiChecklist style={{ fontSize: "1.7rem" }} />
              <Text center small style={{ padding: "0rem 0.5rem" }}>
                2 Tasks of 12 Tasks completed{" "}
              </Text>
            </Flex>
          </Flex>

          <Button transparent onClick={() => openCreateTaskModal()}>
            Create New Task
          </Button>
        </Flex>

        <br />
        <List>
          {tasks === null ? (
            <div>
              <Text center color="grey">
                <br />
                <br />
                <br />
                You currently do not have any task. <br /> Tasks are a great way
                to manage what is being done by your team{" "}
              </Text>{" "}
            </div>
          ) : (
            tasks.map(({ id, name, createdAt, category, createdBy }) => {
              return (
                <li key={id}>
                  <Flex justifyBetween>
                    {createdBy === null ? (
                      <Text> Admin </Text>
                    ) : (
                      createdBy.map(({ name, id }) => {
                        return <Text key={id}> {name} </Text>
                      })
                    )}

                    <Flex column>
                      <Text center> {category} </Text>
                      <Title small> {name} </Title>
                    </Flex>
                    <Text> {createdAt} </Text>
                  </Flex>
                  <br />
                </li>
              )
            })
          )}
        </List>
      </Contain>
    </div>
  )
}

export default inject("ModalStore", "PaneStore")(observer(Team))
