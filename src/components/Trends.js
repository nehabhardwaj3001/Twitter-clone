import React from 'react';
import { FaSearch } from 'react-icons/fa';
import TrendsPart from './TrendsPart';

const Trends = () => {
  return (
    <div className='trends'>
        <div className='trends-search'>
          <input type="text" className='trends-control' placeholder='Search Twitter'/>
          <div className='trend-icon'>
            <FaSearch className='search' />
          </div>
        </div>
        <TrendsPart />
    </div>
  )
}

export default Trends;