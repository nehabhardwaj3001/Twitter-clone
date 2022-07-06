import React from 'react';
import SideBar from './SideBar';
import '../components/styles/Messages.css';
import {AiOutlineSetting} from 'react-icons/ai';
import {MdOutlineForwardToInbox} from 'react-icons/md';

const Messages = () => {
  return (
    <div className='messages'>
      <SideBar />
      <div classname="inbox">
        <div className='part-one'>
          <h1>Messages</h1>
          <div className='ic'>
            <AiOutlineSetting className='ic-a' />
            <MdOutlineForwardToInbox className='ic-b' />
          </div>
        </div>
        <div className='part-two'>
          <h1>Welcome to your inbox!</h1>
          <p>Drop a line, share Tweets and more with private conversations between you and others on Twitter. </p>
          <button>Write a message</button>
        </div>
      </div>
    </div>
  )
}

export default Messages