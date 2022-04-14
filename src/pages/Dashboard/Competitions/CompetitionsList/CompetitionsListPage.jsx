import React from 'react';
import CompetitionsList from '../../../../components/Dashboard/Competitions/CompetitionsList';
import GreenCircle from '../../../../components/Reusable/GreenCircle';
import ListType from '../../../../components/Reusable/ListType';

const CompetitionsListPage = () => {
  return (
    <>
      <GreenCircle title='KONKURSY' />
      <CompetitionsList />
    </>
  );
};

export default CompetitionsListPage;
