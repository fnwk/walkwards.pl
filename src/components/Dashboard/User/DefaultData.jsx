import React, { useState, useEffect } from 'react';
import UserAvatar from './UserAvatar';

import AddBtn from './Btns/AddBtn';
import RemoveBtn from './Btns/RemoveBtn';
import Request from './Btns/Request';
import Sent from './Btns/Sent';

const DefaultData = ({ username, id, avatar, userFriendship }) => {
  const [friendship, setFriendship] = useState(userFriendship);
  useEffect(() => {
    setFriendship(userFriendship);
  }, [userFriendship]);

  const changeFriendship = (value) => {
    setFriendship(value);
  };

  const Buttons = () => {
    const [btnReturn, setBtnReturn] = useState(null);

    useEffect(() => {
      switch (friendship) {
        case 0:
          setBtnReturn(<Request changeFriendship={changeFriendship} />);
          break;
        case 1:
          setBtnReturn(<Sent changeFriendship={changeFriendship} />);
          break;
        case 2:
          setBtnReturn(<RemoveBtn changeFriendship={changeFriendship} />);
          break;
        case 3:
          setBtnReturn(<AddBtn changeFriendship={changeFriendship} />);
          break;
        default:
          return null;
      }
    }, [friendship]);

    return btnReturn;
  };

  return (
    <div className='flex flex-col justify-around text-center md:w-1/2 w-3/4 h-[50vh] mb-[5vh] mx-auto'>
      <UserAvatar avatar={avatar} id={id} />
      <h1 className='text-4xl font-bold text-wwGreenF'>{username}</h1>
      <Buttons />
    </div>
  );
};

export default DefaultData;
