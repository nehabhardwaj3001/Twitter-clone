import React from 'react'
import ProfileInfo from './ProfileInfo';
import SideBar from './SideBar'

const Profile = () => {
  return (
    <div className='profile'>
        <SideBar />
        <ProfileInfo />
    </div>
  )
}

export default Profile;