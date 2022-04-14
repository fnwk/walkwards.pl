import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CompetitionInfo from './CompetitionsList/CompetitionInfo';
import CompetitionsListPage from './CompetitionsList/CompetitionsListPage';

const Competitions = () => {
  return (
    <Routes>
      <Route index path='/' element={<CompetitionsListPage />} />
      <Route path='competition' element={<CompetitionInfo />} />
    </Routes>
  );
};

export default Competitions;
