import { useQuery } from '@apollo/client';
import { ME } from '../utils/queries';
import React, { useState } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  Link as RouterLink,
} from 'react-router-dom';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
} from '@mui/material';

const Roster = () => {
  const { loading, data, error } = useQuery(ME, {});
  if (loading) return 'Updating Characters';
  if (error) return 'Crit failure, try again';

  const characters = data?.me.characters || [];
  console.log(data);
  return (
    <Container>
      <Typography>Roster</Typography>
      <Button component={RouterLink} to="/characters">
        {' '}
        Create Character
      </Button>
      {characters.map((char) => {
        return (
          <Card>
            <Typography component={RouterLink} to="/journal">
              The tale of {char.name} The level {char.level} {char.race}{' '}
              {char.className}
            </Typography>
          </Card>
        );
      })}
    </Container>
  );
};

export default Roster;
