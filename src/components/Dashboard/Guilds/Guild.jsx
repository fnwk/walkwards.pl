import React, { useState, useEffect } from 'react';

const Guild = ({ name, index, id, stepsAvg }) => {
  const place = index + 1;

  const [color, setColor] = useState('#C4F4EA');

  useEffect(() => {
    if (place === 1) {
      setColor('#77E5CD');
    } else if (place === 2) {
      setColor('#9FFFD2');
    } else if (place === 3) {
      setColor('#B0F0FF');
    }
  }, [place]);

  return (
    <li
      style={{ border: `7px solid ${color}` }}
      className={`flex flex-col overflow-hidden md:w-[25vw] w-5/6 h-[30vh] my-8 rounded-2xl shadow-lg relative md:mx-[2vw] mx-auto`}>
      <div className='flex items-center h-[80%] mx-auto'>
        <div className='w-32 h-32 p-4 mb-4'>
          <div className='rounded-full w-full h-full shadow-2xl overflow-hidden relative'>
            <img
              src={`https://avatars.walkwards.pl/guild/${id}.txt`}
              className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
              alt=''
            />
          </div>
        </div>
        <div>
          <h1 className='ml-4 text-2xl font-semibold'>{name}</h1>
        </div>
        <p className='text-3xl absolute top-5 right-5'>#{place}</p>
      </div>
      <div className='flex items-start w-full h-[20%]'>
        <p className='mx-auto text-xl'>
          Średnio:
          <span className='text-3xl mx-2 text-wwGreenF font-bold'>
            {stepsAvg}
          </span>
          kroków
        </p>
      </div>
    </li>
  );
};

export default Guild;
