import React from 'react';
import Competition from './Competition';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

const CompetitionsList = () => {
  const competitions = useSelector((state) => state.competitions.competitions);
  const location = useLocation();

  return (
    <ul className='flex flex-wrap w-5/6 mx-auto justify-between mt-[45vh]'>
      {competitions.map((competition) => (
        <Link
          to='competition'
          state={competition}
          className='w-[45%] m-0 p-0'
          key={competition.ctoken}>
          <Competition
            name={competition.name}
            description={competition.description}
            fee={competition.entranceFee}
            usersNum={competition.useres.length}
          />
        </Link>
      ))}
    </ul>
  );
};

export default CompetitionsList;
