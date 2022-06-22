import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
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
        navigate(from, { replace: true });
      }
    }
  };
  return (
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
