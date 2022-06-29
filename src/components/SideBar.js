import React from 'react';
import { FaTwitter, FaHome, FaHashtag, FaRegBell, FaRegEnvelope, FaRegBookmark, FaClipboardList, FaUserAlt, FaMehBlank } from 'react-icons/fa';

const SideBar = () => {
	return (
		<div className='sidebar'>
			<ul>
				<li> <a href='/sideBar'> <FaTwitter className='icons logo' /> </a> </li>
				<li> <a href='/sideBar'> <FaHome className='icons logo' /> Home </a> </li>
				<li> <a href='/sideBar'> <FaHashtag className='icons' /> Explore </a> </li>
				<li> <a href='/sideBar'> <FaRegBell className='icons' /> Notifications </a> </li>
				<li> <a href='/sideBar'> <FaRegEnvelope className='icons' /> Messages </a> </li>
				<li> <a href='/sideBar'> <FaRegBookmark className='icons' /> Bookmarks </a> </li>
				<li> <a href='/sideBar'> <FaClipboardList className='icons' /> Lists </a> </li>
				<li> <a href='/sideBar'> <FaUserAlt className='icons' /> Profile </a> </li>
				<li> <a href='/sideBar'> <FaMehBlank className='icons' /> More </a> </li>
				<div className='sidebar-btn'>
					<a href=''> Tweet </a>
				</div>
			</ul>
		</div>
	)
}

export default SideBar;