import React from "react"
import Flex from "styled-flex-component"
import { inject, observer } from "mobx-react"
import { GiChecklist } from "react-icons/gi"

import { Panes, Header, Footer } from "../../components/"
import { TeamModal } from "../../components/modals/"
import { Text, Title, Contain, Button, List } from "../../styles/style"
import { TaskList } from "../../Data"

const Team = (props): JSX.Element => {
  const { openFormModal } = props.ModalStore
  const { Notify } = props.PaneStore

  return (
    <div>
      <Header
        unshadowed={Notify ? true : false}
        middleText={true}
        text={"Design Team"}
      />
      {Notify ? <Panes type={"Team"} color="#401364" /> : null}
      <TeamModal />

      <br />

      <Contain>
        <Flex justifyBetween>
          <Flex column>
            <br />
            <Title small center bold>
              Design Team{" "}
            </Title>

            <Text center style={{ color: "grey" }}>
              {" "}
              Created: 12-12-12{" "}
            </Text>
          </Flex>

          <Flex column>
            <Flex column>
              <Title small center bold>
                {" "}
                Integrations{" "}
              </Title>

              <Flex>
                <img
                  alt={"integration-type"}
                  src={require("../../assets/images/GitHub.png")}
                  style={{
                    padding: "0rem 0.3rem",
                    height: "auto",
                    maxWidth: "4rem",
                  }}
                />

                <img
                  alt={"integration-type"}
                  src={require("../../assets/images/GitHub.png")}
                  style={{
                    padding: "0rem 0.3rem",
                    height: "auto",
                    maxWidth: "4rem",
                  }}
                />

                <img
                  alt={"integration-type"}
                  src={require("../../assets/images/GitHub.png")}
                  style={{
                    padding: "0rem 0.3rem",
                    height: "auto",
                    maxWidth: "4rem",
                  }}
                />
              </Flex>
            </Flex>

            <br />
            <Text center> Nwani Victory </Text>
          </Flex>
        </Flex>

        <Text center> Main Design Team for 2020 OSCA Festival. </Text>

        <hr />

        <br />
        <Flex justifyBetween>
          <Flex justifyCenter>
            <Flex>
              <GiChecklist style={{ fontSize: "1.7rem" }} />
              <Text center small style={{ padding: "0rem 0.5rem" }}>
                {" "}
                2 Tasks of 12 Tasks completed{" "}
              </Text>
            </Flex>
          </Flex>

          <Button
            transparent
            onClick={() => {
              openFormModal()
            }}
          >
            {" "}
            Create New Task{" "}
          </Button>
        </Flex>

        <br />
        <List>
          {TaskList.map(({ id, name, created, createdBy }) => {
            return (
              <li key={id}>
                <Flex justifyBetween>
                  <Text> {createdBy} </Text>
                  <Title small> {name} </Title>
                  <Text> {created} </Text>
                </Flex>
                <br />
              </li>
            )
          })}
        </List>
      </Contain>

      <Footer />
    </div>
  )
}

export default inject("ModalStore", "PaneStore")(observer(Team))
