import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  ApolloClient,
  gql,
  graphql,
  ApolloProvider,
  createNetworkInterface
} from 'react-apollo';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:4000/graphql'
});
const client = new ApolloClient({
  networkInterface
});

const AccountListQuery = gql`
  query AccountListQuery {
    account {
      fullname
    }
  }
`;

const AccountList = ({ data: { loading, error, account } }) => {
  console.log('loading');
  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  return (
    <ul>
      {account.map((ch, index) => <li key={index}>{ch.fullname}</li>)}
    </ul>
  );
};

const AccountListWithData = graphql(AccountListQuery)(AccountList);
class App extends Component {
  render() {
    console.log('render');
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to Apollo</h2>
          </div>
          <AccountListWithData />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
