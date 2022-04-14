import { useState } from 'react';
import { motion } from 'framer-motion';

import img1 from '../../../assets/MainPage/us2.webp';
import img2 from '../../../assets/MainPage/us4.webp';

const AboutUsBg = ({ inView }) => {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);

  const BigLeftRowVariants = {
    hidden: {
      opacity: 0,
      x: -500,
    },
    show: {
      transition: {
        delay: 0.4,
      },
      opacity: 1,
      x: 0,
    },
  };

  const BigRightRowVariants = {
    hidden: {
      opacity: 0,
      x: 500,
    },
    show: {
      transition: {
        delay: 0.5,
      },
      opacity: 1,
      x: 0,
    },
  };
  const SmallLeftRowVariants = {
    hidden: {
      opacity: 0,
      x: -500,
    },
    show: {
      transition: {
        delay: 0.4,
      },
      opacity: 1,
      x: 0,
    },
  };

  const SmallRightRowVariants = {
    hidden: {
      opacity: 0,
      x: 500,
    },
    show: {
      transition: {
        delay: 0.5,
      },
      opacity: 1,
      x: 0,
    },
  };

  return (
    <div className='w-full px-[10%] py-[3%]'>
      <motion.div
        variants={BigLeftRowVariants}
        initial='hidden'
        animate={inView && 'show'}
        className='flex sm:flex-row flex-col-reverse w-full h-1/2'>
        <div
          className='w-full sm:h-[30vh] h-[20vh] float-left mx-2 bg-blue rounded-lg'
          style={{
            background: `linear-gradient(rgba(128, 128, 128, 0.7), rgba(128, 128, 128, 0.7)), url(${img1})`,
            backgroundSize: 'cover',
            backgroundPosition: '0px',
          }}></div>
        <motion.div
          variants={SmallLeftRowVariants}
          initial='hidden'
          animate={inView && 'show'}
          onMouseEnter={() => setHover1(true)}
          onMouseLeave={() => setHover1(false)}
          className='flex sm:flex-row flex-col sm:h-[30vh] h-[20vh] px-8 text-center md:py-0 py-10 md:mb-0 mb-4 items-center md:w-1/2 w-full sm:hover:w-[150%] sm:hover:h-[30vh] hover:h-[40vh] transition-all duration-1000 float-right mx-2 bg-gradient-to-tr from-wwGreenF to-wwGreenF rounded-lg overflow-hidden'>
          <p className='w-full text-center text-3xl font-bold'>O nas</p>
          {hover1 && (
            <p className='w-full text-center text-md'>
              Jesteśmy 10-cio osobowym zespołem, który w ramach olimpiady
              "Zwolnieni z Teorii", stworzył aplikację WalkWards! Nasz zespół
              składa się głównie z programistów, lecz mamy również PR Manager,
              Content Manager i Social Media Manager. Wszyscy członkowie są
              uczniami Zespołu Szkół Elektrycznych nr 1 im. Powstańców Śląskich
              w Krakowie.
            </p>
          )}
        </motion.div>
      </motion.div>
      <motion.div
        variants={BigRightRowVariants}
        initial='hidden'
        animate={inView && 'show'}
        className='flex sm:flex-row flex-col w-full h-1/2 my-4'>
        <motion.div
          variants={SmallRightRowVariants}
          initial='hidden'
          animate={inView && 'show'}
          onMouseEnter={() => setHover2(true)}
          onMouseLeave={() => setHover2(false)}
          className='flex sm:flex-row flex-col sm:h-[30vh] h-[20vh] px-8 text-center md:py-0 py-10 md:mb-0 mb-4 items-center md:w-1/2 w-full sm:hover:w-[150%] sm:hover:h-[30vh] hover:h-[40vh] transition-all duration-1000 float-right mx-2 bg-gradient-to-tr from-wwGreenF to-wwGreenF rounded-lg overflow-hidden'>
          <p className='w-full text-center text-3xl font-bold'>Nasz zespół</p>
          {hover2 && (
            <p className='w-full text-center text-md'>
              Zespół walkwards powstał na potrzeby olimpiady "Zwolnieni z
              Teorii". Jesteśmy mieszaniną charakterów, zainteresowań oraz
              poglądów, przez co tworzymy wspaniałą robotę. Jako zespół braliśmy
              już udział w różnorodnych konkursach programistycznych i zawsze
              zajmowaliśmy wysokie miejsca .Oprócz programowania lubimy jazdę na
              rowerze, grę na gitarze oraz uprawianie sztuk walki.
            </p>
          )}
        </motion.div>
        <div
          className='w-full float-right mx-2 bg-blue sm:h-[30vh] h-[20vh] rounded-lg'
          style={{
            background: `linear-gradient(rgba(128, 128, 128, 0.7), rgba(128, 128, 128, 0.7)), url(${img2})`,
            backgroundSize: 'cover',
            backgroundPosition: '0px',
          }}></div>
      </motion.div>
    </div>
  );
};

export default AboutUsBg;
