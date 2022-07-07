import React from 'react';
import '../App.css';
import SideBar from './SideBar';
import Trends from './Trends';
import ExploreTwittes from './ExploreTwittes';

const Explore = () => {
  return (
    <div className="twitter">
    <SideBar />
    <ExploreTwittes />
    <Trends />
  </div>
  )
}

export default Explore;