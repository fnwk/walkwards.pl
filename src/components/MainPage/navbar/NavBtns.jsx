import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactGa from 'react-ga4';

const NavBtns = ({ navState, variants }) => {
  const loginBtnHandler = () => {
    ReactGa.event({
      category: 'Tries',
      action: 'User tries to login',
    });
  };

  return (
    <div
      className={`flex md:my-0 my-6 md:ml-auto text-xl leading-none transition-all duration-500 ${
        navState === 'dark' || navState === 'start'
          ? 'text-wwGreenF'
          : 'text-white'
      }`}>
      <motion.a
        href='#app'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        type='button'
        className='py-3 px-6 mx-3 border-0'>
        Pobierz
      </motion.a>

      <Link to={'login'}>
        <motion.button
          onClick={loginBtnHandler}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          type='button'
          className='py-3 px-6 mx-3 border-2 rounded'>
          Zaloguj
        </motion.button>
      </Link>
    </div>
  );
};

export default NavBtns;
