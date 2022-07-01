import React from "react";
// import Container from '@mui/material/Container';
import { Container, Typography, Card, CardContent } from "@mui/material";
import "../App.css";

const Home = () => {
  return (
    <Container>
      <Typography variant="h1">WELCOME TO ADVENTURNAL</Typography>
      <Typography variant="h2">
        your tabletop campaign journal, upgraded.
      </Typography>
      <Typography variant="h5">
        We aim to provide a location for all your record keeping, helping you
        manage your characters. Keep a personal account of your sessions for you
        to refer in the downtime between sessions. Log details about your
        character and tag them for easier call backs.
      </Typography>
    </Container>
  );
};

export default Home;
