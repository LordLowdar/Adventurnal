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
    <Container
      disableGutters={true}
      sx={{
        minWidth: '100%',
        minHeight: '100vh',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Particles></Particles>
      <Card
        sx={{ background: 'none', borderRadius: '0', position: 'relative' }}
      >
        <CardMedia
          sx={{ background: '#BEBEBE80' }}
          component="img"
          image="../public/images/Adventurnal Logo With Text.svg"
          alt="Badly placed logo"
        />
        <div style={{ position: 'relative' }}>
          <div class="custom-shape-divider-top-1659224291">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M1200 0L0 0 598.97 114.72 1200 0z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
        <CardContent>
          <Typography
            variant="h5"
            compontnt="div"
            color="lightGrey"
            sx={{ filter: 'drop-shadow(5px 5px 4px #000000)' }}
          >
            WELCOME TO ADVENTURNAL
          </Typography>
          <Typography
            variant="body1"
            color="lightGrey"
            sx={{ filter: 'drop-shadow(5px 5px 4px #000000)' }}
          >
            your tabletop campaign journal, upgraded.
          </Typography>
          <Typography
            variant="body2"
            color="lightGrey"
            sx={{ filter: 'drop-shadow(5px 5px 4px #000000)' }}
          >
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
            <Typography variant="h7" color="gold">
              Join Now!
            </Typography>
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default Home;
