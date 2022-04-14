import { useDispatch, useSelector } from 'react-redux';
import { guildsAction } from '../store/guilds';
import useFetch from './useFetch';

const useGetGuildsRank = () => {
  const dispatch = useDispatch();

  const getGuildsReq = useFetch(
    'https://backend.walkwards.pl/Guilds/GetAllGuildsRankingAvg',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: useSelector((state) => state.userData.id),
        token: useSelector((state) => state.userData.token),
        page: 0,
      }),
    }
  );

  const guildsRank = async () => {
    const guildsRankResponse = await getGuildsReq.sendRequest();
    const guildsRankData = await guildsRankResponse.json();

    dispatch(guildsAction.guildsRank(guildsRankData));
  };

  return { guildsRank };
};

export default useGetGuildsRank;
