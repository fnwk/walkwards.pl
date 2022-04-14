import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { faEllipsisV, faInfo, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useFetch from '../../../hooks/useFetch';
import useGetFriendList from '../../../hooks/useGetFriendList';
import { useNavigate } from 'react-router-dom';

const User = ({ friend, name, points, id, avatar }) => {
  const [moreInfo, setMoreInfo] = useState(false);
  const [avatarSrc, setAvatarSrc] = useState('');
  const getFriendList = useGetFriendList();
  const navigate = useNavigate();

  const removeFriendReq = useFetch('https://backend.walkwards.pl/User/Friends/RemoveFriend', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: useSelector((state) => state.userData.token),
      id: useSelector((state) => state.userData.id),
      friendId: id,
    }),
  });

  useEffect(() => {
    if (avatar) {
      setAvatarSrc(`https://avatars.walkwards.pl/${id + '.txt'}`);
    } else {
      setAvatarSrc('https://avatars.walkwards.pl/default.txt');
    }
  }, []);

  const MoreInfoHandler = () => {
    setMoreInfo(!moreInfo);
  };

  const delateFriendHandler = () => {
    removeFriendReq.sendRequest();
    getFriendList.userFriendsHandler();
  };

  return (
    <li className='flex items-center justify-around bg-wwGreenF w-5/6 h-[12vh] mx-auto my-5 shadow-md rounded-lg overflow-hidden'>
      <div
        onClick={MoreInfoHandler}
        className={`flex items-center justify-between px-[10%] md:py-4 bg-white w-full h-full ${
          moreInfo && 'md:w-full w-0'
        }`}>
        <div className='md:w-[5vw] w-1/3  md:p-4 p-3'>
          <div className='rounded-full w-full h-full overflow-hidden'>
            <img src={avatarSrc} alt='' />
          </div>
        </div>
        <h1 className='md:text-2xl text-lg'>{name}</h1>
        <div>
          <p className='md:block hidden text-xs text-gray'>Liczba kroków:</p>
          <p className='font-bold text-2xl text-wwGreenF'>{points}</p>
        </div>
      </div>
      <div
        className={`md:w-[10%] w-[25%] h-full ml-auto bg-white ${moreInfo && 'rounded-r-lg'} z-10 relative`}
        onClick={MoreInfoHandler}>
        <FontAwesomeIcon
          icon={faEllipsisV}
          className={`text-2xl text-gray absolute top-1/2 -translate-y-1/2 ${moreInfo && '-rotate-90'}
            } transition-transform duration-300 `}
        />
      </div>
      <div
        className={`${moreInfo ? 'md:w-1/4 w-full' : 'w-0'} h-full ${
          friend ? 'bg-[#db4751]' : 'bg-[#34a0a4]'
        }  transition-all duration-300`}>
        <div
          className='flex items-center w-1/2 h-full bg-wwGreenF rounded-r-lg float-left relative'
          onClick={() => navigate(`../user/${id}`)}>
          <button className='mx-auto'>
            <FontAwesomeIcon icon={faInfo} className='text-white text-2xl' />
          </button>
        </div>
        <div
          className={`flex items-center w-1/2 h-full ${
            friend ? 'bg-[#db4751]' : ' bg-gradient-to-tr rom-[#34a0a4] to-[#168aad]'
          } float-right relative`}>
          <button className='mx-auto' onClick={delateFriendHandler}>
            {friend ? (
              <FontAwesomeIcon icon={faTrash} className='text-white text-2xl' />
            ) : (
              <FontAwesomeIcon icon={faPlus} className='text-white text-2xl' />
            )}
          </button>
        </div>
      </div>
    </li>
  );
};

export default User;
