import { gql } from "apollo-boost"

const CREATE_USER = gql`
  mutation createUser(
    $name: String!
    $email: String!
    $website: String
    $attendees: Int
    $teams: Int
  ) {
    createUser(
      name: $name
      password: $password
      email: $email
      website: $venue
      teams: $teams
      attendees: $attendees
    ) {
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
    createTask(input: { name: $name, type: $type, isComplted: $isComplted }) {
      name
      type
      isCompleted
    }
  }
`
export { CREATE_EVENT, CREATE_TASK, CREATE_TEAM }
