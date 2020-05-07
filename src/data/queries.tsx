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
  query get_user($id: Int!, $name: String!) {
    user(id: $id, name: $name) {
      id
      name
      email
      bucketLink
      events {
        id
        name
        eventType
        venue
        alias
        summary
        description
      }
    }
  }
`

const GET_EVENT: any = gql`
  query GET_EVENT($id: Int!, $name: String!) {
    event(id: $id, name: $name) {
      name
      venue
      description
      summary
      Email
      createdBy {
        name
        email
      }
      attendees {
        name
      }
      teams {
        name
      }
      tracks {
        name
      }
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

const TALK: any = gql`
  query talk {
    talks(Limit: 5) {
      title
      id
      Archived
      description
      summary
    }
  }
`

const TRACKS: any = gql`
  query Track {
    tracks {
      name
      id
    }
  }
`

export { TEAMS, GET_USER, USERS, TALK, TRACKS, EVENTS, GET_EVENT }
