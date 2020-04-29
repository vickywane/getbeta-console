import { gql } from "apollo-boost"

const USERS: any = gql`
  query users {
    users {
      id
      name
      email
      password
      role
      bucketLink
      createdAt
    }
  }
`

const GET_USER: any = gql`
  query get_user {
    user(id: 5577006791947779410, name: "Victory") {
      id
      name
      email
      bucketLink
    }
  }
`

const GET_EVENT: any = gql`
  query GET_EVENT {
    event(id: 5577006791947779410) {
      name
      Email
    }
  }
`

const EVENTS: any = gql`
  query events {
    events {
      id
      name
      summary
      Date
      Email
      venue
      description
    }
  }
`

const TEAMS: any = gql`
  query Teams {
    teams {
      id
      name
    }
  }
`

export { TEAMS, GET_USER, USERS, GET_EVENT, EVENTS }
