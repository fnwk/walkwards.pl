import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { userFriendsListActions } from '../store/userFriendsList';

const useGetFriendList = () => {
  const dispatch = useDispatch();

  const userID = useSelector((state) => state.userData.id);
  const userToken = useSelector((state) => state.userData.token);

  const [isAll, setIsAll] = useState(false);
  const [friendsList, setFriendsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    isAll && dispatch(userFriendsListActions.friendsList(friendsList));
  }, [friendsList, isAll]);

  const userFriendsHandler = async () => {
    for (let page = 0; page < page + 1; page++) {
      setIsLoading(true);
      const friendsListResponse = await fetch(
        'https://backend.walkwards.pl/User/Friends/GetFriends',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            token: userToken,
            id: userID,
            page: page,
          }),
        }
      );
      const friendsListResponseData = await friendsListResponse.json();

      if (friendsListResponseData.length <= 0) {
        setIsAll(true);
        setIsLoading(false);
        break;
      } else {
        setFriendsList((prev) => [...prev, ...friendsListResponseData]);
      }
    }
  };

  return { userFriendsHandler, isLoading };
};

export default useGetFriendList;
