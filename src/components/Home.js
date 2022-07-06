import React from 'react';
import '../App.css';
import SideBar from './SideBar';
import Trends from './Trends';
import Twittes from './Twittes';
import CreateTweetModal from './CreateTweetModal';

function Home() {
  return (
    <>
      <CreateTweetModal />
      <div className="twitter">
        <SideBar />
        <Twittes />
        <Trends />
      </div>
    </>
  );
}

export default Home;
