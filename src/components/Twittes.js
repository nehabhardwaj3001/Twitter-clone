import React from 'react';
import CreateTweet from './CreateTweet';
import Posts from './Posts';

const Twittes = () => {
	return (
		<div className='posts'>
			<div className='posts-home'>
				Home
			</div>
			<CreateTweet />
			<Posts name="Neha Sharma" username="@sharmaneha"/>
			<Posts name="Karishma Sharma" username="@karishmasharma"/>
			<Posts name="Knal Kusagrah" username="@kusagrahkunal"/>
			<Posts name="Satyam" username="@satyam"/>
			<Posts name="Praduman" username="@acppraduman" />
		</div>
	)
}

export default Twittes;