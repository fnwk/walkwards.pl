import AndroidBadge from '../../../assets/MainPage/androidBadge.svg';
import IosBadge from '../../../assets/MainPage/iosBadge.svg';
import { motion } from 'framer-motion';

const AppText = (props) => {
  const titleVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    show: {
      transition: {
        delay: 0.9,
      },
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  const descriptionVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    show: {
      transition: {
        delay: 1.2,
      },
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  const iosBadgeVariants = {
    hidden: {
      opacity: 0,
      y: 400,
    },
    show: {
      transition: {
        delay: 1.5,
      },
      opacity: 1,

      y: 0,
    },
  };

  const androidBadgeVariants = {
    hidden: {
      opacity: 0,
      y: 400,
    },
    show: {
      transition: {
        delay: 1.7,
      },
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className='flex items-center md:w-1/2 w-full md:px-14 px-4'>
      <div>
        <motion.h1
          variants={titleVariants}
          initial='hidden'
          animate={props.inView && 'show'}
          className='text-4xl my-2 font-bold'
          style={{ transform: `translateY(${props.offsetY * -0.09}px)` }}>
          O naszej aplikacji
        </motion.h1>
        <motion.p
          variants={descriptionVariants}
          initial='hidden'
          animate={props.inView && 'show'}
          className='text-2xl'>
          Nazwa powstała po połączeniu słów walk i awards. Nasza aplikacja
          motywuje do aktywności fizycznej. W jaki sposób? Otóż kroki, przebyte
          kilometry na rowerze czy przebiegnięty dystans, przeliczane są na
          punkty które możemy wymienić na punkty u naszych partnerów. Słuchawki
          sportowe? Bardzo proszę. Wejściówka na basen? To również nie powinno
          stanowić problemu :). Planujemy, aby nasza aplikacja wspierała
          popularne zegarki i opaski sportowe. Zachęcamy do śledzenia postępów
          na naszych socialmediach. Pozdrawiamy, zespół walkwards.
        </motion.p>
        <a
          href='https://play.google.com/store/apps/details?id=com.walkwards.walkwards'
          aria-label='Google play store'>
          <motion.img
            variants={androidBadgeVariants}
            initial='hidden'
            animate={props.inView && 'show'}
            src={AndroidBadge}
            alt=''
            className='my-2 mt-6 md:mx-0 mx-auto md:w-1/4 sm:w-1/3 w-1/2'
          />
        </a>
        <a
          href='https://apps.apple.com/pl/app/walkwards/id1602921692'
          aria-label='App store'>
          <motion.img
            variants={iosBadgeVariants}
            initial='hidden'
            animate={props.inView && 'show'}
            src={IosBadge}
            alt=''
            className='my-2 md:mx-0 mx-auto md:w-1/4 sm:w-1/3 w-1/2'
          />
        </a>
        <p>
          * Aplikacja dostępna tylko w Polsce / Application is available only in
          Poland
        </p>
      </div>
    </div>
  );
};

export default AppText;
