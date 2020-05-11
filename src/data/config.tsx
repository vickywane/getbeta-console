// import { ApolloClient } from 'apollo-client';
// import { InMemoryCache } from 'apollo-cache-inmemory';
// import { createUploadLink } from 'apollo-upload-client';
// import { HttpLink, ApolloLink } from 'apollo-boost';
// import { onError } from 'apollo-link-error';

import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from "apollo-boost"
import { onError } from "apollo-link-error"

// link: createUploadLink({
//   uri: ENDPOINT,
// }),

const ENDPOINT: string = process.env.REACT_APP_GRAPHQL_ENDPOINT
const Client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        )
      if (networkError) console.log(`[Network error]: ${networkError}`)
    }),
    new HttpLink({
      uri: ENDPOINT,
      // headers: {
      //   Username: "victory",
      //   Password: "iamnwani01",
      // },
    }),
  ]),
  cache: new InMemoryCache(),
})

export default Client

// link: ApolloLink.from([
//   onError(({ graphQLErrors, networkError }) => {
//     if (graphQLErrors)
//       graphQLErrors.forEach(({ message, locations, path }) =>
//         console.log(
//           `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
//         )
//       );
//     if (networkError) console.log(`[Network error]: ${networkError}`);
//   }),
