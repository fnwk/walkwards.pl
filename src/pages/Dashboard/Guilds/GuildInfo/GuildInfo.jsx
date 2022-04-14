import React, { useState, useEffect } from 'react';
import useFetch from '../../../../hooks/useFetch';
import GuildDefaultInfo from './GuildDefaultInfo';
import GuildUsersList from './GuildUsersList';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const GuildInfo = () => {
  const { id } = useParams();

  const [userList, setUserList] = useState([]);
  const [guildName, setGuildName] = useState('');

  const getGuildReq = useFetch('https://backend.walkwards.pl/Guilds/GetGuild', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: useSelector((state) => state.userData.token),
      id: useSelector((state) => state.userData.id),
      guildId: parseInt(id),
    }),
  });

  useEffect(async () => {
    const getGuildResponse = await getGuildReq.sendRequest();
    const getGuildResponseData = await getGuildResponse.json();

    if (getGuildResponse.status === 200) {
      setUserList(getGuildResponseData.users);
      setGuildName(getGuildResponseData.name);
    }
  }, []);

  return (
    <div className='flex md:flex-row flex-col items-center md:h-full'>
      <GuildDefaultInfo name={guildName} />
      <GuildUsersList userList={userList} />
    </div>
  );
};

export default GuildInfo;
