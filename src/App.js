import React from 'react';
import './App.css';
import SideBar from './components/SideBar';
import Trends from './components/Trends';
import Twittes from './components/Twittes';

function App() {
  return (
    <div className="twitter">
      <SideBar />
      <Twittes />
      <Trends />
    </div>
  );
}

export default App;
