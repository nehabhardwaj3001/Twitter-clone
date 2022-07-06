import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Messages from './components/Messages';
import Notifications from './components/Notifications';
import Lists from './components/Lists';
import More from './components/More';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
        <Route  path='/home' element= {<Home />}></Route>
        <Route path='/explore' element= {<Home />}></Route>
        <Route path='/notifications' element= {<Notifications />}></Route>
        <Route path='/messages' element= {<Messages />}></Route>
        <Route path='/lists' element= {<Lists />}></Route>
        <Route path='/more' element= {<More />}></Route>
        <Route path='/profile' element= {<Profile />}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
