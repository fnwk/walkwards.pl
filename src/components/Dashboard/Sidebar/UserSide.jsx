import React from 'react';
import Avatar from './Avatar';
import { useSelector } from 'react-redux';
import curve from '../../../assets/Dashboard/Navbar/curve.svg';

const UserSide = () => {
  return (
    <div className='flex h-[15vh] mb-10 relative'>
      <div className='flex items-center h-3/4'>
        <Avatar />
        <h1 className='text-white text-2xl font-light ml-5'>{useSelector((state) => state.userData.username)}</h1>
      </div>
      <img src={curve} alt='' className='absolute w-full top-0 left-0 -z-10' />
    </div>
  );
};

export default UserSide;
