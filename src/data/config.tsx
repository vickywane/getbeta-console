import { ApolloClient } from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"
import { createUploadLink } from "apollo-upload-client"
// import { HttpLink, ApolloLink } from 'apollo-boost';

import { getMainDefinition } from "apollo-utilities"
import { HttpLink, ApolloLink } from "apollo-boost"
import { onError } from "apollo-link-error"
import { WebSocketLink } from "apollo-link-ws"
import { split } from "apollo-link"

const ENDPOINT: string = process.env.REACT_APP_GRAPHQL_ENDPOINT
const WEBSOCKET: string = process.env.REACT_APP_WEBSOCKT_ENDPOINT

const wsLink = new WebSocketLink({
  uri: WEBSOCKET,
  options: {
    reconnect: true,
  },
})

// const httpLink = new HttpLink({
//   uri: ENDPOINT,
//   // headers: { },
// })

const httpLink = createUploadLink({
  uri: ENDPOINT,
})

const link = ApolloLink.from([
  // split based on operation type
  split(
    ({ query }) => {
      const definition = getMainDefinition(query)
      return (
        definition.kind === "OperationDefinition" &&
        definition.operation === "subscription"
      )
    },

    wsLink,
    httpLink
  ),
  onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      )
    if (networkError) console.log(`[Network error]: ${networkError}`)
  }),
])

const SPClient = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
})

const Client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        )
      if (networkError) console.log(`[Network error]: ${networkError}`)
    }),
    new HttpLink({
      uri: ENDPOINT,
    }),
  ]),
  cache: new InMemoryCache(),
})

export default Client

// APOLLO ERROR HANDLING
// import { onError } from "apollo-link-error";

// const link = onError(({ graphQLErrors, networkError }) => {
//   if (graphQLErrors)
//     graphQLErrors.map(({ message, locations, path }) =>
//       console.log(
//         `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
//       ),
//     );

//   if (networkError) console.log(`[Network error]: ${networkError}`);
// });
