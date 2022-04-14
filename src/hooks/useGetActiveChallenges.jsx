import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { userChallengesAction } from '../store/userChallenges';
import useFetch from './useFetch';

const useGetActiveChallenge = () => {
  const dispatch = useDispatch();

  const activeChallengeReq = useFetch('https://backend.walkwards.pl/Challenge/GetActiveChallenge', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: useSelector((state) => state.userData.token),
      id: useSelector((state) => state.userData.id),
    }),
  });

  const activeUserChallenges = async () => {
    const activeChallengeResponse = await activeChallengeReq.sendRequest();
    const activeChallengeData = await activeChallengeResponse.json();

    dispatch(userChallengesAction.userChallenges(activeChallengeData));
  };

  return { activeUserChallenges };
};

export default useGetActiveChallenge;
