import React from 'react';
// import Container from '@mui/material/Container';
import { AppBar, Typography, IconButton } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import {
  BrowserRouter,
  Route,
  Routes,
  Link as RouterLink,
} from 'react-router-dom';
const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton component={RouterLink} to="/">
          <Typography variant="h6">Home</Typography>
        </IconButton>
        <IconButton component={RouterLink} to="/login">
          <Typography variant="h6">Login</Typography>
        </IconButton>
        <IconButton component={RouterLink} to="/signup">
          <Typography variant="h6">Signup</Typography>
        </IconButton>
        <IconButton component={RouterLink} to="/characters">
          <Typography variant="h6">Characters</Typography>
        </IconButton>
        <IconButton component={RouterLink} to="/journal">
          <Typography variant="h6">Journal</Typography>
        </IconButton>
        <IconButton component={RouterLink} to="/roster">
          <Typography variant="h6">Roster</Typography>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
