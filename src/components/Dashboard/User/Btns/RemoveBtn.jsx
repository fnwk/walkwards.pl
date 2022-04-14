import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useFetch from '../../../../hooks/useFetch';

const RemoveBtn = (props) => {
  const { id } = useParams();

  const removeFriend = useFetch('https://backend.walkwards.pl/User/Friends/RemoveFriend', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: useSelector((state) => state.userData.token),
      id: useSelector((state) => state.userData.id),
      friendId: parseInt(id),
    }),
  });

  const btnHandler = () => {
    const removeFriendResponse = removeFriend.sendRequest();

    if ((removeFriendResponse.status = 200)) {
      props.changeFriendship(3);
    }
  };

  return (
    <button
      onClick={btnHandler}
      className='md:w-1/4 w-full text-white font-bold px-4 py-2 mt-[2vh] rounded-md bg-[#db4751] mx-auto shadow-md'>
      Usuń z znajomych
    </button>
  );
};

export default RemoveBtn;
