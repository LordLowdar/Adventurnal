import React, { useState } from 'react';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import { Container, Card, Button, Typography, TextField } from '@mui/material';

export default function RegisterPage() {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || '/';
  const [newCredentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [register, { error, data, loading }] = useMutation(ADD_USER);
  const onChange = (e) =>
    setCredentials({ ...newCredentials, [e.target.name]: e.target.value });

  const registration = async () => {
    //Add regex and validation here
    if (newCredentials.email && newCredentials.password) {
      const { email, password } = newCredentials;
      const { data } = await register({
        variables: {
          email,
          password,
        },
      });
      if (data.addUser.token) {
        localStorage.setItem('id_token', data.addUser.token);
      }
      if (data.addUser.user._id) {
        navigate(from, { replace: true });
      }
    }
  };
  return (
    <Container sx={{ minHeight: '100vh' }}>
      <Typography sx={{ color: 'lightGrey' }}>Register</Typography>
      <Card>
        <div className="form">
          <div className="form-group">
            <label className="usernameTitle" htmlFor="email">
              Email:
            </label>
            <input
              onChange={onChange}
              type="email"
              name="email"
              value={newCredentials.email}
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <label className="passwordTitle" htmlFor="password">
              Password:
            </label>
            <input
              onChange={onChange}
              type="password"
              name="password"
              value={newCredentials.password}
              placeholder="Password"
            />
          </div>
        </div>
        <Button type="submit" onClick={registration} className="btn">
          Register
        </Button>
      </Card>
    </Container>
  );
}
