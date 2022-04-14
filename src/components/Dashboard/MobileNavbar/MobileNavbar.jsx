import React from 'react';
import { Link } from 'react-router-dom';
import FriendsIcon from '../../../assets/Dashboard/Navbar/FriendsIcon';
import RankIcon from '../../../assets/Dashboard/Navbar/RankIcon';
import SettingsIcon from '../../../assets/Dashboard/Navbar/SettingsIcon';
import HomeIcon from '../../../assets/Dashboard/Navbar/HomeIcon';
import ChallengesIcon from '../../../assets/Dashboard/Navbar/ChallengesIcon';

const MobileNavbar = () => {
  return (
    <nav className='w-screen h-[7vh] md:hidden flex items-center bg-white z-50 bottom-0 justify-between fixed text-wwGreenF text-xl shadow-2xl shadow-gray-dark'>
      <div className='flex w-[40%] float-left justify-around'>
        <Link to='rank'>
          <RankIcon />
        </Link>
        <Link to='community'>
          <ChallengesIcon />
        </Link>
      </div>

      <Link
        to='stats'
        className='flex items-center justify-between text-center rounded-full w-14 h-14 bg-wwGreenF text-white absolute left-1/2 -translate-x-1/2'>
        <div className='absolute left-1/2 -translate-x-1/2'>
          <HomeIcon />
        </div>
      </Link>

      <div className='flex w-[35%] float-right justify-around'>
        <Link to='friends'>
          <FriendsIcon />
        </Link>
        <Link to='settings'>
          <SettingsIcon />
        </Link>
      </div>
    </nav>
  );
};

export default MobileNavbar;
