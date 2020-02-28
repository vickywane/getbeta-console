import { gql } from "apollo-boost"

const TEST: any = gql`
  query test {
    events {
      name
      id
      venue
      date
    }
  }
`

export { TEST }
