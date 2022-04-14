import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { competitionsAction } from '../store/competitions';
import useFetch from './useFetch';

const useGetCompetitions = () => {
  const dispatch = useDispatch();

  const competitionsReq = useFetch(
    'https://backend.walkwards.pl/Competitions/GetCompetitions',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: useSelector((state) => state.userData.id),
        token: useSelector((state) => state.userData.token),
      }),
    }
  );

  const competitions = async () => {
    const competitionsResponse = await competitionsReq.sendRequest();
    const competitionsData = await competitionsResponse.json();

    dispatch(competitionsAction.competitions(competitionsData));
  };

  return { competitions };
};

export default useGetCompetitions;
