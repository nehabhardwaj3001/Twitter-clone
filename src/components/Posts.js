import React from 'react';
import { FaRegCheckCircle, FaComment, FaRetweet, FaHeart, FaShare } from 'react-icons/fa';

const Posts = ({ name, username }) => {
  return (
    <div className='post'>
			<div className='posts-first'>
				<div className='posts-first-img'>
					<img src="/images/image.jpeg" alt='Profile' />
				</div>
				<div className='posts-first-name'>
					<strong>{name}</strong> <FaRegCheckCircle className='verify' />
				</div>
				<div className='posts-first-username'>{username}<span>. 6h</span> </div>
			</div>
			<div className='post-details'>
				<div className='post-details-msg'>
					#RanbirKapoor being the king of hearts indeed! ❣️🌟
					{/* "Ranbir Kapoor  is not a loud actor, but my cinema is exactly that. What you saw in the trailer is not even 1% of what the film is going to offer." */}
					{/* India's Pride @Suriya_offl's #JaiBhim will be releasing on big screen on his birthday for the first time ever in India at Trivandrum, Kerala 👍🏼 @aksfwa1 @venkatvnt @sarathlal428 #KeralaSFC */}
				</div>
				<div className='post-details-img'>
					<div className='row'>
						<div className='column'>
							<img src='https://pbs.twimg.com/media/FWe7QgMagAEaXTU?format=jpg&name=small' alt='post' style={{width:"106%"}}/>
						</div>
						<div className='column'>
							<img src='https://pbs.twimg.com/media/FWe6rr0UIAEAikx?format=jpg&name=360x360' style={{width:"100%"}}></img>
							<div className='column'>
							<img src='https://pbs.twimg.com/media/FWe6rI9VEAAxhA5?format=jpg&name=360x360' style={{width:"100%"}}></img>
							</div>
						</div>
					</div>
				</div>
				<div className='reaction'>
					<span><FaComment className="comment"/> 45 </span>
					<span><FaRetweet className="comment" /> 4 </span>
					<span><FaHeart className="comment" /> 4K </span>
					<span><FaShare className="comment" /> 1.2K </span>
				</div>
			</div>
    </div>
  )
}

export default Posts;