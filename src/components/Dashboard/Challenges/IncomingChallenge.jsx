import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faCoins } from '@fortawesome/free-solid-svg-icons';
import {
  faCheckCircle,
  faTimesCircle,
} from '@fortawesome/free-regular-svg-icons';
import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userChallengesAction } from '../../../store/userChallenges';

const IncomingChallenge = (props) => {
  const dispatch = useDispatch();
  const [accepted, setAccepted] = useState(null);

  const activeChallengeReq = useFetch(
    'https://backend.walkwards.pl/Challenge/GetActiveChallenge',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: useSelector((state) => state.userData.token),
        id: useSelector((state) => state.userData.id),
      }),
    }
  );

  const AcceptOrCancelChallengeReq = useFetch(
    'https://backend.walkwards.pl/Challenge/AcceptOrCancelChallengeRequest',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: useSelector((state) => state.userData.token),
        id: useSelector((state) => state.userData.id),
        challengeId: props.id,
        accepted: accepted,
      }),
    }
  );

  useEffect(async () => {
    if (accepted !== null) {
      const AcceptOrCancelChallengeResponse =
        await AcceptOrCancelChallengeReq.sendRequest();

      if (accepted && AcceptOrCancelChallengeResponse.status === 200) {
        const activeChallengeResponse = await activeChallengeReq.sendRequest();
        const activeChallengeData = await activeChallengeResponse.json();

        activeChallengeResponse.status === 200 &&
          dispatch(userChallengesAction.userChallenges(activeChallengeData));
      } else {
        props.removeChallenge(props.id);
      }
    }
  }, [accepted]);

  const acceptedHandler = (accept) => {
    setAccepted(accept);
  };

  return (
    <li className='flex bg-white m-2 shadow-md rounded-lg overflow-hidden w-4/5 mx-auto'>
      <div className='flex items-center justify-around w-1/6 text-4xl'>
        <button className='h-full' onClick={() => acceptedHandler(true)}>
          <FontAwesomeIcon icon={faCheckCircle} className='text-wwGreenF' />
        </button>
        <button className='h-full' onClick={() => acceptedHandler(false)}>
          <FontAwesomeIcon icon={faTimesCircle} className='text-red' />
        </button>
      </div>
      <div className='flex items-center p-6 w-3/4 h-full'>
        <h1 className='text-2xl font-bold mx-auto'>{props.user1}</h1>
        <FontAwesomeIcon
          icon={faBolt}
          className='text-3xl mx-auto text-wwGreenF'
        />
        <h1 className='text-2xl font-bold mx-auto'>{props.user2}</h1>
      </div>
      <div className='flex items-center justify-around w-1/4 bg-gradient-to-r from-wwGreenF to-wwGreenS text-white text-2xl px-14'>
        <FontAwesomeIcon icon={faCoins} />
        <h1>{props.value}</h1>
      </div>
    </li>
  );
};

export default IncomingChallenge;
