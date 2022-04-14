import { motion } from 'framer-motion';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Modal = ({
  closeModal,
  title,
  children,
  error,
  submitModal,
  btnTxt = 'Zapisz',
  save = true,
}) => {
  return (
    <div className='w-screen h-screen bg-[rgba(0,0,0,0.75)] fixed top-0 left-0 z-40'>
      <motion.div
        initial={{ y: '10%', opacity: 0, x: '-50%' }}
        animate={{ y: '-50%', opacity: 1 }}
        className='left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 shadow-lg rounded-lg px-4 py-6 bg-white fixed max-w-[98%] overflow-hidden'>
        <div className='flex items-center w-full h-12 absolute top-0'>
          <button onClick={closeModal}>
            <FontAwesomeIcon icon={faTimes} className='text-red' />
          </button>
          <p className='mx-auto font-bold'>{title}</p>
        </div>
        <div className='flex flex-col mt-8'>{children}</div>
        {error !== '' && (
          <p className='text-red border-red bg-[#ffbebe34 text-lg my-4 text-center p-2 rounded-md border-2'>
            {error}
          </p>
        )}
        {save && (
          <button
            onClick={submitModal}
            className=' w-full bg-gradient-to-tr from-wwGreenF to-wwGreenS text-white font-bold py-2 my-4 rounded'>
            {btnTxt}
          </button>
        )}
      </motion.div>
    </div>
  );
};

export default Modal;
