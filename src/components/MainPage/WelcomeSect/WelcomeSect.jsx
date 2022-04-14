import { motion } from 'framer-motion';
import phoneImg from '../../../assets/MainPage/phone.webp';
import WelcomeBox from './WelcomeBox';

const WelcomeSect = ({ offsetY, variants }) => {
  const phone = {
    hidden: { opacity: 0, y: -200 },
    show: {
      opacity: 1,
      y: -350,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 0.6,
        delay: 0.9,
      },
    },
    exit: {
      opacity: 0,
      y: 100,
      transition: {
        ease: 'easeInOut',
        duration: 0.6,
      },
    },
  };

  const txt1 = {
    hidden: { opacity: 0, y: -200 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 0.6,
        delay: 0.9,
      },
    },
  };
  const txt2 = {
    hidden: { opacity: 0, x: -200 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 0.6,
        delay: 1.7,
      },
    },
  };

  return (
    <motion.section
      className='w-full h-screen relative -z-10'
      variants={variants}
      initial='hidden'
      animate='show'>
      <WelcomeBox>
        <div className='md:text-8xl text-5xl md:ml-24 sm:text-left text-center md:mt-0 sm:mt-[10%] mt-[30%] mx-4  text-white md:w-2/5 absolute'>
          <motion.h1
            variants={txt1}
            initial='hidden'
            animate='show'
            className='flex font-bold'>
            <span
              style={{ transform: `translateY(${offsetY * 0.4}px)` }}
              className='md:ml-0 ml-auto'>
              W
            </span>
            <span style={{ transform: `translateY(${offsetY * 0.3}px)` }}>
              a
            </span>
            <span style={{ transform: `translateY(${offsetY * 0.5}px)` }}>
              l
            </span>
            <span style={{ transform: `translateY(${offsetY * 0.7}px)` }}>
              k
            </span>
            <span style={{ transform: `translateY(${offsetY * 0.3}px)` }}>
              w
            </span>
            <span style={{ transform: `translateY(${offsetY * 0.1}px)` }}>
              a
            </span>
            <span style={{ transform: `translateY(${offsetY * 0.5}px)` }}>
              r
            </span>
            <span style={{ transform: `translateY(${offsetY * 0.2}px)` }}>
              d
            </span>
            <span
              style={{ transform: `translateY(${offsetY * 0.4}px)` }}
              className='md:mr-0 mr-auto'>
              s
            </span>
          </motion.h1>
          <motion.h1
            variants={txt2}
            initial='hidden'
            animate='show'
            className='flex font-thin'>
            <span
              style={{ transform: `translateY(${offsetY * 0.5}px)` }}
              className='md:ml-0 ml-auto'>
              W
            </span>
            <span style={{ transform: `translateY(${offsetY * 0.4}px)` }}>
              e
            </span>
            <span style={{ transform: `translateY(${offsetY * 0.8}px)` }}>
              j
            </span>
            <span style={{ transform: `translateY(${offsetY * 0.6}px)` }}>
              d
            </span>
            <span
              className='mr-[1rem]'
              style={{ transform: `translateY(${offsetY * 0.3}px)` }}>
              ź
            </span>
            <span style={{ transform: `translateY(${offsetY * 0.7}px)` }}>
              N
            </span>
            <span
              className='mr-[1rem]'
              style={{ transform: `translateY(${offsetY * 0.3}px)` }}>
              a
            </span>
            <span style={{ transform: `translateY(${offsetY * 0.3}px)` }}>
              S
            </span>
            <span style={{ transform: `translateY(${offsetY * 0.5}px)` }}>
              z
            </span>
            <span style={{ transform: `translateY(${offsetY * 0.4}px)` }}>
              c
            </span>
            <span style={{ transform: `translateY(${offsetY * 0.8}px)` }}>
              z
            </span>
            <span style={{ transform: `translateY(${offsetY * 0.2}px)` }}>
              y
            </span>
            <span
              style={{ transform: `translateY(${offsetY * 0.5}px)` }}
              className='md:mr-0 mr-auto'>
              t
            </span>
          </motion.h1>
        </div>

        <motion.img
          variants={phone}
          alt=''
          initial='hidden'
          animate='show'
          exit='exit'
          src={phoneImg}
          className='sm:w-1/4 w-2/3 md:top-[70%] sm:top-[150%] top-[120%] md:ml-[65%] md:left-0 sm:left-[60%] left-[10%]  -translate-x-[58%] -translate-y-1/2 absolute'
        />
      </WelcomeBox>
    </motion.section>
  );
};

export default WelcomeSect;
