import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloProvider,
} from '@apollo/client';
import './App.css';
import { setContext } from '@apollo/client/link/context';

import { Provider } from 'react-redux';

import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import NoMatch from './pages/NoMatch';
import Characters from './pages/Characters';
import Journal from './pages/Journal';
import Roster from './pages/Roster';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <header>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/characters">Characters</Link>
          <Link to="/journal">Journal</Link>
          <Link to="/roster">Roster</Link>
        </header>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/characters" element={<Characters />} />
          <Route path="/journal/:characterId" element={<Journal />} />
          <Route exact path="/journal" element={<Journal />} />
          <Route exact path="/roster" element={<Roster />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}
