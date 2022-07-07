import React, { useState } from 'react';
import './styles/SideBar.css';
import { FaTwitter,
		 FaHome,
		 FaHashtag,
		 FaRegBell, 
		 FaRegEnvelope, 
		 FaRegBookmark, 
		 FaClipboardList, 
		 FaUserAlt, 
		 FaMehBlank 
		} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showModal	 } from '../redux/actions/PostAction';

const SideBar = () => {
	const dispatch = useDispatch();
	// const [open, setOpen] = useState(false);

	return (
		<div className='sidebar'>
			<ul>
				<li> <Link to='/'> <FaTwitter className='icons logo twi' /> </Link> </li>
				<li> <Link to='/home'> <FaHome className='icons logo' /> Home </Link> </li>
				<li> <Link to='/explore'> <FaHashtag className='icons' /> Explore </Link> </li>
				<li> <Link to='/notifications'> <FaRegBell className='icons' /> Notifications </Link> </li>
				<li> <Link to='/messages'> <FaRegEnvelope className='icons' /> Messages </Link> </li>
				{/* <li> <Link to='/lists'> <FaClipboardList className='icons' /> Lists </Link> </li> */}
				<li> <Link to='/profile'> <FaUserAlt className='icons' /> Profile </Link> </li>
				<li> <Link to='/more'> <FaMehBlank className='icons' /> More </Link> </li>
				<div className='sidebar-btn'>
					<button onClick={() => dispatch(showModal())}> Tweet </button>
				</div>
			</ul>
		</div>
	)
}

export default SideBar;