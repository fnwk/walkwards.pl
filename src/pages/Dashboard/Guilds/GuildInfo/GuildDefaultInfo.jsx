import React from 'react';
import { useParams } from 'react-router-dom';

const GuildDefaultInfo = ({ name }) => {
  const { id } = useParams();

  return (
    <div className='flex items-center md:w-1/2 md:h-full h-[70vh] w-full'>
      <div className='flex flex-col mx-auto'>
        <div className='w-36 h-36 p-4 mx-auto'>
          <div className='rounded-full w-full h-full shadow-2xl overflow-hidden relative'>
            <img
              src={`https://avatars.walkwards.pl/guild/${id}.txt`}
              className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
              alt=''
            />
          </div>
        </div>
        <h1 className='text-3xl font-bold my-4 mx-auto'>{name}</h1>
        <button className='text-wwGreenF'>Zaproś użytkownika</button>
      </div>
    </div>
  );
};

export default GuildDefaultInfo;
