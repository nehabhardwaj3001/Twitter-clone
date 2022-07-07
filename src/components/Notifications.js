import React from 'react';
import SideBar from './SideBar';
import { FiSettings } from 'react-icons/fi';

const Notifications = () => {
  return (
    <div className='notification'>
      <SideBar />
      <div className='n-one'>
          <h1>Notifications</h1>
          <div className='ic'>
            <FiSettings className='search' />
          </div>
        </div>
    </div>
  )
}

export default Notifications;