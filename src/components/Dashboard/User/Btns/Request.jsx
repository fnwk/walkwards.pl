import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useFetch from '../../../../hooks/useFetch';
import { useState, useEffect } from 'react';

const Request = (props) => {
  const [accepted, setAccepted] = useState(null);
  const { id } = useParams();

  const answerFriend = useFetch('https://backend.walkwards.pl/User/Friends/AnswerFriendInvite', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: useSelector((state) => state.userData.token),
      id: useSelector((state) => state.userData.id),
      friendId: parseInt(id),
      accepted: accepted,
    }),
  });

  useEffect(() => {
    if (accepted !== null) {
      const answerFriendResponse = answerFriend.sendRequest();

      if ((answerFriendResponse.status = 200)) {
        accepted ? props.changeFriendship(2) : props.changeFriendship(3);
      }
    }
  }, [accepted]);

  const acceptBtnHandler = () => {
    setAccepted(true);
  };

  const declineBtnHandler = () => {
    setAccepted(false);
  };

  return (
    <div className='flex md:flex-row md: flex-col'>
      <button
        onClick={acceptBtnHandler}
        className='md:w-1/4 ml-1/3 w-full text-white font-bold px-4 py-2 mt-[2vh] rounded-md bg-wwGreenF md:ml-auto md:mr-6 shadow-md'>
        Przyjmij zapytanie
      </button>
      <button
        onClick={declineBtnHandler}
        className='md:w-1/4 w-full text-white font-bold px-4 py-2 mt-[2vh] rounded-md bg-[#db4751] md:mr-auto md:ml-6 shadow-md'>
        Odrzuć zapytanie
      </button>
    </div>
  );
};

export default Request;
