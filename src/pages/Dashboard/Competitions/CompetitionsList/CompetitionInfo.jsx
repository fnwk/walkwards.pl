import React, { useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { motion } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import walkcoins from '../../../../assets/Global/walkcoins.svg';
import sad_svg from '../../../../assets/Dashboard/Competitions/sad_svg.svg';

import useFetch from '../../../../hooks/useFetch';
import Modal from '../../../../components/Modals/Modal';
import useGetCompetitions from '../../../../hooks/useGetCompetitions';

const CompetitionInfo = () => {
  const location = useLocation();

  const username = useSelector((state) => state.userData.username);
  const id = useSelector((state) => state.userData.id);
  const steps = useSelector(
    (state) =>
      state.userData.weeklyActivity[state.userData.weeklyActivity.length - 1].y
  );
  const avatar = useSelector((state) => state.userData.avatar);

  const data = location.state;

  const [joined, setJoined] = useState(data.joined);
  const [usersList, setUsersList] = useState(data.useres);

  const joinHandler = () => {
    setJoined(true);
    setUsersList((prev) => [...prev, { username, id, steps, avatar }]);
  };

  return (
    <div className='w-full h-screen flex flex-col px-[5%] pt-[7%]'>
      <div className='flex justify-between items-center px-[5%]'>
        <div className='flex flex-col'>
          <h1 className='text-5xl font-semibold ml-[10%]'>{data.name}</h1>
          <h2 className='text-xl ml-[10%]'>Organizator</h2>
          <Walkcoins fee={data.entranceFee} />
        </div>
        {joined === true ? (
          <AlreadyJoined />
        ) : (
          <JoinBtn ctoken={data.ctoken} joinHandler={joinHandler} />
        )}
      </div>
      <MoreInfo usersList={usersList} data={data} />
    </div>
  );
};

const JoinBtn = ({ ctoken, joinHandler }) => {
  const getCompetitions = useGetCompetitions();
  const [showModal, setShowModal] = useState(false);

  const joinCompetitionReq = useFetch(
    ' https://backend.walkwards.pl/Competitions/JoinCompetition',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: useSelector((state) => state.userData.token),
        id: useSelector((state) => state.userData.id),
        ctoken,
      }),
    }
  );

  const join = async () => {
    const joinCompetitionResponse = await joinCompetitionReq.sendRequest();

    if (joinCompetitionResponse.status === 200) {
      joinHandler();
      getCompetitions.competitions();
    } else {
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <Modal
          title='Nie masz wystarczająco walkcoinsów'
          error=''
          submitModal={closeModal}
          closeModal={closeModal}
          save={false}>
          <div className='flex items-center p-8'>
            <h1 className='text-2xl w-1/2 font-semibold'>
              Nie masz wystarczająco walkcoinsów
            </h1>
            <img src={sad_svg} className='w-1/2' />
          </div>
        </Modal>
      )}
      <motion.button
        className='text-2xl  px-6 py-2 rounded-md shadow-md bg-gradient-to-tr from-wwGreenF to-wwGreenS text-white'
        onClick={join}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}>
        Dołącz
      </motion.button>
    </>
  );
};

const AlreadyJoined = () => {
  return (
    <p className='text-2xl  px-6 py-2 rounded-md text-wwGreenF font-semibold border-wwGreenF border-2'>
      Dołączono <FontAwesomeIcon icon={faCheck} />
    </p>
  );
};

const Walkcoins = ({ fee }) => {
  return (
    <div className='flex items-center ml-[10%]'>
      <img src={walkcoins} alt='' className='w-10 my-4' />
      <p className='text-4xl font-semibold text-gray ml-4'>{fee}</p>
    </div>
  );
};

const MoreInfo = ({ data, usersList }) => {
  return (
    <div className='w-full bg-white mt-[5%] p-4 rounded-lg shadow-lg px-[15%]'>
      <div className='flex w-full justify-between my-8'>
        <Numbers label='LICZBA UCZESTNIKÓW' number={data.useres.length} />
        <Numbers label='DNI DO KOŃCA' number={data.dayCount} />
      </div>
      <UsersList users={usersList} />
    </div>
  );
};

const Numbers = ({ label, number }) => {
  return (
    <div className='flex w-[17%] items-center'>
      <p className='text-6xl mr-2 font-semibold text-wwGreenF'>{number}</p>
      <p className='flex text-xl leading-none text-gray'>{label}</p>
    </div>
  );
};

const UsersList = ({ users, addUserToList }) => {
  return (
    <ul>
      {users.map((user) => (
        <User
          addUserToList={addUserToList}
          username={user.username}
          steps={user.steps}
          key={user.id}
        />
      ))}
    </ul>
  );
};

const User = ({ username, steps, avatar, id }) => {
  const [avatarSrc, setAvatarSrc] = useState('');
  useEffect(() => {
    if (avatar) {
      setAvatarSrc(`https://avatars.walkwards.pl/${id + '.txt'}`);
    } else {
      setAvatarSrc('https://avatars.walkwards.pl/default.txt');
    }
  }, [avatar, id]);

  return (
    <li
      className={`flex items-center bg-wwLightGreen justify-between py-1 md:px-10 px-5 my-5 rounded-md`}>
      <div className='md:w-[6vw] md:h-[6vw] w-[20vw] h-[20vw] p-4'>
        <div className='rounded-full w-full h-full shadow-2xl overflow-hidden relative cursor-pointer '>
          <img
            className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
            src={avatarSrc}
            alt=''
          />
        </div>
      </div>
      <p className='text-lg'>{username}</p>
      <p className='text-lg font-bold'>{steps}</p>
    </li>
  );
};

export default CompetitionInfo;
