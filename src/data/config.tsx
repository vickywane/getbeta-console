import ApolloClient from "apollo-boost"

const client = new ApolloClient({
  uri: process.env.APOLLO_ENDPOINT,
})

export default client
