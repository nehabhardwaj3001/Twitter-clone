import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
        <Route active path='/home' element= {<Home />}></Route>
        <Route path='/' element= {<Home />}></Route>
        <Route path='/profile' element= {<Profile />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
