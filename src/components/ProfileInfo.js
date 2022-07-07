import React from 'react';
import './styles/Profile.css';
import { FaArrowLeft, FaCalendarAlt } from 'react-icons/fa';

const ProfileInfo = () => {
  return (
    <div className='profile-info'>
        <div className="header">
            <FaArrowLeft className='arrow' />
            Neha Sharma
        </div>
        <div className='info'>
          <div className='profile-photo'>
            <img src='/images/image.jpeg'/>
            <button>Edit Profile</button>
          </div>
          <div></div>
        </div>
        <div className='profile-data'>
          <h1>Neha Sharma</h1>
          <p>@sharmaneha1309</p>
          <p><FaCalendarAlt />Joined April 2018</p>
          <div className='follow'>
            <p><span>95 </span>Following</p>
            <p><span>5 </span>Followers</p>
          </div>
        </div>
    </div>
  )
}

export default ProfileInfo;