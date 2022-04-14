import React from 'react';

const User = (props) => {
  return (
    <li
      className={`flex items-center bg-wwLightGreen justify-between py-1 md:px-10 px-5 my-5 rounded-md`}>
      <div className='md:w-[6vw] md:h-[6vw] w-[20vw] h-[20vw] p-4'>
        <div className='rounded-full w-full h-full shadow-2xl overflow-hidden relative cursor-pointer '>
          <img
            className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
            src={props.avatar}
            alt=''
          />
        </div>
      </div>
      <p>{props.username}</p>
      <p>{props.points}</p>
      <p>#{props.place + 1}</p>
    </li>
  );
};

export default User;
