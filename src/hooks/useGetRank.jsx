import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { userRankActions } from '../store/userRank';
import useFetch from './useFetch';

const useGetRank = () => {
  const dispatch = useDispatch();

  const rankReq = useFetch('https://backend.walkwards.pl/Action/GetRanking', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: useSelector((state) => state.userData.token),
      id: useSelector((state) => state.userData.id),
      page: 0,
    }),
  });
  const globalRankReq = useFetch(
    'https://backend.walkwards.pl/Action/GetRankingGlobal',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: useSelector((state) => state.userData.token),
        id: useSelector((state) => state.userData.id),
        page: 0,
      }),
    }
  );

  const rankHandler = async () => {
    const rankResponse = await rankReq.sendRequest();
    const rankResponseData = await rankResponse.json();

    const globalRankResponse = await globalRankReq.sendRequest();
    const globalRankResponseData = await globalRankResponse.json();

    dispatch(userRankActions.rank(rankResponseData));
    dispatch(userRankActions.globalRank(globalRankResponseData));
  };

  return { rankHandler };
};

export default useGetRank;
