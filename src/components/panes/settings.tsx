import * as React from "react"
import Flex from "styled-flex-component"
import styled from "styled-components"
import { FiUser } from "react-icons/fi"

import { Text } from "../../styles/style"

//Todo: Check styled-component usage with classNames

const SettingsBody = styled.div`
  position: absolute;
  padding: 0.7rem 0rem;
  margin: 2.1rem 0.3rem;
  height: 50vh;
  transform: translateX(-45%);
  border-radius: 10px;
  ul {
    margin: 0rem 1rem;
    list-style: none;
  }
  li {
    padding: 0.5rem 0.5rem;
    margin: 2rem 0rem;
  }
  &: hover {
    li {
      cursor: pointer;
      filter: brightness(1.2);
    }
  }
`

const SettingsPane = () => {
  return (
    <SettingsBody>
      <ul>
        <li>
          <Flex>
            <FiUser style={{ fontSize: "1.9rem" }} />
            <Text white style={{ padding: "0rem 1rem" }}>
              {" "}
              Account Settings{" "}
            </Text>
          </Flex>
        </li>

        <li>
          <Flex>
            <FiUser style={{ fontSize: "1.9rem" }} />
            <Text white style={{ padding: "0rem 1rem" }}>
              {" "}
              Account Settings{" "}
            </Text>
          </Flex>
        </li>

        <li>
          <Flex>
            <FiUser style={{ fontSize: "1.9rem" }} />
            <Text white style={{ padding: "0rem 1rem" }}>
              {" "}
              Account Settings{" "}
            </Text>
          </Flex>
        </li>

        <li>
          <Flex>
            <FiUser style={{ fontSize: "1.9rem" }} />
            <Text white style={{ padding: "0rem 1rem" }}>
              {" "}
              Account Settings{" "}
            </Text>
          </Flex>
        </li>

        <li>
          <Flex>
            <FiUser style={{ fontSize: "1.9rem" }} />
            <Text white style={{ padding: "0rem 1rem" }}>
              {" "}
              Account Settings{" "}
            </Text>
          </Flex>
        </li>
      </ul>
    </SettingsBody>
  )
}

export default SettingsPane
