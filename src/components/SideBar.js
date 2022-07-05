import React from 'react';
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

const SideBar = () => {
	return (
		<div className='sidebar'>
			<ul>
				<li> <Link to='/sideBar'> <FaTwitter className='icons logo twi' /> </Link> </li>
				<li> <Link to='/home'> <FaHome className='icons logo' /> Home </Link> </li>
				<li> <Link to='/sideBar'> <FaHashtag className='icons' /> Explore </Link> </li>
				<li> <Link to='/sideBar'> <FaRegBell className='icons' /> Notifications </Link> </li>
				<li> <Link to='/sideBar'> <FaRegEnvelope className='icons' /> Messages </Link> </li>
				<li> <Link to='/sideBar'> <FaRegBookmark className='icons' /> Bookmarks </Link> </li>
				<li> <Link to='/sideBar'> <FaClipboardList className='icons' /> Lists </Link> </li>
				<li> <Link to='/profile'> <FaUserAlt className='icons' /> Profile </Link> </li>
				<li> <Link to='/sideBar'> <FaMehBlank className='icons' /> More </Link> </li>
				<div className='sidebar-btn'>
					<Link to=''> Tweet </Link>
				</div>
			</ul>
		</div>
	)
}

export default SideBar;