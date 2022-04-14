import { useSelector } from 'react-redux';
import User from './User';

const FriendList = (props) => {
  const friendsList = useSelector((state) => state.userFriendsList.friendsList);
  const filteredFriendList = friendsList.filter((friend) => {
    return friend.username.toLowerCase().substring(0, props.search.length) === props.search.toLowerCase();
  });
  return (
    <div>
      <ul>
        {filteredFriendList.map((friend) => {
          return (
            <User
              friend={true}
              points={friend.steps}
              name={friend.username}
              id={friend.id}
              avatar={friend.avatar}
              key={friend.id}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default FriendList;
