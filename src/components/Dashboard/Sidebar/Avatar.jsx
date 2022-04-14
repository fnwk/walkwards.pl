import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Avatar = () => {
  const id = useSelector((state) => state.userData.id);
  const avatar = useSelector((state) => state.userData.avatar);
  const avatarChange = useSelector((state) => state.avatarChange.avatarChange);

  const [avatarSrc, setAvatarSrc] = useState('');
  useEffect(() => {
    if (avatar) {
      setAvatarSrc(
        `https://avatars.walkwards.pl/${
          id + '.txt'
        }?jebacChrome={${avatarChange}}`
      );
    } else {
      setAvatarSrc('https://avatars.walkwards.pl/default.txt');
    }
  }, [avatarChange, avatar, id]);

  return (
    <div className='w-[5vw] h-[5vw] p-4'>
      <div className='rounded-full w-full h-full shadow-2xl overflow-hidden relative cursor-pointer'>
        <img
          src={avatarSrc}
          className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
          alt=''
        />
      </div>
    </div>
  );
};

export default Avatar;
