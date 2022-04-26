import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_CHARACTER } from '../utils/mutations';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';

const Characters = () => {
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
              // onChange={onChange}
              type="text"
              name="email"
              // value={loginCredentials.email}
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <label className="passwordTitle" htmlFor="password">
              Password:
            </label>
            <input
              // onChange={onChange}
              type="password"
              name="password"
              // value={loginCredentials.password}
              placeholder="Password"
            />
          </div>
        </div>
      </div>
      {/* <div className="loginFooter">
        <button type="submit" onClick={loginProcess} className="btn">
          Login
        </button>
      </div> */}
    </div>
  );
};

export default Characters;
