import React, { useState } from 'react';

const TrendsPart = () => {
	
	const [state, setstate] = useState([
		{
			id: 1,
			keywordHeading : " What's happeing ",
			tweetHeading : "Bollywood films",
			tweetContent : "Rocketry: The Nambi Effect releases in theatres",
			hastage : "#RK, #Samshera",
			image: "https://pbs.twimg.com/media/FWe6rr0UIAEAikx?format=jpg&name=360x360"
		},
		{
			id: 2,
			tweetHeading : "COVID-19 · LIVE",
			tweetContent : "COVID-19 in India",
			hastage : "#covid, #maskismendatory",
			image : "https://pbs.twimg.com/semantic_core_img/1255575536824233984/CiLy4der?format=jpg&name=240x240"
		},
		{
			id: 3,
			tweetHeading : " War in Ukraine	· LIVE ",
			tweetContent : "Latest updates on the war in Ukraine",
			hastage : "#war" ,
			image: "https://pbs.twimg.com/semantic_core_img/1543517179382927360/ufOFTuY_?format=jpg&name=240x240"
		},
		{
			id: 4,
			tweetHeading : "RESULTS",
			tweetContent : "#CBSEResult",
			hastage : "#Results" ,
			image :"https://pbs.twimg.com/card_img/1543842809077059585/02QaFg5b?format=jpg&name=small"
		},
		{
			id: 5,
			tweetHeading : "India national news . LIVE",
			tweetContent : "Sini Shetty crowned Miss India World 2022",
			hastage : "#Miss World" ,
			image :"https://pbs.twimg.com/semantic_core_img/1543796180475187202/8hQtrwW5?format=jpg&name=240x240"
		},
	]);

	return (
		<>
			<div className='keywords'>
				<div className='key'>
					<div className='keyword-heading'>
						<h4>What's happeing</h4>
					</div>
					{state.map((item) => (
						<div key={item.id} className="data">
							<div>
								<div className='tweet-heading'>
									{item.tweetHeading}
								</div>
								<div className='tweet-content'> {item.tweetContent} </div>
								<div className='hastags'>
									Trending with 
									<span className='hastage'> {item.hastage} </span>
								</div>
							</div>
							<div className='trend-img'>
								<img src={item.image} />
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default TrendsPart;