import React from 'react';

const TrendsPart = () => {
	return (
		<>
		<div className='keywords'>
			<div className='keyword-heading'>
				<h4>What's happeing</h4>
				<div className='tweet-heading'>
					Bollywood films
				</div>
				<div className='tweet-content'> Rocketry: The Nambi Effect releases in theatres </div>
				<div className='hastags'>
					Trending with 
					<span> #RMadhavan, #RocketryTheNambiEffect </span>
				</div>
			</div>
			<div className='trend-img'>
				<img src='https://pbs.twimg.com/media/FWe6rr0UIAEAikx?format=jpg&name=360x360' />
			</div>
		</div>

		<div className='keywords' style={{marginTop: "-10px"}}>
			<div className='keyword-heading'>
				<div className='tweet-heading'>
					Sports . Trending
				</div>
				<div className='tweet-content'> Malacia </div>
				<div className='hastags'>
					<span style={{color: "silver"}}> 18.1K Tweets </span>
				</div>
			</div>
		</div>

		<div className='keywords' style={{marginTop: "-10px"}}>
			<div className='keyword-heading'>
				<div className='tweet-heading'>
					War in Ukraine · LIVE
				</div>
				<div className='tweet-content'> Latest updates on the war in Ukraine </div>
				<div className='hastags'>
					<span style={{color: "silver"}}> 10.1K Tweets </span>
				</div>
			</div>
		</div>

		<div className='keywords' style={{marginTop: "-10px"}}>
			<div className='keyword-heading'>
				<div className='tweet-heading'>
					Politics · Trending
				</div>
				<div className='tweet-content'> Justice Kant </div>
				<div className='hastags'>
					<span style={{color: "silver"}}> 45.3K Tweets </span>
				</div>
			</div>
		</div>

		<div className='keywords' style={{marginTop: "-10px"}}>
			<div className='keyword-heading'>
				<div className='tweet-heading'>
					Cricket · LIVE
				</div>
				<div className='tweet-content'> ENGvIND: India take on England in the rescheduled fifth Test at Edgbaston </div>
				<div className='hastags'>
					Trending with 
					<span> #ENGvIND, #JaspritBumrah </span>
				</div>
			</div>
		</div>
		</>
	)
}

export default TrendsPart;