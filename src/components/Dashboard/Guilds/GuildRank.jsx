import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Guild from './Guild';
import useFetch from '../../../hooks/useFetch';
import { Link } from 'react-router-dom';

const GuildRank = ({ searchValue }) => {
  const guildsRank = useSelector((state) => state.guilds.guildsRank);
  const [queryGuilds, setQueryGuilds] = useState([]);

  const queryRequest = useFetch(
    'https://backend.walkwards.pl/Guilds/GuildSearch',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: useSelector((state) => state.userData.token),
        id: useSelector((state) => state.userData.id),
        page: 0,
        query: searchValue,
      }),
    }
  );

  useEffect(async () => {
    if (searchValue !== '') {
      const delayDebounceFn = setTimeout(async () => {
        const queryResponse = await queryRequest.sendRequest();
        const queryResponseList = await queryResponse.json();
        if (queryResponse.status === 200) {
          setQueryGuilds(queryResponseList);
        }

        return () => clearTimeout(delayDebounceFn);
      }, 1000);
    }
  }, [searchValue]);

  return (
    <ul className='flex md:flex-row flex-col flex-wrap justify-center mt-8'>
      {searchValue === ''
        ? guildsRank.map((guild, index) => (
            <Link to={`../guild/${guild.id}`} key={guild.id}>
              <Guild
                name={guild.name}
                index={index}
                id={guild.id}
                stepsAvg={guild.stepAvg}
              />
            </Link>
          ))
        : queryGuilds.map((guild, index) => (
            <Guild
              name={guild.name}
              index={index}
              id={guild.id}
              key={guild.id}
              stepsAvg={guild.stepAvg}
            />
          ))}
    </ul>
  );
};

export default GuildRank;
