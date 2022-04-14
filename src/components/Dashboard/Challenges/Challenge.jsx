import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

import {
  faBolt,
  faCalendar,
  faCoins,
  faFlag,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Modal from '../../Modals/Modal';
import useFetch from '../../../hooks/useFetch';
import useGetActiveChallenge from '../../../hooks/useGetActiveChallenges';

const Waiting = () => {
  return (
    <div className='flex w-[15%] md:static absolute items-center md:top-0 top-2 md:left-0 left-[10%] md:-translate-x-0 -translate-x-1/2'>
      <p className='mx-auto md:bg-gradient-to-r from-wwGreenS to-wwGreenF  md:text-white text-wwGreenF md:font-normal font-bold px-2 py-1 rounded md:text-md text-sm'>
        Oczekiwanie
      </p>
    </div>
  );
};

const GiveUpButton = ({ cid }) => {
  const getActiveChallenge = useGetActiveChallenge();

  const giveUpFetch = useFetch(
    'https://backend.walkwards.pl/Challenge/GiveUpChallenge',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cid: cid,
        token: useSelector((state) => state.userData.token),
        id: useSelector((state) => state.userData.id),
        test: 'test',
      }),
    }
  );
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const giveUp = async () => {
    const response = await giveUpFetch.sendRequest();
    if (response.status === 200) {
      closeModal();
      getActiveChallenge.activeUserChallenges();
    }
  };

  return (
    <>
      {showModal && (
        <Modal
          title='Potwierdź decyzje'
          closeModal={closeModal}
          error=''
          save={false}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={giveUp}
            className='bg-red font-bold text-white py-2 px-4 rounded mx-8 shadow'>
            Poddaj się
          </motion.button>
        </Modal>
      )}
      <button
        onClick={openModal}
        className='absolute left-5 top-5 text-red text-xl'>
        <FontAwesomeIcon icon={faFlag} />
      </button>
    </>
  );
};

const MoreInfo = ({ props }) => {
  const currentDate = new Date();
  const endDate = new Date(props.endDate.replace('.', '/'));

  return (
    <div className='flex flex-col justify-around w-1/4 h-full bg-gradient-to-r from-wwGreenF to-wwGreenS py-4 md:px-14 px-2'>
      <div
        className={`flex items-center ${
          props.status >= 2 ? 'md:text-4xl text-xl' : 'md:text-3xl text-xl'
        } mx-auto text-white`}>
        <FontAwesomeIcon icon={faCoins} />
        <h1 className='ml-6'>{props.value}</h1>
      </div>
      <div
        className={`flex ${
          props.status >= 2 ? 'flex-col' : 'flex-row'
        } flex-col items-center text-3xl mx-auto text-white`}>
        {props.status >= 2 ? (
          <>
            <div className='ml-6'>
              <span>
                {Math.round(
                  (endDate.getTime() - currentDate.getTime()) / 1000 / 86400
                )}
              </span>
              <span> dni</span>
            </div>
            <h1>
              <span>
                {Math.round(
                  (endDate.getTime() - currentDate.getTime()) / 1000 / 3600
                ) % 24}
              </span>
              <span> godzin</span>
            </h1>
          </>
        ) : (
          <div className='flex items-center md:text-3xl text-xl mx-auto text-white'>
            <FontAwesomeIcon icon={faCalendar} />
            <h1 className='ml-6'>{props.time}</h1>
          </div>
        )}
      </div>
    </div>
  );
};

const ChallengeChart = ({ props }) => {
  const [userSteps, setUserSteps] = useState(0);
  const [opponentSteps, setOpponentSteps] = useState(0);

  useEffect(() => {
    if (props.status === 2) {
      setUserSteps(props.user1Steps);
      setOpponentSteps(props.user2Steps);
    } else if (props.status === 3) {
      setUserSteps(props.user2Steps);
      setOpponentSteps(props.user1Steps);
    }
  }, [props.user2Steps, props.user1Steps]);

  return (
    <div className='flex items-center mt-6 w-3/4 mx-auto bg-gray-light h-[1.75em] p-1 rounded'>
      <div
        style={{
          width: `${Math.round(
            (userSteps / (userSteps + opponentSteps)) * 100
          )}%`,
        }}
        className={`flex items-center h-full ${
          userSteps >= opponentSteps ? 'bg-wwGreenF' : 'bg-red'
        } rounded text-white transition-all duration-1000`}>
        <p className='mx-auto'>{userSteps}</p>
      </div>
      <div
        style={{
          width: `${Math.round(
            (opponentSteps / (userSteps + opponentSteps)) * 100
          )}%`,
        }}
        className={`flex items-center h-full ${
          userSteps >= opponentSteps ? 'bg-red' : 'bg-wwGreenF'
        } rounded ml-1 text-white`}>
        <p className='mx-auto'>{opponentSteps}</p>
      </div>
    </div>
  );
};

const Challenge = (props) => {
  return (
    <li
      className={`flex items-center bg-white m-2 shadow-md rounded-lg overflow-hidden w-4/5 relative ${
        props.status >= 2 ? 'h-[12rem]' : 'h-[6rem]'
      } mx-auto`}>
      {props.status >= 2 && <GiveUpButton cid={props.cid} />}
      {props.status === 1 && <Waiting />}
      <div
        className={`flex justify-around flex-col mx-auto p-6 md:pl-0 relative ${
          props.status === 1 ? 'w-[60%]' : 'w-3/4'
        } h-full`}>
        <div className='flex items-center'>
          <h1 className='md:text-2xl font-bold mx-auto'>{props.user1}</h1>
          <FontAwesomeIcon
            icon={faBolt}
            className='md:text-3xl mx-auto text-wwGreenF'
          />
          <h1 className='md:text-2xl font-bold mx-auto'>{props.user2}</h1>
        </div>
        {props.status >= 2 && <ChallengeChart props={props} />}
      </div>
      <MoreInfo props={props} />
    </li>
  );
};

export default Challenge;
