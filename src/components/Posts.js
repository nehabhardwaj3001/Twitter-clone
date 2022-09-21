import React from 'react';
import { FaRegCheckCircle, FaComment, FaRetweet, FaHeart, FaShare } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { dltTweet, openComments } from '../redux/actions/PostAction';

const Posts = ({ item, name, username, msg, image, comment, retweet, heart, share}) => {
	const  dispatch = useDispatch() ;

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
				<div className='dlt-icon'><MdDeleteForever onClick={() => dispatch(dltTweet(item))} /></div>
			</div>
			<div className='post-details'>
				<div className='post-details-msg'>
					{msg}
				</div> 
				<div className='post-details-img'>
					<div className='row'>
						<div className='column'>
							<img src={image} alt='post' style={{ width: "100%" }} />
						</div>
					</div>
				</div>
				<div className='reaction'>
					<span><FaComment className="comment" onClick={() => dispatch(openComments())} /> {comment} </span>
					<span><FaRetweet className="comment" /> {retweet} </span>
					<span><FaHeart className="comment" /> {heart} </span>
					<span><FaShare className="comment" /> {share} </span>
				</div>
			</div>
		</div>
	)
}

export default Posts;