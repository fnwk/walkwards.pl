import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import whiteLogo from '../../../assets/Global/logoBiale.webp';
import gradientLogo from '../../../assets/Global/logoGradient.webp';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerVariants = {
    hidden: {
      y: 100,
    },
    show: {
      y: 0,
    },
  };

  return (
    <motion.footer
      id='contact'
      variants={footerVariants}
      initial='hidden'
      animate='show'
      className='flex md:flex-row flex-col  md:text-lg text-sm text-white items-center absolute bottom-0 border-t-wwGreenF border-4 w-full h-[40vh]'>
      <img className='w-[10%] ml-16 md:flex hidden' src={gradientLogo} alt='' />
      <div className='flex md:ml-[10%] text-onyx h-full w-full justify-around'>
        <div className='text-xl mt-[5%]'>
          <h1 className='md:text-5xl font-bold text-xl'>Nasze Social Media</h1>
          <ul className='md:pl-4 font-semibold'>
            <li className=' my-2 hover:translate-x-5 transition-all duration-300'>
              <a
                className='flex items-center'
                href='https://www.instagram.com/walkwards_app'>
                <FontAwesomeIcon className='mr-4' icon={faInstagram} />
                <p>Instagram</p>
              </a>
            </li>
            <li className='my-2 hover:translate-x-5 transition-all duration-300'>
              <a
                className='flex items-center'
                href='https://www.facebook.com/walkwards'>
                <FontAwesomeIcon className='mr-4' icon={faFacebook} />
                <p>Facebook</p>
              </a>
            </li>
          </ul>
        </div>
        <div className='text-xl text-onyx mt-[5%]'>
          <h1 className='md:text-5xl  font-bold text-xl'>Ważne linki</h1>
          <ul className='md:pl-8 font-semibold '>
            <li className='my-2 hover:translate-x-5 transition-all duration-300'>
              <Link to='polityka-prywatnosci'>Polityka prywatności</Link>
            </li>
            <li className='my-2 hover:translate-x-5 transition-all duration-300'>
              <Link to='polityka-prywatnosci'>Regulamin konkursów</Link>
            </li>
            <li className='my-2 hover:translate-x-5 transition-all duration-300'>
              <Link to='terms-and-conditions'>Zasady i warunki</Link>
            </li>
            <li className='my-2 hover:translate-x-5 transition-all duration-300'>
              <a href='https://zwolnienizteorii.pl/'>Zwolnieni z teorii</a>
            </li>
          </ul>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
