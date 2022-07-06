import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../redux/actions/PostAction';
import CreateTweet from './CreateTweet';
import './styles/CreateTweetModal.css';

const CreateTweetModal = () => {

  const dispatch = useDispatch();
  const value = useSelector(state => state.rootReducer.PostReducer.openModal);

  if (value) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      {value 
        ? 
          <div className='modalBackground'>
            <div className='modalContainer'>
              <div>
                <button className='modal-btn' onClick={() => dispatch(closeModal())}>X</button>
                <div className='modal'><CreateTweet /></div>
              </div>
            </div>
          </div>
        :
          <div></div>
      }
    </>
  )
}

export default CreateTweetModal;