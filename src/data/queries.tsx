import { gql } from "apollo-boost"

const TEST: any = gql`
  query Test {
    info
  }
`

const EVENT: string = gql`
  query readEvent {
    event(where: { id: "ck5ha96i900270735h0m6iq5f" }) {
      name
      supportEmail
      bucketLink
      id
      description
      venue
      date
      duration
      password
      attendees
      teams
      createdAt
      type
      organizer
    }
  }
`

export { TEST, EVENT }
