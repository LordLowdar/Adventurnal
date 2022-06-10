import React from 'react';
import Button from '@mui/material/Button';
import '../App.css';

const Home = () => {
  return (
    <div className="container">
      <Button variant="text">ADVENTURNAL</Button>
      <div className="LargeHeader">
        Welcome to Adventurnal, your tabletop campaign journal, upgraded.
      </div>
      <div classname="informationContainer">
        {/* <img className="questPic" src="/images/quest.jpg"></img> */}
        <div classname="informaionText">
          We aim to provide a location for all your record keeping, helping you
          manage your characters. Keep a personal account of your sessions for
          you to refer in the downtime between sessions. Log details about your
          character and tag them for easier call backs.
        </div>
      </div>
    </div>
  );
};

export default Home;
