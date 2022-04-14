import React, { useState } from 'react';
import { useEffect } from 'react';

const GuildUser = ({ username, steps, avatar, id }) => {
  const [avatarSrc, setAvatarSrc] = useState('');

  useEffect(() => {
    if (avatar) {
      setAvatarSrc(`https://avatars.walkwards.pl/${id}.txt`);
    } else {
      setAvatarSrc('https://avatars.walkwards.pl/default.txt');
    }
  }, []);

  return (
    <li className='flex items-center bg-white justify-between py-1 md:px-10 px-5 my-5 rounded-md'>
      <div className='md:w-[6vw] md:h-[6vw] w-[20vw] h-[20vw] p-4'>
        <div className='rounded-full w-full h-full shadow-2xl overflow-hidden relative cursor-pointer '>
          <img
            className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
            src={avatarSrc}
            alt=''
          />
        </div>
      </div>
      <p className='text-xl'>{username}</p>
      <p className='text-xl text-wwGreenF font-bold'>{steps}</p>
    </li>
  );
};

export default GuildUser;
