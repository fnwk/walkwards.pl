import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import UserFriend from './UserFriend';

const UserFriendsList = () => {
  const { id } = useParams();
  const [userFriends, setUserFriends] = useState([]);
  const userFriendsReq = useFetch(
    'https://backend.walkwards.pl/User/Friends/GetFriends',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: '2ykrohna',
        id: parseInt(id),
        page: 0,
      }),
    }
  );

  useEffect(async () => {
    const userFriendsResponse = await userFriendsReq.sendRequest();
    const userFriendsData = await userFriendsResponse.json();
    setUserFriends(userFriendsData);
  }, [id]);

  return (
    <ul className='flex flex-col py-12 justify-around h-full'>
      {userFriends.map((friend) => {
        return (
          <UserFriend
            name={friend.username}
            avatar={friend.avatar}
            id={friend.id}
            key={friend.id}
          />
        );
      })}
    </ul>
  );
};

export default UserFriendsList;
