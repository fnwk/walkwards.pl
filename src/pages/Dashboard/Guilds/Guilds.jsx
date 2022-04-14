import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GuildInfo from './GuildInfo/GuildInfo';
import StartPage from './StartPage/StartPage';

const Guilds = () => {
  return (
    <Routes>
      <Route index path='/' element={<StartPage />} />
      <Route path='guild/:id' element={<GuildInfo />} />
    </Routes>
  );
};

export default Guilds;
