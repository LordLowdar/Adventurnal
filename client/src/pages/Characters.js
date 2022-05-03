import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_CHARACTER } from '../utils/mutations';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';

const Characters = () => {
  return (
    <div className="base">
      <h1>
        Characters!
      </h1>
    </div>
  );
};

export default Characters;
