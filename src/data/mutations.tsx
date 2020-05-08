import { gql } from "apollo-boost"

const CREATE_USER = gql`
  mutation createUser($name: String!, $email: String!, $password: String!) {
    createUser(input: { name: $name, password: $password, email: $email }) {
      name
      id
      email
    }
  }
`

const CREATE_EVENT = gql`
  mutation createEvent(
    $name: String!
    $Email: String!
    $eventType: String!
    $summary: String!
    $alias: String!
    $description: String!
    $Date: Int!
    $venue: String!
    $website: String!
  ) {
    createEvent(
      input: {
        name: $name
        Email: $Email
        website: $website
        alias: $alias
        description: $description
        venue: $venue
        eventType: $eventType
        summary: $summary
        Date: $Date
      }
    ) {
      name
      id
      summary
      description
      alias
      website
      Email
      Date
      bucketLink
    }
  }
`

const CREATE_TEAM = gql`
  mutation createTeam($name: String!, $goal: String!) {
    createTeam(input: { name: $name, goal: $goal }) {
      name
      goal
    }
  }
`

const CREATE_TASK = gql`
  mutation createTask($name: String!, $type: String!, $isCompleted: Boolean!) {
    createTask(input: { name: $name, type: $type, isCompleted: $isCompleted }) {
      name
      type
      isCompleted
    }
  }
`

const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    loginUser(input: { email: $email, password: $password }) {
      token
      id
      expiredAt
      user {
        name
        id
      }
    }
  }
`

const UPDATE_USER = gql`
  mutation updateUser(
    $id: ID
    $name: String
    $email: String
    $password: String
    $role: String
  ) {
    updateUser(
      id: $id
      input: { name: $name, password: $password, email: $email, role: $role }
    ) {
      name
      email
    }
  }
`

export {
  CREATE_EVENT,
  UPDATE_USER,
  CREATE_TASK,
  CREATE_TEAM,
  CREATE_USER,
  LOGIN_USER,
}
