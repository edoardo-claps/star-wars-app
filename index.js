/**
 * @format
 */
import React from 'react';
import {AppRegistry, View, Text} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    gql,
    useQuery,
    HttpLink
  } from '@apollo/client';

  const link = new HttpLink({
    uri: "http://192.168.1.101:3030/graphql",
    Credential:'include'
  });

  const client = new ApolloClient({
   link,
    cache: new InMemoryCache(),
    rejectUnauthorized: false
  });
 
  const Main=()=>{
    return(
        <ApolloProvider client={client}>
            <App/>         
        </ApolloProvider>
    )
  }

AppRegistry.registerComponent(appName, () => Main);
