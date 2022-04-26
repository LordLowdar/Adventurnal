import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
<<<<<<< HEAD

import Auth from '../utils/auth';
function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);
=======
import { useNavigate, useLocation, Navigate } from 'react-router-dom';

export default function LoginPage() {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || '/';
  const [loginCredentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [login, { error, data, loading }] = useMutation(LOGIN);
  const onChange = (e) =>
    setCredentials({ ...loginCredentials, [e.target.name]: e.target.value });
>>>>>>> a3e4a346697962ccee0dc6ef877f0b02a1f07b28

  const loginProcess = async () => {
    if (loginCredentials.email && loginCredentials.password) {
      const { email, password } = loginCredentials;
      const { data } = await login({
        variables: {
          email,
          password,
        },
      });
      if (data.login.user._id) {
        navigate(from, { replace: true });
      }
    }
  };
  return (
<<<<<<< HEAD
    <div className="container my-1">
      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email address:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
=======
    <div className="base">
      <div className="loginHeader">Login</div>
      <div className="content">
        <div className="loginForm">
          <div className="form-group">
            <label className="emailTitle" htmlFor="email">
              Email:
            </label>
            <input
              onChange={onChange}
              type="text"
              name="email"
              value={loginCredentials.email}
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
              value={loginCredentials.password}
              placeholder="Password"
            />
>>>>>>> a3e4a346697962ccee0dc6ef877f0b02a1f07b28
          </div>
        </div>
      </div>
      <div className="loginFooter">
        <button type="submit" onClick={loginProcess} className="btn">
          Login
        </button>
      </div>
    </div>
    
  );
}
