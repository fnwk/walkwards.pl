import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import useFetch from './useFetch';
import { userDataActions } from '../store/userData';

const useGetUserActivity = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);

  const userActivityReq = useFetch(
    'https://backend.walkwards.pl/User/GetActivity',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: useSelector((state) => state.userData.token),
        id: useSelector((state) => state.userData.id),
        dayCount: 7,
      }),
    }
  );

  const userActivity = async () => {
    const activityResponse = await userActivityReq.sendRequest();
    const activityResponseData = await activityResponse.json();

    dispatch(userDataActions.weeklyActivity(activityResponseData));
    setIsLoading(activityResponse.isLoading);
  };

  return { userActivity, isLoading };
};

export default useGetUserActivity;
