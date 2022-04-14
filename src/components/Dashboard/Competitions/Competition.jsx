import React from 'react';
import walkcoins from '../../../assets/Global/walkcoins.svg';

const Competitions = ({ name, description, fee, usersNum }) => {
  return (
    <li className='flex flex-col w-[100%] p-8 rounded-lg bg-white shadow-2xl'>
      <h1 className='text-3xl font-semibold'>{name}</h1>
      <h2 className='text-xl'>Organizator</h2>
      <p className='text-xl font-light my-10'>{description}</p>
      <div className='flex items-center w-full justify-between'>
        <div className='flex items-center'>
          <img src={walkcoins} alt='' className='w-16 my-4' />
          <p className='text-5xl font-semibold text-gray ml-4'>{fee}</p>
        </div>
        <div className='flex w-[30%] items-center'>
          <p className='text-6xl mr-2 font-semibold text-wwGreenF'>
            {usersNum}
          </p>
          <p className='flex text-xl leading-none text-gray'>
            Liczba uczestników
          </p>
        </div>
      </div>
    </li>
  );
};

export default Competitions;
