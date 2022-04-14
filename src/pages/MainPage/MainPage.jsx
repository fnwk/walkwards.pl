import React from 'react';

import { useEffect, useState, lazy } from 'react';

import Navbar from '../../components/MainPage/navbar/Navbar';
import WelcomeSect from '../../components/MainPage/WelcomeSect/WelcomeSect';
import AppSect from '../../components/MainPage/AppSect/AppSect';
import Footer from '../../components/MainPage/Footer/Footer';
import AboutUsSect from '../../components/MainPage/AboutUsSect/AboutUsSect';

const MainPage = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  const [logoAnimationPass, setLogoAnimationPass] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    setTimeout(() => {
      setLogoAnimationPass(true);
    }, 1100);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nav = {
    hidden: { opacity: 1, y: 0 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        ease: 'easeOut',
        duration: 0.5,
      },
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
        delay: 1.1,
      },
    },
  };

  return (
    <div className='md:pb-[50vh] pb-[70vh] w-full overflow-hidden'>
      <Navbar variants={nav} />
      <WelcomeSect
        variants={variants}
        initial='hidden'
        animate='show'
        exit='exit'
        offsetY={offsetY}
      />
      <AppSect initial='hidden' animate='show' exit='exit' offsetY={offsetY} />
      <AboutUsSect
        variants={variants}
        initial='hidden'
        animate='show'
        exit='exit'
      />
      <Footer variants={variants} initial='hidden' animate='show' exit='exit' />
      )
    </div>
  );
};

export default MainPage;
