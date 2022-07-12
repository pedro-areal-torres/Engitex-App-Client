import CreateUser from './Components/CreateUser';
import ListOfUsers from './Components/ListOfUsers';
import React from 'react';
import UpdatePassword from './Components/UpdatePassword';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
//import { endpoint } from '../config';

function App() {
  const client = new ApolloClient({
    // URL GraphQL Server
    uri: "http://localhost:3001/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <CreateUser />
      <ListOfUsers />
      <UpdatePassword />
    </ApolloProvider>
  );
}

export default App;
