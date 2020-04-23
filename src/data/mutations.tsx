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
    $summary: String
    $alias: String
    $description: String
    $venue: String
    $website: String
  ) {
    createUser(
      name: $name
      email: $email
      website: $website
      alias: $alias
      description: $description
      venue: $venue
      eventType: $eventType
      summary: $summary
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

export { CREATE_EVENT, CREATE_USER }
