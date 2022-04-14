import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faUserFriends,
  faWalking,
  faUsersSlash,
  faClock,
  faFlag,
  faGavel,
  faFlagCheckered,
} from '@fortawesome/free-solid-svg-icons';

const Notifications = ({ close }) => {
  return (
    <motion.div
      initial={{ y: '-100%' }}
      animate={{ y: '-50%', duration: 2 }}
      exit={{ y: 0, duration: 2 }}
      className='w-[30vw] overflow-hidden h-[80vh] bg-white shadow-lg rounded-lg top-1/2 right-[2%]  -translate-y-1/2 absolute'>
      <h1 className='text-center my-8 text-2xl font-bold text-wwGreenF'>
        Powiadomienia
      </h1>
      <button onClick={close}>
        <FontAwesomeIcon
          icon={faTimes}
          className=' top-[2%] right-[4%] absolute text-2xl text-red'
        />
      </button>
      <NotificationList />
    </motion.div>
  );
};

const NotificationList = () => {
  useEffect(() => {
    return () => {};
  }, []);

  const notificationsList = useSelector(
    (state) => state.notifications.notifications
  );
  return (
    <ul className='overflow-y-scroll'>
      {notificationsList.map((el) => (
        <NotificationElement
          title={el.title}
          message={el.message}
          key={el.id}
        />
      ))}
    </ul>
  );
};

const NotificationElement = (props) => {
  const [icon, setIcon] = useState(faUserFriends);

  useEffect(() => {
    switch (props.type) {
      case 0:
        setIcon('faUserFriends');
      case 1:
        setIcon('faUsers');
      case 2:
        setIcon('faUsersSlash');
        break;
      case 3:
        setIcon('faUsersSlash');
        break;
      case 4:
        setIcon('faWalking');
        break;
      case 5:
        setIcon('faWalking');
        break;
      case 6:
        setIcon('faWalking');
        break;
      case 7:
        setIcon('faClock');
        break;
      case 8:
        setIcon('faFlag');
        break;
      case 9:
        setIcon('faClock');
        break;
      case 10:
        setIcon('faFlagCheckered');
        break;
      case 11:
        setIcon('faClock');
        break;
      case 12:
        setIcon('faGavel');
        break;
    }
  }, []);

  return (
    <li className='flex items-center mx-8 px-4 py-2 my-4 rounded-lg bg-wwLightGreen shadow-lg'>
      <FontAwesomeIcon icon={icon} className='mr-4' />
      <div>
        <h1 className='text-lg font-bold'>{props.title}</h1>
        <p>{props.message}</p>
      </div>
    </li>
  );
};

export default Notifications;
