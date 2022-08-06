import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import { Container, Card, Button, Typography, TextField } from '@mui/material';
export default function LoginPage() {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || '/roster';
  const [loginCredentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [login, { error, data, loading }] = useMutation(LOGIN);
  const onChange = (e) =>
    setCredentials({ ...loginCredentials, [e.target.name]: e.target.value });

  const loginProcess = async () => {
    if (loginCredentials.email && loginCredentials.password) {
      const { email, password } = loginCredentials;
      const { data } = await login({
        variables: {
          email,
          password,
        },
      });
      if (data.login.token) {
        localStorage.setItem('id_token', data.login.token);
      }
      if (data.login.user._id) {
        localStorage.setItem(
          'characters',
          JSON.stringify(data.login.user.characters)
        );
        // navigate(from, { replace: true });
        window.location.assign('/roster');
      }
    }
  };
  return (
    <Container sx={{ minHeight: '100vh' }}>
      <Card>
        <Typography variant="h6">Login</Typography>
        <TextField
          onChange={onChange}
          type="text"
          name="email"
          value={loginCredentials.email}
          placeholder="Email"
        />
        <TextField
          onChange={onChange}
          type="password"
          name="password"
          value={loginCredentials.password}
          placeholder="Password"
        />
        <Button type="submit" onClick={loginProcess}>
          <Typography variant="h6">Login</Typography>
        </Button>
      </Card>
    </Container>
  );
}
