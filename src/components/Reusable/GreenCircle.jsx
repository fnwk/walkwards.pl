import React from 'react';

const GreenCircle = ({ title }) => {
  return (
    <div className='flex items-end w-[140vw] h-[120vw] absolute md:left-[45vw] left-1/2 shadow-inner -translate-x-1/2 md:-translate-y-[85%] -translate-y-[50%] rounded-b-[1000px] bg-gradient-to-r from-wwGreenF to-wwGreenS'>
      <h1 className='text-6xl my-24 mx-auto font-bold text-white'>{title}</h1>
    </div>
  );
};

export default GreenCircle;
