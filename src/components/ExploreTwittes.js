import React from 'react';
import { FaSearch } from 'react-icons/fa';
import {FiSettings} from 'react-icons/fi';
import Posts from './Posts';
import '../App.css'

const ExploreTwittes = () => {
  return (
		<div className='explore-twittes'>
		<div className='explore'>
			<input type="text" className='trends-control' placeholder='Search Twitter'/>
			<div className='trend-icon'>
				<FaSearch className='search' />
			</div>
			<div className='icon-div'><FiSettings /></div>
		</div>
		<div className='list'>
			<button>For you</button>
			<button>COVID-19</button>
			<button>Trending</button>
			<button>News</button>
			<button>Sports</button>
			<button>Entertainment</button>
		</div>
		<Posts
				name= "Neha Sharma" 
				username="@sharmaneha"
				msg="Yeh kahani hai Shiva aur astron ke devta, Brahmāstra ki! 💥"
				image="https://pbs.twimg.com/media/FW5JiNqVQAAh9P6?format=jpg&name=medium"
				comment="465"
				retweet="15"
				heart="20K"
				share="14.1K"
			/>

		<Posts
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
			/>
		</div>
  )
}

export default ExploreTwittes;