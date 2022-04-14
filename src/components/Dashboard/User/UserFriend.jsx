import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UserFriend = (props) => {
  const [avatarSrc, setAvatarSrc] = useState('');

  useEffect(() => {
    if (props.avatar) {
      setAvatarSrc(`https://avatars.walkwards.pl/${props.id + '.txt'}`);
    } else {
      setAvatarSrc('https://avatars.walkwards.pl/default.txt');
    }
  }, [props.avatar]);

  return (
    <li>
      <Link to={`../user/${props.id}`}>
        <div className='flex items-center w-5/6 h-[15vh] mx-auto border-b-2 border-gray-light px-[10%] my-2'>
          {/* <div className='md:w-[30%] w-[40%] p-4'>
            <div className='rounded-full overflow-hidden shadow-2xl'>
              <img src={avatarSrc} alt='' />
            </div>
          </div> */}
          <div className='md:w-28 md:h-28 w-20 h-20 p-4'>
            <div className='rounded-full w-full h-full shadow-2xl overflow-hidden relative cursor-pointer'>
              <img
                src={avatarSrc}
                className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
                alt=''
              />
            </div>
          </div>
          <h1 className='md:text-2xl text-xl font-bold ml-[10%]'>
            {props.name}
          </h1>
        </div>
      </Link>
    </li>
  );
};

export default UserFriend;
