import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_CHARACTER } from '../utils/mutations';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';

const Characters = () => {
  const [characterInfo, setcharinfo] = useState({
    name: 'Aname',
    race: 'Dwarf',
    className: 'Ranger',
  });
  const [addCharacter, { error, data, loading }] = useMutation(ADD_CHARACTER);

  const creation = async () => {
    const { name, race, className } = characterInfo;
    const { data } = await addCharacter({
      variables: {
        name,
        race,
        className,
      },
    });
    console.log('created yo');
    console.log(data);
  };
  return (
    <div className="base">
      <h1>Characters!</h1>
      <div className="loginFooter">
        <button type="submit" onClick={creation} className="btn">
          Creation
        </button>
      </div>
    </div>
  );
};

export default Characters;
