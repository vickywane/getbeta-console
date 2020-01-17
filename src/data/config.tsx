import {
  ApolloClient,
  InMemoryCache,
  ApolloError,
  HttpLink,
  ApolloLink,
} from "apollo-boost"

const ENDPOINT: string = process.env.APOLLO_ENDPOINT

const Client = new ApolloClient({
  link: ApolloLink.from([
    // new ApolloError(({ graphQLErrors, networkError }) => {
    //   if (graphQLErrors)
    //     graphQLErrors.map(({ message, locations, path }) =>
    //       console.log(
    //         `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
    //       )
    //     )
    //   if (networkError) console.log(`[Network error]: ${networkError}`)
    // }),
    new HttpLink({
      uri: ENDPOINT,
    }),
  ]),
  cache: new InMemoryCache(),
})

export default Client
