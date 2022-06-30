import React from 'react';
import { FaRegImage, FaRegListAlt, FaRegSmile, FaRegCalendarCheck } from 'react-icons/fa';

const CreateTweet = () => {
	return (
		<div className='create'>
			<div className='create-first'>
				<div className='create-img'>
					<img src="/images/image.jpeg" alt='Profile' />
				</div>
				<div className='create-input'>
					<input 
						type="text"
						className='create-control'
						placeholder="What's Happening?"
					/>
				</div>
			</div>
			<div className='create-second'>
				<div className='create-icons'>
					<FaRegImage className='icon' />
					<FaRegListAlt className='icon' />
					<FaRegSmile className='icon' />
					<FaRegCalendarCheck className='icon' />
				</div>
				<div className='create-btn'>
					<a href=''>Tweet</a>
				</div>
			</div>
		</div>
	)
}

export default CreateTweet;