import { Suspense, lazy } from 'react';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import AboutUsBg from './AboutUsBg';

const AboutUsSect = () => {
  const [ref, inView] = useInView({
    threshold: window.screen.availWidth <= 480 ? 0.1 : 0.3,
  });

  const titleVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    show: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <Suspense fallback={null}>
      <div
        ref={ref}
        className='text-center w-full h-screen py-[7vh] mt-[20vh] relative'
        id='team'>
        <motion.h1
          variants={titleVariants}
          initial='hidden'
          animate={inView && 'show'}
          className='text-5xl'>
          O nas
        </motion.h1>
        <AboutUsBg inView={inView} />
      </div>
    </Suspense>
  );
};

export default AboutUsSect;
