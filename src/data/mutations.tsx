import { gql } from "apollo-boost"

const CREATE_USER = gql`
  mutation createUser(
    $name: String!
    $email: String!
    $website: String
    $supportEmail: String
    $attendees: Int
    $teams: Int
    $type: String
    $venue: String
  ) {
    createUser(
      name: $name
      password: $password
      email: $email
      supportEmail: $email
      type: $email
      venue: $email
      venue: $venue
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
  mutation createEvent($name: String!, $email: String!) {
    createUser(name: $name, email: $email) {
      name
      id
    }
  }
`

export { CREATE_EVENT, CREATE_USER }
