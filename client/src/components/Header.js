import React, { useState } from 'react';
import { AppBar, Typography, IconButton } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Auth from '../utils/auth';
import {
  BrowserRouter,
  Route,
  Routes,
  Link as RouterLink,
} from 'react-router-dom';
const Header = (props) => {
  if (Auth.loggedIn())
    return (
      <AppBar sx={{ backgroundColor: 'green', m: 0 }} position="static">
        <Toolbar sx={{ justifyContent: 'space-evenly' }}>
          <IconButton component={RouterLink} to="/">
            <img src="..\public\images\Adventurnal Logo.svg" />
            <Typography variant="h5">ADVENTURNAL</Typography>
          </IconButton>
          <nav style={{ marginLeft: 'auto', marginRight: '5%' }}>
            <IconButton component={RouterLink} to="/roster">
              <Typography variant="h6">Characters</Typography>
            </IconButton>
            <IconButton onClick={() => Auth.logout()}>
              <Typography variant="h6">Logout</Typography>
            </IconButton>
          </nav>
        </Toolbar>
      </AppBar>
    );
  else {
    return (
      <AppBar sx={{ backgroundColor: 'green' }} position="static">
        <Toolbar sx={{ justifyContent: 'space-evenly' }}>
          <IconButton component={RouterLink} to="/">
            <img src="..\public\images\Adventurnal Logo.svg" />
            <Typography variant="h5">ADVENTURNAL</Typography>
          </IconButton>
          <nav style={{ marginLeft: 'auto', marginRight: '5%' }}>
            <IconButton component={RouterLink} to="/login">
              <Typography variant="h6">Login</Typography>
            </IconButton>
            <IconButton component={RouterLink} to="/signup">
              <Typography variant="h6">Signup</Typography>
            </IconButton>
          </nav>
        </Toolbar>
      </AppBar>
    );
  }
};

export default Header;
