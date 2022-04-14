import React from 'react';
import { Link } from 'react-router-dom';
import GuildUser from './GuildUser';

const GuildUsersList = ({ userList }) => {
  return (
    <div className='h-full md:w-1/2 w-full bg-wwLightGreen float-right'>
      <ul className='w-3/4 mx-auto'>
        {userList.map((user) => (
          <Link to={`../../user/${user.id}`}>
            <GuildUser
              username={user.username}
              steps={user.steps}
              avatar={user.avatar}
              id={user.id}
            />
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default GuildUsersList;
