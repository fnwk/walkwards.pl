import React, { useState, useEffect } from 'react';

const Winner = (props) => {
  const [position, setPosition] = useState('50');
  const [margin, setMargin] = useState('0');
  const [color, setColor] = useState('');

  useEffect(() => {
    if (props.index === 0) {
      setPosition('50');
      setMargin('0');
      setColor('#f6bd60');
    } else if (props.index === 1) {
      setPosition(window.screen.width > 768 ? '25' : '20');
      setMargin('4');
      setColor('#d3d3d3');
    } else if (props.index === 2) {
      setPosition(window.screen.width > 768 ? '75' : '80');
      setMargin('4');
      setColor('#d4a373');
    }
  }, []);

  return (
    <div
      style={{
        left: position + '%',
        marginTop: margin + 'rem',
      }}
      className={`flex -translate-x-1/2 flex-col absolute`}>
      <div className='md:w-[7.5vw] md:h-[7.5vw] w-[30vw] h-[30vw] p-2'>
        <div className='rounded-full border-wwGreenF border-4 w-full h-full shadow-2xl overflow-hidden relative cursor-pointer'>
          <img
            src={props.avatar}
            className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
            alt=''
          />
        </div>
      </div>
      <div
        className={`flex flex-col text-center md:w-[5vw] w-[20vw] left-1/2 text-ellipsis overflow-hidden -z-10 top-12 -translate-x-1/2 h-128 absolute bg-gradient-to-b from-wwGreenS via-[#7FD9F0] `}>
        <p className='mt-[10vh] w-full font-bold text-xl overflow-hidden text-ellipsis'>
          {props.username}
        </p>
        <p className={`mt-2 text-[${color}] font-bold text-4xl`}>
          {props.index + 1}
        </p>
      </div>
    </div>
  );
};

export default Winner;
