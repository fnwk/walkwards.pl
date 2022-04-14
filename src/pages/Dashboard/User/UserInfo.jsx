import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DefaultData from '../../../components/Dashboard/User/DefaultData';
import useFetch from '../../../hooks/useFetch';
import MoreInfo from '../../../components/Dashboard/User/MoreInfo';

const UserInfo = () => {
  const { id } = useParams();
  const pageRef = useRef();

  const [userActivity, setUserActivity] = useState({});
  const [userData, setUserData] = useState({});
  const [userFriendship, setUserFriendship] = useState(null);
  const [activeChallenges, setActiveChallenges] = useState([]);

  const getUserActivityReq = useFetch(
    'https://backend.walkwards.pl/User/GetActivity',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: '2ykrohna',
        id: parseInt(id),
        dayCount: 7,
      }),
    }
  );

  const getUserDataReq = useFetch(
    'https://backend.walkwards.pl/User/GetUserData',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: '2ykrohna',
        id: parseInt(id),
      }),
    }
  );

  const returnFriendshipReq = useFetch(
    'https://backend.walkwards.pl/User/Friends/ReturnFriendship',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: '2ykrohna',
        id: useSelector((state) => state.userData.id),
        friendId: parseInt(id),
      }),
    }
  );

  // const getActiveChallenges = useFetch(
  //   'https://backend.walkwards.pl/Challenge/GetActiveBetweenUsersChallenge',
  //   {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       token: '2ykrohna',
  //       id: useSelector((state) => state.userData.id),
  //       recipientId: parseInt(id),
  //     }),
  //   }
  // );

  useEffect(async () => {
    const userActivityResponse = await getUserActivityReq.sendRequest();
    const userActivity = await userActivityResponse.json();

    const userDataResponse = await getUserDataReq.sendRequest();
    const userReqData = await userDataResponse.json();

    const userFriendshipResponse = await returnFriendshipReq.sendRequest();
    const userFriendship = await userFriendshipResponse.json();

    // const activeChallengesResponse = await getActiveChallenges.sendRequest();
    // const activeChallenges = await activeChallengesResponse.json();

    setUserData(userReqData);
    setUserActivity(userActivity);
    setUserFriendship(userFriendship);
    // setActiveChallenges(activeChallenges);

    pageRef.current.scrollTo(0, 0);
  }, [id]);

  return (
    <div className='bg-light py-[5vh]' ref={pageRef}>
      {userData !== {} && userActivity !== {} && (
        <>
          <DefaultData
            username={userData.username}
            id={userData.id}
            userFriendship={userFriendship}
            avatar={userData.avatar}
          />
          <MoreInfo
            userActivity={userActivity}
            goal={userData.goal}
            // activeChallenges={activeChallenges}
          />
        </>
      )}
    </div>
  );
};

export default UserInfo;
