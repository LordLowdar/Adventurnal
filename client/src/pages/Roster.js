import React, { useState } from 'react';
import { LOGIN } from '../utils/mutations';

const Roster = () => {
  // Get characters from login
  // Get characters from graphQL cache if revisiting the page
  // if a character gets created/deleted, manually add to cache or new query
  // Display character buttons?
  // redirect to ?
  const [characters, setCharacters] = useState(
    JSON.parse(localStorage.getItem('characters')) || []
  );
  return (
    <div>
      <div>Roster</div>
      <div>
        <ul>
          {characters.map((char) => {
            return <li>{char.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Roster;
