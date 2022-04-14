import Lottie from 'react-lottie';
import logo from '../../../assets/Global/walkwards.json';
import whiteLogo from '../../../assets/Global/logoBiale.webp';
import gradientLogo from '../../../assets/Global/logoGradient.webp';
import { motion } from 'framer-motion';

const NavLogo = (props) => {
  const options = {
    loop: false,
    autoplay: true,
    animationData: logo,
  };

  return (
    <>
      {props.navState === 'start' ? (
        <div className='md:w-[10%] w-1/2 md:h-[9vh] h-[12vh]'>
          <Lottie options={options} />
        </div>
      ) : (
        <div className='md:w-[10%] w-1/2 md:h-[9vh] h-[12vh]'>
          <motion.img
            alt=''
            src={
              props.navState === 'default' || props.navState === 'light'
                ? whiteLogo
                : gradientLogo
            }
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 0.25,
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                ease: 'easeInOut',
                duration: 0.6,
              },
            }}
            className='h-full mx-auto'
          />
        </div>
      )}
    </>
  );
};

export default NavLogo;
