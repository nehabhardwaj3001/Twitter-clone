import React from 'react';
import '../App.css';
import { FaArrowLeft } from 'react-icons/fa';

const ProfileInfo = () => {
  return (
    <div className='profile-info'>
        <div className="header">
            <FaArrowLeft className='arrow' />
            Neha Sharma
        </div>
        <div className='info'>
            <div></div>
        </div>
    </div>
  )
}

export default ProfileInfo;