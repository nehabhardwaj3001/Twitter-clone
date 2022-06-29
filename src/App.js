import React from 'react';
import './App.css';
import SideBar from './components/SideBar';
import Twittes from './components/Twittes';

function App() {
  return (
    <div className="twitter">
      <SideBar />
      <Twittes />
    </div>
  );
}

export default App;
