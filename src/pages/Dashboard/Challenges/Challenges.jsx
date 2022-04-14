import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ChallengesList from '../../../components/Dashboard/Challenges/ChallengesList';
import Modal from '../../../components/Modals/Modal';
import useFetch from '../../../hooks/useFetch';
import useGetActiveChallenge from '../../../hooks/useGetActiveChallenges';

const Challenges = () => {
  const [activeList, setActiveList] = useState(0);

  const changeActiveList = () => {
    activeList === 0 ? setActiveList(1) : setActiveList(0);
  };

  return (
    <div className='flex flex-col w-full h-full bg-light'>
      <div className='flex items-center px-[3.5%] w-full h-[15vh]  relative'>
        <div className='w-[300px] h-[40px] px-2 py-1  rounded-full bg-white shadow-lg'>
          <button
            onClick={changeActiveList}
            className={`w-1/2 h-full  text-lg font-semibold rounded-full ${
              activeList === 0 && 'bg-gradient-to-tr from-wwGreenF to-wwGreenS'
            }`}>
            Twoje
          </button>
          <button
            onClick={changeActiveList}
            className={`w-1/2 h-full  text-lg font-semibold rounded-full ${
              activeList === 1 && 'bg-gradient-to-tr from-wwGreenF to-wwGreenS'
            }`}>
            Przychodzące
          </button>
        </div>
        <NewChallengeBtn />
      </div>
      <ChallengesList activeList={activeList} />
    </div>
  );
};

const NewChallengeBtn = () => {
  const getActiveChallenge = useGetActiveChallenge();

  const [showModal, setShowModal] = useState(false);
  const [modalError, setModalError] = useState('');
  const [modalBtnTxt, setModalBtnTxt] = useState('Dalej');

  const [opponentID, setOpponentID] = useState(0);
  const [opponentWalkcoins, setOpponentWalkcoins] = useState(0);
  const [dayCount, setDayCount] = useState(0);
  const [betValue, setBetValue] = useState(0);
  const [setUpPage, setSetUpPage] = useState(false);

  const setNewChallengeReq = useFetch(
    'https://backend.walkwards.pl/Challenge/SetNewChallenge',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: useSelector((state) => state.userData.token),
        id: useSelector((state) => state.userData.id),
        betValue: parseInt(betValue),
        recipient: opponentID,
        dayCount: parseInt(dayCount),
      }),
    }
  );

  const openModal = () => {
    setShowModal(true);
    setModalError('');
  };

  const closeModal = () => {
    setSetUpPage(false);
    setShowModal(false);
    setBetValue(0);
    setDayCount(0);
  };

  const setChallenge = (id, walkcoins) => {
    setOpponentID(id);
    setOpponentWalkcoins(walkcoins);
  };

  const setBet = (value) => setBetValue(value);
  const setDays = (value) => setDayCount(value);

  const submitModal = async () => {
    console.log(
      'dayCount: ' + parseInt(dayCount),
      'betValue: ' + parseInt(betValue),
      'dayCount ok?: ' + parseInt(dayCount) < 1 || parseInt(dayCount) > 30,
      'dayCount ok?: ' + parseInt(betValue) * 2
    );

    if (opponentID !== 0) {
      if (setUpPage) {
        if (parseInt(dayCount) <= 0 || parseInt(dayCount) > 30) {
          setModalError(
            'Długość wyzwania nie może być mniejsza niż 1 dzień i większa od 30 dni!'
          );
        } else if (parseInt(betValue) <= 0) {
          setModalError('Wartość wyzwania musi być większa niż 0 ');
        } else {
          setModalError('');
          const response = await setNewChallengeReq.sendRequest();

          if (response.status === 200) {
            console.log(200);
            setBetValue(0);
            setDayCount(0);
            getActiveChallenge.activeUserChallenges();
            closeModal();
          } else {
            setModalError(
              'Ty albo twój przeciwnik nie ma wystarczającej ilości walkcoinsów!'
            );
          }
        }
      }
      if (!setUpPage) {
        setModalError('');
        setSetUpPage(true);
      }
    } else {
      setModalError('Musisz wybrać przeciwnika');
    }
  };

  return (
    <>
      <div className='ml-auto'>
        <button onClick={openModal}>
          <FontAwesomeIcon
            icon={faPlusCircle}
            className='mx-4 text-4xl text-wwGreenF'
          />
        </button>
      </div>
      {showModal && (
        <Modal
          title='Stwórz nowe wyzwanie'
          error={modalError}
          submitModal={submitModal}
          closeModal={closeModal}
          btnTxt={modalBtnTxt}>
          {setUpPage ? (
            <SetUpChallenge
              opponentWalkcoins={opponentWalkcoins}
              setBetValue={setBet}
              setDayCount={setDays}
            />
          ) : (
            <ChooseOpponent setChallenge={setChallenge} />
          )}
        </Modal>
      )}
    </>
  );
};

const ChooseOpponent = ({ setChallenge }) => {
  const [displayedList, setDisplayedList] = useState([]);
  const [listType, setListType] = useState(0); // 0 - friends, 1 - queryUsers
  const [searchValue, setSearchValue] = useState('');
  const friendList = useSelector((state) => state.userFriendsList.friendsList);

  const getUserList = useFetch(
    'https://backend.walkwards.pl/Action/QueryUser',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: useSelector((state) => state.userData.token),
        id: useSelector((state) => state.userData.id),
        query: searchValue,
        page: 0,
      }),
    }
  );

  useEffect(() => {
    if (searchValue) {
      const delayDebounceFn = setTimeout(async () => {
        const userListResponse = await getUserList.sendRequest();
        const userListResponseData = await userListResponse.json();
        setDisplayedList(userListResponseData);
        setListType(1);

        return () => clearTimeout(delayDebounceFn);
      }, 1000);
    } else {
      setDisplayedList(friendList);
      setListType(0);
    }
  }, [searchValue]);

  const onSearch = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div>
      <SearchOpponent onSearch={onSearch} />
      <FriendList
        listType={listType}
        setChallenge={setChallenge}
        list={displayedList}
      />
    </div>
  );
};

const SearchOpponent = (props) => {
  return (
    <input
      type='text'
      placeholder='Wyszukaj'
      onChange={props.onSearch}
      className='bg-white md:w-[25rem] w-full mx-auto py-2 px-3 my-6 shadow-md rounded-md outline-none text-onyx'
    />
  );
};

const FriendList = ({ list, setChallenge, listType }) => {
  const [selectedID, setSelectedID] = useState(0);
  const [selectedWalkcoins, setSelectedWalkcoins] = useState(0);

  const onSelect = (id, walkcoins) => {
    setSelectedID(id);
    setSelectedWalkcoins(walkcoins);
  };

  useEffect(() => {
    setChallenge(selectedID, selectedWalkcoins);
  }, [selectedID]);

  return (
    <ul className='h-[15rem] overflow-y-scroll'>
      {list.map((friend) => (
        <Friend
          avatar={friend.avatar}
          id={friend.id}
          walkcoins={listType === 0 ? friend.walkcoins : friend.walkCoins}
          username={friend.username}
          selectedID={selectedID}
          onSelect={onSelect}
        />
      ))}
    </ul>
  );
};

const Friend = (props) => {
  const [avatarSrc, setAvatarSrc] = useState('');

  useEffect(() => {
    if (props.avatar) {
      setAvatarSrc(`https://avatars.walkwards.pl/${props.id + '.txt'}`);
    } else {
      setAvatarSrc('https://avatars.walkwards.pl/default.txt');
    }
  }, [props.avatar]);

  return (
    <div
      onClick={() => props.onSelect(props.id, props.walkcoins)}
      className={`flex items-center px-6 my-2 p-2 border-4 cursor-pointer hover:border-wwGreenF ${
        props.selectedID === props.id ? 'border-wwGreenF' : 'border-white'
      } rounded-lg transition-all duration-150`}>
      <div className='rounded-full w-[3rem] h-[3rem] mr-8 shadow-2xl overflow-hidden relative cursor-pointer'>
        <img
          src={avatarSrc}
          className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
          alt=''
        />
      </div>
      <p>{props.username}</p>
    </div>
  );
};

const SetUpChallenge = ({ opponentWalkcoins, setBetValue, setDayCount }) => {
  const userWalkcoins = useSelector((state) => state.userData.walkcoins);

  return (
    <div className='flex flex-col md:w-auto w-[80vw]'>
      <div className='flex'>
        <div className='flex flex-col mr-4 text-center'>
          <p>Twoja liczba walkcoinsów:</p>
          <h1 className='text-2xl font-bold text-wwGreenF'>{userWalkcoins}</h1>
        </div>
        <div className='flex flex-col ml-4 text-center'>
          <p>Liczba walkcoinsów przeciwnika:</p>
          <h1 className='text-2xl font-bold text-wwGreenF'>
            {opponentWalkcoins}
          </h1>
        </div>
      </div>
      <label className='mx-auto mt-8' htmlFor='days'>
        Wybierz długość wyzwania
      </label>
      <input
        className='text-xl p-2 w-1/2 my-4 mx-auto border-4 rounded-md outline-none border-wwGreenF'
        type='number'
        id='days'
        onChange={(e) => setDayCount(e.target.value)}
      />
      <label className='mx-auto' htmlFor='value'>
        Wybierz wartość wyzwania
      </label>
      <input
        className='text-xl p-2 w-1/2 my-4 mx-auto border-4 rounded-md outline-none border-wwGreenF'
        type='number'
        id='value'
        onChange={(e) => setBetValue(e.target.value)}
      />
    </div>
  );
};

export default Challenges;
