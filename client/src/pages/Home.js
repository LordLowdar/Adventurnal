import React from 'react';
// import Container from '@mui/material/Container';
import {
  BrowserRouter,
  Route,
  Routes,
  Link as RouterLink,
} from 'react-router-dom';
import Particles from '../components/Particles';
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  CardActions,
  Button,
} from '@mui/material';
import '../App.css';

const Home = () => {
  return (
    <Container sx={{ flexDirection: 'column', justifyContent: 'center' }}>
      <Particles></Particles>
      <Card sx={{ marginTop: '1%' }}>
        <CardMedia
          component="img"
          maxHeight="200"
          image="../public/images/Adventurnal Logo With Text.svg"
          alt="Badly placed logo"
        />
        <CardContent>
          <Typography variant="h5" compontnt="div">
            WELCOME TO ADVENTURNAL
          </Typography>
          <Typography variant="body1" color="text.secondary">
            your tabletop campaign journal, upgraded.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            We aim to provide a location for all your record keeping, helping
            you manage your characters. Keep a personal account of your sessions
            for you to refer in the downtime between sessions. Log details about
            your character and tag them for easier call backs.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            component={RouterLink}
            to="/signup"
            size="small"
            color="primary"
          >
            Join Now!
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default Home;
