import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import phoneCircle from '../../../assets/MainPage/phoneCircle.svg';
import phone from '../../../assets/MainPage/phone.webp';
import AppText from './AppText';
const AppSect = () => {
  const [ref, inView] = useInView({
    threshold: window.screen.availWidth <= 480 ? 0.1 : 0.6,
  });

  const phoneVariants = {
    hidden: {
      opacity: 0,
      x: -100,
      rotate: 0,
    },
    show: {
      transition: {
        delay: 0.9,
      },
      rotate: 25,
      opacity: 1,
      x: window.screen.availWidth <= 480 ? -15 : -30,
      y: '10%',
    },
  };

  const variants = {
    hidden: { opacity: 0, y: 0 },
    show: {
      opacity: 1,
      y: 0,

      transition: {
        staggerChildren: 10,
        delayChildren: 0.1,
        ease: 'easeOut',
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      id='app'
      ref={ref}
      variants={variants}
      initial='hidden'
      animate={inView && 'show'}
      className='flex items-center md:flex-row flex-col-reverse md:h-full md:mt-0 mt-28 w-full px-2'>
      <div className='sm:w-1/2 w-full md:my-[5vh] my-8 relative -z-10'>
        <img src={phoneCircle} alt='' className='mx-auto' />

        <motion.img
          variants={phoneVariants}
          initial='hidden'
          animate={inView && 'show'}
          src={phone}
          className='w-1/2 top-0 left-0 right-0 mx-auto -translate-x-[10%] md:-translate-y-0 rotate-12 absolute'
          alt=''
        />
      </div>
      <AppText inView={inView} />
    </motion.section>
  );
};

export default AppSect;
