import { gql } from "apollo-boost"

const CREATE_USER = gql`
  mutation createUser($name: String!, $email: String!, $password: String!) {
    createUser(input: { name: $name, password: $password, email: $email }) {
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

// this should come from mutation variable
const id = localStorage.getItem("user_id")

const CREATE_EVENT = gql`
  mutation createEvent(
    # $UserID: ${id}!
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
      UserID: ${id}
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
  mutation createTeam($EventID: Int!, $name: String!, $goal: String!) {
    createTeam(EventID: $EventID, input: { name: $name, goal: $goal }) {
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

const CREATE_TRACK: any = gql`
  mutation createTrack(
    $EventID: Int!
    $totalTalks: Int!
    $name: String!
    $duration: String!
    $summary: String!
    $isCompleted: Boolean!
    $Archived: Boolean!
  ) {
    createTrack(
      EventID: $EventID
      input: {
        totalTalks: $totalTalks
        name: $name
        summary: $summary
        duration: $duration
        isCompleted: $isCompleted
        Archived: $Archived
      }
    ) {
      id
      name
    }
  }
`

export {
  CREATE_EVENT,
  UPDATE_USER,
  CREATE_TASK,
  CREATE_TEAM,
  CREATE_USER,
  CREATE_TRACK,
  LOGIN_USER,
}
