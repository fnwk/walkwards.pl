import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useFetch from '../../../../hooks/useFetch';

const AddBtn = (props) => {
  const { id } = useParams();

  const addFriend = useFetch('https://backend.walkwards.pl/User/Friends/InviteFriend', {
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
    const addFriendResponse = addFriend.sendRequest();

    if ((addFriendResponse.status = 200)) {
      props.changeFriendship(1);
    }
  };

  return (
    <button
      onClick={btnHandler}
      className='w-1/4 text-white font-bold px-4 py-2 mt-[2vh] rounded-md bg-wwGreenF mx-auto shadow-md'
      onClick={btnHandler}>
      Dodaj do znajomych
    </button>
  );
};

export default AddBtn;
