import React from 'react';
import '../App.css';
import SideBar from './SideBar';
import Trends from './Trends';
import Twittes from './Twittes';

function Home() {
  return (
    <div className="twitter">
      <SideBar />
      <Twittes />
      <Trends />
    </div>
  );
}

export default Home;
