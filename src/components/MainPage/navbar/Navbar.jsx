import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import NavList from './NavList';
import NavBtns from './NavBtns';
import NavLogo from './NavLogo';

const Navbar = ({ variants }) => {
  const [navState, setNavState] = useState('start');
  const [animationPass, setAnimationPass] = useState(false);
  const [barState, setBarState] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const item = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 0.6,
        delay: 1.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: 'easeInOut',
        duration: 0.6,
      },
    },
  };

  window.addEventListener('scroll', () => {
    setScrollY(window.scrollY);
  });

  useEffect(() => {
    setTimeout(() => {
      setAnimationPass(true);
    }, 1000);
  }, []);

  useEffect(() => {
    if (animationPass === true) {
      if (scrollY === 0) {
        setNavState('default');
      } else if (scrollY <= (window.screen.availHeight / 4 - 20) * 2.5) {
        setNavState('light');
      } else {
        setNavState('dark');
      }
    }
  }, [scrollY, animationPass]);

  const changeBarState = () => {
    setBarState(!barState);
  };

  return (
    //TODO: coś z tymi kolorkami poprawić
    <motion.nav
      initial='hidden'
      animate='show'
      exit='exit'
      variants={variants}
      className={`flex ${
        barState ? 'flex-col' : 'flex-row h-[12vh]'
      } z-50 items-center w-full overflow-hidden px-10
      ${
        navState !== 'default' &&
        navState !== 'start' &&
        'shadow-xl shadow-black/5'
      }
      ${
        navState !== 'default' && navState !== 'start' && !barState
          ? 'h-[8vh]'
          : ''
      }
      items-center bg-opacity-0 
      ${
        navState === 'dark' || navState === 'start' ? 'text-onyx' : 'text-white'
      } 
      fixed backdrop-blur-2xl transition-all duration-500`}>
      <NavLogo variants={item} navState={navState} barState={barState} />
      <motion.div
        variants={item}
        className={`md:flex md:flex-row 
        ${!barState ? 'hidden' : ' flex flex-col h-[40vh]'}
        items-center w-full`}>
        <NavList navState={navState} />
        <NavBtns navState={navState} />
      </motion.div>
      <FontAwesomeIcon
        icon={faAngleDown}
        className={`
        ${barState ? 'm-auto' : 'ml-auto mr-2'} 
        flex md:hidden 
        ${barState && 'rotate-180'}
        transition-transform duration-500`}
        size='3x'
        onClick={changeBarState}
      />
    </motion.nav>
  );
};

export default Navbar;
