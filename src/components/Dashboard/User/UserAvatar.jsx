import React, { useEffect, useState } from 'react';

const UserAvatar = ({ id, avatar }) => {
  const [avatarSrc, setAvatarSrc] = useState('');

  useEffect(() => {
    if (avatar) {
      setAvatarSrc(
        `https://avatars.walkwards.pl/${id + '.txt'}?v=${Math.random()}`
      );
    } else {
      setAvatarSrc('https://avatars.walkwards.pl/default.txt');
    }
  }, [avatar, id]);

  return (
    <>
      <div className='md:w-[19vw] w-[50vw] md:h-[19vw] h-[50vw]  p-4 mx-auto'>
        <div className='rounded-full w-full h-full shadow-2xl overflow-hidden relative cursor-pointer'>
          <img
            src={`${avatarSrc}?v=${Math.random()}`}
            className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
            alt=''
          />
        </div>
      </div>
    </>
  );
};

export default UserAvatar;
