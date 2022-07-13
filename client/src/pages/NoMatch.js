import React from "react";
import {Container, Typography, Button} from "@mui/material"
import {
  BrowserRouter,
  Route,
  Routes,
  Link as RouterLink,
} from "react-router-dom";
const NoMatch = () => {
  return (
        <Container>
          <Typography variant='h1'>YOU SEEM TO HAVE TAKEN A WRONG TURN TRAVELER, NOTHING DOWN THIS PATH, BEST TURN BACK.</Typography>
              <img src='https://c.tenor.com/kiv30bAOYtEAAAAC/gandalf-yes.gif' alt='A Grand old wizard appears, his eyes filled with rage, he head nods at you vigourously signalling your urgent departure'/>
              <Button component={RouterLink} to="/">
              <Typography variant="h6">YOU SHALL NOT PASS</Typography>
            </Button>
        </Container>
  );
};

export default NoMatch;
