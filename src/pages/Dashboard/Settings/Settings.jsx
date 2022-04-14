import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { userDataActions } from '../../../store/userData';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPenAlt,
  faShoePrints,
  faUserSecret,
} from '@fortawesome/free-solid-svg-icons';

import useFetch from '../../../hooks/useFetch';

import Avatar from '../../../components/Dashboard/Settings/Avatar';
import UserMail from '../../../components/Dashboard/Settings/UserMail';
import Username from '../../../components/Dashboard/Settings/Username';
import Modal from '../../../components/Modals/Modal';
import SocialMedia from '../../../components/Dashboard/Settings/SocialMedia/SocialMedia';
import OtherLinks from '../../../components/Dashboard/Settings/OtherLinks';
import ImageCropper from '../../../components/Reusable/ImageCropper';

const Settings = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);

  const [displayedUsername, setDisplayedUsername] = useState(
    useSelector((state) => state.userData.username)
  );
  const [displayedEmail, setDisplayedEmail] = useState(
    useSelector((state) => state.userData.email)
  );

  const [chosenFile, setChosenFile] = useState(null);

  const [newUsername, setNewUsername] = useState('');
  const [newEmail, setNewEmail] = useState('');

  const [privacyType, setPrivacyType] = useState(userData.privacyType);
  const [privacyMess, setPrivacyMess] = useState('');
  const [newPrivacyType, setNewPrivacyType] = useState(0);

  const [stepsGoal, setStepsGoal] = useState(userData.goal);
  const [newStepsGoal, setNewStepsGoal] = useState(0);

  const changeUsername = useFetch(
    'https://backend.walkwards.pl/User/SetNewLogin/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: useSelector((state) => state.userData.token),
        id: useSelector((state) => state.userData.id),
        newLogin: newUsername,
      }),
    }
  );

  const changeEmail = useFetch(
    'https://backend.walkwards.pl/User/SetNewEmail',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: useSelector((state) => state.userData.token),
        id: useSelector((state) => state.userData.id),
        newEmail: newEmail,
      }),
    }
  );

  const changePrivacyType = useFetch(
    'https://backend.walkwards.pl/User/SetAccountPrivacyType',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: useSelector((state) => state.userData.token),
        id: useSelector((state) => state.userData.id),
        privacyType: parseInt(newPrivacyType),
      }),
    }
  );

  const changeGoal = useFetch('https://backend.walkwards.pl/User/SetGoal', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: useSelector((state) => state.userData.token),
      id: useSelector((state) => state.userData.id),
      goal: parseInt(newStepsGoal),
    }),
  });

  const [showModal, setShowModal] = useState(false);
  const [showCropper, setShowCropper] = useState(false);

  const [modalType, setModalType] = useState(0);
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState(null);
  const [modalError, setModalError] = useState('');

  //  MODAL types:
  // 0 - change username
  // 1 - change email
  // 2 - change account privacy
  // 3 - change steps goal

  const openModal = (modalType) => {
    setShowModal(true);
    setModalType(modalType);
  };
  const closeModal = () => {
    setShowModal(false);
    setModalError('');
  };

  const usernameInputHandler = (e) => {
    setModalError('');
    setNewUsername(e.target.value);
  };

  const emailInputHandler = (e) => {
    setModalError('');
    setNewEmail(e.target.value);
  };

  const accountPrivacyInputHandler = (e) => {
    setModalError('');
    setNewPrivacyType(e.target.value);
  };

  const goalInputHandler = (e) => {
    setModalError('');
    setNewStepsGoal(e.target.value);
  };

  const avatarFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      setChosenFile(URL.createObjectURL(e.target.files[0]));
      setShowCropper(true);
      setShowModal(false);
    }
  };

  useEffect(() => {
    switch (modalType) {
      case 0:
        setModalTitle('Zmień swoją nazwe użytkownika');
        setModalContent(
          <input
            type='text'
            onChange={usernameInputHandler}
            placeholder='Nowa nazwa użytkownika'
            className='w-[23rem] my-2 p-2 border-2 outline-none border-wwGreenF rounded'
          />
        );
        break;
      case 1:
        setModalTitle('Zmień swój email');
        setModalContent(
          <input
            type='text'
            onChange={emailInputHandler}
            placeholder='Nowy email'
            className='w-[23rem] my-2 p-2 border-2 outline-none border-wwGreenF rounded'
          />
        );
        break;
      case 2:
        setModalTitle('Zmień widoczność swojego konta');
        setModalContent(
          <select
            type='text'
            onChange={accountPrivacyInputHandler}
            className='w-[23rem] my-2 p-2 border-2 outline-none border-wwGreenF rounded'>
            <option value={0}>Publiczne</option>
            <option value={1}>Prywatne</option>
            <option value={2}>Tylko znajomi</option>
          </select>
        );
        break;
      case 3:
        setModalTitle('Zmień swój dzienny cel kroków');
        setModalContent(
          <input
            type='number'
            onChange={goalInputHandler}
            placeholder='Nowy cel'
            className='w-[23rem] my-2 p-2 border-2 outline-none border-wwGreenF rounded'
          />
        );
        break;
      case 4:
        setModalTitle('Zmień swój avatar');
        setModalContent(
          <>
            <label
              htmlFor='choose-file'
              className='w-[23rem] my-2 p-2 border-2 outline-none border-wwGreenF rounded text-center font-bold text-wwGreenF cursor-pointer'>
              Wybierz plik
            </label>
            <input
              type='file'
              id='choose-file'
              onChange={avatarFileInput}
              className='hidden'
              accept='image/png, image/jpeg'
            />
          </>
        );
        break;
    }
  }, [modalType]);

  const submitModalHandler = async () => {
    switch (modalType) {
      case 0:
        const usernameResponse = await changeUsername.sendRequest();
        if (usernameResponse.status === 200) {
          setDisplayedUsername(newUsername);
          dispatch(userDataActions.username(newUsername));
          setShowModal(false);
          setModalError('');
        } else {
          setModalError('Ta nazwa jest już zajęta!');
        }
        break;
      case 1:
        const emailResponse = await changeEmail.sendRequest();
        if (emailResponse.status === 200) {
          setDisplayedEmail(newEmail);
          dispatch(userDataActions.email(newEmail));
          setShowModal(false);
          setModalError('');
        } else {
          setModalError('Ten email jest już zajęty!');
        }
        break;
      case 2:
        const privacyResponse = await changePrivacyType.sendRequest();
        if (privacyResponse.status === 200) {
          setPrivacyType(parseInt(newPrivacyType));
          dispatch(userDataActions.accountPrivacy(newPrivacyType));
          setShowModal(false);
          setModalError('');
        } else {
          setModalError('Wybierz inny typ widocznoczności');
        }
        break;
      case 3:
        const goalResponse = await changeGoal.sendRequest();
        if (goalResponse.status === 200) {
          setStepsGoal(newStepsGoal);
          dispatch(userDataActions.goal(newStepsGoal));
          setShowModal(false);
          setModalError('');
        } else {
          setModalError('Wybierz inną wartość celu');
        }
        break;
    }
  };

  useEffect(() => {
    setPrivacyType(userData.accountPrivacy);
  }, [userData]);

  useEffect(() => {
    switch (privacyType) {
      case 0:
        setPrivacyMess('Publiczne');
        break;
      case 1:
        setPrivacyMess('Prywatne');
        break;
      case 2:
        setPrivacyMess('Tylko znajomi');
        break;
    }
  }, [privacyType]);

  const onAvatarClick = () => openModal(4);
  const exitCropper = () => setShowCropper(false);

  return (
    <div className='flex flex-col'>
      {showCropper && (
        <ImageCropper type='user' img={chosenFile} exit={exitCropper} />
      )}
      {showModal && (
        <Modal
          title={modalTitle}
          error={modalError}
          submitModal={submitModalHandler}
          closeModal={closeModal}>
          {modalContent}
        </Modal>
      )}

      <Avatar avatarClick={onAvatarClick} />
      <div className='flex flex-col text-center'>
        <Username username={displayedUsername} />

        <button
          onClick={() => openModal(0)}
          type='button'
          className='flex w-24 justify-around mx-auto my-2 items-center bg-white px-2 border-2 border-wwGreenF rounded shadow-md text-lg'>
          <p>Edytuj</p>
          <FontAwesomeIcon icon={faPenAlt} />
        </button>

        <UserMail email={displayedEmail} />

        <button className='text-wwGreenF' onClick={() => openModal(1)}>
          Zmień email
        </button>
      </div>

      <div className='mx-auto'>
        <div className='flex items-center my-8 text-6xl'>
          <FontAwesomeIcon icon={faUserSecret} />

          <div className='flex flex-col justify-around ml-[10%] text-center'>
            <h1 className='text-4xl mx-4'>{privacyMess}</h1>

            <button
              className='text-wwGreenF text-lg'
              onClick={() => openModal(2)}>
              Zmień prywatność
            </button>
          </div>
        </div>

        <div className='flex items-center my-8 text-6xl'>
          <FontAwesomeIcon icon={faShoePrints} />

          <div className='flex flex-col my-4 justify-around ml-[10%] text-center'>
            <h1 className='text-4xl mx-4'>{stepsGoal}</h1>

            <button
              className='text-wwGreenF text-lg'
              onClick={() => openModal(3)}>
              Zmień cel
            </button>
          </div>
        </div>
      </div>

      <SocialMedia />
      <OtherLinks />
    </div>
  );
};

export default Settings;
