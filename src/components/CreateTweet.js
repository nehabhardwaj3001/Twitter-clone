import React, { useState } from 'react';
import { FaRegImage, FaRegListAlt, FaRegSmile, FaRegCalendarCheck } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addTweets, closeModal } from '../redux/actions/PostAction';

const CreateTweet = () => {

	const dispatch = useDispatch();
	const [tweet, setTweet] = useState({msg : " " ,image : "" });

	const handleChange = (e) => {setTweet({...tweet, [e.target.name]:e.target.value})}
	const handleFileChange = (e) => {setTweet({...tweet, [e.target.name]:e.target.value})}
	const handleClick = () => {
		dispatch(addTweets(tweet))
		dispatch(closeModal())
	}

	return (
		<div className='create'>
			<div className='create-first'>
				<div className='create-img'>
					<img src="/images/image.jpeg" alt='Profile' />
				</div>
				<div className='create-input'>
					<input 
						type="text"
						name='tweet'
						className='create-control'
						placeholder="What's Happening?"
						onChange={handleChange}
					/>
				</div>
			</div>
			<input
				name='tweetImage'
				className='createTweet_imageInput'
				placeholder='Optional: Enter Image URL'
				// type="file" 
				// value='tweetImage'
				onChange={handleFileChange}
			/>
			<div className='create-second'>
				<div className='create-icons'>
					<FaRegImage className='icon' /> 
					<FaRegListAlt className='icon' />
					<FaRegSmile className='icon' />
					<FaRegCalendarCheck className='icon' />
				</div>
				<div className='create-btn'>
					<button onClick={handleClick}>Tweet</button>
				</div>
			</div>
		</div>
	)
}

export default CreateTweet;