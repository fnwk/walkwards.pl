import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Challenges from '../Challenges/Challenges';
import Guilds from '../Guilds/Guilds';
import Competitions from '../Competitions/Competitions';

import GuildImg from '../../../assets/Dashboard/Community/cs-guild.png';
import CompetitionImg from '../../../assets/Dashboard/Community/cs-konkursy.png';
import ChallengeImg from '../../../assets/Dashboard/Community/cs-wyzwania.png';

const CommunityPage = () => {
  return (
    <Routes>
      <Route path='challenges' element={<Challenges />} />
      <Route path='guilds/*' element={<Guilds />} />
      <Route path='competitions/*' element={<Competitions />} />
      <Route index path='*' element={<CommunityNavPage />} />
    </Routes>
  );
};

const CommunityNavPage = () => {
  return (
    <div className='flex flex-col md:placeholder md:h-screen justify-around'>
      <h1 className='md:absolute md:top-1/4 md:left-1/2 md:-translate-x-1/2 md:my-0 my-8 text-center font-bold md:text-5xl text-4xl text-wwGreenF'>
        Gdzie chcesz się teraz wybrać?
      </h1>
      <CardList />
    </div>
  );
};

const CardList = () => {
  return (
    <div className='flex md:flex-row flex-col items-center justify-around '>
      <PageCard
        title='GILDIE'
        img={GuildImg}
        color='#A16459'
        linkHref='guilds'
      />
      <PageCard
        title='WYZWANIA'
        img={ChallengeImg}
        color='#483D3B'
        linkHref='challenges'
      />
      <PageCard
        title='KONKURSY'
        img={CompetitionImg}
        color='#9E562D'
        linkHref='competitions'
      />
    </div>
  );
};

const PageCard = ({ img, title, color, linkHref }) => {
  return (
    <motion.div
      className='md:w-1/4 md:my-0 my-4 w-3/4 h-[25vh] bg-white rounded-lg shadow-lg relative overflow-hidden'
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}>
      <Link to={linkHref}>
        <img
          src={img}
          alt=''
          className='w-3/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
        />
        <h1
          style={{ WebkitTextStroke: `2px ${color}` }}
          className='text-5xl text-white font-bold absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          {title}
        </h1>
      </Link>
    </motion.div>
  );
};

export default CommunityPage;
