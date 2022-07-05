import React from 'react';
import CreateTweet from './CreateTweet';
import Posts from './Posts';
import { useSelector } from 'react-redux';

const Twittes = () => {

	const posts = useSelector(state => state.rootReducer.PostReducer.post);
	console.log("twittes", posts)
	return (
		<div className='posts'>
			<div className='posts-home'>
				Home
			</div>
			<CreateTweet />
			{[...posts].reverse().map((item) => (
				<Posts
					item = {item}
					name= "Neha Sharma" 
					username="@sharmaneha"
					msg={item.tweet}
					image={item.tweetImage}
					comment="465"
					retweet="15"
					heart="20K"
					share="14.1K"
				/>
			))}
			{/* <Posts
				name="Neha Sharma"
				username="@sharmaneha"
				msg="This #DoctorsDay, I salute the dedication, grit and tenacity of doctors across India."
				image='https://pbs.twimg.com/media/FWjmn7AaMAA7YN8?format=jpg&name=small'
				comment="4656"
				retweet="15"
				heart="20K"
				share="14.1K"
			/> */}

			{/* <Posts
				name="Karishma Sharma"
				username="@karishmasharma"
				msg="Foster scientific thinking with new idea-starters for projects that you can try with your students. Visit the Apple Teacher Learning Center to get inspired by lesson ideas created by teachers like you."
				image='https://pbs.twimg.com/media/FWL16mRUsAALWoO?format=jpg&name=360x360'
				comment="1213"
				retweet="3"
				heart="1.1K"
				share="12K"
			/>

			<Posts
				name="Kunal Kusagrah"
				username="@kusagrahkunal"
				msg="#RanbirKapoor being the king of hearts indeed! ❣️🌟"
				image='https://pbs.twimg.com/media/FWe7QgMagAEaXTU?format=jpg&name=small'
				comment="4532"
				retweet="8"
				heart="23435"
				share="243"
			/>

			<Posts
				name="Satyam"
				username="@satyam"
				msg="Stock market is a place to make easiest money in the hardest way."
				image='https://pbs.twimg.com/media/FWh-j5RXgAAb-fV?format=jpg&name=small'
				comment="4234"
				retweet="5"
				heart="879"
				share="45"
			/>

			<Posts
				name="Praduman"
				username="@acppraduman"
				msg="Hey overthinkers, we’re going to be Okay."
				image='https://pbs.twimg.com/media/FWjeMW2WAAAy9AX?format=jpg&name=small'
				comment="89712"
				retweet="2"
				heart="21K"
				share="23"
			/> */}

		</div>
	)
}

export default Twittes;