import React from 'react';
import Logo from '../../assets/Global/logoGradient.webp';
import { motion } from 'framer-motion';

const RenderingDomLoader = () => {
  return (
    <div className='flex items-center top-0 left-0 w-screen h-screen fixed'>
      <motion.img
        initial={{ opacity: 1 }}
        animate={{
          opacity: 1,
          transition: {
            ease: 'easeOut',
            duration: 12.5,
          },
        }}
        exit={{
          opacity: 0,
        }}
        className='h-1/4 mx-auto'
        src={Logo}
        alt=''
      />
    </div>
  );
};

export default RenderingDomLoader;
