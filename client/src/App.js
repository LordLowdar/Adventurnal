import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  Link as RouterLink,
} from 'react-router-dom';
import { AppBar, IconButton, Typography } from '@mui/material';
import ToolBar from '@mui/material/Toolbar';
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloProvider,
} from '@apollo/client';
import './App.css';
import { setContext } from '@apollo/client/link/context';
import { Provider } from 'react-redux';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import NoMatch from './pages/NoMatch';
import Characters from './pages/Characters';
import Journal from './pages/Journal';
import Roster from './pages/Roster';
import Particles from './components/Particles';
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
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/characters" element={<Characters />} />
          <Route path="/journal/:characterId" element={<Journal />} />
          <Route exact path="/journal" element={<Journal />} />
          <Route exact path="/roster" element={<Roster />} />
          <Route exact path="/particleAccelerator" element={<Particles />} />
          <Route path="/*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}
