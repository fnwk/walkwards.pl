import React, { useState } from 'react';
import FriendList from '../../../components/Dashboard/Friends/FriendList';
import Search from '../../../components/Reusable/Search';
import UserList from '../../../components/Dashboard/Friends/UserList';

const Friends = () => {
  const [searchValue, setSearchValue] = useState('');

  const searchHandler = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className='text-center relative'>
      <Search onSearch={searchHandler} />
      <h1 className='md:text-4xl text-3xl font-bold mt-6 mb-8 text-wwGreenF'>
        Twoi znajomi:
      </h1>
      <div className='w-100'>
        <FriendList search={searchValue} />
      </div>
      <h1 className='md:text-4xl text-3xl font-bold mt-12 mb-8 text-wwGreenF'>
        Inni użytkownicy:
      </h1>
      <div className='w-100'>
        <UserList search={searchValue} />
      </div>
    </div>
  );
};

export default Friends;
