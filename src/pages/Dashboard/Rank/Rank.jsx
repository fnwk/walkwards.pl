import React, { useState } from 'react';
import GreenCircle from '../../../components/Reusable/GreenCircle';

import RankList from '../../../components/Dashboard/Rank/RankList';
import RankType from '../../../components/Reusable/ListType';
import Winner from '../../../components/Dashboard/Rank/Winner';

const Rank = () => {
  const [listType, setListType] = useState(0);

  // listType: 0 - normal ranking, 1 - global ranking
  const changeList = () => {
    setListType(listType === 0 ? 1 : 0);
  };

  return (
    <>
      <GreenCircle title='RANKING' />
      <RankType changeList={changeList} first='Dzisiejszy' second='Ogólny' />
      <RankList listType={listType} />
    </>
  );
};

export default Rank;
