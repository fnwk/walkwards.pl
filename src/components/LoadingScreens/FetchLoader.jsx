import React from 'react';
import loading from '../../assets/Global/loading.json';
import Lottie from 'react-lottie';

const FetchLoader = () => {
  const options = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className='flex items-center top-0 left-0 w-screen h-screen fixed'>
      <Lottie options={options} height={'50%'} width='auto' />
    </div>
  );
};

export default FetchLoader;
