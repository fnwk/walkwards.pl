import React, { useEffect, useState } from 'react';
import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';
import User from './User';

const UserList = (props) => {
  const [userList, setUserList] = useState([]);

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
        query: props.search,
        page: 0,
      }),
    }
  );

  useEffect(() => {
    if (props.search) {
      const delayDebounceFn = setTimeout(async () => {
        const userListResponse = await getUserList.sendRequest();
        const userListResponseData = await userListResponse.json();
        setUserList(userListResponseData);

        return () => clearTimeout(delayDebounceFn);
      }, 1000);
    }
  }, [props.search]);

  return (
    <div>
      <ul>
        {userList.map((friend) => {
          return (
            <User
              friend={false}
              points={friend.steps}
              name={friend.username}
              id={friend.id}
              avatar={friend.avatar}
              key={friend.id}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default UserList;
