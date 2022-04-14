import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import useFetch from '../../../../hooks/useFetch';
import GuildRank from '../../../../components/Dashboard/Guilds/GuildRank';
import Search from '../../../../components/Reusable/Search';
import Modal from '../../../../components/Modals/Modal';
import ImageCropper from '../../../../components/Reusable/ImageCropper';

import { motion } from 'framer-motion';

const StartPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [reqBody, setReqBody] = useState({});
  const [modalError, setModalError] = useState('');

  const createGuildReq = useFetch(
    'https://backend.walkwards.pl/Guilds/CreateGuild',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reqBody),
    }
  );

  const onSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const onReqBodyChange = (body) => setReqBody(body);
  const openModal = () => setShowModal(true);
  const closeModal = () => {
    setShowModal(false);
    setModalError('');
  };
  const submitModalHandler = async () => {
    if (reqBody.name !== '' && reqBody.avatar !== '') {
      const createGuildResponse = await createGuildReq.sendRequest();

      if (createGuildResponse.status === 200) {
        closeModal();
      } else {
        setModalError('Musisz mieć 1000 walkcoinsów żeby stworzyć gildie!');
      }
    } else {
      setModalError(
        'Pamiętaj że żadne pole nie może zostać puste! Pamiętaj że musisz wybrać Avatar!'
      );
    }
  };

  return (
    <div className='flex flex-col my-8 mx-auto text-center relative'>
      {showModal && (
        <Modal
          title='Stwórz Gildie'
          closeModal={closeModal}
          error={modalError}
          submitModal={submitModalHandler}>
          <ModalContent onReqBodyChange={onReqBodyChange} />
        </Modal>
      )}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={openModal}
        className='fixed md:left-[85%] left-[65%] bottom-[10%] md:text-xl text-sm md:border-4 border-2 rounded-md bg-white shadow-lg border-wwGreenF px-4 py-2 z-50'>
        Stwórz Gildie
      </motion.button>

      <Search onSearch={onSearch} />
      <GuildRank searchValue={searchValue} />
    </div>
  );
};

const ModalContent = ({ onReqBodyChange }) => {
  const userToken = useSelector((state) => state.userData.token);
  const userId = useSelector((state) => state.userData.id);

  const [showCropper, setShowCropper] = useState(false);
  const [chosenFile, setChosenFile] = useState(null);
  const [guildName, setGuildName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [canMembersAddMembers, setCanMembersAddMembers] = useState(false);
  const [reqBody, setReqBody] = useState({});

  const avatarFileInput = (e) => {
    console.log('abc');
    if (e.target.files && e.target.files[0]) {
      setChosenFile(URL.createObjectURL(e.target.files[0]));
      setShowCropper(true);
    }
  };

  const onGuildNameChange = (e) => {
    setGuildName(e.target.value);
  };

  const onSelectChange = (e) => {
    setCanMembersAddMembers(e.target.value);
  };

  const exitCropper = () => setShowCropper(false);
  const avatarHandler = (img) => setAvatar(img);

  useEffect(() => {
    onReqBodyChange({
      token: userToken,
      id: userId,
      name: guildName,
      avatar: avatar !== '' ? avatar.split(',')[1] : '',
      canMembersAddMembers,
    });
  }, [avatar, canMembersAddMembers, guildName]);

  return (
    <div className='flex md:flex-row flex-col items-center justify-around md:w-[40vw] w-[80vw] h-[50vh] md:px-0 px-4'>
      {showCropper && (
        <ImageCropper
          img={chosenFile}
          exit={exitCropper}
          changeImg={avatarHandler}
          type='guild'
        />
      )}
      <input
        type='file'
        id='choose-file'
        onChange={avatarFileInput}
        className='hidden'
      />
      <label
        htmlFor='choose-file'
        className='md:w-[12vw] md:h-[12vw] w-[50vw] h-[50vw] p-4 mb-4'>
        <div className='rounded-full border-2 border-wwGreenF w-full h-full shadow-2xl overflow-hidden relative cursor-pointer'>
          {avatar !== '' ? (
            <img src={avatar} alt='' />
          ) : (
            <p className='top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 absolute font-bold'>
              Dodaj Avatar
            </p>
          )}
        </div>
      </label>
      <div className='flex flex-col text-left md:w-auto w-full mx-auto'>
        <label htmlFor='name_input' className='ml-2'>
          Podaj nazwę:
        </label>
        <input
          type='text'
          id='name_input'
          onChange={onGuildNameChange}
          value={guildName}
          className='h-11 px-2 border-2 border-wwGreenF rounded-md outline-none'
        />
        <select
          type='text'
          onChange={onSelectChange}
          className='my-2 p-2 border-2 outline-none border-wwGreenF rounded'>
          <option value={false}>Użytkownicy NIE mogą dodawać członków</option>
          <option value={true}>Użytkownicy mogą dodawać członków</option>
        </select>
      </div>
    </div>
  );
};

export default StartPage;
